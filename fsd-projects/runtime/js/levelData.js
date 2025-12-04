var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 700, y: groundY - 10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 900, y: groundY -10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "enemy", x: 400, y: groundY -10, damage: 10},
          { type: "enemy", x: 800, y: groundY -100, damage: 10},
          { type: "enemy", x: 1200, y: groundY -10, damage: 10},
          { type: "reward", x: 700, y: groundY -50, damage: -10},
          { type: "reward", x: 1400, y: groundY -50, damage: -10},
          { type: "levelMarker", x: 2100, y: groundY -50, damage: -100}
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 600, y: groundY, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 900, y: groundY, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
