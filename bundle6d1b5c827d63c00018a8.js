/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  max-width: 1600px;\n  align-items: center;\n  margin: 0 auto auto auto;\n  position: relative;\n  font-family: \"Source Sans Pro\", sans-serif;\n  background-image: linear-gradient(to right top, rgb(4, 209, 141), rgb(5, 176, 119));\n}\n\n.game-name {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.game-name h1 {\n  font-size: 48px;\n  font-weight: 900;\n  font-style: italic;\n}\n@media (max-width: 980px) {\n  .game-name {\n    margin-top: 0;\n  }\n  .game-name h1 {\n    font-size: 40px;\n    margin: 5px auto 5px auto;\n  }\n}\n\n.overlay {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  z-index: 2;\n  background-color: rgba(0, 0, 0, 0.277);\n  transition: opacity 0.4s linear;\n  opacity: 1;\n}\n\n.dialogue-window {\n  position: fixed;\n  font-weight: 500;\n  width: 350px;\n  left: calc(50vw - 175px);\n  top: 10px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  background-color: rgb(127, 255, 212);\n  font-size: 1.3rem;\n  border-radius: 12px 0 12px 0;\n  opacity: 0;\n  transition: all 0.3s linear;\n  transform: translateY(-2rem);\n  z-index: 10;\n  padding: 3px 10px;\n  border: 1px solid rgb(1, 117, 50);\n}\n@media (max-width: 639px) {\n  .dialogue-window {\n    font-size: 0.9rem;\n    width: 240px;\n    left: calc(50vw - 120px);\n    height: 40px;\n  }\n}\n\n.offer-saved-game {\n  position: fixed;\n  width: 500px;\n  height: 200px;\n  top: 250px;\n  left: calc(50vw - 250px);\n  display: flex;\n  flex-direction: column;\n  z-index: 4;\n  transition: opacity 0.4s linear;\n  opacity: 1;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  background-image: linear-gradient(to right top, rgb(4, 209, 141), rgb(5, 176, 119));\n  border-radius: 28px 0 28px 0;\n  box-shadow: 0px 0px 18px 8px rgba(0, 0, 0, 0.338);\n  border: 1px solid rgb(1, 117, 50);\n}\n@media (max-width: 980px) {\n  .offer-saved-game {\n    width: 450px;\n    left: calc(50vw - 225px);\n    top: 220px;\n  }\n}\n@media (max-width: 639px) {\n  .offer-saved-game {\n    height: 140px;\n    width: 280px;\n    left: calc(50vw - 140px);\n    top: 150px;\n    border-radius: 18px 0 18px 0;\n  }\n}\n\n.offer-saved-game-name {\n  line-height: 130%;\n  font-size: 1.5rem;\n}\n@media (max-width: 980px) {\n  .offer-saved-game-name {\n    font-size: 1.3rem;\n    line-height: 120%;\n  }\n}\n@media (max-width: 639px) {\n  .offer-saved-game-name {\n    font-size: 1.1rem;\n    line-height: 110%;\n  }\n}\n\n.offer-saved-game-question {\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-style: italic;\n  margin: 30px 10px 0 10px;\n}\n@media (max-width: 980px) {\n  .offer-saved-game-question {\n    margin: 15px 10px 0 10px;\n    font-size: 1.4rem;\n  }\n}\n@media (max-width: 639px) {\n  .offer-saved-game-question {\n    font-size: 1.2rem;\n    margin: 10px 8px 0 8px;\n  }\n}\n\n.agree-btn {\n  width: 5rem;\n  margin: 0 auto 10px auto;\n  height: 2rem;\n  font-size: 1.2rem;\n  border-radius: 8px 0 8px 0;\n}\n.agree-btn:hover {\n  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.338);\n}\n.agree-btn:active {\n  box-shadow: 1px 1px 2px 1px inset rgba(0, 0, 0, 0.338);\n}\n@media (max-width: 639px) {\n  .agree-btn {\n    font-size: 1.1rem;\n    width: 4rem;\n  }\n}\n\n.btn-yes {\n  margin-right: 120px;\n}\n@media (max-width: 639px) {\n  .btn-yes {\n    margin-right: 60px;\n  }\n}\n\n.enter-name-field {\n  position: fixed;\n  width: 500px;\n  height: 200px;\n  top: 250px;\n  left: calc(50vw - 250px);\n  display: flex;\n  flex-direction: column;\n  background-image: linear-gradient(to right top, rgb(4, 209, 141), rgb(5, 176, 119));\n  border-radius: 28px 0 28px 0;\n  border: 1px solid rgb(1, 117, 50);\n  box-shadow: 0px 0px 18px 8px rgba(0, 0, 0, 0.338);\n  z-index: 3;\n  transition: opacity 0.4s linear;\n  opacity: 1;\n}\n@media (max-width: 980px) {\n  .enter-name-field {\n    width: 450px;\n    left: calc(50vw - 225px);\n    top: 220px;\n  }\n}\n@media (max-width: 639px) {\n  .enter-name-field {\n    height: 140px;\n    width: 280px;\n    left: calc(50vw - 140px);\n    top: 150px;\n    border-radius: 18px 0 18px 0;\n  }\n}\n\n.enter-name-header {\n  font-size: 2rem;\n  font-weight: 600;\n  margin: 30px auto 0 auto;\n}\n@media (max-width: 980px) {\n  .enter-name-header {\n    font-size: 1.8rem;\n    margin: 20px auto 15px auto;\n  }\n}\n@media (max-width: 639px) {\n  .enter-name-header {\n    font-size: 1.2rem;\n    margin: 10px auto 8px auto;\n  }\n}\n\n.enter-name-input {\n  width: 50%;\n  margin: 15px auto 0 auto;\n  height: 2.3rem;\n  border-radius: 8px 0 8px 0;\n  padding-left: 12px;\n  font-size: 1.1rem;\n}\n@media (max-width: 980px) {\n  .enter-name-input {\n    margin: 10px auto 10px auto;\n  }\n}\n@media (max-width: 639px) {\n  .enter-name-input {\n    width: 80%;\n    font-size: 0.9rem;\n  }\n}\n\n.btn-enter-name {\n  width: 5rem;\n  margin: 15px auto 0 auto;\n  height: 2rem;\n  font-size: 1.2rem;\n  border-radius: 8px 0 8px 0;\n}\n.btn-enter-name:hover {\n  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.338);\n}\n.btn-enter-name:active {\n  box-shadow: 1px 1px 2px 1px inset rgba(0, 0, 0, 0.338);\n}\n@media (max-width: 639px) {\n  .btn-enter-name {\n    font-size: 1.1rem;\n    width: 4rem;\n    height: 1.8rem;\n    margin: 0 auto 0 auto;\n  }\n}\n\n.chosen-param-module {\n  position: fixed;\n  top: 250px;\n  left: calc(50vw - 250px);\n  background-color: lightblue;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 3;\n  opacity: 0;\n  transition: opacity 0.4s linear;\n  background-image: linear-gradient(to right top, rgb(4, 209, 141), rgb(5, 176, 119));\n  box-shadow: 0px 0px 18px 8px rgba(0, 0, 0, 0.338);\n  border-radius: 38px 0 38px 0;\n  border: 1px solid rgb(1, 117, 50);\n}\n.chosen-param-module h1 {\n  font-size: 2rem;\n  font-weight: 600;\n}\n@media (max-width: 980px) {\n  .chosen-param-module {\n    left: calc(50vw - 225px);\n    border-radius: 28px 0 28px 0;\n  }\n  .chosen-param-module h1 {\n    font-size: 1.8rem;\n  }\n}\n@media (max-width: 639px) {\n  .chosen-param-module {\n    left: calc(50vw - 140px);\n    border-radius: 18px 0 18px 0;\n  }\n  .chosen-param-module h1 {\n    font-size: 1.4rem;\n  }\n}\n\n.chosen-param-module__grid {\n  width: 500px;\n  height: 300px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-gap: 10px;\n  padding: 20px;\n}\n.chosen-param-module__grid div {\n  border: 1px solid black;\n  font-size: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 18px 0 18px 0;\n  transition: background-color 0.2s linear;\n}\n.chosen-param-module__grid div:hover {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.719);\n  background-color: rgb(38, 216, 157);\n}\n.chosen-param-module__grid div:active {\n  box-shadow: 0 0 8px inset rgba(0, 0, 0, 0.719);\n}\n@media (max-width: 980px) {\n  .chosen-param-module__grid {\n    width: 450px;\n    height: 240px;\n  }\n  .chosen-param-module__grid div {\n    font-size: 2rem;\n    border-radius: 12px 0 12px 0;\n  }\n}\n@media (max-width: 639px) {\n  .chosen-param-module__grid {\n    width: 280px;\n    height: 180px;\n  }\n  .chosen-param-module__grid div {\n    font-size: 1.3rem;\n    border-radius: 8px 0 8px 0;\n  }\n}\n\n.btn-close-param-module {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  width: 20px;\n  height: 20px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  transition: all 0.3s linear;\n}\n.btn-close-param-module span {\n  position: absolute;\n  width: 21px;\n  height: 4px;\n  background-color: black;\n  border-radius: 10px;\n}\n.btn-close-param-module:hover {\n  transform: rotate(180deg);\n}\n\n.scoreboard {\n  position: fixed;\n  top: 250px;\n  left: calc(50vw - 290px);\n  width: 580px;\n  padding: 0 15px 0 15px;\n  height: 380px;\n  display: flex;\n  flex-direction: column;\n  background-color: gray;\n  z-index: 3;\n  transition: opacity 0.4s linear;\n  opacity: 0;\n  background-image: linear-gradient(to right top, rgb(4, 209, 141), rgb(5, 176, 119));\n  box-shadow: 0px 0px 18px 8px rgba(0, 0, 0, 0.338);\n  border-radius: 38px 0 38px 0;\n  border: 1px solid rgb(1, 117, 50);\n}\n.scoreboard h2 {\n  margin: 10px auto 10px auto;\n  font-weight: 600;\n  font-style: italic;\n}\n@media (max-width: 980px) {\n  .scoreboard {\n    left: calc(50vw - 240px);\n    width: 480px;\n    height: 330px;\n    padding: 0 10px 0 10px;\n    border-radius: 28px 0 28px 0;\n  }\n  .scoreboard h2 {\n    margin: 8px auto 8px auto;\n  }\n}\n@media (max-width: 639px) {\n  .scoreboard {\n    left: calc(50vw - 140px);\n    width: 280px;\n    height: 220px;\n    top: 120px;\n    border-radius: 18px 0 18px 0;\n  }\n  .scoreboard h2 {\n    margin: 5px auto 5px auto;\n    font-size: 20px;\n  }\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.btn-close-scoreboard {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  width: 20px;\n  height: 20px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  transition: all 0.3s linear;\n}\n.btn-close-scoreboard span {\n  position: absolute;\n  width: 21px;\n  height: 4px;\n  background-color: black;\n  border-radius: 10px;\n}\n.btn-close-scoreboard:hover {\n  transform: rotate(180deg);\n}\n\n.span-one {\n  left: 0px;\n  top: 8px;\n  transform: rotateZ(45deg);\n}\n\n.span-two {\n  left: 0px;\n  top: 8px;\n  transform: rotateZ(-45deg);\n}\n\n.scoreboard__categories {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n\n.scoreboard__category {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 25%;\n  font-size: 1.3rem;\n}\n@media (max-width: 980px) {\n  .scoreboard__category {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 639px) {\n  .scoreboard__category {\n    font-size: 0.8rem;\n  }\n}\n\n.scoreboard__record {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.scoreboard__record-detail {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 25%;\n  font-size: 1.2rem;\n  border-left: 1px solid black;\n  line-height: 140%;\n}\n@media (max-width: 980px) {\n  .scoreboard__record-detail {\n    font-size: 1.1rem;\n    line-height: 130%;\n  }\n}\n@media (max-width: 639px) {\n  .scoreboard__record-detail {\n    font-size: 0.8rem;\n    line-height: 110%;\n  }\n}\n\n.control-box {\n  height: 130px;\n  width: 600px;\n  border: 1px solid rgb(1, 117, 50);\n  border-radius: 5px;\n  background-color: rgb(180, 254, 229);\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: space-around;\n  border-radius: 38px 0 0 0;\n}\n@media (max-width: 980px) {\n  .control-box {\n    width: 500px;\n    border-radius: 28px 0 0 0;\n  }\n}\n@media (max-width: 639px) {\n  .control-box {\n    width: 316px;\n    border-radius: 18px 0 0 0;\n  }\n}\n\n.control-box__box {\n  height: 100%;\n  width: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 20px 0 20px;\n}\n@media (max-width: 980px) {\n  .control-box__box {\n    margin: 0 15px 0 15px;\n  }\n}\n@media (max-width: 639px) {\n  .control-box__box {\n    margin: 0 5px 0 5px;\n    width: 30%;\n  }\n}\n\n.control-box__buttons {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 980px) {\n  .control-box__buttons {\n    margin-top: 8px;\n  }\n}\n@media (max-width: 639px) {\n  .control-box__buttons {\n    justify-content: space-around;\n  }\n}\n\n.control-box__buttons-two {\n  height: 45px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n@media (max-width: 980px) {\n  .control-box__buttons-two {\n    height: 35px;\n  }\n}\n@media (max-width: 639px) {\n  .control-box__buttons-two {\n    height: 30px;\n    justify-content: space-around;\n  }\n}\n\n.control-box-btn {\n  width: 120px;\n  height: 30px;\n  font-size: 0.9rem;\n  border-radius: 8px 0 8px 0;\n}\n.control-box-btn:hover {\n  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.338);\n}\n.control-box-btn:active {\n  box-shadow: 1px 2px 2px 2px inset rgba(0, 0, 0, 0.338);\n}\n@media (max-width: 980px) {\n  .control-box-btn {\n    width: 110px;\n    height: 25px;\n    font-size: 0.8rem;\n    border-radius: 7px 0 7px 0;\n  }\n}\n@media (max-width: 639px) {\n  .control-box-btn {\n    height: 25px;\n    font-size: 0.8rem;\n  }\n}\n\n.control-box__game-progress {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  font-size: 1.2rem;\n  font-weight: 500;\n  font-style: italic;\n  line-height: 120%;\n  margin-bottom: 10px;\n}\n@media (max-width: 980px) {\n  .control-box__game-progress {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 639px) {\n  .control-box__game-progress {\n    font-size: 0.8rem;\n  }\n}\n\n.game-progress-box {\n  width: 32%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.game-box {\n  height: 600px;\n  width: 600px;\n  margin-top: 10px;\n  padding: 18px;\n  background-color: rgb(180, 254, 229);\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  grid-row-gap: 4px;\n  grid-column-gap: 4px;\n  grid-template-areas: \"f1f f2f f3f f4f\" \"f5f f6f f7f f8f\" \"f9f f10f f11f f12f\" \"f13f f14f f15f f16f\";\n  border: 1px solid rgb(1, 117, 50);\n  border-radius: 0 0 38px 0;\n}\n@media (max-width: 980px) {\n  .game-box {\n    height: 500px;\n    width: 500px;\n    padding: 14px;\n    border-radius: 0 0 28px 0;\n    grid-row-gap: 3px;\n    grid-column-gap: 3px;\n  }\n}\n@media (max-width: 639px) {\n  .game-box {\n    padding: 4px 4px 15px 4px;\n    width: 316px;\n    height: 316px;\n    border-radius: 0 0 18px 0;\n    grid-row-gap: 2px;\n    grid-column-gap: 2px;\n  }\n}\n\n.game-box__number-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 50px;\n  border-radius: 5px;\n  border: 1px solid green;\n  cursor: pointer;\n  transition: background-color 0.1s linear;\n}\n.game-box__number-box:hover {\n  background-color: rgb(156, 253, 221);\n}\n@media (max-width: 980px) {\n  .game-box__number-box {\n    font-size: 36px;\n  }\n}\n@media (max-width: 639px) {\n  .game-box__number-box {\n    border-radius: 3px;\n    font-size: 18px;\n  }\n}\n\n.game-box__empty-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 50px;\n  border-radius: 5px;\n  color: aliceblue;\n  cursor: pointer;\n}\n\n.ghost-box {\n  position: fixed;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 1600px;\r\n  align-items: center;\r\n  margin: 0 auto auto auto;\r\n  position: relative;\r\n  font-family: \"Source Sans Pro\", sans-serif;\r\n  background-image: linear-gradient(\r\n    to right top,\r\n    rgb(4, 209, 141),\r\n    rgb(5, 176, 119)\r\n  );\r\n}\r\n\r\n.game-name {\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  & h1 {\r\n    font-size: 48px;\r\n    font-weight: 900;\r\n    font-style: italic;\r\n  }\r\n  @media (max-width: 980px) {\r\n    margin-top: 0;\r\n    & h1 {\r\n      font-size: 40px;\r\n      margin: 5px auto 5px auto;\r\n    }\r\n  }\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 2;\r\n  background-color: rgba(0, 0, 0, 0.277);\r\n  transition: opacity 0.4s linear;\r\n  opacity: 1;\r\n}\r\n\r\n.dialogue-window {\r\n  position: fixed;\r\n  font-weight: 500;\r\n  width: 350px;\r\n  left: calc(50vw - 175px);\r\n  top: 10px;\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  justify-content: center;\r\n  background-color: rgb(127, 255, 212);\r\n  font-size: 1.3rem;\r\n  border-radius: 12px 0 12px 0;\r\n  opacity: 0;\r\n  transition: all 0.3s linear;\r\n  transform: translateY(-2rem);\r\n  z-index: 10;\r\n  padding: 3px 10px;\r\n  border: 1px solid rgb(1, 117, 50);\r\n  @media (max-width: 639px) {\r\n    font-size: 0.9rem;\r\n    width: 240px;\r\n    left: calc(50vw - 120px);\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n.offer-saved-game {\r\n  position: fixed;\r\n  width: 500px;\r\n  height: 200px;\r\n  top: 250px;\r\n  left: calc(50vw - 250px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  z-index: 4;\r\n  transition: opacity 0.4s linear;\r\n  opacity: 1;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  text-align: center;\r\n  background-image: linear-gradient(\r\n    to right top,\r\n    rgb(4, 209, 141),\r\n    rgb(5, 176, 119)\r\n  );\r\n  border-radius: 28px 0 28px 0;\r\n  box-shadow: 0px 0px 18px 8px (rgba(0, 0, 0, 0.338));\r\n  border: 1px solid rgb(1, 117, 50);\r\n  @media (max-width: 980px) {\r\n    width: 450px;\r\n    left: calc(50vw - 225px);\r\n    top: 220px;\r\n  }\r\n  @media (max-width: 639px) {\r\n    height: 140px;\r\n    width: 280px;\r\n    left: calc(50vw - 140px);\r\n    top: 150px;\r\n    border-radius: 18px 0 18px 0;\r\n  }\r\n}\r\n\r\n.offer-saved-game-name {\r\n  line-height: 130%;\r\n  font-size: 1.5rem;\r\n  @media (max-width: 980px) {\r\n    font-size: 1.3rem;\r\n    line-height: 120%;\r\n  }\r\n  @media (max-width: 639px) {\r\n    font-size: 1.1rem;\r\n    line-height: 110%;\r\n  }\r\n}\r\n\r\n.offer-saved-game-question {\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  margin: 30px 10px 0 10px;\r\n  @media (max-width: 980px) {\r\n    margin: 15px 10px 0 10px;\r\n    font-size: 1.4rem;\r\n  }\r\n  @media (max-width: 639px) {\r\n    font-size: 1.2rem;\r\n    margin: 10px 8px 0 8px;\r\n  }\r\n}\r\n\r\n.agree-btn {\r\n  width: 5rem;\r\n  margin: 0 auto 10px auto;\r\n  height: 2rem;\r\n  font-size: 1.2rem;\r\n  border-radius: 8px 0 8px 0;\r\n  &:hover {\r\n    box-shadow: 2px 2px 3px 3px (rgba(0, 0, 0, 0.338));\r\n  }\r\n  &:active {\r\n    box-shadow: 1px 1px 2px 1px inset (rgba(0, 0, 0, 0.338));\r\n  }\r\n  @media (max-width: 639px) {\r\n    font-size: 1.1rem;\r\n    width: 4rem;\r\n  }\r\n}\r\n\r\n.btn-yes {\r\n  margin-right: 120px;\r\n  @media (max-width: 639px) {\r\n    margin-right: 60px;\r\n  }\r\n}\r\n\r\n.enter-name-field {\r\n  position: fixed;\r\n  width: 500px;\r\n  height: 200px;\r\n  top: 250px;\r\n  left: calc(50vw - 250px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-image: linear-gradient(\r\n    to right top,\r\n    rgb(4, 209, 141),\r\n    rgb(5, 176, 119)\r\n  );\r\n  border-radius: 28px 0 28px 0;\r\n  border: 1px solid rgb(1, 117, 50);\r\n  box-shadow: 0px 0px 18px 8px (rgba(0, 0, 0, 0.338));\r\n  z-index: 3;\r\n  transition: opacity 0.4s linear;\r\n  opacity: 1;\r\n  @media (max-width: 980px) {\r\n    width: 450px;\r\n    left: calc(50vw - 225px);\r\n    top: 220px;\r\n  }\r\n  @media (max-width: 639px) {\r\n    height: 140px;\r\n    width: 280px;\r\n    left: calc(50vw - 140px);\r\n    top: 150px;\r\n    border-radius: 18px 0 18px 0;\r\n  }\r\n}\r\n\r\n.enter-name-header {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  margin: 30px auto 0 auto;\r\n  @media (max-width: 980px) {\r\n    font-size: 1.8rem;\r\n    margin: 20px auto 15px auto;\r\n  }\r\n  @media (max-width: 639px) {\r\n    font-size: 1.2rem;\r\n    margin: 10px auto 8px auto;\r\n  }\r\n}\r\n\r\n.enter-name-input {\r\n  width: 50%;\r\n  margin: 15px auto 0 auto;\r\n  height: 2.3rem;\r\n  border-radius: 8px 0 8px 0;\r\n  padding-left: 12px;\r\n  font-size: 1.1rem;\r\n  @media (max-width: 980px) {\r\n    margin: 10px auto 10px auto;\r\n  }\r\n  @media (max-width: 639px) {\r\n    width: 80%;\r\n    font-size: 0.9rem;\r\n  }\r\n}\r\n\r\n.btn-enter-name {\r\n  width: 5rem;\r\n  margin: 15px auto 0 auto;\r\n  height: 2rem;\r\n  font-size: 1.2rem;\r\n  border-radius: 8px 0 8px 0;\r\n  &:hover {\r\n    box-shadow: 2px 2px 3px 3px (rgba(0, 0, 0, 0.338));\r\n  }\r\n  &:active {\r\n    box-shadow: 1px 1px 2px 1px inset (rgba(0, 0, 0, 0.338));\r\n  }\r\n  @media (max-width: 639px) {\r\n    font-size: 1.1rem;\r\n    width: 4rem;\r\n    height: 1.8rem;\r\n    margin: 0 auto 0 auto;\r\n  }\r\n}\r\n\r\n.chosen-param-module {\r\n  position: fixed;\r\n  top: 250px;\r\n  left: calc(50vw - 250px);\r\n  background-color: lightblue;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 3;\r\n  opacity: 0;\r\n  transition: opacity 0.4s linear;\r\n  background-image: linear-gradient(\r\n    to right top,\r\n    rgb(4, 209, 141),\r\n    rgb(5, 176, 119)\r\n  );\r\n  box-shadow: 0px 0px 18px 8px (rgba(0, 0, 0, 0.338));\r\n  border-radius: 38px 0 38px 0;\r\n  border: 1px solid rgb(1, 117, 50);\r\n  & h1 {\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n  }\r\n  @media (max-width: 980px) {\r\n    left: calc(50vw - 225px);\r\n    border-radius: 28px 0 28px 0;\r\n    & h1 {\r\n      font-size: 1.8rem;\r\n    }\r\n  }\r\n  @media (max-width: 639px) {\r\n    left: calc(50vw - 140px);\r\n    border-radius: 18px 0 18px 0;\r\n    & h1 {\r\n      font-size: 1.4rem;\r\n    }\r\n  }\r\n}\r\n\r\n.chosen-param-module__grid {\r\n  width: 500px;\r\n  height: 300px;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-gap: 10px;\r\n  padding: 20px;\r\n\r\n  & div {\r\n    border: 1px solid black;\r\n    font-size: 2.5rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    border-radius: 18px 0 18px 0;\r\n    transition: background-color 0.2s linear;\r\n    &:hover {\r\n      box-shadow: 0 0 8px rgba(0, 0, 0, 0.719);\r\n      background-color: rgb(38, 216, 157);\r\n    }\r\n    &:active {\r\n      box-shadow: 0 0 8px inset rgba(0, 0, 0, 0.719);\r\n    }\r\n  }\r\n  @media (max-width: 980px) {\r\n    width: 450px;\r\n    height: 240px;\r\n    & div {\r\n      font-size: 2rem;\r\n      border-radius: 12px 0 12px 0;\r\n    }\r\n  }\r\n  @media (max-width: 639px) {\r\n    width: 280px;\r\n    height: 180px;\r\n    & div {\r\n      font-size: 1.3rem;\r\n\r\n      border-radius: 8px 0 8px 0;\r\n    }\r\n  }\r\n}\r\n\r\n.btn-close-param-module {\r\n  position: absolute;\r\n  right: 5px;\r\n  top: 5px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  transition: all 0.3s linear;\r\n  & span {\r\n    position: absolute;\r\n    width: 21px;\r\n    height: 4px;\r\n    background-color: black;\r\n    border-radius: 10px;\r\n  }\r\n  &:hover {\r\n    transform: rotate(180deg);\r\n  }\r\n}\r\n\r\n.scoreboard {\r\n  position: fixed;\r\n  top: 250px;\r\n  left: calc(50vw - 290px);\r\n  width: 580px;\r\n  padding: 0 15px 0 15px;\r\n  height: 380px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: gray;\r\n  z-index: 3;\r\n  transition: opacity 0.4s linear;\r\n  opacity: 0;\r\n  background-image: linear-gradient(\r\n    to right top,\r\n    rgb(4, 209, 141),\r\n    rgb(5, 176, 119)\r\n  );\r\n  box-shadow: 0px 0px 18px 8px (rgba(0, 0, 0, 0.338));\r\n  border-radius: 38px 0 38px 0;\r\n  border: 1px solid rgb(1, 117, 50);\r\n  & h2 {\r\n    margin: 10px auto 10px auto;\r\n    font-weight: 600;\r\n    font-style: italic;\r\n  }\r\n  @media (max-width: 980px) {\r\n    left: calc(50vw - 240px);\r\n    width: 480px;\r\n    height: 330px;\r\n    padding: 0 10px 0 10px;\r\n    border-radius: 28px 0 28px 0;\r\n    & h2 {\r\n      margin: 8px auto 8px auto;\r\n    }\r\n  }\r\n  @media (max-width: 639px) {\r\n    left: calc(50vw - 140px);\r\n    width: 280px;\r\n    height: 220px;\r\n    top: 120px;\r\n    border-radius: 18px 0 18px 0;\r\n    & h2 {\r\n      margin: 5px auto 5px auto;\r\n      font-size: 20px;\r\n    }\r\n  }\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n.btn-close-scoreboard {\r\n  position: absolute;\r\n  right: 5px;\r\n  top: 5px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  transition: all 0.3s linear;\r\n  & span {\r\n    position: absolute;\r\n    width: 21px;\r\n    height: 4px;\r\n    background-color: black;\r\n    border-radius: 10px;\r\n  }\r\n  &:hover {\r\n    transform: rotate(180deg);\r\n  }\r\n}\r\n\r\n.span-one {\r\n  left: 0px;\r\n  top: 8px;\r\n  transform: rotateZ(45deg);\r\n}\r\n.span-two {\r\n  left: 0px;\r\n  top: 8px;\r\n  transform: rotateZ(-45deg);\r\n}\r\n\r\n.scoreboard__categories {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  margin-bottom: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n.scoreboard__category {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 25%;\r\n  font-size: 1.3rem;\r\n  @media (max-width: 980px) {\r\n    font-size: 1.1rem;\r\n  }\r\n  @media (max-width: 639px) {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n.scoreboard__record {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.scoreboard__record-detail {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 25%;\r\n  font-size: 1.2rem;\r\n  border-left: 1px solid black;\r\n  line-height: 140%;\r\n  @media (max-width: 980px) {\r\n    font-size: 1.1rem;\r\n    line-height: 130%;\r\n  }\r\n  @media (max-width: 639px) {\r\n    font-size: 0.8rem;\r\n    line-height: 110%;\r\n  }\r\n}\r\n\r\n.control-box {\r\n  height: 130px;\r\n  width: 600px;\r\n  border: 1px solid rgb(1, 117, 50);\r\n  border-radius: 5px;\r\n  background-color: rgb(180, 254, 229);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  justify-content: space-around;\r\n  border-radius: 38px 0 0 0;\r\n  @media (max-width: 980px) {\r\n    width: 500px;\r\n    border-radius: 28px 0 0 0;\r\n  }\r\n  @media (max-width: 639px) {\r\n    width: 316px;\r\n    border-radius: 18px 0 0 0;\r\n  }\r\n}\r\n\r\n.control-box__box {\r\n  height: 100%;\r\n  width: 20%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 20px 0 20px;\r\n  @media (max-width: 980px) {\r\n    margin: 0 15px 0 15px;\r\n  }\r\n  @media (max-width: 639px) {\r\n    margin: 0 5px 0 5px;\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n.control-box__buttons {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  @media (max-width: 980px) {\r\n    margin-top: 8px;\r\n  }\r\n  @media (max-width: 639px) {\r\n    justify-content: space-around;\r\n  }\r\n}\r\n\r\n.control-box__buttons-two {\r\n  height: 45px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  @media (max-width: 980px) {\r\n    height: 35px;\r\n  }\r\n  @media (max-width: 639px) {\r\n    height: 30px;\r\n    justify-content: space-around;\r\n  }\r\n}\r\n\r\n.control-box-btn {\r\n  width: 120px;\r\n  height: 30px;\r\n  font-size: 0.9rem;\r\n  border-radius: 8px 0 8px 0;\r\n  &:hover {\r\n    box-shadow: 1px 2px 2px 2px (rgba(0, 0, 0, 0.338));\r\n  }\r\n  &:active {\r\n    box-shadow: 1px 2px 2px 2px inset (rgba(0, 0, 0, 0.338));\r\n  }\r\n  @media (max-width: 980px) {\r\n    width: 110px;\r\n    height: 25px;\r\n    font-size: 0.8rem;\r\n    border-radius: 7px 0 7px 0;\r\n  }\r\n  @media (max-width: 639px) {\r\n    height: 25px;\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n.control-box__game-progress {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  font-size: 1.2rem;\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  line-height: 120%;\r\n  margin-bottom: 10px;\r\n  @media (max-width: 980px) {\r\n    font-size: 1rem;\r\n  }\r\n  @media (max-width: 639px) {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n.game-progress-box {\r\n  width: 32%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.game-box {\r\n  height: 600px;\r\n  width: 600px;\r\n  margin-top: 10px;\r\n  padding: 18px;\r\n  background-color: rgb(180, 254, 229);\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: repeat(4, 1fr);\r\n  grid-row-gap: 4px;\r\n  grid-column-gap: 4px;\r\n  grid-template-areas:\r\n    \"f1f f2f f3f f4f\"\r\n    \"f5f f6f f7f f8f\"\r\n    \"f9f f10f f11f f12f\"\r\n    \"f13f f14f f15f f16f\";\r\n  border: 1px solid rgb(1, 117, 50);\r\n  border-radius: 0 0 38px 0;\r\n  @media (max-width: 980px) {\r\n    height: 500px;\r\n    width: 500px;\r\n    padding: 14px;\r\n    border-radius: 0 0 28px 0;\r\n    grid-row-gap: 3px;\r\n    grid-column-gap: 3px;\r\n  }\r\n  @media (max-width: 639px) {\r\n    padding: 4px 4px 15px 4px;\r\n    width: 316px;\r\n    height: 316px;\r\n    border-radius: 0 0 18px 0;\r\n    grid-row-gap: 2px;\r\n    grid-column-gap: 2px;\r\n  }\r\n}\r\n\r\n.game-box__number-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 50px;\r\n  border-radius: 5px;\r\n  border: 1px solid green;\r\n  cursor: pointer;\r\n  transition: background-color 0.1s linear;\r\n  &:hover {\r\n    background-color: rgb(156, 253, 221);\r\n  }\r\n  @media (max-width: 980px) {\r\n    font-size: 36px;\r\n  }\r\n  @media (max-width: 639px) {\r\n    border-radius: 3px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n.game-box__empty-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 50px;\r\n  border-radius: 5px;\r\n  color: aliceblue;\r\n  cursor: pointer;\r\n}\r\n\r\n.ghost-box {\r\n  position: fixed;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/click.wav":
/*!******************************!*\
  !*** ./src/assets/click.wav ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "click.wav";

/***/ }),

