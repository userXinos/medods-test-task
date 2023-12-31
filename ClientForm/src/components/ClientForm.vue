<template>
  <div>
    <h2 class="title">
      {{ 'Новый клиент' }}
    </h2>

    <form
      class="container"
      @submit.prevent="submit"
    >
      <div
        v-for="(category, n) in fieldStructure"
        :key="n"
        class="category"
      >
        <h3>{{ category.loc }}</h3>

        <ul>
          <li
            v-for="field in category.children"
            :key="field.id"
            class="field"
            :class="{'has-error': v$[field.id].$errors.length}"
          >
            <label class="label"> {{ field.loc }} {{ field.req ? '*' : '' }}</label>

            <span
              v-if="v$[field.id].$errors.length"
              class="errors"
            >
              <span>   {{ v$[field.id].$errors[0].$message }}</span>
            </span>

            <select
              v-if="field.type === 'selector'"
              v-model="v$[field.id].$model"
            >
              <option
                v-for="(child, j) in field.children"
                :key="j"
              >
                {{ child }}
              </option>
            </select>

            <form v-else-if="field.type === 'multi-selector'">
              <template v-for="(child, j) in field.children">
                <input
                  :id="child"
                  :key="child"
                  v-model="v$[field.id].$model"
                  :value="child"
                  type="checkbox"
                >
                <label
                  :key="j"
                  for="jack"
                >{{ child }}</label>
              </template>
            </form>

            <input
              v-else
              v-model="v$[field.id].$model"
              :type="field.type"
              class="field-input"
            >
          </li>
        </ul>
      </div>

      <div class="submit">
        <button
          class="button"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
        >
          Отправить!
        </button>

        <p v-if="submitStatus === 'OK'">
          Спасибо за заявку!
        </p>
        <p v-if="submitStatus === 'ERROR'">
          Пожалуйста, заполните форму правильно.
        </p>
        <p v-if="submitStatus === 'PENDING'">
          Отправка...
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue';
import {useVuelidate} from '@vuelidate/core';
import {required} from '@/utils/i18n-validators';

import fieldStructure from '@/fieldStructure';

/** @type Record<string, {id: string, type: string, loc: string, req?: boolean, children?: string[], min?: number, validator?: function}> */
const allFields = Object.values(fieldStructure).reduce((acc, category) => ({
    ...acc,
    ...category.children.reduce((acc, field) => ({
        ...acc, [field.id]: field,
    }), {}),
}), {});
const state = reactive(Object.fromEntries(
    Object.entries(allFields).map(([key, field]) => [
        key,
        (field.type === 'checkbox' ? false : field.type === 'multi-selector' ? [] : ''),
    ]),
));
const rules = Object.fromEntries(
    Object.entries(allFields).map(([key, field]) => [
        key,
        {
            ...(field.req ? {required} : {}),
            ...(field.validator ? {validator: field.validator} : {}),
        },
    ]),
);

const v$ = useVuelidate(rules, state);
const submitStatus = ref('');


/**
 * @return {Promise<void>}
 */
async function submit() {
    const result = await v$.value.$validate();

    if (!result) {
        submitStatus.value = 'ERROR';
    } else {
        // do your submit logic here
        console.log(JSON.stringify(state));
        submitStatus.value = 'PENDING';
        setTimeout(() => {
            submitStatus.value = 'OK';
        }, 500);
    }
}
</script>

<style scoped lang="scss">
$errorColor: #f57f6c;

.title {
  margin-top: 20px;
  text-align: center;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1500px;
  margin: 2% auto;
  justify-content: center;
  padding: 0 10%;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0 5%;
  }

  .submit {
    margin-top: 5%;
    margin-bottom: 5%;

    button {
      padding: 10px;
      //border: none;
    }
    p {
      position: absolute;
      margin-top: 5px;
    }
  }
}
.category {
  h3 {
    text-align: center;
    margin-bottom: 3%;
  }
  margin-bottom: 4%;
}
.field {
  list-style: none;
  padding: 0 2%;
  margin-bottom: 1%;

  label {
    font-size: 80%;
  }
  input:not([type="checkbox"]), select {
    margin-top: 5px;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border-style: solid;
  }
  input[type="checkbox"] {
    margin-left: 10%;
    width: 15px;
    height: 15px;
  }
  form {
    margin-top: 5px;

    input {
      margin: 0 10px;
    }
  }

  .errors {
    font-size: 70%;

    &::before {
      padding-left: 10px;
    }
  }
}
.has-error {
  color: $errorColor;

  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: .5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 2;

  input {
    border-color: $errorColor;;
  }

  @keyframes shakeError {
    0% {transform: translateX(0);}
    25% {transform: translateX(-.375rem);}
    50% {transform: translateX(.375rem);}
    75% {transform: translateX(-.375rem);}
    100% {transform: translateX(0);}
  }
}
</style>
