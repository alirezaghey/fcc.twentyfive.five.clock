(this["webpackJsonptwentyfive.five.clock"]=this["webpackJsonptwentyfive.five.clock"]||[]).push([[0],{94:function(e,t,n){"use strict";n.r(t);var i=n(113),a=n(0),c=n(71),s=n.n(c),r=n(8),j=n(3),b=(n(83),n(84),n(115)),l=n(110),o=n(111),u=n(117),d=n(107),O=n(112),p=n(114),m=n(75),h=n(116),x=n(5),f=function(e){var t=Object(p.a)({step:1,value:e.value,min:e.min,max:e.max}),n=t.getInputProps,i=t.getIncrementButtonProps,a=t.getDecrementButtonProps,c=i(),s=a(),j=n({isReadOnly:!0});return Object(x.jsxs)(u.b,{children:[Object(x.jsx)(d.a,{size:"lg",as:"h2",id:e.id,children:e.title}),Object(x.jsxs)(u.a,{children:[Object(x.jsx)(m.a,Object(r.a)(Object(r.a)({},c),{},{onClick:function(){return e.handleClick(e.type,1)},isDisabled:e.value>=e.max||e.appRunState===I.RUNNING,id:e.type+"-increment",children:"+"})),Object(x.jsx)(h.a,Object(r.a)(Object(r.a)({},j),{},{value:e.value,id:e.type+"-length",width:"60px",textAlign:"center"})),Object(x.jsx)(m.a,Object(r.a)(Object(r.a)({},s),{},{onClick:function(){return e.handleClick(e.type,-1)},isDisabled:e.vlaue<=e.min||e.appRunState===I.RUNNING,id:e.type+"-decrement",children:"-"}))]})]})},S=n(51),k=n(108),R=n(37),v=function(e){return Object(x.jsx)(k.a,{id:e.id,icon:Object(x.jsx)(S.a,{onClick:e.handleClick,icon:e.play?R.a:R.b})})},T=function(e){return Object(x.jsx)(k.a,{id:e.id,onClick:e.handleClick,icon:Object(x.jsx)(S.a,{icon:R.c})})},g=n(97),N=n(64),y=function(e){var t=Object(g.b)().toggleColorMode,n=Object(g.c)("dark","light"),i=Object(g.c)(N.a,N.b);return Object(x.jsx)(k.a,Object(r.a)({size:"md",fontSize:"lg","aria-label":"Switch to ".concat(n," mode"),variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(x.jsx)(i,{})},e))},C=n(109),P=Object(C.a)({fonts:{heading:"Xanh Mono",body:"Space Mono"}}),I={RUNNING:"RUNNING",PAUSED:"PAUSED"},U="Session",w="Break";var D=function(){function e(){return{appRunState:I.PAUSED,appPeriodState:U,sessionTime:1500,sessionRemTime:1500,breakTime:300,breakRemTime:300,getVal:function(){var e=this.appPeriodState===U?this.sessionRemTime:this.breakRemTime,t=[Math.floor(e/60),e%60],n=t[0],i=t[1];return{min:n=n<10?"0"+String(n):n,sec:i=i<10?"0"+String(i):i}}}}var t=Object(a.useState)(e()),n=Object(j.a)(t,2),i=n[0],c=n[1],s=Object(a.useRef)(null);Object(a.useEffect)((function(){i.appRunState===I.PAUSED?(null===s||void 0===s?void 0:s.current)&&clearInterval(s.current):s.current=setInterval((function(){c((function(e){if(e.appPeriodState===U){var t=e.sessionRemTime-1;return t>=0?Object(r.a)(Object(r.a)({},e),{},{sessionRemTime:t}):Object(r.a)(Object(r.a)({},e),{},{sessionRemTime:e.sessionTime,appPeriodState:w})}var n=e.breakRemTime-1;return n>=0?Object(r.a)(Object(r.a)({},e),{},{breakRemTime:n}):Object(r.a)(Object(r.a)({},e),{},{breakRemTime:e.breakTime,appPeriodState:U})}))}),1e3)}),[i.appRunState]);var p=function(e,t){c("session"===e?function(e){return Object(r.a)(Object(r.a)({},e),{},{sessionTime:e.sessionTime+60*t,sessionRemTime:e.sessionTime+60*t})}:function(e){return Object(r.a)(Object(r.a)({},e),{},{breakTime:e.breakTime+60*t,breakRemTime:e.breakTime+60*t})})};return Object(a.useEffect)((function(){c(e())}),[]),Object(x.jsx)(b.a,{theme:P,children:Object(x.jsx)(l.a,{textAlign:"center",fontSize:"xl",children:Object(x.jsxs)(o.a,{minH:"100vh",p:3,children:[Object(x.jsx)(y,{justifySelf:"flex-end"}),Object(x.jsxs)(u.b,{spacing:8,children:[Object(x.jsx)(d.a,{as:"h1",size:"2xl",children:"Twenty Five + Five Clock"}),Object(x.jsxs)(u.a,{width:500,justify:"space-between",children:[Object(x.jsx)(f,{type:"session",value:i.sessionTime/60,appRunState:i.appRunState,handleClick:p,id:"session-label",min:1,max:60,defValue:25,title:"Session Length"}),Object(x.jsx)(f,{type:"break",value:i.breakTime/60,appRunState:i.appRunState,handleClick:p,id:"break-label",min:1,max:60,defValue:5,title:"Break Length"})]}),Object(x.jsx)(d.a,{size:"md",as:"h5",id:"timer-label",children:i.appPeriodState}),Object(x.jsx)(l.a,{boxShadow:"lg",children:Object(x.jsxs)(u.b,{children:[Object(x.jsx)(O.a,{id:"time-left",children:i.getVal().min+":"+i.getVal().sec}),Object(x.jsxs)(u.a,{children:[Object(x.jsx)(v,{id:"start_stop",play:i.appRunState===I.RUNNING,handleClick:function(){c((function(e){return e.appRunState===I.RUNNING?Object(r.a)(Object(r.a)({},e),{},{appRunState:I.PAUSED}):Object(r.a)(Object(r.a)({},e),{},{appRunState:I.RUNNING})}))}}),Object(x.jsx)(T,{id:"reset",handleClick:function(){c(e())}})]})]})})]})]})})})};s.a.render(Object(x.jsxs)(a.StrictMode,{children:[Object(x.jsx)(i.a,{}),Object(x.jsx)(D,{})]}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.5dc5fa58.chunk.js.map