/***/ "./src/assets/favicon.png":
/*!********************************!*\
  !*** ./src/assets/favicon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_click_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/click.wav */ "./src/assets/click.wav");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/favicon.png */ "./src/assets/favicon.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




///////////////////////////////////////////////
/////////////////////////// INITIAL VARIABLES ////////////////////////////////////

var gamebox;
var gameState = null;
var clickSound;
var overlay;
var turnsString;
var timer;
var btnLastGame;
var btnStartGame;
var btnSaveGame;
var btnScoreboard;
var btnCloseScoreboard;
var chooseParameterGrid;
var btnChooseParameter;
var btnCloseChooseParameter;
var btnSaveName;
var btnYes;
var btnNo;
var btnMute;
var turns = 0;
var hourCounter = 0;
var emptybox;
var timeoutFunction;
var dialogueWindowTimerFunction;
var ghostTimeout;
var ghostDeleteTimeout;
var chosenParameter = 16;
//prettier-ignore
var initialArrayOfChosenParameter = [[2, 5], [1, 3, 6], [2, 4, 7], [3, 8], [1, 6, 9], [2, 5, 7, 10], [3, 6, 8, 11], [4, 7, 12], [5, 10, 13], [6, 9, 11, 14], [7, 10, 12, 15], [8, 11, 16], [9, 14], [10, 13, 15], [11, 14, 16], [12, 15]];
//prettier-ignore
var correctOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

