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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContactTitle\": () => (/* binding */ createContactTitle),\n/* harmony export */   \"createContactInfo\": () => (/* binding */ createContactInfo)\n/* harmony export */ });\nconst createContactTitle = () => {\n  const contactTitle = document.createElement(\"h2\");\n\n  contactTitle.textContent = \"Contact Us\";\n  contactTitle.setAttribute(\"id\", \"contact-title\");\n\n  return contactTitle;\n};\n\nconst createContactInfo = () => {\n  const locations = [\n    {\n      location: \"San Jose\",\n      hours: \"Everyday 11 A.M. - 7:00 P.M.\",\n      map: {\n        src: \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.1718680938584!2d-121.97987984923492!3d37.31475637974685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb588e9f081b%3A0xdf0364e1b3d79363!2sMochill%20Mochidonut!5e0!3m2!1sen!2sus!4v1623342938337!5m2!1sen!2sus\",\n        width: \"300\",\n        height: \"300\",\n        style: \"border:0\",\n        allowfullscreen: \"\",\n        loading: \"lazy\",\n      },\n    },\n    {\n      location: \"San Francisco\",\n      hours: \"Everyday 11 A.M. - 7:00 P.M.\",\n      map: {\n        src: \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2104558401034!2d-122.43268974922076!3d37.78510737965816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581442b873761%3A0x5f06eb382b2f41c8!2sMochill%20Mochidonut!5e0!3m2!1sen!2sus!4v1623343051402!5m2!1sen!2sus\",\n        width: \"300\",\n        height: \"300\",\n        style: \"border:0\",\n        allowfullscreen: \"\",\n        loading: \"lazy\",\n      },\n    },\n    {\n      location: \"Oakland\",\n      hours: \"Everyday 11 A.M. - 6:30 P.M.\",\n      map: {\n        src: \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.350518104547!2d-122.23842334922078!3d37.781824479658745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f87311c316917%3A0xd66b31fb45c73126!2sMochill%20Mochi%20Donut!5e0!3m2!1sen!2sus!4v1623343090015!5m2!1sen!2sus\",\n        width: \"300\",\n        height: \"300\",\n        style: \"border:0\",\n        allowfullscreen: \"\",\n        loading: \"lazy\",\n      },\n    },\n  ];\n\n  function setAttributes(el, attrs) {\n    for (let key in attrs) {\n      el.setAttribute(key, attrs[key]);\n    }\n  }\n\n  const contactDiv = document.createElement(\"div\");\n  const locationDiv = document.createElement(\"div\");\n\n  contactDiv.setAttribute(\"id\", \"contact\");\n\n  locationDiv.setAttribute(\"id\", \"locations-container\");\n\n  locations.forEach((store) => {\n    let storeDiv = document.createElement(\"div\");\n    let storeTitle = document.createElement(\"h2\");\n    let storeHours = document.createElement(\"span\");\n    let storeMap = document.createElement(\"iframe\");\n\n    storeDiv.setAttribute(\"class\", \"store\");\n\n    storeTitle.textContent = store.location;\n    storeHours.textContent = store.hours;\n\n    setAttributes(storeMap, store.map);\n\n    storeDiv.append(storeTitle, storeHours, storeMap);\n\n    locationDiv.append(storeDiv);\n  });\n\n  const emailDiv = document.createElement(\"div\");\n  const email = document.createElement(\"span\");\n\n  emailDiv.setAttribute(\"id\", \"email-div\");\n\n  email.textContent = \"TAISUKEY46@GMAIL.COM\";\n\n  emailDiv.append(email);\n\n  contactDiv.append(locationDiv, emailDiv);\n\n  return contactDiv;\n};\n\n\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/contact.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst contentDiv = document.querySelector(\"#content\");\n\ncontentDiv.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createNav)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHero)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createAbout)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n\nconst homeBtn = document.querySelector(\"#Home-btn\");\nconst menuBtn = document.querySelector(\"#Menu-btn\");\nconst contactBtn = document.querySelector(\"#Contact-btn\");\n\nhomeBtn.classList.add(\"active\");\n\nhomeBtn.addEventListener(\"click\", () => {\n  const menuDiv = document.querySelector(\"#menu\");\n  const menuTitle = document.querySelector(\"#menu-title\");\n  const footer = document.querySelector(\"#footer-info\");\n  const contactDiv = document.querySelector(\"#contact\");\n  const contactTitle = document.querySelector(\"#contact-title\");\n\n  if (contentDiv.contains(menuDiv)) {\n    contentDiv.removeChild(menuDiv);\n    contentDiv.removeChild(menuTitle);\n  }\n  if (contentDiv.contains(contactDiv)) {\n    contentDiv.removeChild(contactDiv);\n    contentDiv.removeChild(contactTitle);\n  }\n  contentDiv.removeChild(footer);\n\n  menuBtn.classList.remove(\"active\");\n  contactBtn.classList.remove(\"active\");\n  homeBtn.classList.add(\"active\");\n\n  contentDiv.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHero)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createAbout)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n});\n\nmenuBtn.addEventListener(\"click\", () => {\n  const heroDiv = document.querySelector(\"#hero-section\");\n  const aboutDiv = document.querySelector(\"#about\");\n  const footer = document.querySelector(\"#footer-info\");\n  const contactDiv = document.querySelector(\"#contact\");\n  const contactTitle = document.querySelector(\"#contact-title\");\n\n  if (contentDiv.contains(heroDiv)) {\n    contentDiv.removeChild(heroDiv);\n    contentDiv.removeChild(aboutDiv);\n  }\n  if (contentDiv.contains(contactDiv)) {\n    contentDiv.removeChild(contactDiv);\n    contentDiv.removeChild(contactTitle);\n  }\n  contentDiv.removeChild(footer);\n\n  homeBtn.classList.remove(\"active\");\n  contactBtn.classList.remove(\"active\");\n  menuBtn.classList.add(\"active\");\n\n  contentDiv.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuTitle)(), (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n});\n\ncontactBtn.addEventListener(\"click\", () => {\n  const heroDiv = document.querySelector(\"#hero-section\");\n  const aboutDiv = document.querySelector(\"#about\");\n  const menuDiv = document.querySelector(\"#menu\");\n  const menuTitle = document.querySelector(\"#menu-title\");\n  const footer = document.querySelector(\"#footer-info\");\n\n  if (contentDiv.contains(heroDiv)) {\n    contentDiv.removeChild(heroDiv);\n    contentDiv.removeChild(aboutDiv);\n  }\n  if (contentDiv.contains(menuDiv)) {\n    contentDiv.removeChild(menuDiv);\n    contentDiv.removeChild(menuTitle);\n  }\n  contentDiv.removeChild(footer);\n\n  homeBtn.classList.remove(\"active\");\n  menuBtn.classList.remove(\"active\");\n  contactBtn.classList.add(\"active\");\n\n  contentDiv.append((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactTitle)(), (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactInfo)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n});\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

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