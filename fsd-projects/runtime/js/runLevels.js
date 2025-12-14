var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacle(x, y, damage, rotation, hitZone, image, offsetX, offsetY, scale){
      var hitZoneSize = hitZone;//where collison causes damage
      var damageFromObstacle = damage;//damage obstacle deals on collision
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the obstacle, gives it a size, and dictates how much damage it'll do before storing the variable
      obstacleHitZone.x = x;//sets the obstacle's x position
      obstacleHitZone.y = y;//sets the obstacle's y position
      game.addGameItem(obstacleHitZone);//adds the item to the game's playfield
      var obstacleImage = draw.bitmap(image);//draws sawblade sprite a a bitmap and stores the image
      obstacleHitZone.addChild(obstacleImage);//takes the sprite of the saw and adds it as a child to the hitzone
      obstacleImage.x = offsetX;//offset to place the obstacle sprite horizontally onto the hitzone
      obstacleImage.y = offsetY;//offset to place the obstacle sprite vertically onto the hitzone
      obstacleImage.scaleX = scale;
      obstacleImage.scaleY = scale;

      obstacleHitZone.rotationalVelocity = rotation;
    }


    function createEnemy(x, y, damage, hitZone, image, offsetX, offsetY, scale, velocity) {
     // all code from TODO 11 and 12

      var enemy = game.createGameItem("enemy", hitZone);//creates a hitzone and stores it i the variable enemy
      var enemySprite = draw.bitmap(image);//draws the sprite for the enemy and stores it
      enemySprite.x = offsetX;//horizontal offset to place the sprite onto the hitbox
      enemySprite.y = offsetY;//vertical offset to place the sprite onto the hitbox
      enemySprite.scaleX = scale;
      enemySprite.scaleY = scale;
      enemy.addChild(enemySprite);//adds enemySprite to enemy as a child
      enemy.x = x;//sets the enemy x position
      enemy.y = y - 50;// sets the enemy y position
      game.addGameItem(enemy);//adds enemy to game
      enemy.velocityX = velocity;//movement speed of enemy
      
      //handles what happens when Halle collides with an enemy
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(damage)//reduces player health
      }
      //handles when Halle shoots an enemy
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);//increases player score when an enemy is shot
        //enemy fades away when shot
        enemy.fadeOut();
      }
    }



  

      function createReward(x, y, damage, image, scale, offset) {
      var reward = game.createGameItem("reward", 30);//creates a hitzone and stores it i the variable reward
      var rewardSprite = draw.bitmap(image);//draws the sprite for the reward and stores it
      rewardSprite.x = offset;//horizontal offset to place the sprite onto the hitbox
      rewardSprite.y = offset;//vertical offset to place the sprite onto the hitbox
      reward.addChild(rewardSprite);//adds rewardSprite to reward as a child
      reward.x = x;//sets the reward x position
      reward.y = y - 50;// sets the reward y position
      game.addGameItem(reward);//adds reward to game
      reward.velocityX = -2;//movement speed of reward
      reward.scaleX = scale;
      reward.scaleY = scale;
      //handles what happens when Halle collides with a reward
      reward.onPlayerCollision = function () {
        game.changeIntegrity(damage)//increases player health
        reward.fadeOut();
      }
    }

    


      function createLevelMarker(x, y, damage) {
      var levelMarker = game.createGameItem("level", 24);//creates a hitzone and stores it i the variable levelMarker
      var levelSprite = draw.bitmap('img/Homestretch.webp');//draws the sprite for the levelMarker and stores it
      levelSprite.x = -25;//horizontal offset to place the sprite onto the hitbox
      levelSprite.y = -25;//vertical offset to place the sprite onto the hitbox
      levelMarker.addChild(levelSprite);//adds levelSprite to levelMarker as a child
      levelMarker.x = x;//sets the levelMarker x position
      levelMarker.y = y - 50;// sets the levelMarker y position
      game.addGameItem(levelMarker);//adds levelMarker to game
      levelMarker.velocityX = -2;//movement speed of levelMarker
      //handles what happens when Halle collides with a levelMarker
      levelMarker.onPlayerCollision = function () {
        game.changeIntegrity(damage)//increases player health
        startLevel();
        levelMarker.fadeOut();
      }
    }

    

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];//fetches the current level for the levelData array and stores it
      var levelObjects = level.gameItems;//retrieves the array of gameItems and stores it 
      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];
        if(element.type === 'obstacle') {
          createObstacle(element.x, element.y, element.damage, element.rotation, element.hitZone, element.image, element.offsetX, element.offsetY, element.scale);
          //x, y, damage, rotation, hitZone, image, offsetX, offsetY, scale
        }
        if(element.type === 'enemy') {
          createEnemy(element.x, element.y, element.damage, element.hitZone, element.image, element.offsetX, element.offsetY, element.scale, element.velocity);
        }
        if(element.type === 'reward') {
          createReward(element.x, element.y, element.damage, element.image, element.scale, element.offset);
        }
        if(element.type === 'levelMarker') {
          createLevelMarker(element.x, element.y, element.damage, element.image);
        }
      }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