///////////////////////////////////////////////
/////////////////////////// CREATING VARIABLES ////////////////////////////////////
var correctOrder3x = [];
createArrayForComparison(correctOrder3x, 9);
var correctOrder4x = [];
createArrayForComparison(correctOrder4x, 16);
var correctOrder5x = [];
createArrayForComparison(correctOrder5x, 25);
var correctOrder6x = [];
createArrayForComparison(correctOrder6x, 36);
var correctOrder7x = [];
createArrayForComparison(correctOrder7x, 49);
var correctOrder8x = [];
createArrayForComparison(correctOrder8x, 64);
initialArrayOfChosenParameter = correctOrder4x;
//prettier-ignore
var checkMoveAllowed = [[2, 5], [1, 3, 6], [2, 4, 7], [3, 8], [1, 6, 9], [2, 5, 7, 10], [3, 6, 8, 11], [4, 7, 12], [5, 10, 13], [6, 9, 11, 14], [7, 10, 12, 15], [8, 11, 16], [9, 14], [10, 13, 15], [11, 14, 16], [12, 15]];
var checkMoveAllowed3x = [];
createArrayCheckAgainst(checkMoveAllowed3x, correctOrder3x);
var checkMoveAllowed4x = [];
createArrayCheckAgainst(checkMoveAllowed4x, correctOrder4x);
var checkMoveAllowed5x = [];
createArrayCheckAgainst(checkMoveAllowed5x, correctOrder5x);
var checkMoveAllowed6x = [];
createArrayCheckAgainst(checkMoveAllowed6x, correctOrder6x);
var checkMoveAllowed7x = [];
createArrayCheckAgainst(checkMoveAllowed7x, correctOrder7x);
var checkMoveAllowed8x = [];
createArrayCheckAgainst(checkMoveAllowed8x, correctOrder8x);
var currentOrder = [];

