(this["webpackJsonpRA_hooks-context_use-json-fetch"]=this["webpackJsonpRA_hooks-context_use-json-fetch"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),l=(n(11),n(12),n(1)),s=n(2),u=n.n(s),i=n(5),h=function(e){var t=Object(a.useState)(null),n=Object(l.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(null),s=Object(l.a)(o,2),h=s[0],m=s[1],f=Object(a.useState)(!1),d=Object(l.a)(f,2),p=d[0],v=d[1];return Object(a.useEffect)((function(){(function(){var t=Object(i.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,n.ok?(c(a.status),m(null)):m(a.status);case 9:return t.prev=9,v(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[1,,9,12]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),[r,p,h]},m=function(e){var t=h(e.url),n=Object(l.a)(t,3),a=n[0],c=n[1],o=n[2];return console.log(e.url,a,c,o),r.a.createElement("div",null,r.a.createElement("p",null,"URL: ",e.url),r.a.createElement("p",null,"DATA: ",a),r.a.createElement("p",null,"ERROR: ",o),r.a.createElement("p",null,"LOADING: ",c?"true":"false"))};var f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"background-element"}," ")," ",r.a.createElement("div",{className:"highlight-window"},r.a.createElement("div",{className:"highlight-overlay"}," ")," ")," ",r.a.createElement("div",{className:"window"},r.a.createElement(m,{url:"http://localhost:7070/data"}),r.a.createElement(m,{url:"http://localhost:7070/error"}),r.a.createElement(m,{url:"http://localhost:7070/loading"}))," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.b40026c0.chunk.js.map