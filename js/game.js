class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameStats = document.getElementById("game-stats");
    this.gameEndScreenWon = document.getElementById("game-end-won");
    this.gameEndScreenLost = document.getElementById("game-end-lost");
    this.energyBar = document.querySelector("#energyBar");
    this.allyBar = document.querySelector("#allyBar");
    this.audio = document.querySelector('#drumsOfLiberation');
    this.sadSong = document.querySelector("#sadSong");
    this.happySong = document.querySelector("#happySong");
    this.introSong = document.querySelector("#introSong");
    this.player = new Player(
      this.gameScreen,
      200,
      550,
      100,
      110,
      "./images/LuffyRun.gif"
    );
    this.obstacles = [];
    this.allies = [];
    this.collectedAllies = [];
    this.lives = 3;
    this.score = 0;
    this.allyGifs = [
      "./images/Hancock.gif",
      "./images/Jinbei.gif",
      "./images/BonChan.gif",
      "./images/Ivankov.gif",
      "./images/Whitebeard.gif",
      "./images/Buggy.gif",
      "./images/Crocodile.gif",
      "./images/LawNew.gif",
      "./images/Mr3.gif",
  //  "./images/Marco.gif"
    ];
  }

  start() {
    this.introSong.remove();
    this.startScreen.style.display = "none";
    this.gameStats.style.display = "flex";
    this.gameScreen.style.display = "flex";
    this.createAlly(); 
    this.gameLoop();
    this.audio.play();
    this.audio.loop = true;

  }

  gameLoop() {
    if (this.gameIsOver) {
      return;
    }
  
    const currentTime = performance.now();
    const elapsedTime = currentTime - this.lastFrameTime || 0;
    this.lastFrameTime = currentTime;
  
    this.update(elapsedTime);
    window.requestAnimationFrame(() => this.gameLoop());
  }

  update(elapsedTime) {
    this.player.move(elapsedTime);
    const { width } = this.gameScreen.getBoundingClientRect();

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move(elapsedTime);
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        i--;
        let progress = this.lives * 33;
        this.energyBar.style.width = `${progress}%`;
      } else if (obstacle.right > width) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }

    for (let i = 0; i < this.allies.length; i++) {
      const ally = this.allies[i];
      ally.move(elapsedTime);
      if (this.player.didCollideAlly(ally)) {
        this.collectedAllies.push(ally);
                console.log(this.collectedAllies);
        this.score++;
        ally.element.remove();
        this.allies.splice(i, 1);
        i--;
        let progressAlly = this.score * 10;
        this.allyBar.style.width = `${progressAlly}%`;
        this.createAlly(); 
      } else if (ally.right > width) {
        ally.element.remove();
        this.allies.splice(i, 1);
        i--;
        this.createAlly(); 
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
  }

  createAlly() {
    const ally = new Ally(this.gameScreen, this.allyGifs);
    this.allies.push(ally);
  }

  /*  createAlly() {
    const ally = new Ally(this.gameScreen, this.allyGifs);
    for (let i = 0; i < this.allyGifs.length; i++) {
      if (this.collectedAllies.indexOf(ally)) {
        return createAlly();
      } else {
        return this.allies.push(ally);
      }
  }
}*/

  stopAudio() {
    this.audio.pause();
  }

  endGameLost() {
    this.stopAudio();
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
    this.sadSong.play();
  }

  endGameWon() {
    this.stopAudio();
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
    this.happySong.play();
  }
}
