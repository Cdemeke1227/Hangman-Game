


// Need an array of all possible letters to choose from
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Need an array of words that computer chooses at random to be the puzzle user is guessing.
var superheros = ["superman", "batman", "wonderwoman", "hulk", "ironman", "black panther", "captain america", "green lantern", "flash", "green arrow", "thor"];
console.log("superhero array has " + superheros.length + " words");
console.log(alphabet.length);

var randomWord = superheros[Math.floor(Math.random() * superheros.length)];
// randomWord = randomWord.replace(/\s/g, "-"); // replaing spaces with dash
console.log("word is " + randomWord);
console.log(typeof randomWord);
console.log(randomWord.length);
var blankSpaces = [];
var letterSpace = randomWord.split("");
console.log(letterSpace);
console.log(typeof letterSpace);
console.log(letterSpace[3]);

/* set up display of letters in current word */
document.getElementById("letters").value = '';
letters = document.getElementById("letters");
for (var i = 0; i < randomWord.length; i++) {
    blankSpaces[i] = "_ ";
    // letters.innerHTML = blankSpaces;
    var letters = document.getElementById("letters");
    var blanks = document.createTextNode(blankSpaces[i]);
    letters.appendChild(blanks);
}
console.log(blankSpaces);





guesses = 5;
guessesRem = document.getElementById("guessesRem")
guessesRem.innerHTML = 'You have ' + guesses + ' gueses remaining';





