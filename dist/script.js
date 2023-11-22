/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/


// const msg: string = "Hello";
// alert(msg);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function loadCssFile(filename) {
  var head = document.getElementsByTagName("head")[0];
  var oldFileRef = document.querySelector("head link");
  if (oldFileRef != null) {
    head.removeChild(oldFileRef);
  }
  var fileRef = document.createElement("link");
  fileRef.setAttribute("rel", "stylesheet");
  fileRef.setAttribute("type", "text/css");
  fileRef.setAttribute("href", filename);
  head.appendChild(fileRef);
}
var noStyle = "";
var firstStyle = "styles/style1/styles.css";
var secondStyle = "styles/style2/styles.css";
var styles = [noStyle, firstStyle, secondStyle];
function generateCssLinks(styles) {
  var header = document.getElementsByTagName("header")[0];
  console.log(header);
  var title = document.createElement("h1");
  var titleText = document.createTextNode("Możliwe style do wybrania:");
  title.appendChild(titleText);
  header === null || header === void 0 ? void 0 : header.appendChild(title);
  var numberOfStyle = 0;
  var _iterator = _createForOfIteratorHelper(styles),
    _step;
  try {
    var _loop = function _loop() {
      var style = _step.value;
      var button = document.createElement("button");
      if (numberOfStyle == 0) {
        button.textContent = "Bez stylu";
        numberOfStyle++;
      } else {
        button.textContent = "Styl " + numberOfStyle++;
      }
      button.addEventListener("click", function () {
        loadCssFile(style);
      });
      header === null || header === void 0 ? void 0 : header.appendChild(button);
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
generateCssLinks(styles);
/******/ })()
;