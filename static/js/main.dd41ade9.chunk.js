(this.webpackJsonpkmpvis=this.webpackJsonpkmpvis||[]).push([[0],{11:function(e,t,n){},16:function(e,t,n){e.exports=n(30)},21:function(e,t,n){},22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),c=n.n(l),u=(n(21),n(22),n(6)),i=n.n(u),o=n(8),s=n(4),m=(n(10),n(11),n(33)),b=n(34),d=n(31),f=n(32),E=n(35),p=n(36),h=n(37),g=(n(24),n(13)),S=n.n(g);function v(e){return r.a.createElement(d.a,null,r.a.createElement(f.a,{md:4,lg:4,xs:12},r.a.createElement(E.a,{className:"sm-3"},r.a.createElement(E.a.Prepend,null,r.a.createElement(E.a.Text,{id:"inputGroup-sizing-default"},"Input String")),r.a.createElement(p.a,{"aria-label":"txt-str","aria-describedby":"inputGroup-sizing-default",value:e.inputStr,onChange:function(t){return e.setInputStr(t.target.value)},disabled:e.running}))),r.a.createElement(f.a,{md:3,lg:3,xs:12},r.a.createElement(E.a,{className:"mb-3"},r.a.createElement(E.a.Prepend,null,r.a.createElement(E.a.Text,{id:"inputGroup-sizing-default"},"Search String")),r.a.createElement(p.a,{"aria-label":"txt-str","aria-describedby":"inputGroup-sizing-default",value:e.searchStr,onChange:function(t){return e.setSearchStr(t.target.value)},disabled:e.running}))),r.a.createElement(f.a,{md:3,lg:3,xs:12},r.a.createElement(E.a,{className:"mb-3"},r.a.createElement(E.a.Prepend,null,r.a.createElement(E.a.Text,{id:"inputGroup-sizing-default"},"Speed")),r.a.createElement("div",{className:"range-slider"},r.a.createElement(S.a,{value:3e3-e.animationDelay,onChange:function(t){return e.setAnimationDelay(3e3-t.target.value)},step:100,max:3e3,min:0,disabled:e.running,size:"sm"})))),r.a.createElement(f.a,{md:1},r.a.createElement(h.a,{onClick:e.onStart,disabled:e.running},"Search")))}function O(e){var t,n,a=new Promise((function(a,r){t=setTimeout(a,e),n=r}));return a.cancel=function(){clearTimeout(t),n(Error("Cancelled"))},a}function j(e,t){for(var n=e.length,a=Array(e.length).fill(null),r=0;r<t;r++)a[r]=e[n-t+r];for(var l=n-t-1;l>=0;l--)a[l+t]=e[l];return a}function y(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),u=Object(s.a)(c,2),d=u[0],f=u[1],E=Object(a.useState)(0),p=Object(s.a)(E,2),h=p[0],g=p[1],S=Object(a.useState)(0),y=Object(s.a)(S,2),x=y[0],k=y[1],w=Object(a.useState)("Not Started Yet !"),P=Object(s.a)(w,2),N=P[0],C=P[1],M=Object(a.useState)("Not Started Yet !"),A=Object(s.a)(M,2),I=A[0],L=A[1],z=Object(a.useState)(!1),G=Object(s.a)(z,2),T=G[0],D=G[1],W=Object(a.useState)(!1),B=Object(s.a)(W,2),H=B[0],J=B[1],V=Object(a.useState)(!1),Y=Object(s.a)(V,2),K=Y[0],U=Y[1],$=Object(a.useState)(!1),q=Object(s.a)($,2),F=q[0],Q=q[1],R=Object(a.useState)([]),X=Object(s.a)(R,2),Z=X[0],_=X[1],ee=Object(a.useState)(0),te=Object(s.a)(ee,2),ne=te[0],ae=te[1],re=Object(a.useState)(0),le=Object(s.a)(re,2),ce=le[0],ue=le[1],ie=Object(a.useState)([]),oe=Object(s.a)(ie,2),se=oe[0],me=oe[1],be=Object(a.useState)([]),de=Object(s.a)(be,2),fe=de[0],Ee=de[1],pe=Object(a.useState)(),he=Object(s.a)(pe,2),ge=he[0],Se=he[1],ve=Object(a.useState)(1e3),Oe=Object(s.a)(ve,2),je=Oe[0],ye=Oe[1],xe=Object(a.useState)([]),ke=Object(s.a)(xe,2),we=ke[0],Pe=ke[1],Ne=Object(a.useState)(!1),Ce=Object(s.a)(Ne,2),Me=(Ce[0],Ce[1]);Object(a.useEffect)((function(){var e=n.length-d.length<0?0:n.length-d.length,t=Array.from(d).concat(Array(e).fill("")).map((function(e,t){return{val:e,i:t}}));Ee(t),Q(!1),me([])}),[d,n]),Object(a.useEffect)((function(){Se(void 0),ae(0),ue(0),Me(!1);var e=n.length-d.length<0?0:n.length-d.length,t=Array.from(d).concat(Array(e).fill("")).map((function(e,t){return{val:e,i:t}}));Ee(t)}),[T]);var Ae=function(e){return F&&function(e){return 2==we.length&&(e>=we[0]&&e<=we[1])}(e)?"#b3ccaf":K&&e===ce?"lightgreen":"white"},Ie=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C("Stared..."),n=d,(t=[])[0]=0,a=0,g(0),r=1;case 7:if(!(r<n.length)){e.next=25;break}k(r);case 9:if(!(a>0&&n[r]!==n[a])){e.next=17;break}return C("Mismatch! Consulting LPS table....Updating LPS [ Index ] = ".concat(t[a-1])),a=t[a-1],g(a+0),e.next=15,O(je/100);case 15:e.next=9;break;case 17:return n[a]===n[r]&&(C("Matched! Incrementing Left Value"),a++,g(a+0)),t[r]=a,_([].concat(t)),e.next=22,O(je);case 22:r++,e.next=7;break;case 25:return e.abrupt("return",t);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Le=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,r,l,c,u,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(!0),e.next=3,Ie();case 3:t=e.sent,J(!1),U(!0),a=0,r=d,l=n,c=[],u=0;case 11:if(!(u<l.length)){e.next=34;break}if(Se(void 0),ue(u+0),ae(a),Ee(j(fe,u-a)),!(l.length-u<r.length-a)){e.next=19;break}return U(!1),e.abrupt("return",-1);case 19:if(!(a>0&&l[u]!==r[a])){e.next=27;break}return L("Mismatch! Hopping, Matched Prefix Length = LPS [ ".concat(a-1," ] = ").concat(t[a-1])),Se(a-1),a=t[a-1],e.next=25,O(.7*je);case 25:e.next=19;break;case 27:return r[a]===l[u]?(L("Matched! incrementing Maximum Prefix Length"),a++):L("Mismatch! "),a===r.length&&(o=u-r.length+1,L("Pattern Matched! Get Previous Max-Length Prefix and look for further occurrences..."),Se(a-1),a=t[a-1],s=[o,o+r.length-1],c.push(s),me([].concat(c))),e.next=31,O(je);case 31:u++,e.next=11;break;case 34:return U(!1),e.abrupt("return",-1);case 36:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ze=function(e){return H?e===h-1?"lightblue":e===h?"lightgreen":e===x?"yellow":void 0:"white"},Ge=function(e){return K&&ge===e?"red":H&&e===x?"yellow":void 0},Te=function(e){if(H)return e===h?"lightgreen":void 0},De=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&d&&n.length>=d.length){e.next=3;break}return alert("Input Not Valid!"),e.abrupt("return");case 3:return Q(!1),D(!0),e.next=7,Le();case 7:D(!1),Q(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(m.a,{className:"parentContainer",fluid:!0},r.a.createElement("h2",null,"Knuth-Morris-Pratt Algorithm"),r.a.createElement("hr",null),r.a.createElement(v,{inputStr:n,setInputStr:l,searchStr:d,setSearchStr:function(e){_([]),f(e)},animationDelay:je,setAnimationDelay:ye,running:T,onStart:De}),r.a.createElement("br",null),r.a.createElement("div",{className:"step1"},r.a.createElement("h4",null,"Step 1"),r.a.createElement("span",null,"Creation of the LPS / PI table"),r.a.createElement("div",null,r.a.createElement("br",null),H?r.a.createElement("b",null,N):r.a.createElement("b",null),r.a.createElement("br",null)),r.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"laling"},r.a.createElement("b",null,"Index")),Array.from(d).map((function(e,t){return r.a.createElement("td",{key:t,style:{borderWidth:H&&t===h?"2px":"",borderColor:Te(t)}},r.a.createElement("span",null,t))}))),r.a.createElement("tr",null,r.a.createElement("td",{className:"laling"},r.a.createElement("b",null,"Pattern [ Index ]")),Array.from(d).map((function(e,t){return r.a.createElement("td",{key:t,style:{backgroundColor:ze(t)}},r.a.createElement("span",null,e))}))),r.a.createElement("tr",null,r.a.createElement("td",{className:"laling"},r.a.createElement("b",null,"LPS [ Index ]")),Z.map((function(e,t){return r.a.createElement("td",{key:t,style:{borderWidth:H&&t===x||K&&t===ge?"2px":"",borderColor:Ge(t)}},e)})))))),r.a.createElement("br",null),r.a.createElement("div",{className:"step2",style:{display:K||F?"block":"none"}},r.a.createElement("h4",null,"Step 2"),r.a.createElement("span",null,"Search in the input string"),r.a.createElement("div",null,r.a.createElement("br",null),K?r.a.createElement("b",null,I):r.a.createElement("b",null),r.a.createElement("br",null),K||F?r.a.createElement("div",null,r.a.createElement("b",null,"Num of Occurrences: ",se.length),r.a.createElement(b.a,{bordered:!0,striped:!0,responsive:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:se.length},"Occurrences of Search String in Input String ",F?r.a.createElement("span",null,"\xa0 (Hover Now)"):r.a.createElement("span",null)))),r.a.createElement("tbody",null,r.a.createElement("tr",null,se.map((function(e,t){return r.a.createElement("td",{key:t,style:{backgroundColor:e===we?"#daebd8":""},onMouseEnter:function(){return function(e){Pe(e)}(e)},onMouseLeave:function(){Pe([])}},e.toString())})))))):r.a.createElement("b",null),r.a.createElement("br",null)),r.a.createElement(b.a,{bordered:!0,responsive:!0,striped:!0,size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,Array.from(n).map((function(e,t){return r.a.createElement("td",{key:t},r.a.createElement("span",null,t))}))),r.a.createElement("tr",null,Array.from(n).map((function(e,t){return r.a.createElement("td",{key:t,style:{backgroundColor:Ae(t)}},r.a.createElement("span",null,e))}))),r.a.createElement("tr",null,fe.map((function(e,t){return r.a.createElement("td",{key:t,style:{backgroundColor:K&&e.i===ne?"yellow":"white"}},r.a.createElement("span",null,e.val))})))))))}var x=function(){return r.a.createElement("div",null,r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.dd41ade9.chunk.js.map