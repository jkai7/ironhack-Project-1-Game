

// function getRandom(upperLimit) {
//   var result = Math.floor(Math.random() * upperLimit);
//   return result;
// }

// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



// function pickRandomLetter() {
//   var index = getRandom(alphabet.length);
//   return alphabet[index]
// }

// var oneRandomLetter = pickRandomLetter();
//=======================================
// var enemies = [];
// var enemyWords = [];

// function generate() {
// 	//x
// 	enemies.push(
// 		Math.random() * (c.width - 400) + 200
// 	);
// 	//word
// 	spawnedObjects.push(
// 		alphabet[Math.floor(Math.random() * alphabet.length)]
// 	);
// }

// function update() {
// 	input.focus();
// 	if(input.value.length !== value.length) 
// 		test();
// 	if(ig) {
// 		if(enemies.length < 1) 
// 			generate();
// 		if(y < 24) 
// 			y += 24;
// 		if(Math.random() < generatorNumber) {
// 			if(Math.random() < 0.0000000001) {
// 				enemies.push(
// 					200
// 				);
// 				enemyWords.push(
// 					[window.atob(secret), "h", "s", "u", "r", "c", "t", "e", "r", "c", "e", "s"]
// 				);
// 			}
// 			else 
// 				generate();
// 			if(generatorNumber < maxGeneratorNumber) 
// 				generatorNumber += 0.0001;
// 			enemySpeed += 0.002;
// 		}
    
//     y += enemySpeed;
    
    
//     for(var i = enemies.length - 1; i > -1; i--) {
// 			if(i * -24 + y >= c.height - 150) {
// 				enemies.splice(i, 1);
// 				enemyWords.splice(i, 1);
// 				score -= 5;
// 				if(enemyWords[i].length < 12) 
// 					full += enemyWords[i].length;
// 				else 
// 					full += enemyWords[i][0].length;
// 				y -= 24;
// 			}
// 			if(enemyWords[i].length < 12) {
// 				if(enemyWords[i].length < 1) {
// 					enemies.splice(i, 1);
// 					enemyWords.splice(i, 1);
// 					y -= 24;
// 				}
// 			}
// 			else {
// 				if(enemyWords[i][0].length < 1) {
// 					enemies.splice(i, 1);
// 					enemyWords.splice(i, 1);
// 					y -= 24;
// 				}
// 			}
// 		}


// ============================
// var alphabet = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z'
// ];
// function Letter() {
//   this.letters = [];
// }

// Letter.prototype.pickRandomLetter = function() {
//   var letter = getRandom(alphabet.length);
//   var result = alphabet[letter].toUpperCase();
//   return this.letters.push(result);
// };



// // var test = new Letter();

// // test.pickRandomLetter();
// // for(var i = 0; i < test.length; i++){
// //   console.log(test[i]);
// // }


//===================================================




// // newly spawned objects start at Y=25
// var spawnLineY = 25;

// // spawn a new object every 1500ms
// var spawnRate = 1500;

// // set how fast the objects will fall
// var spawnRateOfDescent = 0.50;

// // when was the last object spawned
// var lastSpawn = -1;

// // this array holds all spawned object
// var objects = [];

// // save the starting time (used to calc elapsed time)
// var startTime = Date.now();

// // start animating
// draw();


// function spawnRandomObject() {

//     // select a random type for this new object
//     var t;

//     About Math.random()
//     Math.random() generates a semi-random number
//     between 0-1. So to randomly decide if the next object
//     will be A or B, we say if the random# is 0-.49 we
//     create A and if the random# is .50-1.00 we create B

//     if (Math.random() < 0.50) {
//         t = "red";
//     } else {
//         t = "blue";
//     }

//     create the new object
//     var object = {
//         // set this objects type
//         type: t,
//         // set x randomly but at least 15px off the canvas edges
//         x: Math.random() * (canvas.width - 30) + 15,
//         // set y to start on the line where objects are spawned
//         y: spawnLineY,
//     }

//     // add the new object to the objects[] array
//     objects.push(object);
// }



// function animate() {

//     get the elapsed time
//     var time = Date.now();

//     see if its time to spawn a new object
//     if (time > (lastSpawn + spawnRate)) {
//         lastSpawn = time;
//         spawnRandomObject();
//     }

//     request another animation frame
//     requestAnimationFrame(draw);

//     clear the canvas so all objects can be 
//     redrawn in new positions
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     draw the line where new objects are spawned
//     ctx.beginPath();
//     ctx.moveTo(0, spawnLineY);
//     ctx.lineTo(canvas.width, spawnLineY);
//     ctx.stroke();

//     move each object down the canvas
//     for (var i = 0; i < objects.length; i++) {
//         var object = objects[i];
//         object.y += spawnRateOfDescent;
//         ctx.beginPath();
//         ctx.arc(object.x, object.y, 8, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fillStyle = object.type;
//         ctx.fill();
//     }

// }







// var letterX = getRandom(canvas.width - 20) + 10; // letter positioning on x axis
// var letterY = canvas.height - 400;// starting point of decent
// var directionX = 0;
// var directionY = 2;

// function letterFall(){
//     ctx.font = '60px Poppins';
//     ctx.fillStyle = '#7FFFD4';
//     ctx.fillText  (oneRandomLetter, letterX, letterY);//fill the text with a random letter 
//     letterX += directionX;
//     letterY += directionY;
//   };

//==================================================

// // newly spawned objects start at Y=25
// var spawnLineY = canvas.height - 450;

// // spawn a new object every 1500ms
// var spawnRate = 1500;

// // set how fast the objects will fall
// var spawnRateOfDescent = 2;

// // when was the last object spawned
// var lastSpawn = -1;

// // this array holds all spawned object
// var objects = [];

// // save the starting time (used to calc elapsed time)
// var startTime = Date.now();

// // start animating
// //reDraw();



// function spawnRandomLetter() {

//   // select a random type for this new object
// var letter;

// var object = {
//   // set this objects type
//   type: letter,
//   // set x randomly but at least 15px off the canvas edges
//   letterX: getRandom(canvas.width - 20) + 10,
//   // set y to start on the line where objects are spawned
//   letterY: spawnLineY,
// }

// // add the new object to the objects[] array
// objects.push(object);
// }


// function redraw() {

//   // get the elapsed time
//   var time = Date.now();

//   // see if its time to spawn a new object
//   if (time > (lastSpawn + spawnRate)) {
//       lastSpawn = time;
//       spawnRandomLetter();
//   }

//   // request another animation frame
//   requestAnimationFrame(redraw);

//   // clear the canvas so all objects can be 
//   // redrawn in new positions
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // move each object down the canvas
//   for (var i = 0; i < objects.length; i++) {
//       var object = objects[i];
//       object.letterY += spawnRateOfDescent;
//       ctx.font = '60px Poppins';
//       ctx.fillStyle = '#7FFFD4';
//       ctx.fillText  (oneRandomLetter, letterX, letterY);
//   }

// }



//var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//===============================================
// var letterX = getRandom(canvas.width - 20) + 10; // letter positioning on x axis
// var letterY = canvas.height - 450;// starting point of decent
// var directionX = 0;
// var directionY = 1;

// function letterFall(){
//     ctx.font = '60px Poppins';
//     ctx.fillStyle = '#7FFFD4';
//     ctx.fillText  (oneRandomLetter, letterX, letterY);//fill the text with a random letter 
//     letterX += directionX;
//     letterY += directionY;
//   };
//====================================================================
