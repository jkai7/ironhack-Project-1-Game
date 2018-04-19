
var canvas = document.getElementById("gameCanvas"); //canvas element
var ctx = canvas.getContext("2d"); //what type of canvas it is 


window.onload = function() {
    reset(); //restsrt button reloads page
    document.getElementById("start-btn").onclick = function (){ //start btn starts game
    startGame();
}

function startGame(){  // start game 
    blockStart(); //allows user to only press start once
    setInterval(draw, 10); // call the draw function every 10 milliseconds
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
bookImg.src = "/images/bookVec2.svg"

/* defines book */
var book = ctx.drawImage(bookImg, bookX, bookY, bookWidth, bookHeight); //the book image
var bookHeight = 70;//original 180
var bookWidth = 110;//original 200
var bookX = (canvas.width-bookWidth)/2; //centering the book image on canvas //original 1.73
var bookY = (canvas.height-bookHeight);//original /0.8

/* book not moving is default */
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

/* get random number */
function getRandom(upperLimit) {
  var result = Math.floor(Math.random() * upperLimit);
  return result;
}

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var word = "DOG"; //answer to word hint

var totalPoints = 0;

var spawnLineY = canvas.height - 450; // newly spawned objects start at 50 px on top of y -450

var spawnRate = 1000; // spawn a new letter every 1000ms

var spawnRateOfDescent = 2; // how fast letters will fall

var lastSpawn = -1; // when was the last letter spawned

var spawnedLetters = []; // this array holds all spawned letters

var startTime = Date.now(); // save the starting time (used to calc elapsed time)



function spawnRandomLetter() { // object letter function

var letterObject = { //new letter object

  letterZ: alphabet[Math.floor(Math.random()*alphabet.length)], //loop through and get random letter from alphabet
  
  letterX: getRandom(canvas.width - 50),   // set x randomly 
  
  letterY: spawnLineY, // set y to start on the line where spawnedLetters are spawned
}
spawnedLetters.push(letterObject); // add the new letter to the spawnedObjects[] array
};

function reDraw() { // redraw random letter function
    
    var time = Date.now(); // get the elapsed time
    
    /* see if its time to spawn a new object */
    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawnRandomLetter();
        
    }
    requestAnimationFrame(reDraw);  // request another animation frame
    
    /* spawn and move each object down the canvas */
    for (var i = 0; i < spawnedLetters.length; i++) {
        var newletter = spawnedLetters[i];  
        //debugger;   
        newletter.letterY += spawnRateOfDescent; //new letter and 
        ctx.font = '60px Poppins'; // letter font-size and font
        ctx.fillStyle = '#7FFFD4'; // letter color
        ctx.fillText (newletter.letterZ, newletter.letterX, newletter.letterY); // random letter, letter x position, where on y it spawns
        
        /* collision detection */ 
       function collision(){
           var exes = 0;
        if((newletter.letterY   >= (bookY+20)  && newletter.letterY <= bookY+ (bookHeight))
        &&(newletter.letterX  >= (bookX-20)  && newletter.letterX <= bookX + bookWidth)){
          //console.log("hit");
          //console.log(newletter)
          
          if(word.includes(newletter.letterZ) > 0){//if letter is included in word array
            index = word.indexOf(newletter.letterZ)//gets index of word array
                //console.log(index);
            word = word.split(word[index])//splits letter at index of word array
                //console.log(word);
            word = word.join("");//is the new word array with the previous letter split off
            console.log(newletter.letterZ);//shows letter that split
            //document.getElementById('letters-div').appendChild(newletter.letterZ)
           // console.log(word)       
            
           if (word.length === 0){//if there are no more letters in word array
                 totalPoints++
                document.getElementById("points").innerHTML = totalPoints;//changes score
                console.log("you win!")

            }
        }else{

            console.log("X");
//exes++;
            //document.getElementById('exes-div').appendChild("x")

            if (exes >= 3){//if there are no more letters in word array
                // append somehting
                console.log("you lose")
            }
        }
          spawnedLetters.splice(i,1);//deletes the wrong letters if there is a collision
        }

       
        }
        

        
        collision();
        
    }

}; //======= redraw END




//===================================================================


function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears previous iterations drawn on canvas
    ctx.drawImage(bookImg, bookX, bookY, bookWidth, bookHeight); //drawing the book onto the canvas

    if(rightGo && bookX < canvas.width - bookWidth + 5){ // if right arrow pressed and book width adjust not touching edge, keep moving //original +82
        bookX +=5; // move 5 pixels to right everytime frame is drawn
    }else if(leftGo && bookX > - 5){ // if left arrow pressed and book width adjusted and not touching edge, kepp moving //original -24
        bookX -=5; //move 5 pixels to the left everytime frame is drawn
    }else if(downGo && bookY < canvas.height - 60){ // if down arrow pressed and book height adjust not touching edge, keep moving //original -100
        bookY +=3; // move 3 pixels down everytime frame is drawn
    }else if(upGo && bookY > - 10){ // if up arrow pressed and book height adjusted and not touching edge, kepp moving //original -72
        bookY -=3; //move 3 pixels up everytime frame is drawn
    }

    
}


document.addEventListener("keydown", isPressed, false); //sees if key is pressed down
document.addEventListener("keyup", notPressed, false); // sees if key is not pressed down

};//================ window on load END

