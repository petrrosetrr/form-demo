(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{11:function(e,c,t){e.exports={main:"Fieldset_main__3KDCR",header:"Fieldset_header__2x_HA",legend:"Fieldset_legend__Ml4Ix",remove:"Fieldset_remove__2dUFS",info:"Fieldset_info__2-vB_",additional:"Fieldset_additional__w7VaT",emergency:"Fieldset_emergency__2sw_q",text:"Fieldset_text__3pfIP"}},15:function(e,c,t){e.exports={main:"TextField_main__2QD7J",asterisk:"TextField_asterisk__12BR3",input:"TextField_input__1Fs31",error:"TextField_error__TcMub",error_hint:"TextField_error_hint__1TNoB"}},19:function(e,c,t){e.exports={main:"TicketsForm_main__2Mwap",disabled:"TicketsForm_disabled__2Sr6Y",buttons:"TicketsForm_buttons__1hhDJ",button:"TicketsForm_button__1XnmZ",submit:"TicketsForm_submit__2dK04",error:"TicketsForm_error__vk9dy"}},217:function(e,c,t){},218:function(e,c,t){"use strict";t.r(c);var n,a,r,l,s=t(0),i=t.n(s),d=t(82),h=t.n(d),o=t(26),m=t.n(o),u=t(17),v=t(48),b=t.n(v),p=t(83),j=t(5),O=t(14),x=t(11),_=t.n(x),f=t(9),g=t(21),N=t(6),E=t.n(N),y=t(15),F=t.n(y),w=t(1),k=["as","className","label","required","children","name"],R=function(e){var c=e.as,t=void 0===c?"":c,n=e.className,a=e.label,r=e.required,l=void 0!==r&&r,s=e.children,i=e.name,d=Object(g.a)(e,k),h=Object(O.e)(i),o=Object(j.a)(h,2),m=o[0],v=o[1];return Object(w.jsxs)("label",{className:E()(F.a.main,n),children:[Object(w.jsxs)("span",{children:[a," ",l&&Object(w.jsx)("span",{className:F.a.asterisk,children:"*"})]}),"select"===t?Object(w.jsx)("select",Object(f.a)(Object(f.a)(Object(f.a)({className:E()(F.a.input,Object(u.a)({},F.a.error,v.error&&v.touched))},d),m),{},{children:s})):Object(w.jsx)("input",Object(f.a)(Object(f.a)({className:E()(F.a.input,Object(u.a)({},F.a.error,v.error&&v.touched))},d),m)),Object(w.jsx)("div",{className:F.a.error_hint,children:v.error&&v.touched&&v.error})]})},q=t(38),z=t.n(q),T=["label","className","name"],S=function(e){var c=e.label,t=e.className,n=e.name;Object(g.a)(e,T);return Object(w.jsxs)("div",{className:E()(z.a.main,t),children:[Object(w.jsx)(O.a,{className:z.a.input,name:n,type:"checkbox",id:n}),Object(w.jsx)("label",{className:z.a.label,htmlFor:n,children:c})]})},B=(t(99),function(e){var c=e.show,t=e.className,n=e.children,a=Object(s.useState)(c),r=Object(j.a)(a,2),l=r[0],i=r[1];Object(s.useEffect)((function(){c&&i(!0)}),[c]);return Object(w.jsx)(w.Fragment,{children:l&&Object(w.jsx)("div",{className:t,style:{animation:"".concat(c?"fadeIn":"fadeOut"," 0.4s"),position:"relative"},onAnimationEnd:function(){c||i(!1)},children:n})})}),C=function(e){var c=e.remove,t=e.index,n=e.passenger;return Object(w.jsxs)("fieldset",{className:_.a.main,children:[Object(w.jsxs)("div",{className:_.a.header,children:[Object(w.jsxs)("legend",{className:_.a.legend,children:["\u041f\u0430\u0441\u0441\u0430\u0436\u0438\u0440 \u2116",t+1]}),Object(w.jsx)("button",{className:_.a.remove,onClick:c,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0430"})]}),Object(w.jsxs)("div",{className:_.a.info,children:[Object(w.jsx)(R,{label:"\u0418\u043c\u044f:",name:"passengers[".concat(t,"].name"),required:!0}),Object(w.jsx)(R,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:",name:"passengers[".concat(t,"].surname"),required:!0}),Object(w.jsx)(R,{label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e:",name:"passengers[".concat(t,"].patronymic"),required:!0}),Object(w.jsxs)(R,{label:"\u041f\u043e\u043b:",name:"passengers[".concat(t,"].gender"),as:"select",required:!0,children:[Object(w.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}),Object(w.jsx)("option",{value:"male",children:"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"}),Object(w.jsx)("option",{value:"female",children:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"})]}),Object(w.jsx)(R,{label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:",name:"passengers[".concat(t,"].dateOfBirth"),type:"date",required:!0}),Object(w.jsxs)(R,{label:"\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u0442\u0432\u043e:",name:"passengers[".concat(t,"].citizenship"),as:"select",required:!0,children:[Object(w.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}),Object(w.jsx)("option",{value:"Russia",children:"\u0420\u043e\u0441\u0441\u0438\u044f"}),Object(w.jsx)("option",{value:"Other",children:"\u0414\u0440\u0443\u0433\u043ee"})]}),Object(w.jsx)(R,{label:"\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430",name:"passengers[".concat(t,"].idNumber"),type:"number",required:!0}),Object(w.jsx)(R,{label:"\u0421\u043d\u0438\u043b\u0441:",name:"passengers[".concat(t,"].snils"),type:"number"}),Object(w.jsx)(S,{label:"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043d\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439",name:"passengers[".concat(t,"].emergencyNotifications"),className:_.a.emergency}),Object(w.jsxs)(B,{show:n.emergencyNotifications,className:_.a.additional,children:[Object(w.jsx)("p",{className:_.a.text,children:"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f..."}),Object(w.jsx)(R,{label:"Email:",name:"passengers[".concat(t,"].email")}),Object(w.jsx)(R,{label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:",name:"passengers[".concat(t,"].phoneNumber")})]})]})]})},I=t(19),A=t.n(I),D=t(3),J=t(89),M=t.n(J),P={passengers:[{name:"",surname:"",patronymic:"",gender:"",dateOfBirth:"",citizenship:"",idNumber:"",emergencyNotifications:!0,phoneNumber:"",email:"",snils:""}]},U=D.c().shape({passengers:D.a().of(D.c().shape({name:D.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),surname:D.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),patronymic:D.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),gender:D.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),dateOfBirth:D.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),citizenship:D.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),idNumber:D.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),emergencyNotifications:D.b().required().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),email:D.d().email(),snils:D.d().matches(/^[0-9]+$/)}))}),H=function(){var e=Object(s.useState)(!1),c=Object(j.a)(e,2),t=c[0],n=c[1],a=function(){var e=Object(p.a)(b.a.mark((function e(c,t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.post("https://webhook.site/d50f48dc-3a5b-4228-b600-8998aec0c130",c);case 3:t.resetForm(),n(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(c,t){return e.apply(this,arguments)}}();return Object(w.jsx)(O.d,{initialValues:P,onSubmit:a,validationSchema:U,children:function(e){var c=e.values,a=e.isSubmitting;return Object(w.jsx)(O.c,{className:E()(A.a.main,Object(u.a)({},A.a.disabled,a)),onChange:function(){return n(!1)},children:Object(w.jsx)(O.b,{name:"passengers",children:function(e){var n=e.push,a=e.remove;return Object(w.jsxs)(w.Fragment,{children:[c.passengers.map((function(e,c){return Object(w.jsx)(B,{show:!0,children:Object(w.jsx)(C,{passenger:e,remove:function(){return a(c)},index:c},c)},c)})),Object(w.jsxs)("div",{className:A.a.buttons,children:[Object(w.jsx)("button",{type:"button",className:A.a.button,onClick:function(){n({name:"",surname:"",patronymic:"",gender:"",dateOfBirth:"",citizenship:"",idNumber:"",emergencyNotifications:!0,phoneNumber:"",email:"",snils:""}),setTimeout((function(){return window.scrollTo({behavior:"smooth",top:document.body.scrollHeight})}))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0430"}),!!c.passengers.length&&Object(w.jsx)("button",{className:A.a.submit,type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443"})]}),t&&Object(w.jsx)("p",{className:A.a.error,children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0440\u043c\u044b :("})]})}})})}})},K=t(90),V=t.n(K),Q=["children","className"],X=function(e){var c=e.children,t=e.className,n=Object(g.a)(e,Q);return Object(w.jsx)("div",Object(f.a)(Object(f.a)({className:E()(V.a.main,t)},n),{},{children:c}))},Y=["title","titleId"];function Z(){return Z=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var t=arguments[c];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Z.apply(this,arguments)}function $(e,c){if(null==e)return{};var t,n,a=function(e,c){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],c.indexOf(t)>=0||(a[t]=e[t]);return a}(e,c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],c.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function G(e,c){var t=e.title,i=e.titleId,d=$(e,Y);return s.createElement("svg",Z({width:"996px",height:"158px",enableBackground:"new 0 0 995.517 158.361",viewBox:"0 0 996 158",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",ref:c,"aria-labelledby":i},d),void 0===t?s.createElement("title",{id:i},"Russian Railways logo"):t?s.createElement("title",{id:i},t):null,n||(n=s.createElement("g",{fill:"#C4151C"},s.createElement("path",{d:"m252 14v5.77h49.5c3.3 0 8.25 0 11.5 3.3s3.3 8.25 3.3 11.5v49.5c0 3.3 0 8.25-3.3 11.5-3.3 3.3-8.25 3.3-11.5 3.3h-23.9c-4.12 0-9.49 0-11.5-4.54-2.06-4.54 0.824-8.66 3.3-12l32.2-42.9h-49.5l-19.8 26.4c-3.32 4.42-6.19 8.25-6.19 13.2 0 4.95 2.67 8.51 6.19 13.2l4.95 6.6c4.95 6.6 9.9 13.2 16.5 16.5 6.6 3.3 14.4 3.3 25.2 3.3h21.4c12.4 0 30.9 0 43.3-12.4s12.4-30.5 12.4-37.1v-19.8c0-6.6 0-24.7-12.4-37.1s-30.9-12.4-43.3-12.4l-34.2-0.011c-3.3-1e-3 -7.42 0-10.7 3.3-3.3 3.3-3.3 7.42-3.3 10.7"}),s.createElement("polyline",{points:"193 39.6 242 39.6 183 119 134 119 193 39.6"}),s.createElement("path",{d:"m0 53.6c0-3.3 0-7.42 3.3-10.7s7.42-3.3 10.7-3.3h82.9c10.7 0 18.6 0 25.2 3.3s11.5 9.9 16.5 16.5l4.95 6.6c3.51 4.68 6.19 8.25 6.19 13.2 0 4.95-2.87 8.78-6.19 13.2l-19.8 26.4h-49.5l32.2-42.9c2.47-3.3 5.36-7.42 3.3-12-2.06-4.54-7.42-4.54-11.5-4.54h-38.8v99h-39.6v-99h-19.8v-5.78"}))),a||(a=s.createElement("g",{fill:"#231F20"},s.createElement("path",{d:"m403 105c-2.97 4.04-6 8.02-8.97 12v2.26h8.37c4.1-5.46 6.24-8.31 6.24-11.6h8.2v11.6h7.84v-11.6h8.2c0 3.27 2.14 6.12 6.24 11.6h8.37v-2.26l-9.03-12c7.6-5.7 7.6-5.7 7.6-13.2v-2.49h-8.55v2.49c0 9.09 0 9.09-8.91 9.09h-3.92v-11.6h-7.84v11.6h-3.92c-8.91 0-8.91 0-8.91-9.09v-2.49h-8.55v2.49c0 7.48 0 7.48 7.54 13.2"}),s.createElement("path",{d:"m463 101c0-6.59 0-6.59 7.3-6.59 7.3 0 7.3 0 7.3 6.59h-14.6m0 5.34h7.3c7.66-0.06 9.92 0.06 12.5-0.535l3.03-0.712v-2.91c0-4.93 0-14.2-14.1-14.2h-2.85c-14.1 0-14.1 9.26-14.1 14.3v2.85c0 5.34 0.118 14.3 15.6 14.3 2.32 0 7.54 0 13.2-1.42v-6.41h-1.6l-5.7 1.42h-6.06c-7.3-2e-3 -7.3-2e-3 -7.3-6.59z",clipRule:"evenodd",fillRule:"evenodd"}),s.createElement("path",{d:"m499 88.8c0 4.51-0.356 18.1-7.48 27.6v2.32h8.73c5.17-6.89 5.17-15.9 5.17-23.3h12.3v23.3h7.84v-29.9h-26.5"}),s.createElement("path",{d:"m543 101c0-6.59 0-6.59 7.31-6.59 7.3 0 7.3 0 7.3 6.59h-14.6m0 5.34h7.31c7.66-0.06 9.92 0.06 12.5-0.535l3.03-0.712v-2.91c0-4.93 0-14.2-14.1-14.2h-2.85c-14.1 0-14.1 9.26-14.1 14.3v2.85c0 5.34 0.118 14.3 15.6 14.3 2.32 0 7.54 0 13.2-1.42v-6.41h-1.6l-5.7 1.42h-6.06c-7.3-2e-3 -7.3-2e-3 -7.3-6.59z",clipRule:"evenodd",fillRule:"evenodd"}),s.createElement("path",{d:"m595 104v-0.891c6.06-1.54 6.06-5.28 6.06-6.71 0-2.85 0-8.55-14.4-8.55-2.14 0-7.13 0-12.8 1.43v6.41h1.6l5.7-1.43h6.59c4.57 0 4.81 0 4.81 3.32 0 3.27 0 3.27-4.81 3.27h-6.59v5.34h6.59c4.57 0 4.81 0 4.81 3.27 0 3.33 0 3.33-4.81 3.33h-6.59l-5.7-1.43h-1.6v6.41c5.7 1.42 10.7 1.42 12.8 1.42 14.4 0 14.4-5.7 14.4-8.55 0-1.42 0-5.16-6.06-6.65"}),s.createElement("polyline",{points:"634 88.8 634 100 618 100 618 88.8 610 88.8 610 119 618 119 618 107 634 107 634 119 641 119 641 88.8 634 88.8"}))),r||(r=s.createElement("g",{clipRule:"evenodd",fill:"#231F20",fillRule:"evenodd"},s.createElement("path",{d:"m666 104c6.24 0 6.24 0 6.24 4.63 0 4.63 0 4.63-6.24 4.63h-6.24v-9.26h6.24m28-15h-7.84v29.9h7.84v-29.9zm-26.9 29.9c9.44 0 13.4-2.08 13.4-10.2 0-4.45 0-10.9-12.3-10.9-1.78 0-4.81 0.18-8.37 1.07v-9.98h-7.84v29.9h15.1z"}),s.createElement("path",{d:"m712 101c0-6.59 0-6.59 7.3-6.59s7.3 0 7.3 6.59h-14.6m0 5.34h7.3c7.66-0.06 9.92 0.06 12.5-0.535l3.03-0.712v-2.91c0-4.93 0-14.2-14.1-14.2h-2.85c-14.1 0-14.1 9.26-14.1 14.3v2.85c0 5.34 0.119 14.3 15.6 14.3 2.32 0 7.54 0 13.2-1.42v-6.41h-1.6l-5.7 1.42h-6.06c-7.3-2e-3 -7.3-2e-3 -7.3-6.59z"}),s.createElement("path",{d:"m767 103c0-8.02 0-7.84 10.6-7.84 1.43 0 3.39 0.177 5.76 0.712v12.8l-7.6 1.9c-8.79 1e-3 -8.79 1e-3 -8.79-7.6m-4.63 20.7v6.77c5.7 1.43 10.3 1.43 12.1 1.43 16.2 0 16.7-7.01 16.7-15v-27.8h-2.56l-3.8 2.85c-2.61-3.39-8.97-3.5-11-3.5-15.1 0-15.1 9.5-15.1 13.8v1.43c0 4.99 0 13.2 12.8 13.2 3.86 0 8.43-1.07 11.8-3.56v2.49c0 9.2-0.178 9.26-9.62 9.26h-4.1l-5.7-1.43h-1.6z"}),s.createElement("path",{d:"m815 88.1c-15.1 0-15.1 8.91-15.1 14.3v2.85c0 5.34 0 14.3 15.1 14.3h2.85c15.1 0 15.1-8.91 15.1-14.3v-2.85c0-5.34 0-14.3-15.1-14.3h-2.85m1.42 6.59c8.37 0 8.37 0 8.37 9.09s0 9.09-8.37 9.09-8.37 0-8.37-9.09 0-9.09 8.37-9.09z"}),s.createElement("path",{d:"m866 104c0 8.91 0 8.91-8.73 8.91-2.14 0-4.87 0-7.66-0.713v-15l7.6-1.9c8.79 0 8.79 0.118 8.79 8.67m-24.2-15v42h7.84v-13c3.56 0.891 6.41 1.6 10.7 1.6 13.9 0 13.9-10.2 13.9-14.3v-2.85c0-4.99 0-14.3-13-14.3-6.65 0-10.5 2.91-12.6 4.51l-2.85-3.8h-3.92z"}),s.createElement("path",{d:"m898 88.1c-15.1 0-15.1 8.91-15.1 14.3v2.85c0 5.34 0 14.3 15.1 14.3h2.85c15.1 0 15.1-8.91 15.1-14.3v-2.85c0-5.34 0-14.3-15.1-14.3h-2.85m1.42 6.59c8.37 0 8.37 0 8.37 9.09s0 9.09-8.37 9.09-8.37 0-8.37-9.09 0-9.09 8.37-9.09z"}))),l||(l=s.createElement("g",{fill:"#231F20"},s.createElement("path",{d:"m939 88.1c-2.85 0-6.59 0-12.3 1.43v6.41h1.6l5.7-1.42h7.3c3.92 0 3.92 0 3.92 2.26 0 1.54 0 2.02-3.03 2.55l-7.13 1.78c-4.1 1.01-9.8 2.55-9.8 8.73 0 4.1 0 9.62 14.4 9.62 2.85 0 6.59 0 12.3-1.42v-6.41h-1.6c-2.38 0.653-4.63 1.19-5.52 1.43h-7.48c-3.92 0-3.92 0-3.92-2.26 0-1.36 0-1.66 1.66-2.14l3.98-1.07 4.51-1.13c4.1-1.01 9.8-2.49 9.8-8.73-1e-3 -4.1-1e-3 -9.62-14.4-9.62"}),s.createElement("path",{d:"m990 120 5.82-4.34c-2.14-2.85-2.14-2.85-2.14-7.9v-18.5h-7.84v21.7l-7.6 1.9c-8.08 0-8.08 0-8.08-8.25v-15.4h-7.84v16.6c0 5.88 0 14.1 11.9 14.1 6.24 0 10.1-2.91 12.2-4.51l3.5 4.63"}),s.createElement("path",{d:"m396 17.3v42h8.55v-11.6h6.77c11.6 0 20.7 0 20.7-15.2 0-15.3-9.09-15.3-20.7-15.3h-15.3m8.55 23v-15.5h10.3c7.66 0 8.02 0 8.02 7.78 0 7.54 0 7.72-8.02 7.72h-10.3z",clipRule:"evenodd",fillRule:"evenodd"}),s.createElement("path",{d:"m454 28.7c-15.1 0-15.1 8.91-15.1 14.3v2.85c0 5.34 0 14.3 15.1 14.3h2.85c15.1 0 15.1-8.91 15.1-14.3v-2.85c0-5.34 0-14.3-15.1-14.3h-2.85m1.42 6.59c8.37 0 8.37 0 8.37 9.09s0 9.09-8.37 9.09-8.37 0-8.37-9.09 0-9.09 8.37-9.09z",clipRule:"evenodd",fillRule:"evenodd"}),s.createElement("path",{d:"m495 60.1c2.14 0 7.66 0 13.4-1.43v-6.41h-1.6l-5.76 1.42h-3.38c-9.92 0-9.92 0-9.92-9.26s0-9.26 7.3-9.26c6.18 0 6.18 0 7.66 5.88l7.13-1.78c0-2.85 0-10.5-13.4-10.5h-2.85c-14.1 0-14.1 8.91-14.1 14.3v2.85c0 5.34 0 14.3 15.5 14.3"}),s.createElement("path",{d:"m533 60.1c2.14 0 7.66 0 13.4-1.43v-6.41h-1.6l-5.76 1.42h-3.38c-9.92 0-9.92 0-9.92-9.26s0-9.26 7.3-9.26c6.18 0 6.18 0 7.66 5.88l7.13-1.78c0-2.85 0-10.5-13.4-10.5h-2.85c-14.1 0-14.1 8.91-14.1 14.3v2.85c0 5.34 0 14.3 15.5 14.3"}),s.createElement("path",{d:"m583 60.2 5.82-4.34c-2.14-2.85-2.14-2.85-2.14-7.9v-18.5h-7.84v21.7l-7.6 1.9c-8.08 0-8.08 0-8.08-8.25v-15.4h-7.84v16.6c0 5.88 0 14.1 11.9 14.1 6.24 0 10.1-2.91 12.2-4.51l3.5 4.63"}),s.createElement("path",{d:"m611 18.8c-3.86 0-3.86 0-5.76-2.14l-3.44 2.67c3.74 4.81 5.64 5.17 11.1 5.17h1.31c5.4 0 7.36-0.357 11-5.17l-3.44-2.67c-1.84 2.14-1.84 2.14-5.76 2.14h-5.05m14.5 41.5 5.82-4.34c-2.14-2.85-2.14-2.85-2.14-7.9v-18.5h-7.84v21.7l-7.6 1.9c-7.9 0-8.08 0-8.08-8.25v-15.4h-7.84v16.6c0 5.88 0 14.1 11.9 14.1 6.24 0 10.1-2.91 12.2-4.51l3.5 4.63z",clipRule:"evenodd",fillRule:"evenodd"}),s.createElement("path",{d:"m654 60.1c2.14 0 7.66 0 13.4-1.43v-6.41h-1.6l-5.76 1.42h-3.39c-9.92 0-9.92 0-9.92-9.26s0-9.26 7.3-9.26c6.18 0 6.18 0 7.66 5.88l7.13-1.78c0-2.85 0-10.5-13.4-10.5h-2.85c-14.1 0-14.1 8.91-14.1 14.3v2.85c1e-3 5.34 1e-3 14.3 15.5 14.3"}),s.createElement("path",{d:"m678 29.5v29.9h7.84v-11.6h9.62c0 3.27 2.14 6.12 6.23 11.6h8.37v-2.26l-9.03-12c7.6-5.7 7.6-5.7 7.6-13.2v-2.49h-8.55v2.49c0 9.09 0 9.09-8.91 9.09h-5.34v-11.6h-7.84"}),s.createElement("path",{d:"m746 60.2 5.82-4.34c-2.14-2.85-2.14-2.85-2.14-7.9v-18.5h-7.84v21.7l-7.6 1.9c-8.08 0-8.08 0-8.08-8.25v-15.4h-7.84v16.6c0 5.88 0 14.1 11.9 14.1 6.24 0 10.1-2.91 12.2-4.51l3.5 4.63"}),s.createElement("path",{d:"m767 41.7c0-6.59 0-6.59 7.31-6.59 7.3 0 7.3 0 7.3 6.59h-14.6m0 5.34h7.31c7.66-0.06 9.92 0.06 12.5-0.535l3.03-0.712v-2.91c0-4.93 0-14.2-14.1-14.2h-2.85c-14.1 0-14.1 9.26-14.1 14.3v2.85c0 5.34 0.119 14.3 15.6 14.3 2.32 0 7.54 0 13.2-1.43v-6.41h-1.6l-5.7 1.42h-6.06c-7.31-1e-3 -7.31-1e-3 -7.31-6.59z",clipRule:"evenodd",fillRule:"evenodd"}))))}var L=s.forwardRef(G),W=(t.p,function(){return Object(w.jsxs)("div",{className:m.a.main,children:[Object(w.jsx)("header",{className:m.a.header,children:Object(w.jsx)(X,{children:Object(w.jsx)(L,{className:m.a.logo})})}),Object(w.jsx)(X,{className:m.a.container,children:Object(w.jsx)(H,{})})]})});t(216),t(217);h.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(W,{})}),document.getElementById("root"))},26:function(e,c,t){e.exports={main:"App_main__39SgD",header:"App_header__1-Ud1",logo:"App_logo__6Fasj",container:"App_container__2_FRw"}},38:function(e,c,t){e.exports={main:"Checkbox_main__3Ut8s"}},90:function(e,c,t){e.exports={main:"Container_main__3ud_S"}},99:function(e,c,t){}},[[218,1,2]]]);
//# sourceMappingURL=main.6711a793.chunk.js.map