///////////////////////////////////////////////
//////////////////////////////// FUNCTIONS TO PREPARE/CHECK THE GRID //////////////////////////////////

function createArrayForComparison(targetArray, num) {
  var curArr,
    l = -1,
    breakNum = [],
    _int = 1;
  while (_int < num) {
    breakNum.push(_int);
    _int += Math.sqrt(num);
  }
  for (var i = 1; i < num + 1; i++) {
    if (breakNum.includes(i)) {
      targetArray.push([]);
      l++;
      curArr = targetArray[l];
    }
    curArr.push(i);
  }
}
function createArrayCheckAgainst(targetArray, suppArray) {
  var lengthOfOneLine = suppArray[1].length;
  var counter = -1;
  for (var i = 0; i < lengthOfOneLine; i++) {
    for (var j = 0; j < lengthOfOneLine; j++) {
      targetArray.push([]);
      counter++;
      if (suppArray[i][j - 1]) targetArray[counter].push(suppArray[i][j - 1]);
      if (suppArray[i][j + 1]) targetArray[counter].push(suppArray[i][j + 1]);
      if (suppArray[i - 1]) targetArray[counter].push(suppArray[i - 1][j]);
      if (suppArray[i + 1]) targetArray[counter].push(suppArray[i + 1][j]);
    }
  }
}
function shuffleOrder(chosenParam) {
  currentOrder = [];
  while (correctOrder.length !== currentOrder.length) {
    var num = void 0;
    num = correctOrder[Math.floor(Math.random() * chosenParam)];
    if (currentOrder.includes(num)) continue;
    currentOrder.push(num);
  }
}
var arrToCheckX4 = [4, 5, 6, 7, 12, 13, 14, 15];
//prettier-ignore
var arrToCheckX6 = [6, 7, 8, 9, 10, 11, 18, 19, 20, 21, 22, 23, 30, 31, 32, 33, 34, 35];
// prettier-ignore
var arrToCheckX8 = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63];
function checkIfPossible(chosenParam) {
  var result = 0;
  for (var i = 0; i < currentOrder.length - 1; i++) {
    if (currentOrder[i] === chosenParam) {
      continue;
    }
    var num = currentOrder[i];
    for (var j = i + 1; j < currentOrder.length; j++) {
      if (currentOrder[j] === chosenParam) {
        continue;
      }
      if (num > currentOrder[j]) {
        result++;
      }
    }
  }
  if ([4, 6, 8].includes(Math.sqrt(chosenParam))) {
    if (result % 2 === 1) {
      if (Math.sqrt(chosenParam) === 4 && !arrToCheckX4.includes(currentOrder.indexOf(chosenParam))) {
        return;
      } else if (Math.sqrt(chosenParam) === 6 && !arrToCheckX6.includes(currentOrder.indexOf(chosenParam))) {
        return;
      } else if (Math.sqrt(chosenParam) === 8 && !arrToCheckX8.includes(currentOrder.indexOf(chosenParam))) {
        return;
      } else {
        shuffleOrder(chosenParam);
        return checkIfPossible(chosenParam);
      }
    } else if (result % 2 === 0) {
      if (Math.sqrt(chosenParam) === 4 && arrToCheckX4.includes(currentOrder.indexOf(chosenParam))) {
        return;
      } else if (Math.sqrt(chosenParam) === 6 && arrToCheckX6.includes(currentOrder.indexOf(chosenParam))) {
        return;
      } else if (Math.sqrt(chosenParam) === 8 && arrToCheckX8.includes(currentOrder.indexOf(chosenParam))) {
        return;
      } else {
        shuffleOrder(chosenParam);
        return checkIfPossible(chosenParam);
      }
    }
  } else {
    if (result % 2 === 1) {
      shuffleOrder(chosenParam);
      return checkIfPossible(chosenParam);
    } else {
      return;
    }
  }
}

