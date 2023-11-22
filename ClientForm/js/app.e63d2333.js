(()=>{"use strict";var e={670:(e,t,r)=>{var i=r(144),l=function(){var e=this,t=e._self._c,r=e._self._setupProxy;return t("div",[t(r.ClientForm)],1)},o=[],s=function(){var e=this,t=e._self._c,r=e._self._setupProxy;return t("div",[t("h2",{staticClass:"title"},[e._v(" "+e._s("Новый клиент")+" ")]),t("form",{staticClass:"container",on:{submit:function(e){return e.preventDefault(),r.submit.apply(null,arguments)}}},[e._l(r.fieldStructure,(function(i,l){return t("div",{key:l,staticClass:"category"},[t("h3",[e._v(e._s(i.loc))]),t("ul",e._l(i.children,(function(i){return t("li",{key:i.id,staticClass:"field",class:{"has-error":r.v$[i.id].$errors.length}},[t("label",{staticClass:"label"},[e._v(" "+e._s(i.loc)+" "+e._s(i.req?"*":""))]),"selector"===i.type||"multi-selector"===i.type?t("select",{directives:[{name:"model",rawName:"v-model",value:r.v$[i.id].$model,expression:"v$[field.id].$model"}],attrs:{multiple:"multi-selector"===i.type},on:{change:function(t){var l=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(r.v$[i.id],"$model",t.target.multiple?l:l[0])}}},e._l(i.children,(function(r,i){return t("option",{key:i},[e._v(" "+e._s(r)+" ")])})),0):"checkbox"===i.type?t("input",{directives:[{name:"model",rawName:"v-model",value:r.v$[i.id].$model,expression:"v$[field.id].$model"}],staticClass:"field-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(r.v$[i.id].$model)?e._i(r.v$[i.id].$model,null)>-1:r.v$[i.id].$model},on:{change:function(t){var l=r.v$[i.id].$model,o=t.target,s=!!o.checked;if(Array.isArray(l)){var n=null,a=e._i(l,n);o.checked?a<0&&e.$set(r.v$[i.id],"$model",l.concat([n])):a>-1&&e.$set(r.v$[i.id],"$model",l.slice(0,a).concat(l.slice(a+1)))}else e.$set(r.v$[i.id],"$model",s)}}}):"radio"===i.type?t("input",{directives:[{name:"model",rawName:"v-model",value:r.v$[i.id].$model,expression:"v$[field.id].$model"}],staticClass:"field-input",attrs:{type:"radio"},domProps:{checked:e._q(r.v$[i.id].$model,null)},on:{change:function(t){return e.$set(r.v$[i.id],"$model",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:r.v$[i.id].$model,expression:"v$[field.id].$model"}],staticClass:"field-input",attrs:{type:i.type},domProps:{value:r.v$[i.id].$model},on:{input:function(t){t.target.composing||e.$set(r.v$[i.id],"$model",t.target.value)}}}),t("div",{staticClass:"errors"},[r.v$[i.id].$errors.length?t("div",{staticClass:"error-msg"},[t("span",[e._v(e._s(r.v$[i.id].$errors[0].$message))])]):e._e()])])})),0)])})),t("div",{staticClass:"submit"},[t("button",{staticClass:"button",attrs:{type:"submit",disabled:"PENDING"===r.submitStatus}},[e._v(" Отправить! ")]),"OK"===r.submitStatus?t("p",[e._v(" Спасибо за заявку! ")]):e._e(),"ERROR"===r.submitStatus?t("p",[e._v(" Пожалуйста, заполните форму правильно. ")]):e._e(),"PENDING"===r.submitStatus?t("p",[e._v(" Отправка... ")]):e._e()])],2)])},n=[],a=r(204),d=r(697);const c=JSON.parse('{"validations.required":"Требуется","invalidPhone":"Должен начинаться с 7 и иметь 11 цифр"}'),{createI18nMessage:u}=d,v=u({t:m}),p=v(d.C1);function m(e){return e in c?c[e]:e}const f={$validator:function(e){return e.startsWith("7")&&11===e.length},$message:m("invalidPhone"),$params:{type:"phoneValidator"}},y={attribute:{loc:"Атрибуты формы",children:[{id:"LastName",type:"text",loc:"Фамилия",req:!0},{id:"FirstName",type:"text",loc:"Имя",req:!0},{id:"Patronymic",type:"text",loc:"Отчество"},{id:"PhoneNumber",type:"number",loc:"Номер телефона",req:!0,min:11,validator:f},{id:"Sex",type:"selector",loc:"Пол",children:["Мужщчина","Женщина"]},{id:"ClientGroups",type:"multi-selector",loc:"Группа клиентов",req:!0,children:["VIP","Проблемные","ОМС"]},{id:"Doctor",type:"selector",loc:"Лечащий врач",children:["Иванов","Захаров","Чернышева"]},{id:"NotSendSMS",type:"checkbox",loc:"Не отправлять СМС"}]},address:{loc:"Адрес",children:[{id:"AddressIndex",type:"number",loc:"Индекс"},{id:"AddressCountry",type:"text",loc:"Страна"},{id:"AddressRegion",type:"text",loc:"Область"},{id:"AddressCity",type:"text",loc:"Город",req:!0},{id:"AddressStreet",type:"text",loc:"Улица"},{id:"AddressHome",type:"number",loc:"Дом"}]},identifier:{loc:"Паспорт",children:[{id:"IdentifierType",type:"selector",loc:"Тип документа",req:!0,children:["Паспорт","Свидетельство о рождении","Вод. удостоверение"]},{id:"IdentifierSerial",type:"number",loc:"Серия"},{id:"IdentifierNumber",type:"number",loc:"Номер"},{id:"IdentifierWhoDal",type:"text",loc:"Кем выдан"},{id:"IdentifierDate",type:"date",loc:"Дата выдачи",req:!0}]}},$={__name:"ClientForm",setup(e){const t=Object.values(y).reduce(((e,t)=>({...e,...t.children.reduce(((e,t)=>({...e,[t.id]:t})),{})})),{}),r=(0,i.qj)(Object.fromEntries(Object.entries(t).map((([e,t])=>[e,"checkbox"!==t.type&&("multi-selector"===t.type?[]:"")])))),l=Object.fromEntries(Object.entries(t).map((([e,t])=>[e,{...t.req?{required:p}:{},...t.validator?{validator:t.validator}:{}}]))),o=(0,a.Xw)(l,r),s=(0,i.iH)("");async function n(){const e=await o.value.$validate();e?(console.log(JSON.stringify(r)),s.value="PENDING",setTimeout((()=>{s.value="OK"}),500)):s.value="ERROR"}return{__sfc:!0,allFields:t,state:r,rules:l,v$:o,submitStatus:s,submit:n,fieldStructure:y}}},h=$;var b=r(917),_=(0,b.Z)(h,s,n,!1,null,"0cc65d42",null);const g=_.exports,x={__name:"App",setup(e){return{__sfc:!0,ClientForm:g}}},C=x;var O=(0,b.Z)(C,l,o,!1,null,"44e13fc6",null);const P=O.exports;i.ZP.config.productionTip=!1,i.ZP.config.devtools=!0,new i.ZP({render:e=>e(P)}).$mount("#app")}},t={};function r(i){var l=t[i];if(void 0!==l)return l.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,i,l,o)=>{if(!i){var s=1/0;for(c=0;c<e.length;c++){for(var[i,l,o]=e[c],n=!0,a=0;a<i.length;a++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](i[a])))?i.splice(a--,1):(n=!1,o<s&&(s=o));if(n){e.splice(c--,1);var d=l();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,l,o]}})(),(()=>{r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var l,o,[s,n,a]=i,d=0;if(s.some((t=>0!==e[t]))){for(l in n)r.o(n,l)&&(r.m[l]=n[l]);if(a)var c=a(r)}for(t&&t(i);d<s.length;d++)o=s[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},i=self["webpackChunkClientForm"]=self["webpackChunkClientForm"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=r.O(void 0,[998],(()=>r(670)));i=r.O(i)})();
//# sourceMappingURL=app.e63d2333.js.map