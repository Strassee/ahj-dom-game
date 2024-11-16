import Game from "./game/game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(4, 2000);
  window.game = game;
});
