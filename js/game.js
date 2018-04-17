
var canvas = document.getElementById("gameCanvas"); 
var ctx = canvas.getContext("2d");


window.onload = function() {
    reset();
    document.getElementById("start-btn").onclick = function (){
    startGame();
}

function startGame(){ 
    blockStart();
    setInterval(draw,100);    
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

var bookImg = new Image();  // book image
bookImg.src = "/images/openBookIllustrator.svg"

var bookHeight = 180;
var bookWidth = 200;
var bookX = (canvas.width-bookWidth) / 1.73; //centering the book image on canvas
var bookY = (canvas.height-bookHeight) / 0.8;

/* not moving is default */
var rightGo = false; 
var leftGo = false;
var upGo = false;
var downGo = false;

/* wrong letters to catch */
// function letters(){
// this.letterObstacles = [];
// this.directionX = x;
// this.directionY = y;
// this.speedX = 0;
// this.speedY = 0;
//   ctx.font = '60px Poppins';
//   ctx.fillStyle = '#7FFFD4';
//   ctx.fillText  ('K', 280, 150);

// }

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
var letterX = getRandom(canvas.width); // letter positioning on x axis
var letterY = canvas.height - 400;// starting point of decent
var directionX = 0;
var directionY = 2;

function letterFall(){
    ctx.font = '60px Poppins';
    ctx.fillStyle = '#7FFFD4';
    console.log("test:", test.letters);

    for(var i = 0; i < test.letters.length; i++){

        ctx.fillText  (test.letters[0], letterX, letterY);//fill the text with a random letter 
    }

    letterX += directionX;
    letterY += directionY;
  };

  var test;
/* draw items on canvas */
function draw() {
    console.log("redraw")
    test = new Letter();

test.pickRandomLetter();
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

  
    

  
  
  // ctx.font = "20px arial";
    // ctx.fillText(function makeLetter() {
    //     var letter = "";
    //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
    //     for (var i = 0; i < 2; i++)
    //       letter += possible.charAt(Math.floor(Math.random() * possible.length));
      
    //     return text;
    //   });
    //   makeLetter();




    // var fontSize= 60;
// // set it
// ctx.font = fontSize+'px Poppins';
// // the text position
// var x = 50, y=50;
// // the string to draw
// var str = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// ctx.strokeStyle="red";

// // get every characters positions
// var chars = [];
// for(var i=0; i<str.length;i++) {
//     if (str[i] === []) 
//     	chars.push(i);
// }
// //iterate through the characters list
// for(var i=0; i<chars.length; i++){
//   // get the x position of this character
//   var xPos = x+ctx.measureText(str.substring(0,chars[i])).width;
//   // get the width of this character
//   var width = ctx.measureText(str.substring(chars[i],chars[i]+1)).width;
//   // get its height through the 1.286 approximation
//   var height = fontSize*1.286;
//   // get the y position
//   var yPos = y-height/1.5
//   // draw the rect
//   ctx.strokeRect(xPos, yPos, width, height);
  //}
// draw our text
// ctx.fillText(str, x, y);

}

// function drawLetter(){
//     //ctx.clearRect(0, 0, canvas.width, canvas.height); //clears previous iterations drawn on canvas
//     letterFall();
// }

document.addEventListener("keydown", isPressed, false); //sees if key is pressed down
document.addEventListener("keyup", notPressed, false); // sees if key is not pressed down

}; // window on load END



// function letters(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.update = function(){
//         ctx = myGameArea.context;
//     }
//     this.newPos = function() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//     }
// }
