import Game from "./game/game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.querySelector(".game"));
  window.game = game;
  game.addPicture();
  setInterval(() => {
    game.deletePicture();
    game.addPicture();
  }, 2000);
});
