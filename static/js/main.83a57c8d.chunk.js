(this["webpackJsonpexcalidraw-claymate"]=this["webpackJsonpexcalidraw-claymate"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(23),c=n.n(r),o=(n(47),n(7)),l=n.n(o),u=(n(71),n(5)),d=n(1),s=n.n(d),m=n(4),f=n(2),g=n(39),p=(n(72),n(8)),b=n(40),v=n.n(b),h=function(e){return new Promise((function(t){var n=new v.a;e.forEach((function(t,a){var i=a+1===e.length;n.addFrame(t.imageData,{delay:i?2e3:500})})),n.on("finished",(function(e){Object(p.a)(e,{fileName:"excalidraw-claymate.gif"}).then(t)})),n.render()}))},y=n(25),w=function(e){return e.filter((function(e){return!e.isDeleted}))},x=function(){var e=Object(m.a)(s.a.mark((function e(t,n){var a,i,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a='<!DOCTYPE html>\n    <html lang="en">\n      <style>\n        svg { width: 100%; height: 100%; }\n        body { margin: 0px; font-size: 24px; }\n        button { background: transparent; border: none; cursor: pointer; padding: 3px; margin: 0px 10px; font-size: inherit;}\n        #container { display: flex; flex-direction: column; height: 100%; }\n        #navigation { display: flex; justify-content: center; align-items: center; padding: 5px; border-top: 1px solid lightgray; background: white; }        \n        #rightbuttons { position: absolute; right: 10px; display: flex;  }\n        #slides { height: calc(100vh - 50px); }                \n      </style>\n      <script>\n        let index = 0;\n        let totalScenes = '.concat(t.length,"\n        function updateTitle() {\n          document.getElementById('title').innerText = '' + (index + 1) + ' of ' + totalScenes;\n        }\n        function moveLeft() {\n          if (index > 0) {\n            document.getElementById('scene' + index).style.display = 'none';\n            index -= 1;\n            document.getElementById('scene' + index).style.display = 'block';\n            updateTitle();\n            document.getElementById('scene' + index).setCurrentTime(0);\n          }\n        }\n        function moveRight() {\n          if (index < totalScenes - 1) {\n            document.getElementById('scene' + index).style.display = 'none';\n            index += 1;\n            document.getElementById('scene' + index).style.display = 'block';\n            updateTitle();\n            document.getElementById('scene' + index).setCurrentTime(0);\n          }\n        }\n        function closeNavigation() {\n          document.getElementById('navigation').style.display = 'none';\n          document.getElementById('slides').style.height = '100vh'\n        }\n        function toggleMaximise() {\n          if (document.fullscreenElement === document.body) {\n            document.exitFullscreen();\n          } else {\n            document.body.requestFullscreen();\n          }\n        }\n        document.addEventListener('DOMContentLoaded', () => {\n          document.getElementById('scene' + index).style.display = 'block';\n          document.getElementById('scene' + index).setCurrentTime(0);\n        });\n        document.addEventListener('keydown', (event) => {\n          if (event.key === 'ArrowRight') {\n            moveRight();\n          }\n          if (event.key === 'ArrowLeft') {\n            moveLeft();\n          }\n          if (event.key.toLowerCase() === 'f') {\n            toggleMaximise();            \n          }\n        });\n      <\/script>\n      <body>\n      <div id=\"container\">\n      <div id=\"slides\">\n  "),i=0;case 2:if(!(i<t.length)){e.next=14;break}return r=t[i],e.next=6,Object(o.exportToSvg)(r.drawing);case 6:c=e.sent,n.animate&&Object(y.a)(c,w(r.drawing.elements),n.animateOptions),c.id="scene".concat(i),c.style.display="none",a+=c.outerHTML;case 11:++i,e.next=2;break;case 14:return a+='</div>\n            <div id="navigation">\n              <button class="navbutton" type="button" onClick="moveLeft()" title="Previous slide">&#9664;</button>\n              <div id="title">1 of '.concat(t.length,'</div>\n              <button class="navbutton" type="button" onClick="moveRight()" title="Next slide">&#9654;</button>          \n              <div id="rightbuttons">\n                <button type="button" onClick="toggleMaximise()" title="Toggle full-screen">&#x26F6;</button>\n                <button type="button" onClick="closeNavigation()" title="Close this panel">&#x2716;</button>\n              <div>\n            </div>\n        </div></body></html>'),e.next=17,Object(p.a)(new Blob([a],{type:"text/html"}),{fileName:"excalidraw-claymate.html"});case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(s.a.mark((function e(t,n,a){var i,r,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.exportToSvg)(t.drawing);case 2:i=e.sent,n.animate&&Object(y.a)(i,w(t.drawing.elements),n.animateOptions),r=i.outerHTML,a?(c=document.getElementById(a))&&(c.innerHTML=r):(l=window.open("","_blank"))&&(l.document.body.innerHTML=r);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),O=n(3),j=(n(73),function(e,t){var n=e.match(new RegExp("".concat(t,":(-?\\d+)")));return null===n?void 0:Number(n[1])||0}),C=function(e,t,n,a){var i=Object(O.a)({},e.appState.selectedElementIds);return{elements:e.elements.map((function(e){var r,c=e.id;return t.includes(c)?(r=c.match(new RegExp("".concat(n,":(-?\\d+)")))?c.replace(new RegExp("".concat(n,":(-?\\d+)")),"".concat(n,":").concat(a)):c+"-".concat(n,":").concat(a),c===r?e:(i[r]=i[c],delete i[c],Object(O.a)(Object(O.a)({},e),{},{id:r}))):e})),appState:Object(O.a)(Object(O.a)({},e.appState),{},{selectedElementIds:i})}},k=function(e){var t,n,a=e.animateEnabled,r=e.setAnimateEnabled,c=e.scene,o=e.updateDrawing,l=e.animateOptions,u=e.setAnimateOptions,d=e.previewCurrentScene,s=null!==(t=null===c||void 0===c?void 0:c.drawing.elements)&&void 0!==t?t:[],m=c?Object.keys(null!==(n=c.drawing.appState.selectedElementIds)&&void 0!==n?n:{}).filter((function(e){return c.drawing.appState.selectedElementIds[e]&&s.some((function(t){return t.id===e}))})):[],f=new Set;m.forEach((function(e){f.add(j(e,"animateOrder"))}));var g=!a||!f.size,p=new Set;m.forEach((function(e){p.add(j(e,"animateDuration"))}));var b=!a||!p.size;return i.a.createElement("div",{className:"AnimateConfig"},i.a.createElement("div",null,i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",checked:a,onChange:function(){return r((function(e){return!e}))}}),"Enable animate")," ",i.a.createElement("button",{disabled:!a,onClick:d},"Preview")),i.a.createElement("div",{style:{opacity:g?.3:1}},"Animate order:"," ",f.size>1?i.a.createElement(i.a.Fragment,null,"(mixed)"):i.a.createElement("input",{disabled:g,value:1===f.size&&f.values().next().value||0,onChange:function(e){var t=Math.floor(Number(e.target.value));c&&Number.isFinite(t)&&o(C(c.drawing,m,"animateOrder",t))},type:"number",style:{width:40}})),i.a.createElement("div",{style:{opacity:b?.3:1}},"Animate duration (ms):"," ",p.size>1?i.a.createElement(i.a.Fragment,null,"(mixed)"):i.a.createElement("input",{disabled:b,value:1===p.size&&p.values().next().value||"",onChange:function(e){var t=Math.floor(Number(e.target.value));c&&Number.isFinite(t)&&o(C(c.drawing,m,"animateDuration",t))},placeholder:"Default",style:{width:50}})),i.a.createElement("div",{style:{opacity:a?1:.3}},"Animate pointer:"," ",i.a.createElement("input",{disabled:!a,value:l.pointerImg||"",onChange:function(e){u((function(t){return Object(O.a)(Object(O.a)({},t),{},{pointerImg:e.target.value})}))},placeholder:"URL...",style:{width:50}})," ",i.a.createElement("label",{className:"AnimateConfig-button-like ".concat(a?"AnimateConfig-button-like-enabled":"AnimateConfig-button-like-disabled")},i.a.createElement("input",{disabled:!a,type:"file",accept:"image/*",onChange:function(e){var t=e.target.files&&e.target.files[0];if(t){var n=new FileReader;n.onload=function(){if("string"===typeof n.result){var e=n.result;u((function(t){return Object(O.a)(Object(O.a)({},t),{},{pointerImg:e})}))}},n.readAsDataURL(t)}},style:{width:0}}),"File")),i.a.createElement("div",{style:{opacity:a?1:.3}},"(Pointer width:"," ",i.a.createElement("input",{disabled:!a,value:l.pointerWidth||"",onChange:function(e){u((function(t){return Object(O.a)(Object(O.a)({},t),{},{pointerWidth:e.target.value})}))},placeholder:"Num...",style:{width:50}}),")"))},S=Object(a.memo)((function(e){var t=e.scene,n=Object(a.useRef)(null);return Object(a.useEffect)((function(){if(n.current){var e=n.current.getContext("2d");e&&e.putImageData(t.imageData,0,0)}}),[t]),i.a.createElement("canvas",{ref:n,width:t.width,height:t.height})})),I=function(e){var t=e.scenes,n=e.currentIndex,r=e.updateScenes,c=e.moveToScene,o=e.addScene,l=e.updateDrawing,d=Object(a.useState)(!1),p=Object(f.a)(d,2),b=p[0],v=p[1],y=Object(a.useState)(!1),w=Object(f.a)(y,2),O=w[0],j=w[1],C=Object(a.useState)({}),I=Object(f.a)(C,2),N=I[0],T=I[1],D=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,{animate:O,animateOptions:N});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(s.a.mark((function e(){var a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n){e.next=7;break}return a="",(i=document.getElementById("previewOuter"))&&(a="previewInner"),e.next=6,E(t[n],{animate:O,animateOptions:N},a);case 6:i&&(i.style.display="block");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){0===t.length&&o()}),[t,o]),i.a.createElement("div",{className:"Claymate"},i.a.createElement("div",{className:"Claymate-scenes"},t.map((function(e,a){var o="MissingId";return Object(g.isEmpty)(t[a].drawing.elements)||(o=t[a].drawing.elements[0].id),i.a.createElement("div",{key:e.id,className:"Claymate-scene ".concat(a===n?"Claymate-current-scene":""),onClick:function(){return c(a)},"data-testid":o},i.a.createElement(S,{scene:e}),i.a.createElement("button",{type:"button",className:"Claymate-delete","aria-label":"Delete",disabled:t.length<=1,onClick:function(a){a.stopPropagation(),function(e){var a=t.findIndex((function(t){return t.id===e}));if(a>=0){var i=t.length-1;if(i>0){var c;if(void 0!==n){var o=a===n;if(n>a||o){var l=n;o&&(n===i?l=n-1:0===n&&(l=1)),c={index:n>0?n-1:n,drawing:t[l].drawing}}}r((function(t){return t.filter((function(t){return t.id!==e}))}),c)}}}(e.id)}},"\u2716"),i.a.createElement("button",{type:"button",className:"Claymate-left","aria-label":"Move Left",disabled:0===a,onClick:function(n){n.stopPropagation(),function(e){var n=t.findIndex((function(t){return t.id===e}));r((function(e){var t=Object(u.a)(e);return t[n-1]=e[n],t[n]=e[n-1],t}),{index:n-1,drawing:t[n].drawing})}(e.id)}},"\u2b05"),i.a.createElement("button",{type:"button",className:"Claymate-right","aria-label":"Move Right",disabled:a===t.length-1,onClick:function(n){n.stopPropagation(),function(e){var n=t.findIndex((function(t){return t.id===e}));r((function(e){var t=Object(u.a)(e);return t[n+1]=e[n],t[n]=e[n+1],t}),{index:n+1,drawing:t[n].drawing})}(e.id)}},"\u27a1"))}))),i.a.createElement("div",{className:"Claymate-configs"},b&&i.a.createElement(k,{animateEnabled:O,setAnimateEnabled:j,scene:void 0===n?void 0:t[n],updateDrawing:l,animateOptions:N,setAnimateOptions:T,previewCurrentScene:A})),i.a.createElement("div",{className:"Claymate-buttons"},i.a.createElement("button",{type:"button",onClick:o},"Add scene"),i.a.createElement("button",{type:"button",onClick:D,disabled:0===t.length},"Export GIF"),i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:function(){return v((function(e){return!e}))}},b?i.a.createElement(i.a.Fragment,null,"\u25b8"):i.a.createElement(i.a.Fragment,null,"\u25c2")),i.a.createElement("button",{type:"button",onClick:function(){return M()},disabled:0===t.length},"Export HTML")),i.a.createElement("button",{type:"button",onClick:function(){r((function(e){return Object(u.a)(e).reverse()}),void 0!==n?{index:t.length-1-n,drawing:t[n].drawing}:void 0)},disabled:t.length<=1},"Reverse order")))},N=n(24),T=n.n(N),D=n(41),M=function(e,t){var n=Object(o.exportToCanvas)({elements:e.elements}),a=t?t.width:n.width,i=t?t.height:n.height;if(a&&i){var r=n.getContext("2d");return r?{id:Object(D.a)(),width:a,height:i,imageData:r.getImageData(0,0,a,i),drawing:e}:void 0}},A=function(){try{var e,t=JSON.parse(localStorage.getItem("claymate-scenes")||"");if(t&&t.length>0)return t.map((function(t){t.appState.collaborators=new Map;var n=M(t,e?{width:e.width,height:e.height}:void 0);return void 0===e&&(e=n),n}))}catch(i){try{var n=function(){try{var e=JSON.parse(localStorage.getItem("excalidraw-elements")||"");return e.appState.collaborators=new Map,e}catch(t){return null}}();if(n){var a=M(n);if(a)return[a]}}catch(r){}}return null},B=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(0),c=Object(f.a)(r,2),o=c[0],l=c[1],d=Object(a.useState)(0),s=Object(f.a)(d,2),m=s[0],g=s[1],p=Object(a.useState)([]),b=Object(f.a)(p,2),v=b[0],h=b[1],y=Object(a.useState)(),w=Object(f.a)(y,2),x=w[0],E=w[1];Object(a.useEffect)((function(){if(!n){var e=A();e&&e.length>0&&(h(e),g(0),E(e[0].drawing))}}),[n,i]),Object(a.useEffect)((function(){!function(e){var t=JSON.stringify(e.map((function(e){return e.drawing})));localStorage.setItem("claymate-scenes",t)}(v)}),[v]);var j,C,k=Object(a.useCallback)((function(e){l((function(e){return e+1})),E(e)}),[]),S=Object(a.useCallback)((function(e){k(v[e].drawing),g(e)}),[k,g,v]),I=Object(a.useCallback)((function(e,t){h(e),t&&(k(t.drawing),g(t.index))}),[g,k,h]),N=void 0!==m&&m<v.length?Object(O.a)(Object(O.a)({},v[m]),{},{drawing:x}):void 0;null!=N&&1!==v.length&&(j=N.width,C=N.height),Object(a.useEffect)((function(){if(null!=m&&x){var e=M(x,void 0===j||void 0===C?void 0:{width:j,height:C});e&&I((function(t){var n=Object(u.a)(t);return n[m]=e,n}),void 0)}}),[x,m,v.length,I,j,C]);var D=Object(a.useCallback)((function(){if(x){var e=M(x,v[0]&&{width:v[0].width,height:v[0].height});e&&I((function(t){return[].concat(Object(u.a)(t),[e])}),{index:v.length,drawing:x})}}),[I,v,x]);return{initialised:n,moveToScene:S,addScene:D,onChange:function(e,t){if(null==x||!T()(e,x.elements)||!T()(t,x.appState)){var n={elements:e.map((function(e){return Object(O.a)({},e)})),appState:Object(O.a)({},t)};E(n)}},drawingVersion:o,currentIndex:m,scenes:v,updateScenes:I,initialData:x}},L=function(){var e=Object(a.useRef)(null),t=B(),n=t.moveToScene,r=t.addScene,c=t.onChange,o=t.drawingVersion,u=t.currentIndex,d=t.initialData,s=t.scenes,m=t.updateScenes;return i.a.createElement("div",{className:"ClaymateApp"},i.a.createElement(l.a,{ref:e,key:o,initialData:d,onChange:c}),i.a.createElement(I,{scenes:s,currentIndex:u,updateScenes:m,moveToScene:n,addScene:r,updateDrawing:function(t){var n;null===(n=e.current)||void 0===n||n.updateScene(t)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,n){e.exports=n(141)},47:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){}},[[42,1,2]]]);
//# sourceMappingURL=main.83a57c8d.chunk.js.map