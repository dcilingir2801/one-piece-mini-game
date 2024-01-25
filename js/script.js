window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const restartButtonLost = document.getElementById("restart-button-lost")
    const introSong = document.getElementById("introSong");
    let game;

    introSong.play();
  
    startButton.addEventListener("click", function () {
      startGame();
    });
  
    function startGame() {
      console.log("start game");
      game = new Game();
      game.start();
    
      window.addEventListener("keydown", handleKeydown);
    }

    function handleKeydown(event) {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
      ];
  
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
  
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -1;
            break;
          case "ArrowUp":
            game.player.directionY = -1;
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            break;
          case "ArrowDown":
            game.player.directionY = 1;
            break;
        }
      }
    }
  

    restartButton.addEventListener("click", function () {
        restartGame();
      });
    
      function restartGame() {
        location.reload();
      }
      window.addEventListener("keydown", handleKeydown);

      restartButtonLost.addEventListener("click", function () {
        restartGame();
      });
    
      function restartGame() {
        location.reload();
      }
      window.addEventListener("keydown", handleKeydown);
};