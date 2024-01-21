class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameStats = document.getElementById("game-stats");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      140,
      190,
      "./images/LuffyWalk.gif"
    );
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameStats.style.display = "flex";
    this.gameScreen.style.display = "flex";
  }
}
