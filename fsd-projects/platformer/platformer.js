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
    
    // TODO 1 - Enable the Grid
    var debug = true;
    var invis = "lightblue";
    var fake = "grey"
      if (debug===true){invis = "red",
        fake = "black"
      toggleGrid()};


    // TODO 2 - Create Platforms
    createPlatform(500,400,100,10, invis)
    createPlatform(500,510,100,10, invis)
    createPlatform(200, 600, 100, 10);
    createPlatform(300, 300, -100, 10, fake);
    createPlatform(400, 510, 100, 10);
    createPlatform(500, 400, 10, 120);
    

    createPlatform(700, 600, -100, 10, fake);
    createPlatform(200, 100, 5, 200, invis);

    createPlatform(1300, 150, 10, 100, invis);
    createPlatform(1300, 275, 50, 10);
    createPlatform(1300, 400, 100, 10, invis);
    createPlatform(1200, 325, -100, 10, fake);

    createPlatform(900, 600, 50, 10, invis);
    createPlatform(900, 350, 100, 10);

    createPlatform(1200, 650, 100, 10, invis);




    // TODO 3 - Create Collectables
    createCollectable("database", 500, 400, 0);
    createCollectable("battery", 900, 500, 0);
    createCollectable("scrapmetal", 900, 300, 0);
    createCollectable("wires", 1200, 600, 0);
    createCollectable("broken", 1300, 250, 0);
    createCollectable("gear", 200, 200, 0);

    // TODO 4 - Create Cannons
    createCannon("right", 800, 0);
    createCannon("bottom", 200, 1000);
    createCannon("top", 130, 500);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
