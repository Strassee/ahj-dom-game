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
  constructor(size, speed) {
    this.app = document.querySelector(".app");
    this.lastposition = this.randomInteger(0, 3);
    this.size = size;
    this.speed = speed;
    this.createGame();
  }
  createGame() {
    this.img = document.createElement("img");
    this.img.src = goblin_namespaceObject;
    this.img.alt = "goblin";
    this.img.classList.add("picture");
    this.tableGame = document.createElement("table");
    this.tr = document.createElement("tr");
    for (let i = 0; i < this.size; i++) {
      this.tr.appendChild(document.createElement("td"));
    }
    for (let i = 0; i < this.size; i++) {
      this.tableGame.appendChild(this.tr.cloneNode(true));
    }
    this.app.appendChild(this.tableGame);
    this.tds = this.tableGame.querySelectorAll("td");
    this.addPicture();
    setInterval(() => {
      this.deletePicture();
      this.addPicture();
    }, this.speed);
  }
  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  deletePicture() {
    const picture = this.tableGame.querySelector(".picture");
    picture.parentNode.classList.remove("tdpicture");
    picture.remove();
  }
  addPicture() {
    let position = "";
    do {
      position = this.randomInteger(0, Math.pow(this.size, 2) - 1);
    } while (position === this.lastposition);
    this.tds[position].appendChild(this.img);
    this.tds[position].classList.add("tdpicture");
    this.lastposition = position;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(4, 2000);
  window.game = game;
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;