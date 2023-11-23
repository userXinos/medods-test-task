(()=>{"use strict";var e={970:(e,t,a)=>{var o=a(144),n=function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t("div",[t(a.SimonTheGame)],1)},l=[],r=function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t("div",[t("h2",{staticClass:"title"},[e._v(" Семён сказал ")]),t("div",{staticClass:"container"},[t("div",{staticClass:"tablet"},[t("div",{staticClass:"blue",class:{played:1===a.colorPlayed},on:{click:function(e){return a.onColor(1)}}}),t("div",{staticClass:"red",class:{played:2===a.colorPlayed},on:{click:function(e){return a.onColor(2)}}}),t("div",{staticClass:"yellow",class:{played:3===a.colorPlayed},on:{click:function(e){return a.onColor(3)}}}),t("div",{staticClass:"green",class:{played:4===a.colorPlayed},on:{click:function(e){return a.onColor(4)}}})]),t("div",{staticClass:"game-interface"},[t("p",[e._v("Раунд: "+e._s(a.round.length))]),t("button",{staticClass:"new-game-btn",on:{click:a.newGame}},[e._v(" Начать игру! ")]),0===a.round.length||a.isDead?t("form",[e._l(a.DIFFICULTY,(function(o,n){return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.selectedDifficulty,expression:"selectedDifficulty"}],key:n,attrs:{type:"radio"},domProps:{value:n,checked:e._q(a.selectedDifficulty,n)},on:{change:function(e){a.selectedDifficulty=n}}}),t("label",{key:o.loc,attrs:{for:n}},[e._v(e._s(o.loc)+" ")])]}))],2):e._e(),a.isDead?t("p",{staticClass:"dead"},[e._v(" Игра окончена! ")]):e._e()])])])},i=[];function s(e,t){for(let a=0;a<e.length;a++)if(void 0!==t[a]&&e[a]!==t[a])return!1;return!0}function u(e){return new Promise((t=>setTimeout(t,e)))}const c={__name:"SimonTheGame",setup(e){const t={1:new Audio(a(939)),2:new Audio(a(586)),3:new Audio(a(291)),4:new Audio(a(659))},n=new Audio(a(675)),l=300,r={easy:{loc:"Легкий",delay:1500},normal:{loc:"Средний",delay:1e3},darkSouls:{loc:"Сложный",delay:400}},i=(0,o.iH)([]),c=(0,o.iH)([]),d=(0,o.iH)("easy"),f=(0,o.iH)(0),v=(0,o.iH)(!1);function p(e){f.value=e,0!==e&&t[e].play()}function m(){v.value=!1,i.value=[],c.value=[],y()}async function y(){i.value.push(1+(4*Math.random()<<0));for(let e=0;e<i.value.length;e++){if(v.value)break;p(i.value[e]),await u(r[d.value].delay-l),p(0),await u(l)}}async function h(e){v.value||0===i.value.length||(p(e),c.value.push(e),await u(l),p(0),s(i.value,c.value)?c.value.length>=i.value.length&&(c.value=[],await u(600),y()):(v.value=!0,await n.play()))}return{__sfc:!0,AUDIO:t,AUDIO_DEAD:n,AUDIO_PLAY_LENGTH:l,DIFFICULTY:r,round:i,userCombo:c,selectedDifficulty:d,colorPlayed:f,isDead:v,playColor:p,newGame:m,newRound:y,onColor:h}}},d=c;var f=a(917),v=(0,f.Z)(d,r,i,!1,null,"66700d32",null);const p=v.exports,m={__name:"App",setup(e){return{__sfc:!0,SimonTheGame:p}}},y=m;var h=(0,f.Z)(y,n,l,!1,null,"4214c042",null);const _=h.exports;o.ZP.config.productionTip=!1,o.ZP.config.devtools=!0,new o.ZP({render:e=>e(_)}).$mount("#app")},939:(e,t,a)=>{e.exports=a.p+"media/1.4439a9af.mp3"},586:(e,t,a)=>{e.exports=a.p+"media/2.65e0df3b.mp3"},291:(e,t,a)=>{e.exports=a.p+"media/3.f8db31a2.mp3"},659:(e,t,a)=>{e.exports=a.p+"media/4.049c0e2c.mp3"},675:(e,t,a)=>{e.exports=a.p+"media/you_dead.a8f5eb0b.mp3"}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,a),l.exports}a.m=e,(()=>{var e=[];a.O=(t,o,n,l)=>{if(!o){var r=1/0;for(c=0;c<e.length;c++){for(var[o,n,l]=e[c],i=!0,s=0;s<o.length;s++)(!1&l||r>=l)&&Object.keys(a.O).every((e=>a.O[e](o[s])))?o.splice(s--,1):(i=!1,l<r&&(r=l));if(i){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,n,l]}})(),(()=>{a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{a.p="/medods-test-task/SimonTheGame/"})(),(()=>{var e={143:0};a.O.j=t=>0===e[t];var t=(t,o)=>{var n,l,[r,i,s]=o,u=0;if(r.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(s)var c=s(a)}for(t&&t(o);u<r.length;u++)l=r[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},o=self["webpackChunkSimonTheGame"]=self["webpackChunkSimonTheGame"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=a.O(void 0,[998],(()=>a(970)));o=a.O(o)})();
//# sourceMappingURL=app.de19460e.js.map