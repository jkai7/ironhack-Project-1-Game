

function getRandom(upperLimit) {
  var result = Math.floor(Math.random() * upperLimit);
  return result;
}
// ============================
var alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
function Letter() {
  this.letters = [];
}

Letter.prototype.pickRandomLetter = function() {
  var letter = getRandom(alphabet.length);
  var result = alphabet[letter].toUpperCase();
  return this.letters.push(result);
};



// var test = new Letter();

// test.pickRandomLetter();
// for(var i = 0; i < test.length; i++){
//   console.log(test[i]);
// }

