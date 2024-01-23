class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameStats = document.getElementById("game-stats");
    this.gameEndScreenWon = document.getElementById("game-end-won");
    this.gameEndScreenLost = document.getElementById("game-end-lost");
    this.energyBar = document.querySelector("#energyBar");
    this.allyBar = document.querySelector("#allyBar");
    this.player = new Player(
      this.gameScreen,
      200,
      550,
      110,
      120,
      "/images/LuffyRun.gif"
    );
    this.obstacles = [];
    this.allies = [];
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
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }

    for (let i = 0; i < this.allies.length; i++) {
        const ally = this.allies[i];
        ally.move();
        if (this.player.didCollideAlly(ally)) {
            this.score++;
          ally.element.remove();
          this.allies.splice(i, 1);
          i--;
          let progressAlly = this.score * 10;
          this.allyBar.style.width = `${progressAlly}%`;
  
        } else if (ally.right > width) {
          this.score++;
          ally.element.remove();
          this.allies.splice(i, 1);
          i--;
        }
      }

    if (this.lives === 0) {
      this.endGameLost();
    }

    if (this.score === 10) {
        this.endGameWon();
      }

    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }

    if (Math.random() > 0.98 && this.allies.length < 1) {
        this.allies.push(new Ally(this.gameScreen));
      }
  }

  endGameLost() {
    this.player.element.remove();
    this.obstacles.forEach(function (obstacle) {
        obstacle.element.remove();
      });
      this.allies.forEach(function (ally) {
          ally.element.remove();
      });

    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameStats.style.display = "none";
    this.gameEndScreenLost.style.display = "flex";
  }

  endGameWon() {
    this.player.element.remove();
    this.obstacles.forEach(function (obstacle) {
      obstacle.element.remove();
    });
    this.allies.forEach(function (ally) {
        ally.element.remove();
    });

    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameStats.style.display = "none";
    this.gameEndScreenWon.style.display = "flex";
  }

   createObstacle() {
    let newObstacle;
    do {
      newObstacle = new Obstacle(this.gameScreen);
    } while (this.checkOverlap(newObstacle, this.obstacles));

    this.obstacles.push(newObstacle);
  }

  createAlly() {
    let newAlly;
    do {
      newAlly = new Ally(this.gameScreen);
    } while (this.checkOverlap(newAlly, this.allies));

    this.allies.push(newAlly);
  }

  checkOverlap(item, items) {
    for (const existingItem of items) {
      if (this.detectCollision(item, existingItem)) {
        return true;
      }
    }
    return false;
  }

  detectCollision(item1, item2) {
    const rect1 = item1.element.getBoundingClientRect();
    const rect2 = item2.element.getBoundingClientRect();

    return (
      rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top
    );
  }

}
