```
{
// Required code modules
const Monster = require("./p5-monster.js");


/*** Game Class ***/
/* Constructor expects an object */
// IMPORTANT: When declaring a class within a module,
// the class is the ONLY export!
module.exports = class MonsterGame {
  constructor({
    monsterList = [],
    gameDelayInMilliseconds = 5000,
    minimumLifeDrain = 1,
    maximumLifeDrain = 30,
  }) {
    console.log("Initializing monsters...");
    this.gameDelayInMilliseconds = gameDelayInMilliseconds;
    this.minimumLifeDrain = minimumLifeDrain;
    this.maximumLifeDrain = maximumLifeDrain;
    this.createMonsters(monsterList);
    console.log("Monsters initialized, ready to play!");
  }

  // List monsters
  listMonsters = () => {
    console.log("You must write this method");
    monsterList.forEach(function callbackFn(currentMonster){
    
    })
  }

  // Create monsters from monster information
  createMonsters = (monsterList = []) => {
    this.monsters = monsterList.map((monster) => new Monster(monster));
  };

  // Update monster life value
  /*
  updateLife = (lifeChange = 0) =>
    this.monsters.forEach((monster) => monster.updateLife(lifeChange));
  */

  // Main game playing method, will exit when all monsters have died
  async playGame(GameDelay) {
    console.log("Starting game...");
    let monstersAreAlive = true;
    do {
      // Sleep game
      console.log(
        `Sleeping for ${this.gameDelayInMilliseconds} milliseconds...`
      );
      await sleep(this.gameDelayInMilliseconds);

      // Call each monster's random life drain method
      this.monsters.forEach((monster) => {
          if (monster.isAlive) {
            monster.randomLifeDrain(this.minimumLifeDrain, this.maximumLifeDrain)
          }
        }
      );

      // List monsters
     listMonsters= () => {
        let monsterList = [{
          monsterName: "",
          minimumLife: "",
          currentLife: ""
        }]
      };

      // Check if any monsters are alive and set Boolean
      monstersAreAlive =
        this.monsters.filter((monster) => monster.isAlive).length > 0;

      // See if any monsters are still alive
      if (!monstersAreAlive) {
        console.log('All monsters have died, game over!');
      }
    } while (monstersAreAlive);
  }
};

// Game loop

/*** Utility Functions ***/
// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
}
```


```
{
class Monster {
    constructor({monsterName = 'Unknown',minimumLife = '0',currentLife = '100'}) {
        this.monsterName = monsterName,
        this.minimumLife = minimumLife,
        this.currentLife = currentLife
        this.isAlive = (currentLife >= minimumLife) ? "True" : "False" ;
    }

updateLife(lifeChangeAmount) {
    let minimumLife = this.currentLife = (this.currentLife - lifeChangeAmount) < 0 ? 0: this.currentLife - lifeChangeAmount
    let currentLife = this.isAlive = this.currentLife < this.minimumLife ? true : false;
}

randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
if (maximumLifeDrain > minimumLifeDrain) {
let lifeChangeAmount = getRandomInteger(minimumLifeDrain, maximumLifeDrain);
updateLife(lifeChangeAmount);
}
}
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

}
```


```
{
/*
    CIT 281 Project 5:

    Name: Mehak Dedmari
*/

// IMPORTANT: Note no object deconstruction when importing a class
// from a class module
const MonsterGame = require("./p5-monster-game.js");

// Game monsters setup information
const monsterList = [
  {
    monsterName: "King Kong",
    minimumLife: 10,
    currentLife: 150,
  },
  {
    monsterName: "Godzilla",
    minimumLife: 10,
    currentLife: 200,
  },
];
// Game configuration information
const minimumLifeDrain = 10;
const maximumLifeDrain = 50;
const gameDelayInMilliseconds = 5000; // 5 second game delay

// Create Monster Game instance
const monsterGame = new MonsterGame(
  {
    monsterList, gameDelayInMilliseconds, minimumLifeDrain, maximumLifeDrain
  }
);

// List monsters
monsterGame.listMonsters();

// Start game
monsterGame.playGame();
}
```
