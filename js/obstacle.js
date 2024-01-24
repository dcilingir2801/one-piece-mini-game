class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.right = 100;
      this.top = Math.floor(Math.random() * 150 + 400);
      this.bottom = 10;
      this.width = 85;
      this.height = 115;
      this.element = document.createElement("img");
  
      this.element.src = "/images/MarineRun.gif";
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.right = `${this.right}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.bottom = `${this.bottom}px`;
  
      this.gameScreen.appendChild(this.element);
    }
  
    updatePosition() {
      this.element.style.right = `${this.right}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move(elapsedTime) {
      this.right += elapsedTime * 0.2;
      this.updatePosition();
    }
  }