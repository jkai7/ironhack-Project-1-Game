
var canvas = document.getElementById("gameCanvas"); 
var ctx = canvas.getContext("2d");

var img = new Image();  // book image
img.src = "/images/openBookIllustrator.svg"

var bookHeight = 180;
var bookWidth = 200;
var bookX = (canvas.width-bookWidth) / 1.73; //centering the book image on canvas
var bookY = (canvas.height-bookHeight) / 0.8;

/* not moving is default */
var rightGo = false; 
var leftGo = false;
var upGo = false;
var downGo = false;

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

/* draw items on canvas */
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears previous iterations drawn on canvas
    ctx.drawImage(img, bookX, bookY, bookWidth, bookHeight); //drawing the book onto the canvas

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
}

document.addEventListener("keydown", isPressed, false); //sees if key is pressed down
document.addEventListener("keyup", notPressed, false); // sees if key is not pressed down

setInterval(draw,10); //intervals images are drawn per sercond


