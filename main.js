/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/game/game.js

class Game {
  constructor(element) {
    this._element = element;
    this.img = document.createElement("img");
    this.img.src = goblin_namespaceObject;
    this.img.alt = "goblin";
    this.img.classList.add("picture");
    this.tds = this._element.querySelectorAll(".td");
    this.lastposition = this.randomInteger(0, 3);
  }
  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  deletePicture() {
    const picture = this._element.querySelector(".picture");
    picture.parentNode.classList.remove("tdpicture");
    picture.remove();
  }
  addPicture() {
    let position = "";
    do {
      position = this.randomInteger(0, 15);
    } while (position === this.lastposition);
    this.tds[position].appendChild(this.img);
    this.tds[position].classList.add("tdpicture");
    this.lastposition = position;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.querySelector(".game"));
  window.game = game;
  game.addPicture();
  setInterval(() => {
    game.deletePicture();
    game.addPicture();
  }, 2000);
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;