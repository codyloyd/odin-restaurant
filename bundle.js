/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domController__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__siteContent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer__ = __webpack_require__(4);






const contentDiv = document.querySelector("#content");

Object(__WEBPACK_IMPORTED_MODULE_0__domController__["a" /* render */])(
  [
    Object(__WEBPACK_IMPORTED_MODULE_1__header__["a" /* default */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* default */])([
      { title: "About Us", element: Object(__WEBPACK_IMPORTED_MODULE_3__siteContent__["a" /* about */])(), default: true },
      { title: "Menu", element: Object(__WEBPACK_IMPORTED_MODULE_3__siteContent__["c" /* menu */])() },
      { title: "Contact Us", element: Object(__WEBPACK_IMPORTED_MODULE_3__siteContent__["b" /* contact */])() }
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_4__footer__["a" /* default */])()
  ],
  contentDiv
);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const header = () => {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  title.textContent = "Gerry's Restaurant";
  header.appendChild(title);

  return header;
};

/* harmony default export */ __webpack_exports__["a"] = (header);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
const render = (elements, root) => {
  elements.forEach(element => {
    root.appendChild(element);
  });
};




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const tabs = tabs => {
  const tabElement = document.createElement("div");
  tabElement.id = "tab-element";

  const tabsContainer = document.createElement("div");
  tabsContainer.id = "tabs-container";

  const tabContent = document.createElement("div");
  tabContent.id = "tab-content";

  tabElement.appendChild(tabsContainer);
  tabElement.appendChild(tabContent);

  tabs.forEach(tab => createTab(tab, tabsContainer, tabContent));

  return tabElement;
};

const createTab = (tab, tabsContainer, tabContent) => {
  const newTab = document.createElement("button");
  newTab.textContent = tab.title;

  newTab.onclick = () => {
    tabContent.innerHTML = "";
    tabContent.appendChild(tab.element);
  };

  tabsContainer.appendChild(newTab);
  if (tab.default) {
    tabContent.innerHtml = "";
    tabContent.appendChild(tab.element);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (tabs);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const footer = footer => {
  const footerElement = document.createElement("div");
  footerElement.id = "footer";
  footerElement.textContent = "hello footer";
  return footerElement;
};

/* harmony default export */ __webpack_exports__["a"] = (footer);


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return contact; });
const about = () => {
  const about = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "About us";
  about.appendChild(title);

  return about;
};

const menu = () => {
  const menu = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "menu us";
  menu.appendChild(title);

  return menu;
};

const contact = () => {
  const contact = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "contact us";
  contact.appendChild(title);

  return contact;
};




/***/ })
/******/ ]);