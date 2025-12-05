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
          { type: "obstacle", x: 400, y: groundY -10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 700, y: groundY -10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 900, y: groundY -10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 900, y: groundY -10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 2200, y: groundY -10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 1900, y: groundY -10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 1600, y: groundY -10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 3100, y: groundY -10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "obstacle", x: 3500, y: groundY -10, damage: 10, rotation: 0, hitZone: 24, image: 'img/stalagmite (1).png' , offsetX: -85, offsetY: -60, scale: 0.7},
          { type: "enemy", x: 2400, y: groundY +20, damage: 10, hitZone: 24, image: 'img/runWolf.png' , offsetX: -85, offsetY: -60, scale: 0.5, velocity: -3 },
          { type: "enemy", x: 1200, y: groundY -115, damage: 20, hitZone: 24, image: 'img/flyingBat.png' , offsetX: -50, offsetY: -60, scale: 0.1, velocity: -2},
          { type: "enemy", x: 1200, y: groundY +20, damage: 10, hitZone: 24, image: 'img/runWolf.png' , offsetX: -85, offsetY: -60, scale: 0.5, velocity: -2},
          { type: "reward", x: 1400, y: groundY -50, damage: -10},
          { type: "reward", x: 2100, y: groundY -50, damage: -10},
          { type: "reward", x: 3200, y: groundY -50, damage: -10},
          { type: "levelMarker", x: 5000, y: groundY -50, damage: -50}
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
