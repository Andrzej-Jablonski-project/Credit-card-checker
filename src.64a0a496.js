parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oxN0":[function(require,module,exports) {
function r(r){return o(r)||e(r)||n(r)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,t){if(r){if("string"==typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(r,t):void 0}}function e(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function o(r){if(Array.isArray(r))return u(r)}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function i(t){return r(t.toString()).map(function(r){return Number(r)})}function a(r){return c(r.filter(function(r,t){return t%2==0}))}function f(r){return c(r.filter(function(r,t){return t%2==1}).map(function(r){return 2*r>=10?Math.floor(2*r/10)+2*r%10:2*r}))}function c(r){return r.reduce(function(r,t){return r+t},0)}module.exports.isCardNumberValid=function(r){var t=i(r).reverse();return(a(t)+f(t))%10==0};
},{}],"w0ob":[function(require,module,exports) {
module.exports.cards={mastercard:{name:"Mastercard",numbersLength:[16],prefix:["22","51","52","53","54","55"]},visa:{name:"Visa",numbersLength:[13,16],prefix:["4"]},ae:{name:"American Express",numbersLength:[15],prefix:["34","37"]}};
},{}],"H1L3":[function(require,module,exports) {
function r(r){return o(r)||e(r)||n(r)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,t){if(r){if("string"==typeof r)return a(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(r,t):void 0}}function e(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function o(r){if(Array.isArray(r))return a(r)}function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}for(var i=require("./cardsData"),u=i.cards,c=[],f=0,l=Object.values(u);f<l.length;f++){var s=l[f];s.numbersLength.forEach(function(r){return c.push(r)})}var d=r(new Set(c));function v(r){var t=!1;return d.forEach(function(n){r.toString().length===n&&(t=!0)}),t}module.exports.getCardProvider=function(r){for(var t="Cannot recognize card provider",n=0,e=Object.values(u);n<e.length;n++){var o=e[n];if(a(o.prefix))return o.name}function a(t){var n=!1;return t.forEach(function(t){r.toString().startsWith(t)&&(n=!0)}),n}return v(r)?t:"Cannot recognize card provider"};
},{"./cardsData":"w0ob"}],"DzcQ":[function(require,module,exports) {
function r(r){return o(r)||n(r)||t(r)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(r,e){if(r){if("string"==typeof r)return i(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(r,e):void 0}}function n(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function o(r){if(Array.isArray(r))return i(r)}function i(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var a=require("./isCardNumberValid"),u=a.isCardNumberValid,l=require("./getCardProvider"),f=l.getCardProvider;module.exports.checkCardNumber=function(e){if("string"==typeof e)e=parseInt(r(e).filter(function(r){return" "!==r&"-"!==r}).join(""));else if("number"!=typeof e)throw new Error("The data type is invalid");return u(e)?f(e):"Incorrect number"};
},{"./isCardNumberValid":"oxN0","./getCardProvider":"H1L3"}],"Focm":[function(require,module,exports) {
var e=require("./checkCardNumber"),c=e.checkCardNumber;document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".card-checker__input--js"),t=document.querySelector(".card-checker__info-bar__content--js");document.querySelector(".card-checker__button--js").addEventListener("click",function(n){n.preventDefault(),t.textContent="Your card is: ".concat(c(e.value))}),e.addEventListener("click",function(){e.value=""})});
},{"./checkCardNumber":"DzcQ"}]},{},["Focm"], null)
//# sourceMappingURL=/src.64a0a496.js.map