///////////////////////////////////////////////
//////////////////////////////// FUNCTIONS TO ADD ELEMENTS //////////////////////////////////
function addNameAndControls() {
  document.body.insertAdjacentHTML("afterbegin", "<audio src=\"./click.wav\" class=\"click-sound hidden\"></audio>\n    <div class=\"dialogue-window\">\n      Welcome to Gem Puzzle Game, \n    </div>\n    <div class=\"offer-saved-game\">\n      <div class=\"offer-saved-game-question\">\n        Do you want to continue the last saved game?\n      </div>\n      <div class=\"offer-saved-game-name\">Your name: Some Name Here</div>\n      <div class=\"offer-saved-game-btns\">\n        <button class=\"agree-btn btn-yes\">Yes</button> <button class=\"agree-btn btn-no\">No</button>\n      </div>\n    </div>\n    <form class=\"enter-name-field\">\n      <div class=\"enter-name-header\">What is your name?</div>\n      <input\n        class=\"enter-name-input\"\n        type=\"text\"\n        maxlength=\"9\"\n        placeholder=\"Enter your name here\"\n        id=\"name\"\n        required\n      />\n      <button class=\"btn-enter-name\" type=\"submit\" for=\"name\">Save</button>\n    </form>\n    <div class=\"chosen-param-module hidden\">\n      <button class=\"btn-close-param-module\">\n        <span class=\"span-one\"></span>\n        <span class=\"span-two\"></span>\n      </button>\n      <h1>Choose The Grid</h1>\n      <div class=\"chosen-param-module__grid\">\n        <div class=\"chosen-param-div\" data-par=\"9\">3 x 3</div>\n        <div class=\"chosen-param-div\" data-par=\"16\">4 x 4</div>\n        <div class=\"chosen-param-div\" data-par=\"25\">5 x 5</div>\n        <div class=\"chosen-param-div\" data-par=\"36\">6 x 6</div>\n        <div class=\"chosen-param-div\" data-par=\"49\">7 x 7</div>\n        <div class=\"chosen-param-div\" data-par=\"64\">8 x 8</div>\n      </div>\n    </div>\n    <div class=\"overlay\"></div>\n    <div class=\"scoreboard hidden\">\n      <button class=\"btn-close-scoreboard\">\n        <span class=\"span-one\"></span>\n        <span class=\"span-two\"></span>\n      </button>\n      <h2>BEST PLAYERS (sorted by Time)</h2> \n      <div class=\"scoreboard__categories\">\n        <span class=\"scoreboard__category\">Name</span>\n        <span class=\"scoreboard__category\">Time</span>\n        <span class=\"scoreboard__category\">Moves</span>\n      </div>\n    </div>\n    <div class=\"game-name\"><h1>Gem Puzzle</h1></div>\n    <section class=\"control-box\">\n      <div class=\"control-box__buttons\">\n        <div class=\"control-box__box btn-start-game-box\">\n          <button class=\"control-box-btn btn-start-game\">New Game</button>\n        </div>\n        <div class=\"control-box__box btn-playsaved-game-box\">\n          <button class=\"control-box-btn btn-playsaved-game\">Last Game</button>\n        </div>\n        <div class=\"control-box__box btn-save-game-box\">\n          <button class=\"control-box-btn btn-save-game\">Save Game</button>\n        </div>\n      </div>\n      <div class=\"control-box__buttons-two\">\n        <div class=\"control-box__box btn-see-scoreboard-box\">\n          <button class=\"control-box-btn btn-see-scoreboard\">Scoreboard</button>\n        </div>\n        <div class=\"control-box__box btn-choose-grid-box\">\n          <button class=\"control-box-btn btn-choose-grid\">Parameters</button>\n        </div>\n        <div class=\"control-box__box btn-sound-box\">\n        <button class=\"control-box-btn btn-sound\">Unmute</button>\n      </div>\n      </div>\n      <div class=\"control-box__game-progress\">\n        <div class=\"player-name game-progress-box\">\n          <span class=\"player-name-string\">Player: Unknown</span>\n        </div>\n        <div class=\"timer game-progress-box\">\n          <span class=\"timer-string\">Timer: 0:00:00</span>\n        </div>\n        <div class=\"turns game-progress-box\">\n          <span class=\"turns-string\">Turns: 0</span>\n        </div>\n      </div>\n    </section>");
  btnCloseChooseParameter = document.querySelector(".btn-close-param-module");
  btnCloseChooseParameter.addEventListener("click", function () {
    toggleWindow(".chosen-param-module");
    if (gameState === null) {
      startTimer();
      gameState = true;
    }
  });
}
function addTilesToPlay() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var boxVariation = currentOrder.map(function (el, i) {
    return generateTile(el, i + 1);
  }).join("");
  if (!bool) {
    document.body.insertAdjacentHTML("beforeend", "<section class=\"game-box\">".concat(boxVariation, "</section>"));
    emptybox = document.querySelector(".game-box__empty-box");
    return;
  } else {
    gamebox.innerHTML = "";
    gamebox.insertAdjacentHTML("afterbegin", boxVariation);
    emptybox = document.querySelector(".game-box__empty-box");
    return;
  }
}
function generateTile(tileNum, tilePos) {
  return "<div draggable=\"true\" \n              class=\"game-box__".concat(tileNum !== chosenParameter ? "number-box" : "empty-box", "\"\n              data-num=\"").concat(tileNum, "\"\n              ").concat(tileNum !== chosenParameter ? "id=\"num-".concat(tileNum, "\"") : "", "\n              style=\"grid-area:f").concat(tilePos, "f / f").concat(tilePos, "f / f").concat(tilePos, "f / f").concat(tilePos, "f\"\n          >\n            ").concat(tileNum !== chosenParameter ? tileNum : "", "\n          </div>");
}
function addScoresData(arrOfScores) {
  if (!arrOfScores) {
    btnCloseScoreboard = document.querySelector(".btn-close-scoreboard");
    btnCloseScoreboard.addEventListener("click", function () {
      toggleWindow(".scoreboard");
    });
    return;
  }
  var sortedArr = arrOfScores.map(function (el) {
    var ttlTime = +el.time.slice(0, 1) * 60 * 60 + +el.time.slice(2, 4) * 60 + +el.time.slice(5, 7);
    el.time = ttlTime;
    return el;
  }).sort(function (a, b) {
    return a.time - b.time;
  }).map(function (el) {
    var hours = el.time / 60 / 60;
    var minutes = el.time / 60;
    var seconds = el.time - Math.trunc(hours) * 60 * 60 - Math.trunc(minutes) * 60;
    el.time = "".concat(Math.trunc(hours), ":").concat(String(Math.trunc(minutes)).length === 2 ? Math.trunc(minutes) : "0".concat(Math.trunc(minutes)), ":").concat(String(Math.trunc(seconds)).length === 2 ? Math.trunc(seconds) : "0".concat(Math.trunc(seconds)));
    return el;
  });
  var newArrOfScores;
  sortedArr.length > 10 ? newArrOfScores = sortedArr.splice(0, 10) : newArrOfScores = sortedArr;
  localStorage.setItem("gmPzzlScrsDvDvs", JSON.stringify(newArrOfScores));
  var scores = newArrOfScores.map(function (el) {
    return generateLocalScore(el);
  }).join("");
  document.querySelector(".scoreboard").innerHTML = "";
  document.querySelector(".scoreboard").insertAdjacentHTML("afterbegin", "<button class=\"btn-close-scoreboard\">\n      <span class=\"span-one\"></span>\n      <span class=\"span-two\"></span>\n    </button>\n    <h2>BEST PLAYERS (sorted by Time)</h2> \n      <div class=\"scoreboard__categories\">\n        <span class=\"scoreboard__category\">Name</span>\n        <span class=\"scoreboard__category\">Time</span>\n        <span class=\"scoreboard__category\">Moves</span>\n        <span class=\"scoreboard__category\">Parameters</span>\n      </div> ".concat(scores));
  btnCloseScoreboard = document.querySelector(".btn-close-scoreboard");
  btnCloseScoreboard.addEventListener("click", function () {
    toggleWindow(".scoreboard");
  });
}
function generateLocalScore(localScore) {
  return "\n    <div class=\"scoreboard__record\">\n      <span class=\"scoreboard__record-detail\">".concat(localScore.playerName, "</span>\n      <span class=\"scoreboard__record-detail\">").concat(localScore.time, "</span>\n      <span class=\"scoreboard__record-detail\">").concat(localScore.turns, "</span>\n      <span class=\"scoreboard__record-detail\">").concat(localScore.type, "</span>\n    </div>");
}
function animateTransition(thisElemNum, emptyOne, thisElem) {
  if (+thisElemNum < +emptyOne && +emptyOne - +thisElemNum > 1) {
    thisElem.style.visibility = "hidden";
    var createdElem = createGhostBox(thisElem);
    ghostTimeout = setTimeout(function () {
      createdElem.style.transform = "translateY(calc(100% - 4px))";
    }, 50);
    ghostDeleteTimeout = setTimeout(function () {
      createdElem.remove();
      thisElem.style.visibility = "visible";
    }, 130);
  }
  if (+thisElemNum < +emptyOne && +emptyOne - +thisElemNum === 1) {
    thisElem.style.visibility = "hidden";
    var _createdElem = createGhostBox(thisElem);
    ghostTimeout = setTimeout(function () {
      _createdElem.style.transform = "translateX(calc(100% - 4px))";
    }, 50);
    ghostDeleteTimeout = setTimeout(function () {
      _createdElem.remove();
      thisElem.style.visibility = "visible";
    }, 130);
  }
  if (+thisElemNum > +emptyOne && +thisElemNum - +emptyOne === 1) {
    thisElem.style.visibility = "hidden";
    var _createdElem2 = createGhostBox(thisElem);
    ghostTimeout = setTimeout(function () {
      _createdElem2.style.transform = "translateX(calc(-100% - 4px))";
    }, 50);
    ghostDeleteTimeout = setTimeout(function () {
      _createdElem2.remove();
      thisElem.style.visibility = "visible";
    }, 130);
  }
  if (+thisElemNum > +emptyOne && +thisElemNum - +emptyOne > 1) {
    thisElem.style.visibility = "hidden";
    var _createdElem3 = createGhostBox(thisElem);
    ghostTimeout = setTimeout(function () {
      _createdElem3.style.transform = "translateY(calc(-100% - 4px))";
    }, 50);
    ghostDeleteTimeout = setTimeout(function () {
      _createdElem3.remove();
      thisElem.style.visibility = "visible";
    }, 130);
  }
}
function createGhostBox(elem) {
  var dataObj = elem.getBoundingClientRect();
  document.body.insertAdjacentHTML("beforeend", "<div class=\"game-box__number-box ghost-box\">".concat(elem.dataset.num, "</div>"));
  var ghost = document.querySelector(".ghost-box");
  ghost.style.position = "fixed";
  ghost.style.top = "".concat(dataObj.top);
  ghost.style.left = "".concat(dataObj.left);
  ghost.style.width = "".concat(dataObj.width);
  ghost.style.height = "".concat(dataObj.height);
  ghost.style.transition = "transform 0.07s linear";
  return ghost;
}

