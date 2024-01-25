class Ally {
  constructor(gameScreen, allyGifs) {
    this.gameScreen = gameScreen;
    this.right = -100;
    this.top = Math.floor(Math.random() * 150 + 390);
    this.bottom = 10;
    this.width = 100;
    this.height = 130;
    this.allyGifs = allyGifs;
    this.element = document.createElement("img");

    this.randomizeAllyGif();

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.right = `${this.right}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.bottom = `${this.bottom}px`;

    this.gameScreen.appendChild(this.element);
  }

  randomizeAllyGif() {
    const randomIndex = Math.floor(Math.random() * this.allyGifs.length);
    this.element.src = this.allyGifs[randomIndex];
  }

  updatePosition() {
    this.element.style.right = `${this.right}px`;
    this.element.style.top = `${this.top}px`;
  }

  move(elapsedTime) {
    this.right += elapsedTime * 0.2; 
    this.updatePosition();
  }

  /*didCollideAllyObstacle(ally) {
    const obstacleRect = this.element.getBoundingClientRect();
    const allyRect = ally.element.getBoundingClientRect();

    if (
      obstacleRect.left < allyRect.right &&
      obstacleRect.right > allyRect.left &&
      obstacleRect.top < allyRect.bottom &&
      obstacleRect.bottom > allyRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }*/
}