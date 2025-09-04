$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
    var debug = true;
    var platcolor = "lightblue";
      if (debug===true){platcolor = "red"};
    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 600, 100, 10);
    createPlatform(400, 500, 100, 10);
    createPlatform(500, 400, 10, 100);
    createPlatform(500,400,100,10, platcolor)
    createPlatform(500,510,100,10, platcolor)

    // TODO 3 - Create Collectables
    createCollectable("database", 500, 400, 0);


    
    // TODO 4 - Create Cannons
    createCannon("right", 900, 0);
    createCannon("bottom", 200, 1000);
    createCannon("top", 130, 500);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
