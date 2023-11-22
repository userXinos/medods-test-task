<template>
  <div>
    <h2 class="title">
      Семён сказал
    </h2>

    <div class="container">
      <div class="tablet">
        <div
          class="blue"
          :class="{'played': colorPlayed === 1 }"
          @click="onColor(1)"
        />
        <div
          class="red"
          :class="{'played': colorPlayed === 2 }"
          @click="onColor(2)"
        />
        <div
          class="yellow"
          :class="{'played': colorPlayed === 3 }"
          @click="onColor(3)"
        />
        <div
          class="green"
          :class="{'played': colorPlayed === 4 }"
          @click="onColor(4)"
        />
      </div>

      <div class="game-interface">
        <p>Раунд: {{ round.length }}</p>

        <button
          class="new-game-btn"
          @click="newGame"
        >
          Начать игру!
        </button>

        <form v-if="round.length === 0 || isDead">
          <template v-for="(s, key) in DIFFICULTY">
            <input
              :key="key"
              v-model="selectedDifficulty"
              type="radio"
              :value="key"
            >
            <label
              :key="s.loc"
              :for="key"
            >{{ s.loc }}
            </label>
          </template>
        </form>

        <p
          v-if="isDead"
          class="dead"
        >
          Игра окончена!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import arraysAreEqual from '@/utils/arraysAreEqual';
import sleep from '@/utils/sleep';

const AUDIO = {
    1: new Audio(require('@/sounds/1.mp3')),
    2: new Audio(require('@/sounds/2.mp3')),
    3: new Audio(require('@/sounds/3.mp3')),
    4: new Audio(require('@/sounds/4.mp3')),
};
const AUDIO_DEAD = new Audio(require('@/sounds/you_dead.mp3'));

// в идеале AUDIO_PLAY_LENGTH надо ставить 600, чтобы звуки были различимы когда подряд,
// но это убивает сложность 'darkSouls'
const AUDIO_PLAY_LENGTH = 300;
const DIFFICULTY = {
    easy: {loc: 'Легкий', delay: 1500},
    normal: {loc: 'Средний', delay: 1000},
    darkSouls: {loc: 'Сложный', delay: 400},
};

/** @type {Ref<UnwrapRef<number[]>>} */
const round = ref([]);
/** @type {Ref<UnwrapRef<number[]>>} */
const userCombo = ref([]);
/** @type {Ref<UnwrapRef<keyof typeof DIFFICULTY>>} */
const selectedDifficulty = ref('easy');
const colorPlayed = ref(0);
const isDead = ref(false);


/**
 * @param {number} number - 1=blue, 2=red, 3=yellow, 4=green
 * @return {void}
 */
function playColor(number) {
    colorPlayed.value = number;
    if (number === 0) {
        return;
    }
    AUDIO[number].play();
}
/**
 * @return {void}
 */
function newGame() {
    isDead.value = false;
    round.value = [];
    userCombo.value = [];
    newRound();
}
/**
 * @return {void}
 */
async function newRound() {
    round.value.push(((Math.random() * 4 ) << 0) + 1);

    for (let i = 0; i < round.value.length; i++) {
        if (isDead.value) {
            break; // если у юзера шаловливые ручки и он начал тыкать во время превью раунда
        }
        playColor(round.value[i]);
        await sleep(DIFFICULTY[selectedDifficulty.value].delay - AUDIO_PLAY_LENGTH);
        playColor(0);
        await sleep(AUDIO_PLAY_LENGTH);
    }
}
/**
 * @param {number} number
 * @return {void}
 */
async function onColor(number) {
    if (isDead.value || round.value.length === 0) {
        return;
    }

    playColor(number);
    userCombo.value.push(number);

    await sleep(AUDIO_PLAY_LENGTH);
    playColor(0);

    if (arraysAreEqual(round.value, userCombo.value)) {
        if (userCombo.value.length >= round.value.length) {
            userCombo.value = [];

            await sleep(600);
            newRound();
        }
    } else {
        isDead.value = true;
        await AUDIO_DEAD.play();
    }
}
</script>

<style scoped>
.title {
    margin-top: 1%;
    margin-bottom: 5%;
    text-align: center;
}
.new-game-btn {
    margin: 10% 0;
    padding: 10px;
}

.container {
    margin-right: auto;
    margin-left: auto;
    margin-top: 1%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
}
.game-interface {
    flex: 1;
    margin-left: 20%;
}
.tablet {
    --sise: 400px;

    width: var(--sise);
    height: var(--sise);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1px;
}
.red, .blue, .yellow, .green {
    transition: opacity 0.2s, visibility 0.3s;
    opacity: .5;
}
.played {
    opacity: 1;
}
.red:hover, .blue:hover, .yellow:hover, .green:hover {
    border: solid 2px black;
}
.red {
    background: #FF5643;
    border-top-right-radius: var(--sise);
}
.blue {
    background-color: dodgerblue;
    border-top-left-radius: var(--sise);
}
.yellow {
    background-color: #FEEF33;
    border-bottom-left-radius: var(--sise);
}
.green {
    background-color: #BEDE15;
    border-bottom-right-radius: var(--sise);
}
form {
    margin-bottom: 2%;
}
form label {
    padding: 10px;
}
.dead {
    font-size: 150%;
    color: red;
}

/*@media screen and (max-width: 500px){*/
/*    .tablet {*/
/*        --size: 200px;*/
/*    }*/
/*}*/

</style>
