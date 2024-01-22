class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameStats = document.getElementById("game-stats");
    this.gameEndScreen = document.getElementById("game-end");
    this.energyBar = document.querySelector("#energyBar");
    this.allyBar = document.querySelector("#allyBar");
    this.player = new Player(
      this.gameScreen,
      200,
      550,
      110,
      120,
      "/images/LuffyWalk-ezgif.com-crop.gif"
    );
    this.obstacles = [];
    this.lives = 5;
    this.score = 0;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameStats.style.display = "flex";
    this.gameScreen.style.display = "flex";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    console.log("in the game loop");

    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {
    this.player.move();
    const { width } = this.gameScreen.getBoundingClientRect();
    console.log(width);
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        i--;
        let progress = this.lives * 20;
        this.energyBar.style.width = `${progress}%`;

      } else if (obstacle.right > width) {
        this.score++;
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }

    if (this.lives === 0) {
      this.endGame();
    }

    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }

    let progress = ((this.lices + 1) / questions.length) * 100;
    this.energyBar.style.width = `${progress}%`;
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach(function (obstacle) {
      obstacle.element.remove();
    });

    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
