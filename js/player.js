class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
  
      this.element.src = imgSrc;
      this.element.style.position = "absolute";
      this.element.style.width = `${width}px`;
      this.element.style.height = `${height}px`;
      this.element.style.left = `${left}px`;
      this.element.style.top = `${top}px`;
  
      this.gameScreen.appendChild(this.element);
    }

    move(elapsedTime) {
      this.left += this.directionX * elapsedTime * 0.2; 
      this.top += this.directionY * elapsedTime * 0.2;
      this.updatePosition();

    if (this.left < 10) {
      this.left = 10;
    }

    if (this.top < 400) {
      this.top = 400;
    }

    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    this.updatePosition();
    
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }

  didCollideAlly(ally) {
    const playerRect = this.element.getBoundingClientRect();
    const allyRect = ally.element.getBoundingClientRect();

    if (
      playerRect.left < allyRect.right &&
      playerRect.right > allyRect.left &&
      playerRect.top < allyRect.bottom &&
      playerRect.bottom > allyRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
  
}