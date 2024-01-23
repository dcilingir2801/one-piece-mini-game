class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.right = 10;
      this.top = Math.floor(Math.random() * 150 + 390);
      this.bottom = 10;
      this.width = 100;
      this.height = 130;
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
  
    move() {
      this.right += 1;
      this.updatePosition();
    }
  }