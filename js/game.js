
var canvas = document.getElementById("gameCanvas"); 
var ctx = canvas.getContext("2d");


window.onload = function() {
    reset(); //restsrt button reloads page
    document.getElementById("start-btn").onclick = function (){ //start btn starts game
    startGame();
}

function startGame(){ 
    blockStart(); //allows user to only press start once
    setInterval(draw, 10); 
    reDraw(); // redraws letters
       
};

function reset(){ //resets game board
    document.getElementById("reset").onclick = function (){
        location.reload();
    }
}

function blockStart(){ //prevents player from hiiting start after game initializes
    var btnElement = document.getElementById("start-btn");
    btnElement.classList.add("blocked");
}

/* image of book */
var bookImg = new Image();  // book image
bookImg.src = "/images/openBookIllustrator.svg"

/* defines book */
var bookHeight = 180;
var bookWidth = 200;
var bookX = (canvas.width-bookWidth) / 1.73; //centering the book image on canvas
var bookY = (canvas.height-bookHeight) / 0.8;

/* not moving is default */
var rightGo = false; 
var leftGo = false;
var upGo = false;
var downGo = false;


/* moving the book if key is pressed */
function isPressed(yes){    
    if(yes.keyCode == 39){ //if right arrow is pressed, go right
            // console.log("true");
        rightGo = true;
    }else if(yes.keyCode == 37){ // if left arrow is pressed, go left
            // console.log("true");
        leftGo = true;
    }else if(yes.keyCode == 38){ //if up arrow is pressed, go up
        upGo = true;
    }else if(yes.keyCode == 40){ // if down arrow is pressed, go down
        downGo = true;
    }
}

/* stops moving book if key is not pressed */
function notPressed(no){
    if(no.keyCode == 39){ // if right arrow is not pressed, stop
        rightGo = false;
    }else if(no.keyCode == 37){ // if left arrow is not pressed, stop
        leftGo = false;
    }else if(no.keyCode == 38){ //if up arrow is not pressed, stop
        upGo = false;
    }else if(no.keyCode == 40){ // if down arrow is not pressed, stop
        downGo = false;
    }
}

//===============================================
//var letterX = getRandom(canvas.width - 20) + 10; // letter positioning on x axis
//var letterY = canvas.height - 450;// starting point of decent
// var directionX = 0;
// var directionY = 1;

// function letterFall(){
//     ctx.font = '60px Poppins';
//     ctx.fillStyle = '#7FFFD4';
//     ctx.fillText  (oneRandomLetter, letterX, letterY);//fill the text with a random letter 
//     letterX += directionX;
//     letterY += directionY;
//   };
//================================================

var spawnLineY = canvas.height - 450; // newly spawned objects start at 50 px on top of y -450

var spawnRate = 1500; // spawn a new object every 1500ms

var spawnRateOfDescent = 2; // how fast objects will fall

var lastSpawn = -1; // when was the last object spawned

var spawnedObjects = []; // this array holds all spawned object

var startTime = Date.now(); // save the starting time (used to calc elapsed time)

function spawnRandomLetter() {

//var letter;   // select a random type for this new object

var spawnedLetter = {

  letterX: getRandom(canvas.width - 20) + 10,   // set x randomly but at least 15px off the canvas edges

  letterY: spawnLineY, // set y to start on the line where spawnedObjects are spawned
}

spawnedObjects.push(spawnedLetter); // add the new object to the spawnedObjects[] array

}

function reDraw() {

    var time = Date.now(); // get the elapsed time
    
    // setTimeout(function() {
        
    //     var millis = Date.now() - time;

    //   }, 1000);
  
    /* see if its time to spawn a new object */
    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawnRandomLetter();
        
    }
    requestAnimationFrame(reDraw);  // request another animation frame
    
    
    /* move each object down the canvas */
    for (var i = 0; i < spawnedObjects.length; i++) {
        var letter = spawnedObjects[i];
        letter.letterY += spawnRateOfDescent;
        ctx.font = '60px Poppins';
        ctx.fillStyle = '#7FFFD4';
        ctx.fillText  (oneRandomLetter, letter.letterX, letter.letterY);
    }
    
   
  }

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears previous iterations drawn on canvas
    ctx.drawImage(bookImg, bookX, bookY, bookWidth, bookHeight); //drawing the book onto the canvas

    if(rightGo && bookX < canvas.width - bookWidth + 82){ // if right arrow pressed and book width adjust not touching edge, keep moving
        bookX +=5; // move 5 pixels to right everytime frame is drawn
    }else if(leftGo && bookX > - 24){ // if left arrow pressed and book width adjusted and not touching edge, kepp moving
        bookX -=5; //move 5 pixels to the left everytime frame is drawn
    }else if(downGo && bookY < canvas.height - 100){ // if down arrow pressed and book height adjust not touching edge, keep moving
        bookY +=3; // move 3 pixels down everytime frame is drawn
    }else if(upGo && bookY > - 72){ // if up arrow pressed and book height adjusted and not touching edge, kepp moving
        bookY -=3; //move 3 pixels up everytime frame is drawn
    }

}

document.addEventListener("keydown", isPressed, false); //sees if key is pressed down
document.addEventListener("keyup", notPressed, false); // sees if key is not pressed down

}; //================ window on load END



