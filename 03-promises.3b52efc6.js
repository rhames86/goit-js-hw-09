!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=i);var r=i("ejkSG");function u(e,n){return new Promise((function(t,o){Math.random()>.3?setTimeout((function(){t({position:e,delay:n})}),n):setTimeout((function(){o({position:e,delay:n})}),n)}))}document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector(".form");n.addEventListener("submit",(function(t){t.preventDefault();for(var o=new FormData(n),i=Number(o.get("delay")),a=Number(o.get("step")),c=Number(o.get("amount")),d=i,f=1;f<=c;f++)u(f,d).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),d+=a}))}))}();
//# sourceMappingURL=03-promises.3b52efc6.js.map
