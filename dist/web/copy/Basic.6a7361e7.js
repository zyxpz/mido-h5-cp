!function(c){function e(e){for(var t,n,r=e[0],o=e[1],a=0,i=[];a<r.length;a++)n=r[a],u[n]&&i.push(u[n][0]),u[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(c[t]=o[t]);for(l&&l(e);i.length;)i.shift()()}var n={},d={7:0},u={7:0};function f(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(s){var e=[];d[s]?e.push(d[s]):0!==d[s]&&{0:1}[s]&&e.push(d[s]=new Promise(function(e,r){for(var t=({}[s]||s)+".6a7361e7.css",o=f.p+t,n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=(u=n[a]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(i===t||i===o))return e()}var c=document.getElementsByTagName("style");for(a=0;a<c.length;a++){var u;if((i=(u=c[a]).getAttribute("data-href"))===t||i===o)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var t=e&&e.target&&e.target.src||o,n=new Error("Loading CSS chunk "+s+" failed.\n("+t+")");n.request=t,delete d[s],l.parentNode.removeChild(l),r(n)},l.href=o,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){d[s]=0}));var n=u[s];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise(function(e,t){n=u[s]=[e,t]});e.push(n[2]=t);var r,o=document.getElementsByTagName("head")[0],a=document.createElement("script");a.charset="utf-8",a.timeout=120,f.nc&&a.setAttribute("nonce",f.nc),a.src=function(e){return f.p+""+({}[e]||e)+".6a7361e7.js"}(s),r=function(e){a.onerror=a.onload=null,clearTimeout(i);var t=u[s];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+s+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,t[1](o)}u[s]=void 0}};var i=setTimeout(function(){r({type:"timeout",target:a})},12e4);a.onerror=a.onload=r,o.appendChild(a)}return Promise.all(e)},f.m=c,f.c=n,f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(t,e){if(1&e&&(t=f(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(f.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)f.d(n,r,function(e){return t[e]}.bind(null,r));return n},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="/mido-h5-cp/dist/",f.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var l=r;f(f.s="./src/web/copy/examples/index.js")}({"./src/web/copy/examples/index.js":function(e,t,n){"use strict";n("./src/web/copy/examples/index.less"),Promise.all([n.e(1),n.e(0),n.e(2)]).then(n.t.bind(null,"./src/main.js",7)).then(function(e){var t=e.copy;document.querySelector(".J-btn").addEventListener("click",function(){t({copyWrap:"J-content",dataType:"value"})}),document.querySelector(".J-inner-btn").addEventListener("click",function(){t({copyWrap:"J-content-innertext",dataType:"innerText"})})})},"./src/web/copy/examples/index.less":function(e,t,n){}});