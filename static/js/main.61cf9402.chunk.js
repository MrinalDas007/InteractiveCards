(this.webpackJsonpinteractivecreditcard=this.webpackJsonpinteractivecreditcard||[]).push([[0],{18:function(e,c,a){},20:function(e,c,a){},23:function(e,c,a){"use strict";a.r(c);var r=a(1),t=a(7),d=a.n(t),s=(a(18),a(9)),n=a(12),i=a(5),l=a(0),o=(new Date).getFullYear(),u=Array.from({length:12},(function(e,c){var a=c+1;return a<=9?"0"+a:a})),m=Array.from({length:9},(function(e,c){return o+c}));function j(e){var c=e.cardMonth,a=e.cardYear,t=e.onUpdateState,d=e.cardNumberRef,s=e.cardHolderRef,n=e.cardDateRef,o=e.onCardInputFocus,j=e.onCardInputBlur,b=e.cardCvv,p=e.children,h=Object(r.useState)(""),f=Object(i.a)(h,2),O=f[0],v=f[1],_=function(e){var c=e.target,a=c.name,r=c.value;t(a,r)};return Object(l.jsxs)("div",{className:"card-form",children:[Object(l.jsx)("div",{className:"card-list",children:p}),Object(l.jsxs)("div",{className:"card-form__inner",children:[Object(l.jsxs)("div",{className:"card-input",children:[Object(l.jsx)("label",{htmlFor:"cardNumber",className:"card-input__label",children:"Card Number"}),Object(l.jsx)("input",{type:"tel",name:"cardNumber",className:"card-input__input",autoComplete:"off",onChange:function(e){var c=e.target,a=c.value,r=c.name,d=a;a=a.replace(/\D/g,""),/^3[47]\d{0,13}$/.test(a)||/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(a)?d=a.replace(/(\d{4})/,"$1 ").replace(/(\d{4}) (\d{6})/,"$1 $2 "):/^\d{0,16}$/.test(a)&&(d=a.replace(/(\d{4})/,"$1 ").replace(/(\d{4}) (\d{4})/,"$1 $2 ").replace(/(\d{4}) (\d{4}) (\d{4})/,"$1 $2 $3 ")),v(d.trimRight()),t(r,d)},maxLength:"19",ref:d,onFocus:function(e){return o(e,"cardNumber")},onBlur:j,value:O})]}),Object(l.jsxs)("div",{className:"card-input",children:[Object(l.jsx)("label",{htmlFor:"cardName",className:"card-input__label",children:"Card Holder"}),Object(l.jsx)("input",{type:"text",className:"card-input__input",autoComplete:"off",name:"cardHolder",onChange:_,ref:s,onFocus:function(e){return o(e,"cardHolder")},onBlur:j})]}),Object(l.jsxs)("div",{className:"card-form__row",children:[Object(l.jsx)("div",{className:"card-form__col",children:Object(l.jsxs)("div",{className:"card-form__group",children:[Object(l.jsx)("label",{htmlFor:"cardMonth",className:"card-input__label",children:"Expiration Date"}),Object(l.jsxs)("select",{className:"card-input__input -select",value:c,name:"cardMonth",onChange:_,ref:n,onFocus:function(e){return o(e,"cardDate")},onBlur:j,children:[Object(l.jsx)("option",{value:"",disabled:!0,children:"Month"}),u.map((function(e,c){return Object(l.jsx)("option",{value:e,children:e},c)}))]}),Object(l.jsxs)("select",{name:"cardYear",className:"card-input__input -select",value:a,onChange:_,onFocus:function(e){return o(e,"cardDate")},onBlur:j,children:[Object(l.jsx)("option",{value:"",disabled:!0,children:"Year"}),m.map((function(e,c){return Object(l.jsx)("option",{value:e,children:e},c)}))]})]})}),Object(l.jsx)("div",{className:"card-form__col -cvv",children:Object(l.jsxs)("div",{className:"card-input",children:[Object(l.jsx)("label",{htmlFor:"cardCvv",className:"card-input__label",children:"CVV"}),Object(l.jsx)("input",{type:"tel",className:"card-input__input",maxLength:"4",autoComplete:"off",name:"cardCvv",onChange:_,onFocus:function(e){t("isCardFlipped",!0)},onBlur:function(e){t("isCardFlipped",!1)},ref:b})]})})]})]})]})}var b=a(27),p=a(26),h=a(25),f=(a(20),{visa:"^4",amex:"^(34|37)",mastercard:"^5[1-5]",discover:"^6011",unionpay:"^62",troy:"^9792",diners:"^(30[0-5]|36)"}),O=function(){var e=Math.floor(25*Math.random()+1);return"".concat(e,".jpeg")}(),v=function(e){var c=e.cardHolder,a=e.cardNumber,t=e.cardMonth,d=e.cardYear,s=e.cardCvv,n=e.isCardFlipped,o=e.currentFocusedElm,u=e.onCardElementClick,m=e.cardNumberRef,j=e.cardHolderRef,v=e.cardDateRef,_=Object(r.useState)(null),x=Object(i.a)(_,2),N=x[0],C=x[1],g=Object(r.useMemo)((function(){return function(e){for(var c,a=e,r=0,t=Object.entries(f);r<t.length;r++){var d=Object(i.a)(t[r],2),s=d[0],n=d[1];if(c=new RegExp(n),null!=a.match(c))return s}return"visa"}(a)}),[a]);Object(r.useEffect)((function(){if(o){var e=(c=o.current)?{width:"".concat(c.offsetWidth,"px"),height:"".concat(c.offsetHeight,"px"),transform:"translateX(".concat(c.offsetLeft,"px) translateY(").concat(c.offsetTop,"px)")}:null;C(e)}var c}),[o]);return Object(l.jsxs)("div",{className:"card-item "+(n?"-active":""),children:[Object(l.jsxs)("div",{className:"card-item__side -front",children:[Object(l.jsx)("div",{className:"card-item__focus ".concat(o?"-active":""),style:N}),Object(l.jsx)("div",{className:"card-item__cover",children:Object(l.jsx)("img",{alt:"",src:"/card-background/".concat(O),className:"card-item__bg"})}),Object(l.jsxs)("div",{className:"card-item__wrapper",children:[Object(l.jsxs)("div",{className:"card-item__top",children:[Object(l.jsx)("img",{src:"/chip.png",alt:"",className:"card-item__chip"}),Object(l.jsx)("div",{className:"card-item__type",children:Object(l.jsx)("img",{alt:g,src:"/card-type/".concat(g,".png"),className:"card-item__typeImg"})})]}),Object(l.jsx)("label",{className:"card-item__number",ref:m,onClick:function(){return u("cardNumber")},children:Object(l.jsx)(b.a,{className:"slide-fade-up",component:"div",children:a?function(e){var c=e.split("");return c.forEach((function(e,a){a>4&&a<14&&" "!==c[a]&&(c[a]="*")})),c}(a).map((function(e,c){return Object(l.jsx)(p.a,{classNames:"slide-fade-up",timeout:250,children:Object(l.jsx)("div",{className:"card-item__numberItem",children:e})},c)})):Object(l.jsx)(p.a,{classNames:"slide-fade-up",timeout:250,children:Object(l.jsx)("div",{className:"card-item__numberItem",children:"#"})})})}),Object(l.jsxs)("div",{className:"card-item__content",children:[Object(l.jsxs)("label",{className:"card-item__info",onClick:function(){return u("cardHolder")},ref:j,children:[Object(l.jsx)("div",{className:"card-item__holder",children:"Card Holder"}),Object(l.jsx)("div",{className:"card-item__name",children:Object(l.jsx)(b.a,{className:"slide-fade-up",component:"div",children:"FULL NAME"===c?Object(l.jsx)(p.a,{classNames:"slide-fade-up",timeout:250,children:Object(l.jsx)("div",{children:"FULL NAME"})}):c.split("").map((function(e,c){return Object(l.jsx)(p.a,{timeout:250,classNames:"slide-fade-right",children:Object(l.jsx)("span",{className:"card-item__nameItem",children:e})},c)}))})})]}),Object(l.jsxs)("div",{className:"card-item__date",onClick:function(){return u("cardDate")},ref:v,children:[Object(l.jsx)("label",{className:"card-item__dateTitle",children:"Expires"}),Object(l.jsx)("label",{className:"card-item__dateItem",children:Object(l.jsx)(h.a,{"in-out":!0,children:Object(l.jsx)(p.a,{classNames:"slide-fade-up",timeout:200,children:Object(l.jsxs)("span",{children:[t||"MM"," "]})},t)})}),"/",Object(l.jsx)("label",{htmlFor:"cardYear",className:"card-item__dateItem",children:Object(l.jsx)(h.a,{"in-out":!0,children:Object(l.jsx)(p.a,{classNames:"slide-fade-up",timeout:200,children:Object(l.jsx)("span",{children:d?d.toString().substr(-2):"YY"})},d)})})]})]})]})]}),Object(l.jsxs)("div",{className:"card-item__side -back",children:[Object(l.jsx)("div",{className:"card-item__cover",children:Object(l.jsx)("img",{alt:"",src:"/card-background/".concat(O),className:"card-item__bg"})}),Object(l.jsx)("div",{className:"card-item__band"}),Object(l.jsxs)("div",{className:"card-item__cvv",children:[Object(l.jsx)("div",{className:"card-item__cvvTitle",children:"CVV"}),Object(l.jsx)("div",{className:"card-item__cvvBand",children:Object(l.jsx)(b.a,{children:s.split("").map((function(e,c){return Object(l.jsx)(p.a,{classNames:"zoom-in-out",timeout:250,children:Object(l.jsx)("span",{children:"*"})},c)}))})}),Object(l.jsx)("div",{className:"card-item__type",children:Object(l.jsx)("img",{alt:"card-type",src:"/card-type/visa.png",className:"card-item__typeImg"})})]})]})]})},_={cardNumber:"#### #### #### ####",cardHolder:"FULL NAME",cardMonth:"",cardYear:"",cardCvv:"",isCardFlipped:!1},x=function(){var e=Object(r.useState)(_),c=Object(i.a)(e,2),a=c[0],t=c[1],d=Object(r.useState)(null),o=Object(i.a)(d,2),u=o[0],m=o[1],b=Object(r.useCallback)((function(e,c){t(Object(n.a)(Object(n.a)({},a),{},Object(s.a)({},e,c||_[e])))}),[a]),p={cardNumber:Object(r.useRef)(),cardHolder:Object(r.useRef)(),cardDate:Object(r.useRef)(),cardCvv:Object(r.useRef)()},h=Object(r.useCallback)((function(e){p[e].current.focus()})),f={cardNumber:Object(r.useRef)(),cardHolder:Object(r.useRef)(),cardDate:Object(r.useRef)()},O=Object(r.useCallback)((function(){m(null)}),[]);return Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsx)(j,{cardMonth:a.cardMonth,cardYear:a.cardYear,onUpdateState:b,cardNumberRef:p.cardNumber,cardHolderRef:p.cardHolder,cardDateRef:p.cardDate,onCardInputFocus:function(e,c){m(f[c])},onCardInputBlur:O,children:Object(l.jsx)(v,{cardNumber:a.cardNumber,cardHolder:a.cardHolder,cardMonth:a.cardMonth,cardYear:a.cardYear,cardCvv:a.cardCvv,isCardFlipped:a.isCardFlipped,currentFocusedElm:u,onCardElementClick:h,cardNumberRef:f.cardNumber,cardHolderRef:f.cardHolder,cardDateRef:f.cardDate})})})};var N=function(){return Object(l.jsx)(x,{})};d.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.61cf9402.chunk.js.map