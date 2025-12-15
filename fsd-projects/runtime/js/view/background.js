var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        ///////////// TODO (several): ////////////////
       // var tree;
        //var buildings = [];

        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            //this controls all the background
            var backgroundFill = draw.bitmap('img/caveBG.png');
            backgroundFill.x = -200;//background x location
            backgroundFill.y = 0;//background y location
            backgroundFill.scaleX = 4;//background x scale
            backgroundFill.scaleY = 1.6;//background y scale     
            background.addChild(backgroundFill);//adds the backgroundFill to the background object, placing it 
            var backgroundFloor = draw.bitmap('img/cavefloorBG.png');
            backgroundFloor.x = -200;//this is for the bottom half of the background x location
            backgroundFloor.y = 450;//same as above x location
            backgroundFloor.scaleX = 4;//background x scale 
            backgroundFloor.scaleY = 1.4;//background y scale 
            background.addChild(backgroundFloor);//adds the backgroundFloor to the background object, placing it 
            /*/ TODO 2: - Add a moon and starfield

            for (var i = 0; i < 100; i++){
                var circle = draw.circle(2.5, "white", "LightGray", 2);//creates a circle with a specified radius, border color, and fill color
                circle.x = canvasWidth * Math.random();// sets a random position witin the canvas width
                circle.y = groundY * Math.random();// set a a random y position within groundY
                background.addChild(circle);//adds circle to background container, allowing visualization
                }
                    var moon = draw.bitmap("img/moon.png");//creates a bitmap object using the moon image and stores it in var moon
                     moon.x = canvas.width- 500;//sets the moon's X position
                     moon.y = groundY - 500;//sets the moon's Y position
                     moon.scaleX = 1;//sets the moon's X scale
                     moon.scaleY = 1;//sets the moon's Y scale
                    background.addChild(moon);//adds the moon variable as a child to background, allowing it to be seen
                
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 3 for a reason! Why?
                for (var i = 0; i < 5; ++i) {
                    var buildingHeight = Math.random() * 400;// sets a random value between 100 and 400 for buildingHeight
                    var colors = ['Blue', 'Black','LighhtGray', 'Pink', 'Grey'];
                    var building = draw.rect(75, buildingHeight, colors[i], "Black", 1);//draws the building
                    building.x = 200 * i;//sets the x coordinate
                    building.y = groundY - buildingHeight;// sets the y coordinate
                    background.addChild(building);//adds this as a child to backgroound
                    buildings.push(building);//pushes the result to an array caled buildings
                }
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");//creates a bitmap object using the tree image and stores it in the variable tree
            tree.x = 0;//sets the x value of the tree
            tree.y = groundY+20;// sets the y value of the tree
            background.addChild(tree);//adds tree to background container*/
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            /*// TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 1;//moves the tree to the left by subtracting from its current x position
           //checks if the tree has gone of the left and rests to the right
            if (tree.x < -200) {
                tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {//sets it so the loop continues untill i <= buildings.length
                var building = buildings[i];//sets buildings equal to a certain index of buildings
                
                building.x--;//subtracts one from the x value of building to move it to the left
                if(building.x < -100){
                    building.x = canvas.width;
                }//if the x value of the building has gone off the left side of the screen it ges back to the right of the screen
            }
                */
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
