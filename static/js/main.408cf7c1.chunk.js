(this["webpackJsonpreact-currecy-conventer"]=this["webpackJsonpreact-currecy-conventer"]||[]).push([[0],{51:function(e,n,t){"use strict";t.r(n);var r,c,o,a,u,i,s,l,d,j,b,h,f=t(1),m=t.n(f),g=t(20),x=t.n(g),O=t(2),p=t(3),y=O.default.div(r||(r=Object(p.a)(["\n    margin: 0 auto;\n    max-width: 800px;\n"]))),k=t(0),v=function(e){var n=e.children;return Object(k.jsx)(y,{children:n})},B=O.default.h1(c||(c=Object(p.a)(["\n    text-align: center;\n    margin: 0;\n    padding: 16px;\n"]))),w=function(e){var n=e.title;return Object(k.jsx)("header",{children:Object(k.jsx)(B,{children:n})})},z=function(e){var n=e.children;return Object(k.jsx)("main",{children:n})},C=O.default.div(o||(o=Object(p.a)(["\n    display: flex;\n    justify-content: flex-end;\n    font-size: 12px;\n    font-family: monospace;\n"]))),R=t(5),E=function(){var e=function(){var e=Object(f.useState)(new Date),n=Object(R.a)(e,2),t=n[0],r=n[1];return Object(f.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]),{currentDate:t,formatDate:function(e){return e.toLocaleDateString(void 0,{month:"long",weekday:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}}}(),n=e.currentDate,t=e.formatDate;return Object(k.jsxs)(C,{children:["Dzisiaj jest: ",t(n)]})},F=O.default.p(a||(a=Object(p.a)(["\n    text-align: center;\n    width: 100%;\n    border: ",";\n    border-radius: ",";\n    padding: 12px;\n    font-size: 16px;\n    margin: 0px 2px;\n    background-color: ",";\n    word-break: break-word;\n"])),(function(e){return e.theme.ElementBorder}),(function(e){return e.theme.ElementBorderRadius}),(function(e){return e.theme.BackgroundColor.White})),M=function(e){var n=e.result;return!!n&&Object(k.jsxs)(F,{children:[n.amount," ",n.currencyFrom," to ",n.value.toFixed(2)," ",n.currencyTo]})},S=O.default.div(u||(u=Object(p.a)(["\n    display: flex;\n    margin: 10px 0;\n"]))),D=O.default.button(i||(i=Object(p.a)(["\n    margin: 0;\n    background-color: ",";\n    width: 100%;\n    border: ",";\n    border-radius: ",";\n    padding: 12px;\n    font-size: 16px;\n\n    &:hover {\n        background-color: ",";\n}\n    &:active {\n        background-color: ",";\n}\n"])),(function(e){return e.theme.BackgroundColor.Melrose}),(function(e){return e.theme.ElementBorder}),(function(e){return e.theme.ElementBorderRadius}),(function(e){return e.theme.BackgroundColor.MelroseHover}),(function(e){return e.theme.BackgroundColor.MelroseActive})),P=function(e){var n=e.hideRates,t=e.toggleHideRates;return Object(k.jsxs)(S,{children:[Object(k.jsx)(D,{children:"Przelicz waluty"}),Object(k.jsxs)(D,{onClick:t,type:"button",children:["".concat(!0===n?"Poka\u017c":"Ukryj")," Kursy"]})]})},T=O.default.form(s||(s=Object(p.a)(["\n    margin: 10px 0px;\n"]))),A=O.default.fieldset(l||(l=Object(p.a)(["\n    width: 100%;\n    border: ",";\n    border-radius: ",";\n    padding: 12px;\n    font-size: 16px;\n    background-color: ","\n"])),(function(e){return e.theme.ElementBorder}),(function(e){return e.theme.ElementBorderRadius}),(function(e){return e.theme.BackgroundColor.Mystic})),I=O.default.select(d||(d=Object(p.a)(["\n    margin: 5px 0;\n    width: 100%;\n    padding: 5px;\n    border-radius: ",";\n    border: ",";\n    background-color: ",";\n\n    &:hover {\n        background-color: ",";\n    }\n"])),(function(e){return e.theme.ElementBorderRadius}),(function(e){return e.theme.ElementBorder}),(function(e){return e.theme.BackgroundColor.Melrose}),(function(e){return e.theme.BackgroundColor.MelroseHover})),L=Object(O.default)(I)(j||(j=Object(p.a)(["\n    background-color: ",";\n"])),(function(e){return e.theme.BackgroundColor.White})),H=O.default.span(b||(b=Object(p.a)(["\n    border-radius: ",";\n    border: ",";\n    background-color: ",";\n"])),(function(e){return e.theme.ElementBorderRadius}),(function(e){return e.theme.ElementBorder}),(function(e){return e.theme.BackgroundColor.Melrose})),W=function(e){var n=e.dataFromAPI,t=function(){var e=Object(f.useState)(!0),n=Object(R.a)(e,2),t=n[0],r=n[1],c=Object(f.useState)(""),o=Object(R.a)(c,2),a=o[0],u=o[1],i=Object(f.useState)("PLN"),s=Object(R.a)(i,2),l=s[0],d=s[1],j=Object(f.useState)("EUR"),b=Object(R.a)(j,2),h=b[0],m=b[1],g=Object(f.useState)(),x=Object(R.a)(g,2),O=x[0];return{currencyFrom:l,currencyTo:h,calculateResult:function(e,n,t){return+e*+n/+t},amount:a,setAmount:u,setResult:x[1],setCurrencyFrom:d,setCurrencyTo:m,hideRates:t,toggleHideRates:function(){r((function(e){return!e}))},result:O}}(),r=t.currencyFrom,c=t.currencyTo,o=t.calculateResult,a=t.amount,u=t.setAmount,i=t.setResult,s=t.setCurrencyFrom,l=t.setCurrencyTo,d=t.hideRates,j=t.toggleHideRates,b=t.result;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(C,{children:[" Aktualizacja kurs\xf3w: ",n.date]}),Object(k.jsxs)(T,{onSubmit:function(e){e.preventDefault();var t=1/+n.rates[r],s=1/+n.rates[c],l=o(a,t,s);i({amount:a,currencyFrom:r,value:l,currencyTo:c}),u("")},children:[Object(k.jsxs)(A,{children:[Object(k.jsxs)("label",{children:["Wybierz walut\u0119 do przeliczenia:",Object(k.jsx)(I,{value:r,onChange:function(e){var n=e.target;return s(n.value)},name:"currencyFrom",required:!0,children:Object.keys(n.rates).map((function(e){return Object(k.jsx)("option",{children:e},e)}))})]}),Object(k.jsxs)("label",{children:["Wybierz walut\u0119 docelow\u0105:",Object(k.jsx)(I,{value:c,onChange:function(e){var n=e.target;return l(n.value)},name:"currencyTo",required:!0,children:Object.keys(n.rates).map((function(e){return Object(k.jsx)("option",{children:e},e)}))})]}),Object(k.jsxs)("label",{children:["Wpisz kwot\u0119:",Object(k.jsx)(L,{as:"input",value:a,onChange:function(e){var n=e.target;return u(n.value)},type:"number",min:"0.01",required:!0,step:"0.01"})]})]}),Object(k.jsx)(P,{hideRates:d,toggleHideRates:j}),Object(k.jsx)(M,{result:b,amount:a}),!d&&Object(k.jsxs)(A,{children:[Object(k.jsx)("legend",{children:Object(k.jsx)(H,{children:"Kursy walut"})}),Object.keys(n.rates).filter((function(e){return"PLN"!==e})).map((function(e){return Object(k.jsxs)("label",{children:[e,Object(k.jsx)(L,{as:"p",children:1/+n.rates[e]})]})}))]})]})]})},U=O.default.p(h||(h=Object(p.a)(["\n    text-align: center;\n    font-size: 10px;\n    background: white;\n"]))),N=function(){return Object(k.jsx)(U,{children:"Designed by Wojciech Bylica Arts"})},q=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(A,{children:"\u0141aduj\u0119 kursy walut z Europejskiego Banku Centralnego..."})})},G=function(){return Object(k.jsx)(A,{children:Object(k.jsx)("p",{children:"Co\u015b posz\u0142o nie tak... sprawd\u017a po\u0142\u0105czenie z internetem i spr\xf3buj ponownie!"})})},J=t(9),K=t.n(J),Q=t(24),_=t(25),V=t.n(_);var X,Y=function(){var e=function(){var e=Object(f.useState)({date:null,rates:null,status:"loading"}),n=Object(R.a)(e,2),t=n[0],r=n[1];return Object(f.useEffect)((function(){setTimeout(function(){var e=Object(Q.a)(K.a.mark((function e(){var n,t,c,o;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.a.get("https://api.exchangerate.host/latest?symbols=PLN,EUR,USD,RUB&base=PLN");case 3:n=e.sent,t=n.data,c=t.date,o=t.rates,r({date:c,rates:o,status:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r({status:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),2e3)}),[]),t}();return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(v,{children:[Object(k.jsx)(w,{title:"Przelicznik walut"}),Object(k.jsxs)(z,{children:[Object(k.jsx)(E,{}),"loading"===e.status&&Object(k.jsx)(q,{}),"success"===e.status&&Object(k.jsx)(W,{dataFromAPI:e}),"error"===e.status&&Object(k.jsx)(G,{})]}),Object(k.jsx)(N,{})]})})},Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))},$=t(26),ee=Object(O.createGlobalStyle)(X||(X=Object(p.a)(["\n\n","\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: ",";\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-position: top;\n  font-family: 'Libre Franklin', sans-serif;\n  padding: 10px;\n  font-size: 16px;\n}\n"])),$.normalize,(function(e){return e.theme.Body.QuillGray}),(function(e){return e.theme.Body.BodyBackgroundImage}));x.a.render(Object(k.jsx)(m.a.StrictMode,{children:Object(k.jsxs)(O.ThemeProvider,{theme:{BackgroundColor:{Melrose:"hsl(230deg 98% 85%)",MelroseHover:"hsl(230deg 98% 80%)",MelroseActive:"hsl(230deg 98% 75%)",White:"white",Mystic:"rgb(231 239 239 / 75%)"},Body:{BodyBackgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Money-2180330_1920.jpg/1024px-Money-2180330_1920.jpg")',QuillGray:"#e5e5e3"},ElementBorder:"1px solid grey",ElementBorderRadius:"3px"},children:[Object(k.jsx)(ee,{}),Object(k.jsx)(Y,{})]})}),document.getElementById("root")),Z()}},[[51,1,2]]]);
//# sourceMappingURL=main.408cf7c1.chunk.js.map