///////////////////////////////////////////////
//////////////////////////////// FUNCTIONS TO PLAY THE GAME //////////////////////////////////

function checkStepAddTurn(e) {
  if (!gameState) {
    displayDialogueWindow("This game is finished. Please, start a new game!");
    return;
  }
  var thisElem = e.target.closest(".game-box__number-box");
  var thisElemGridPosition = parseInt(thisElem.style.gridArea.slice(1, 3));
  var emptyBoxPosition = parseInt(emptybox.style.gridArea.slice(1, 3));
  if (!checkMoveAllowed[thisElemGridPosition - 1].includes(emptyBoxPosition)) return;
  animateTransition(thisElemGridPosition, emptyBoxPosition, thisElem);
  var thisCellNum = e.target.closest(".game-box__number-box").dataset.num;
  currentOrder.splice(thisElemGridPosition - 1, 1, chosenParameter);
  currentOrder.splice(emptyBoxPosition - 1, 1, +thisCellNum);
  var thisElemArea = thisElem.style.gridArea;
  var emptyBoxArea = emptybox.style.gridArea;
  thisElem.style.gridArea = emptyBoxArea;
  emptybox.style.gridArea = thisElemArea;
  if (JSON.stringify(currentOrder) !== JSON.stringify(correctOrder)) turns++;
  turnsString.textContent = "Turns: ".concat(turns);
  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) announceGameEnd();
}
function announceGameEnd() {
  localStorage.removeItem("svdGmPzzlGmDvDvs");
  stopTimer();
  var gameResults = {};
  gameResults.playerName = document.querySelector(".player-name-string").textContent.slice(8);
  gameResults.time = timer.textContent.slice(7);
  gameResults.turns = turnsString.textContent.slice(7);
  gameResults.type = "".concat(Math.sqrt(chosenParameter), "x").concat(Math.sqrt(chosenParameter));
  var newScoreboard = JSON.parse(localStorage.getItem("gmPzzlScrsDvDvs"));
  if (!newScoreboard) newScoreboard = [];
  newScoreboard.push(gameResults);
  addScoresData(newScoreboard);
  gamebox.style.backgroundColor = "rgb(5, 176, 119)";
  displayDialogueWindow("Hooray! You solved the puzzle in ".concat(gameResults.time, " and ").concat(gameResults.turns, " moves!"), true);
  gameState = false;
}

