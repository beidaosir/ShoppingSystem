(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail~pages-product-product"],{"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}r("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}},r("d3b7")},"32cd":function(t,e,r){"use strict";r.r(e);var n=r("fec7"),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"80d2":function(t,e,r){var n=r("8226");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("67d60054",n,!0,{sourceMap:!1,shadowMode:!1})},8226:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.mask[data-v-0bf59f9e]{position:fixed;left:0;top:0;right:0;bottom:0;display:flex;justify-content:center;align-items:flex-end;z-index:998;transition:.3s}.mask .bottom[data-v-0bf59f9e]{position:absolute;left:0;bottom:0;display:flex;justify-content:center;align-items:center;width:100%;height:%?90?%;background:#fff;z-index:9;font-size:%?30?%;color:#303133}.mask-content[data-v-0bf59f9e]{width:100%;height:%?580?%;transition:.3s;background:#fff}.mask-content.has-bottom[data-v-0bf59f9e]{padding-bottom:%?90?%}.mask-content .view-content[data-v-0bf59f9e]{height:100%}.share-header[data-v-0bf59f9e]{height:%?110?%;font-size:%?30?%;color:font-color-dark;display:flex;align-items:center;justify-content:center;padding-top:%?10?%}.share-header[data-v-0bf59f9e]:before, .share-header[data-v-0bf59f9e]:after{content:"";width:%?240?%;heighg:0;border-top:1px solid #e4e7ed;-webkit-transform:scaleY(.5);transform:scaleY(.5);margin-right:%?30?%}.share-header[data-v-0bf59f9e]:after{margin-left:%?30?%;margin-right:0}.share-list[data-v-0bf59f9e]{display:flex;flex-wrap:wrap}.share-item[data-v-0bf59f9e]{min-width:33.33%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:%?180?%}.share-item uni-image[data-v-0bf59f9e]{width:%?80?%;height:%?80?%;margin-bottom:%?16?%}.share-item uni-text[data-v-0bf59f9e]{font-size:%?28?%;color:#606266}',""]),t.exports=e},b636:function(t,e,r){var n=r("e065");n("asyncIterator")},c7eb:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(C){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new O(n||[]);return i(a,"_invoke",{value:_(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var d={};function v(){}function p(){}function g(){}var y={};f(y,c,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(P([])));b&&b!==r&&o.call(b,c)&&(y=b);var w=g.prototype=v.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var r;i(this,"_invoke",{value:function(i,a){function c(){return new e((function(r,c){(function r(i,a,c,s){var u=h(t[i],t,a);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==(0,n.default)(l)&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)})(i,a,r,c)}))}return r=r?r.then(c,c):c()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=g,i(w,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:p,configurable:!0}),p.displayName=f(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(k.prototype),f(k.prototype,s,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),f(w,u,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t},r("7a82"),r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("d9e2"),r("d401"),r("14d9"),r("159b"),r("131a"),r("26e9"),r("fb6a");var n=function(t){return t&&t.__esModule?t:{default:t}}(r("53ca"))},ec89:function(t,e,r){"use strict";r.r(e);var n=r("ecaf"),o=r("32cd");for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("f1a6");var a=r("f0c5"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"0bf59f9e",null,!1,n["a"],void 0);e["default"]=c.exports},ecaf:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("v-uni-view",{staticClass:"mask",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"mask-content",style:[{height:t.config.height,transform:t.transform}],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[r("v-uni-scroll-view",{staticClass:"view-content",attrs:{"scroll-y":!0}},[r("v-uni-view",{staticClass:"share-header"},[t._v("分享到")]),r("v-uni-view",{staticClass:"share-list"},t._l(t.shareList,(function(e,n){return r("v-uni-view",{key:n,staticClass:"share-item",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.shareToFriend(e.text)}}},[r("v-uni-image",{attrs:{src:e.icon,mode:""}}),r("v-uni-text",[t._v(t._s(e.text))])],1)})),1)],1),r("v-uni-view",{staticClass:"bottom b-t",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)}}},[t._v("取消")])],1)],1):t._e()},o=[]},f1a6:function(t,e,r){"use strict";var n=r("80d2"),o=r.n(n);o.a},fec7:function(t,e,r){"use strict";r("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("a9e3");var n={data:function(){return{transform:"translateY(50vh)",timer:0,backgroundColor:"rgba(0,0,0,0)",show:!1,config:{}}},props:{contentHeight:{type:Number,default:0},hasTabbar:{type:Boolean,default:!1},shareList:{type:Array,default:function(){return[]}}},created:function(){var t=uni.upx2px(this.contentHeight)+"px";this.config={height:t,transform:"translateY(".concat(t,")"),backgroundColor:"rgba(0,0,0,.4)"},this.transform=this.config.transform},methods:{toggleMask:function(){var t=this;if(1!=this.timer){if(this.timer=1,setTimeout((function(){t.timer=0}),500),this.show)return this.transform=this.config.transform,this.backgroundColor="rgba(0,0,0,0)",void setTimeout((function(){t.show=!1,t.hasTabbar&&uni.showTabBar()}),200);this.show=!0,this.hasTabbar?uni.hideTabBar({success:function(){setTimeout((function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"}),10)}}):setTimeout((function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"}),10)}},stopPrevent:function(){},shareToFriend:function(t){this.$api.msg("分享给".concat(t)),this.toggleMask()}}};e.default=n}}]);