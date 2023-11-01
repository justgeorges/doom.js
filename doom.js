const gameWindow = document.querySelector("body");
const titleScreen = gameWindow.querySelector(".title-screen");
let gameStarted = false;

gameWindow.addEventListener(
  "click",
  () => {
    console.log(`game started!`);
    titleScreen.classList.add("started");
  },
  { once: true }
);