///////////////////////////////////////////////
//////////////////////////////// FUNCTIONS FOR THE MENU //////////////////////////////////

function addOneSecond() {
  var seconds;
  var minutes;
  if (+timer.textContent.slice(12, 14) === 59) {
    seconds = 0;
    minutes = +timer.textContent.slice(9, 11) + 1;
  }
  if (minutes === 60) {
    hourCounter++;
    minutes = 0;
  }
  if (+timer.textContent.slice(12, 14) < 59) {
    seconds = +timer.textContent.slice(12, 14) + 1;
    minutes = +timer.textContent.slice(9, 11);
  }
  timer.textContent = "Timer: ".concat(hourCounter, ":").concat(String(minutes).length === 1 ? "0".concat(minutes) : "".concat(minutes), ":").concat(String(seconds).length === 1 ? "0".concat(seconds) : "".concat(seconds));
  timeoutFunction = setTimeout(addOneSecond, 1000);
}
function startTimer(options) {
  if (!options) {
    turns = 0;
    hourCounter = 0;
    timer.textContent = "Timer: 0:00:00";
    turnsString.textContent = "Turns: 0";
    timeoutFunction = setTimeout(addOneSecond, 1000);
  } else {
    turns = +options.lastTurns.slice(7);
    hourCounter = +options.lastTimer.slice(7, 8);
    timer.textContent = options.lastTimer;
    turnsString.textContent = options.lastTurns;
    timeoutFunction = setTimeout(addOneSecond, 1000);
  }
}
function stopTimer() {
  clearTimeout(timeoutFunction);
}
function addDragListenersToBoxes() {
  var allBoxes = document.querySelectorAll(".game-box__number-box");
  allBoxes.forEach(function (el) {
    return el.addEventListener("dragstart", function (e) {
      e.target.style.opacity = "0.3";
      e.dataTransfer.setData("text/plain", e.target.dataset.num);
    });
  });
  allBoxes.forEach(function (el) {
    return el.addEventListener("dragend", function (e) {
      e.target.style.opacity = "1";
    });
  });
  var emptyBox = document.querySelector(".game-box__empty-box");
  emptyBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  emptyBox.addEventListener("drop", function (e) {
    e.preventDefault();
    var info = e.dataTransfer.getData("text");
    checkDraggedStep(info);
  });
}
function checkDraggedStep(num) {
  if (!gameState) {
    displayDialogueWindow("This game is finished. Please, start a new game!");
    return;
  }
  var thisElem = document.getElementById("num-".concat(num));
  var thisElemGridPosition = parseInt(thisElem.style.gridArea.slice(1, 3));
  var emptyBoxPosition = parseInt(emptybox.style.gridArea.slice(1, 3));
  if (!checkMoveAllowed[thisElemGridPosition - 1].includes(emptyBoxPosition)) return;
  var thisCellNum = num;
  currentOrder.splice(thisElemGridPosition - 1, 1, chosenParameter);
  currentOrder.splice(emptyBoxPosition - 1, 1, +thisCellNum);
  var thisElemArea = thisElem.style.gridArea;
  var emptyBoxArea = emptybox.style.gridArea;
  thisElem.style.gridArea = emptyBoxArea;
  emptybox.style.gridArea = thisElemArea;
  if (JSON.stringify(currentOrder) !== JSON.stringify(correctOrder)) turns++;
  turnsString.textContent = "Turns: ".concat(turns);
  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) announceGameEnd();
}
function startNewGame() {
  stopTimer();
  shuffleOrder(chosenParameter);
  checkIfPossible(chosenParameter);
  addTilesToPlay(true);
  startTimer();
  displayDialogueWindow("New game started! Good luck!");
  gameState = true;
  gamebox.style.backgroundColor = "rgb(180, 254, 229)";
  addDragListenersToBoxes();
}
function saveThisGame() {
  if (!gameState) {
    displayDialogueWindow("Nothing to save. This game is finished!");
    return;
  }
  var savedParams = {
    lastOrder: currentOrder,
    lastTimer: timer.textContent,
    lastTurns: turnsString.textContent,
    lastParameter: chosenParameter,
    lastPlayerName: document.querySelector(".player-name-string").textContent.slice(8)
  };
  localStorage.setItem("svdGmPzzlGmDvDvs", JSON.stringify(savedParams));
  displayDialogueWindow("Your game was saved!");
}
function continueLastGame() {
  if (!localStorage.getItem("svdGmPzzlGmDvDvs")) {
    displayDialogueWindow("Oops, there are no saved games.");
    return;
  }
  var savedParams = JSON.parse(localStorage.getItem("svdGmPzzlGmDvDvs"));
  currentOrder = savedParams.lastOrder;
  chosenParameter = savedParams.lastParameter;
  document.querySelector(".player-name-string").textContent = "Player: ".concat(savedParams.lastPlayerName);
  setOrderAndCheckArray(chosenParameter);
  addTilesToPlay(true);
  stopTimer();
  startTimer(savedParams);
  displayDialogueWindow("Welcome, ".concat(savedParams.lastPlayerName, "! Game continues."));
  addDragListenersToBoxes();
  gameState = true;
}
function toggleWindow(chosenWindow) {
  if (!document.querySelector("".concat(chosenWindow)).classList.contains("hidden")) {
    document.querySelector("".concat(chosenWindow)).style.opacity = "0";
    document.querySelector(".overlay").style.opacity = "0";
    setTimeout(function () {
      document.querySelector("".concat(chosenWindow)).classList.toggle("hidden");
      document.querySelector(".overlay").classList.toggle("hidden");
    }, 400);
  } else {
    setTimeout(function () {
      document.querySelector("".concat(chosenWindow)).style.opacity = "1";
      document.querySelector(".overlay").style.opacity = "1";
    }, 50);
    document.querySelector("".concat(chosenWindow)).classList.toggle("hidden");
    document.querySelector(".overlay").classList.toggle("hidden");
  }
}
function chooseParameter(num) {
  chosenParameter = num;
  setOrderAndCheckArray(num);
  startNewGame();
}
function setOrderAndCheckArray(num) {
  if (num === 9) {
    gamebox.style.gridTemplateColumns = "repeat(3, 1fr)";
    gamebox.style.gridTemplateRows = "repeat(3, 1fr)";
    gamebox.style.gridTemplateAreas = "\"".concat(correctOrder3x.map(function (arr) {
      return arr.map(function (_int2) {
        return "f".concat(_int2, "f");
      }).join(" ");
    }).join("\" \""), "\"");
    correctOrder = correctOrder3x.flat();
    checkMoveAllowed = checkMoveAllowed3x;
  }
  if (num === 16) {
    correctOrder = correctOrder4x.flat();
    checkMoveAllowed = checkMoveAllowed4x;
    gamebox.style.gridTemplateColumns = "repeat(4, 1fr)";
    gamebox.style.gridTemplateRows = "repeat(4, 1fr)";
    gamebox.style.gridTemplateAreas = "\"".concat(correctOrder4x.map(function (arr) {
      return arr.map(function (_int3) {
        return "f".concat(_int3, "f");
      }).join(" ");
    }).join("\" \""), "\"");
  }
  if (num === 25) {
    correctOrder = correctOrder5x.flat();
    checkMoveAllowed = checkMoveAllowed5x;
    gamebox.style.gridTemplateColumns = "repeat(5, 1fr)";
    gamebox.style.gridTemplateRows = "repeat(5, 1fr)";
    gamebox.style.gridTemplateAreas = "\"".concat(correctOrder5x.map(function (arr) {
      return arr.map(function (_int4) {
        return "f".concat(_int4, "f");
      }).join(" ");
    }).join("\" \""), "\"");
  }
  if (num === 36) {
    correctOrder = correctOrder6x.flat();
    checkMoveAllowed = checkMoveAllowed6x;
    gamebox.style.gridTemplateColumns = "repeat(6, 1fr)";
    gamebox.style.gridTemplateRows = "repeat(6, 1fr)";
    gamebox.style.gridTemplateAreas = "\"".concat(correctOrder6x.map(function (arr) {
      return arr.map(function (_int5) {
        return "f".concat(_int5, "f");
      }).join(" ");
    }).join("\" \""), "\"");
  }
  if (num === 49) {
    correctOrder = correctOrder7x.flat();
    checkMoveAllowed = checkMoveAllowed7x;
    gamebox.style.gridTemplateColumns = "repeat(7, 1fr)";
    gamebox.style.gridTemplateRows = "repeat(7, 1fr)";
    gamebox.style.gridTemplateAreas = "\"".concat(correctOrder7x.map(function (arr) {
      return arr.map(function (_int6) {
        return "f".concat(_int6, "f");
      }).join(" ");
    }).join("\" \""), "\"");
  }
  if (num === 64) {
    correctOrder = correctOrder8x.flat();
    checkMoveAllowed = checkMoveAllowed8x;
    gamebox.style.gridTemplateColumns = "repeat(8, 1fr)";
    gamebox.style.gridTemplateRows = "repeat(8, 1fr)";
    gamebox.style.gridTemplateAreas = "\"".concat(correctOrder8x.map(function (arr) {
      return arr.map(function (_int7) {
        return "f".concat(_int7, "f");
      }).join(" ");
    }).join("\" \""), "\"");
  }
}
function saveEnteredName() {
  var playerName = document.querySelector(".enter-name-input").value;
  if (!playerName) {
    document.querySelector(".enter-name-input").style.borderColor = "red";
    return;
  }
  document.querySelector(".player-name-string").textContent = "Player: ".concat(playerName);
  document.querySelector(".enter-name-field").style.opacity = 0;
  setTimeout(function () {
    document.querySelector(".enter-name-field").classList.add("hidden");
  }, 450);
  document.querySelector(".chosen-param-module").classList.remove("hidden");
  setTimeout(function () {
    document.querySelector(".chosen-param-module").style.opacity = 1;
  }, 50);
  displayDialogueWindow("Welcome, ".concat(playerName, "!"));
}
function displayDialogueWindow(string, bool) {
  clearTimeout(dialogueWindowTimerFunction);
  var window = document.querySelector(".dialogue-window");
  window.textContent = string;
  window.style.transform = "translateY(0)";
  window.style.opacity = "1";
  dialogueWindowTimerFunction = setTimeout(function () {
    window.style.transform = "translateY(-2rem)";
    window.style.opacity = "0";
  }, bool ? 2500 : 1500);
}

