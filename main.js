/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNav\": () => (/* binding */ createNav),\n/* harmony export */   \"createHero\": () => (/* binding */ createHero),\n/* harmony export */   \"createAbout\": () => (/* binding */ createAbout),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\nconst createNav = () => {\n  const navbarDiv = document.createElement(\"div\");\n  navbarDiv.id = \"navbar\";\n\n  // Navbar Logo Creation and append\n  const linkLogo = document.createElement(\"a\");\n  linkLogo.setAttribute(\"href\", \"\");\n  linkLogo.insertAdjacentHTML(\n    \"afterbegin\",\n    `<img src='mochill-logo.png' id='nav-logo'></a>`\n  );\n  navbarDiv.appendChild(linkLogo);\n\n  // Navbar nav links creation and append\n\n  const linksDiv = document.createElement(\"div\");\n  linksDiv.id = \"nav-links\";\n\n  navbarDiv.appendChild(linksDiv);\n\n  const navButtonArray = [\"Home\", \"Menu\", \"Contact\"];\n\n  navButtonArray.forEach((link) => {\n    let navButton = document.createElement(\"button\");\n    navButton.setAttribute(\"id\", `${link}-btn`);\n    navButton.textContent = link;\n    linksDiv.appendChild(navButton);\n  });\n\n  return navbarDiv;\n};\n\nconst createHero = () => {\n  const heroDiv = document.createElement(\"div\");\n  heroDiv.id = \"hero-section\";\n\n  const heroBg = document.createElement(\"img\");\n  const heroLogoBg = document.createElement(\"div\");\n  const heroLogo = document.createElement(\"img\");\n  const heroTitle = document.createElement(\"span\");\n\n  heroBg.id = \"hero-bg\";\n  heroBg.setAttribute(\"src\", \"hero-bg.png\");\n\n  heroLogoBg.id = \"hero-logo-bg\";\n\n  heroLogo.id = \"hero-logo\";\n  heroLogo.setAttribute(\"src\", \"mochill-logo.png\");\n\n  heroTitle.textContent = \"Delicious and Chewy\";\n  heroTitle.id = \"title-1\";\n\n  heroDiv.append(heroBg, heroLogoBg, heroLogo, heroTitle);\n\n  return heroDiv;\n};\n\nconst createAbout = () => {\n  const aboutDiv = document.createElement(\"div\");\n  const aboutTitle = document.createElement(\"h1\");\n  const aboutInfo = document.createElement(\"p\");\n\n  aboutDiv.id = \"about\";\n\n  aboutTitle.textContent = \"About Us\";\n  aboutInfo.textContent =\n    \"We are Mochill, Japanese-style mochi donut store based in San Francisco, CA. Mochi donuts are chewy treats made from rice flour and has more texture and lighter than traditional American donuts.\";\n\n  aboutDiv.append(aboutTitle, aboutInfo);\n\n  return aboutDiv;\n};\n\nconst createFooter = () => {\n  const footer = document.createElement(\"footer\");\n  footer.id = \"footer-info\";\n  const footerContent = [\n    \"Restaurant Page by Michael Tran\",\n    \"@ 2020 by Mochill Mochi Donut\",\n    \"The Odin Project\",\n  ];\n\n  footerContent.forEach((foot) => {\n    let footerInfo = document.createElement(\"span\");\n    footerInfo.textContent = foot;\n    footer.appendChild(footerInfo);\n  });\n\n  return footer;\n};\n\n\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\nconst contentDiv = document.querySelector(\"#content\");\n\ncontentDiv.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createNav)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHero)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createAbout)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n\nconst homeBtn = document.querySelector(\"#Home-btn\");\nconst menuBtn = document.querySelector(\"#Menu-btn\");\n// const contactBtn = document.querySelector(\"#Contact-btn\");\n\nhomeBtn.addEventListener(\"click\", () => {\n  const menuDiv = document.querySelector(\"#menu\");\n  const menuTitle = document.querySelector(\"#menu-title\");\n  const footer = document.querySelector(\"#footer-info\");\n  if (contentDiv.contains(menuDiv)) {\n    contentDiv.removeChild(menuDiv);\n    contentDiv.removeChild(menuTitle);\n    contentDiv.removeChild(footer);\n  }\n});\nhomeBtn.addEventListener(\"click\", () => {\n  contentDiv.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHero)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createAbout)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n});\n\nmenuBtn.addEventListener(\"click\", () => {\n  const heroDiv = document.querySelector(\"#hero-section\");\n  const aboutDiv = document.querySelector(\"#about\");\n  const footer = document.querySelector(\"#footer-info\");\n  if (contentDiv.contains(heroDiv)) {\n    contentDiv.removeChild(heroDiv);\n    contentDiv.removeChild(aboutDiv);\n    contentDiv.removeChild(footer);\n  }\n});\nmenuBtn.addEventListener(\"click\", () => {\n  contentDiv.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuTitle)(), (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n});\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu),\n/* harmony export */   \"createMenuTitle\": () => (/* binding */ createMenuTitle)\n/* harmony export */ });\nconst createMenu = () => {\n  const menuArray = [\n    {\n      name: \"Dark Choco\",\n      src: \"dark-choco.png\",\n    },\n    {\n      name: \"Peanut Butter Jelly\",\n      src: \"pb-jelly.png\",\n    },\n    {\n      name: \"Matcha\",\n      src: \"matcha.png\",\n    },\n    {\n      name: \"Black Sesame\",\n      src: \"black-sesame.png\",\n    },\n    {\n      name: \"White Choco Berry\",\n      src: \"white-choco-berry.png\",\n    },\n    { name: \"fruity-pebbles\", src: \"fruity-pebbles.png\" },\n  ];\n  const menuDiv = document.createElement(\"div\");\n\n  menuDiv.id = \"menu\";\n\n  menuArray.forEach((item) => {\n    let itemDiv = document.createElement(\"div\");\n    let itemTitle = document.createElement(\"h2\");\n    let itemImg = document.createElement(\"img\");\n\n    itemDiv.setAttribute(\"id\", `menu-item${menuArray.indexOf(item)}`);\n    itemTitle.textContent = item.name;\n    itemImg.setAttribute(\"src\", `${item.src}`);\n\n    itemDiv.append(itemTitle, itemImg);\n    menuDiv.append(itemDiv);\n  });\n\n  return menuDiv;\n};\n\nconst createMenuTitle = () => {\n  const menuTitle = document.createElement(\"h2\");\n\n  menuTitle.textContent = \"Mochi Donut Menu\";\n  menuTitle.setAttribute(\"id\", \"menu-title\");\n\n  return menuTitle;\n};\n\n\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;