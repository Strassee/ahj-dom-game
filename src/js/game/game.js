import pic from "../../img/goblin.png";

export default class Game {
  constructor(element) {
    this._element = element;
    this.img = document.createElement("img");
    this.img.src = pic;
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