///////////////////////////////////////////////
//////////////////////////////// GAME INITIATION //////////////////////////////////

shuffleOrder(chosenParameter);
checkIfPossible(chosenParameter);
window.addEventListener("load", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var savedGame;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          //add menu buttons and other stuff
          addNameAndControls();
          //preload sounds
          clickSound = document.querySelector(".click-sound");
          clickSound.muted = true;
          //check if there is a saved game... hide 'enter name' field, if there is
          savedGame = localStorage.getItem("svdGmPzzlGmDvDvs");
          if (!savedGame) {
            document.querySelector(".offer-saved-game").classList.add("hidden");
          } else document.querySelector(".offer-saved-game-name").textContent = "Your name: ".concat(JSON.parse(savedGame).lastPlayerName);
          //retreive scoreboard data and render it
          addScoresData(JSON.parse(localStorage.getItem("gmPzzlScrsDvDvs")));
          //render default values for 4x4 game
          addTilesToPlay();

          //add gameplay function listener to the gamebox
          gamebox = document.querySelector(".game-box");
          gamebox.addEventListener("click", function (e) {
            e.preventDefault();
            if (!e.target.closest(".game-box__number-box")) return;
            // if (!gameState) return;
            if (!clickSound.muted && clickSound.paused) {
              clickSound.currentTime = 0;
              clickSound.play();
            } else if (!clickSound.muted) {
              clickSound.pause();
              clickSound.currentTime = 0;
              clickSound.play();
            }
            checkStepAddTurn(e);
          });

          //add other listeners and assign variables
          turnsString = document.querySelector(".turns-string");
          timer = document.querySelector(".timer-string");
          btnStartGame = document.querySelector(".btn-start-game");
          btnStartGame.addEventListener("click", startNewGame);
          btnSaveGame = document.querySelector(".btn-save-game");
          btnSaveGame.addEventListener("click", saveThisGame);
          btnLastGame = document.querySelector(".btn-playsaved-game");
          btnLastGame.addEventListener("click", continueLastGame);
          btnScoreboard = document.querySelector(".btn-see-scoreboard");
          btnScoreboard.addEventListener("click", function () {
            toggleWindow(".scoreboard");
          });
          overlay = document.querySelector(".overlay");
          overlay.addEventListener("click", function () {
            if (!document.querySelector(".enter-name-field").classList.contains("hidden")) return;
            if (!document.querySelector(".scoreboard").classList.contains("hidden")) toggleWindow(".scoreboard");
            if (!document.querySelector(".chosen-param-module").classList.contains("hidden")) {
              toggleWindow(".chosen-param-module");
              if (gameState === null) {
                startTimer();
                gameState = true;
                addDragListenersToBoxes();
              }
            }
          });
          btnSaveName = document.querySelector(".btn-enter-name");
          btnSaveName.addEventListener("click", function (e) {
            e.preventDefault();
            saveEnteredName();
          });
          btnChooseParameter = document.querySelector(".btn-choose-grid");
          btnChooseParameter.addEventListener("click", function () {
            toggleWindow(".chosen-param-module");
          });
          chooseParameterGrid = document.querySelector(".chosen-param-module__grid");
          chooseParameterGrid.addEventListener("click", /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
              var par;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (e.target.closest(".chosen-param-div")) {
                        _context.next = 2;
                        break;
                      }
                      return _context.abrupt("return");
                    case 2:
                      par = +e.target.closest(".chosen-param-div").dataset.par;
                      chooseParameter(par);
                      toggleWindow(".chosen-param-module");
                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
          document.querySelector(".btn-no").addEventListener("click", function (e) {
            localStorage.removeItem("svdGmPzzlGmDvDvs");
            document.querySelector(".enter-name-field").classList.remove("hidden");
            document.querySelector(".offer-saved-game").classList.add("hidden");
          });
          document.querySelector(".btn-yes").addEventListener("click", function (e) {
            continueLastGame();
            localStorage.removeItem("svdGmPzzlGmDvDvs");
            toggleWindow(".offer-saved-game");
            document.querySelector(".enter-name-field").classList.add("hidden");
          });
          btnMute = document.querySelector(".btn-sound");
          btnMute.addEventListener("click", function () {
            if (clickSound.muted) {
              btnMute.textContent = "Mute";
              clickSound.muted = false;
              clickSound.play();
            } else {
              btnMute.textContent = "Unmute";
              clickSound.muted = true;
            }
          });
        case 31:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
})();

/******/ })()
;
//# sourceMappingURL=bundle6d1b5c827d63c00018a8.js.map