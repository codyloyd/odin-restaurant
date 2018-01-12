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
  title.textContent = "Cody's JStaurant";
  header.appendChild(title);

  header.style.textAlign = "center";

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

  Object.assign(tabsContainer.style, {
    display: "flex",
    justifyContent: "center"
  });

  const tabContent = document.createElement("div");
  tabContent.id = "tab-content";

  Object.assign(tabContent.style, {
    border: "1px solid #eee",
    padding: "16px",
    maxWidth: "650px",
    margin: "0 auto"
  });

  tabElement.appendChild(tabsContainer);
  tabElement.appendChild(tabContent);

  tabs.forEach(tab => createTab(tab, tabsContainer, tabContent));

  return tabElement;
};

const createTab = (tab, tabsContainer, tabContent) => {
  const newTab = document.createElement("button");
  newTab.textContent = tab.title;

  Object.assign(newTab.style, {
    border: "none",
    fontSize: "16px",
    padding: "8px 16px",
    background: "#eee",
    margin: "-1px 4px"
  });

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
  footerElement.textContent = "this is a footer.  stuff goes here";

  Object.assign(footerElement.style, {
    position: "absolute",
    bottom: "0px",
    fontSize: "22px",
    borderTop: "1px solid #ccc",
    width: "100%",
    padding: "22px 0",
    textAlign: "center"
  });

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
  const content = document.createElement("p");
  title.textContent = "About us";
  content.textContent =
    "This site was created using only vanilla javascript.  It is a bit experimental, and the point of it is more the code that generates it than the actual appearance or content.  So... I know it's ugly, but I don't really care.";
  content.style.fontSize = "22px";
  content.style.lineHeight = "1.5";
  about.appendChild(title);
  about.appendChild(content);

  return about;
};

const menu = () => {
  const menu = document.createElement("div");
  const title = document.createElement("h1");
  const content = document.createElement("div");
  title.textContent = "menu";

  content.innerHTML = `
  <ul>
    <li>menu item 1</li>
    <li>menu item 2</li>
    <li>menu item 3</li>
    <li>menu item 4</li>
  </ul>
  `;
  content.style.fontSize = "22px";
  content.style.lineHeight = "1.5";
  menu.appendChild(title);
  menu.appendChild(content);

  return menu;
};

const contact = () => {
  const contact = document.createElement("div");
  const title = document.createElement("h1");
  const content = document.createElement("div");
  title.textContent = "contact us";
  content.innerHTML = `
    <a href="https://github.com/codyloyd">this is a link to my github profile</a>
  `;
  content.style.fontSize = "22px";
  contact.appendChild(title);
  contact.appendChild(content);

  return contact;
};




/***/ })
/******/ ]);