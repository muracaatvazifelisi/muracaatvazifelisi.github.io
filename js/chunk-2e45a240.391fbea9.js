(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e45a240"],{"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),a=r("17c2"),o=r("9112");for(var c in i){var s=n[c],l=s&&s.prototype;if(l&&l.forEach!==a)try{o(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),a=r("ae40"),o=i("forEach"),c=a("forEach");t.exports=o&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},5396:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._m(0),r("div",{staticClass:"table-wrapper"},[r("table",{staticClass:"table-users"},[t._m(1),t._l(t.NotlarDizi,(function(e){return r("tr",{key:e.key},[r("td",[t._v(t._s(e.not_icerik))]),r("td",[t._v(t._s(e.not_saati))]),r("td",[r("router-link",{staticClass:"btn btn-edit",attrs:{to:{name:"notedit",params:{id:e.key}}}},[r("i",{staticClass:"material-icons"},[t._v("create")])]),r("button",{staticClass:"btn btn-delete",on:{click:function(r){return r.preventDefault(),t.deleteNot(e.key)}}},[r("i",{staticClass:"material-icons"},[t._v("remove_circle_outline")])])],1)])}))],2),r("router-link",{attrs:{to:"/notadd"}},[r("button",{staticClass:"btn btn-add"},[t._v("Not Ekle")])])],1)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("h3",[t._v("Notlar")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",{staticStyle:{width:"50%"}},[t._v("Notlar")]),r("th",{staticStyle:{width:"30%"}},[t._v("Not Saati")]),r("th",{staticStyle:{width:"20%"}},[t._v("İşlem")])])}],a=(r("4160"),r("159b"),r("88b8")),o={data:function(){return{NotlarDizi:[]}},created:function(){var t=this;a["a"].collection("notlar").onSnapshot((function(e){t.NotlarDizi=[],e.forEach((function(e){t.NotlarDizi.push({key:e.id,not_icerik:e.data().not_icerik,not_saati:e.data().not_saati})}))}))},methods:{deleteNot:function(t){window.confirm("Silmek İstiyor musunuz?")&&a["a"].collection("notlar").doc(t).delete().then((function(){console.log("Document deleted!")})).catch((function(t){console.error(t)}))}}},c=o,s=r("2877"),l=Object(s["a"])(c,n,i,!1,null,null,null);e["default"]=l.exports},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),a=r("b622"),o=a("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),a=r("5135"),o=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var r=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:s,f=a(e,1)?e[1]:void 0;return c[t]=!!r&&!i((function(){if(l&&!n)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,u,f)}))}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),a=r("7b0b"),o=r("50c4"),c=r("65f0"),s=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(h,v,S,b){for(var p,_,m=a(h),L=i(m),y=n(v,S,3),k=o(L.length),C=0,E=b||c,w=e?E(h,k):r?E(h,0):void 0;k>C;C++)if((d||C in L)&&(p=L[C],_=y(p,C,m),t))if(e)w[C]=_;else if(_)switch(t){case 3:return!0;case 5:return p;case 6:return C;case 2:s.call(w,p)}else if(u)return!1;return f?-1:l||u?u:w}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-2e45a240.391fbea9.js.map