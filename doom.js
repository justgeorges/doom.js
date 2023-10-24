const gameWindow = document.querySelector("body");
const gameStart = gameWindow.querySelector(".page-loader");

function startGame(e) {
  console.log("game started!");
  console.log(e);
}

gameStart.addEventListener("click", startGame);
