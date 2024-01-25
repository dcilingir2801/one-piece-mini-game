## MINI PROJECT | One Piece Multiverse: Save Ace!!

![Game Logo](images/header-img.png)

<summary>
This is a simple web-based game where the player controls the character Luffy to save his sworn brother Ace from the Marines. The game involves navigating Luffy through Marineford, avoiding Marines, and collecting Allies.
</summary>

## Main Functionalities (MVP)

The game encompasses several key functionalities to provide an immersive and enjoyable experience:

- Player Controls: Luffy's movement is controlled using the arrow keys (Arrow Left, Arrow Up, Arrow Right, Arrow Down). The player can navigate Luffy through Marineford, responding to user input for a responsive gaming experience.

- Obstacle Interaction: The game introduces Marines as obstacles that Luffy must avoid. Colliding with a Marine results in a life loss, affecting the energy bar. Additionally, Allies appear randomly, and colliding with them increases the player's score and ally bar.

- Game Loop: The gameLoop() function manages the continuous gameplay by updating the player's position, moving obstacles and allies, and checking for collisions. The loop utilizes window.requestAnimationFrame() to ensure smooth animation.

- Game Over Conditions: The game includes two conditions for ending the game. If the player loses all lives (lives === 0), the endGameLost() function is triggered, displaying the game over screen. If the player collects ten allies (score === 10), the endGameWon() function is called, leading to a victory screen.

- Ally Creation: The createAlly() function generates Allies at random intervals, contributing to the dynamic nature of the game. The player must strategically collect Allies to progress towards victory.

- Obstacle Generation: Obstacles, represented by Marines, are generated randomly with a low probability to maintain game balance. The createObstacle() function handles the creation of new obstacles, ensuring variety in the game environment.

- Game Screens: The game is divided into multiple screens, including the start screen (game-intro), the main game screen (game-screen), and end screens for victory (game-end-won) and defeat (game-end-lost). Each screen is displayed or hidden appropriately to guide the player through the gaming experience.

- Audio Integration: The game incorporates background music and sound effects using the audio element. The audio enhances the overall atmosphere, contributing to an engaging and immersive gameplay experience.

<br>

## Backlog Functionalities

- Improving randomizeAllyGif() to make sure each Ally is shown once and only not yet collected Allies being repeated.

## Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- Audio

## States

- Start Screen
- Game Screen
- Game Lost Screen
- Game Won Screen

## Game Components & Project Structure

<h3>HTML Files</h3>

- index.html: The main HTML file that contains the game layout and structure.

<h3>JavaScript Files</h3>

- script.js: Initializes the game, handles button events, and starts the game loop.
  window.onload;<br>
  startGame(); <br>
  handleKeydown(); <br>
  restartGame()<br>
  location.reload();<br>
- game.js: Defines the Game class, which manages the game logic, player, obstacles, allies, and game states.

  - Game

    Game constructor<br>
    Game.start();<br>
    Game.gameLoop();<br>
    Game.update(elapsedTime);<br>
    Game.createAlly();<br>
    Game.stopAudio();<br>
    Game.endGameLost();<br>
    Game.endGameWon();<br>

  - window.onload;<br>

- player.js: Defines the Player class, representing the player-controlled character Luffy.

  - Player

    Player constructor<br>
    Player.move(elapsedTime);<br>
    Player.updatePosition();<br>
    Player.didCollide(obstacle);<br>
    Player.didCollideAlly(ally);<br>

- obstacle.js: Defines the Obstacle class, representing the Marines that the player must avoid.

  - Obstacle

    Obstacle constructor<br>
    Obstacle.updatePosition();<br>
    Obstacle.move(elapsedTime);<br>

- ally.js: Defines the Ally class, representing the allies that the player must collect.

  - Ally

    Ally constructor<br>
    Ally.randomizeAllyGif();<br>
    Ally.updatePosition();<br>
    Ally.move(elapsedTime);<br>

<h3>CSS File</h3>

- style.css: Contains the styling for the game interface, screens, and elements.

## Extra Links

<h3>Deploy</h3>
<a href="https://dcilingir2801.github.io/one-piece-mini-game/">Play the Game!</a>

## Credits

Game assets and images are from the One Piece series. <br>
Background music is provided by the respective audio files in the audio folder.<br>
Feel free to modify and extend the game as needed. <br>

Note: Make sure to optimize the GIFs used in the game for better performance. If the issue persists, consider checking the system and browser resources for potential bottlenecks.
