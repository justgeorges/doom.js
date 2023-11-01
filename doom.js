const gameWindow = document.querySelector("body");
let gameStarted = false;

gameWindow.addEventListener(
  "click",
  () => {
    console.log(`game started!`);
  },
  { once: true }
);
