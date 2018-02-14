// Superhero Hangman Game
// ==================================================================
// Variables
var randomWord;
var wins = 0;
var guesses = 10;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var superhero = ["superman", "hulk", "flash", "thor", "batman", "magneto", "deadpool", "storm", "wolverine", "wonderwoman", "hawkeye", "daredevil"];
var wrongLetter = [];
var blankSpace = [];
var pageblankSpace = document.getElementsByClassName('blankSpace');
var pageWrongGuess = document.getElementsByClassName('wrongGuess');
// ==================================================================
// Functions
// function to select a word randomly from the list at random
var newWord = () => {
    randomWord = superhero[Math.floor(Math.random() * superhero.length)];
    return randomWord;
}
// function to greate the blank spaces
var generateblankSpace = () => {
    for (var i = 0; i < randomWord.length; i++) {
        blankSpace.push('_ ');
    }
    return blankSpace;
}
// function to clear the blank spaces, to be used onece a game is finished.
var clearblankSpace = () => {
    blankSpace = [];
}
// function to reset the guess counter
var resetGuessCount = () => {
    guesses = 10;
}
// function to reset the wrong letter collection box
var resetWrongLetters = () => {
    wrongLetter = [];
}
// ==================================================================
// ==================================================================
//Game Play
// ==================================================================
// select a random word from the list
newWord();
// create the blank spaces for the word on the screen
generateblankSpace(); {
    pageblankSpace[0].innerHTML = blankSpace.join('');
}
// recive user's letter guess
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    var pageGuessCount = document.getElementById("guessCount");
    var pageWinCount = document.getElementById('winCount');
    console.log(randomWord);

    //Check if userGuess is valid character for the game
    if (alphabet.indexOf(userGuess) > -1) {
        pageWinCount.innerHTML = wins ;
        // If user guesses the correct letter
        if (randomWord.indexOf(userGuess) > -1) {
            // replace blankSpace with correct letter 1
            blankSpace[randomWord.indexOf(userGuess)] = userGuess;
            pageblankSpace[0].innerHTML = blankSpace.join('');
            // replace blankSpace with correct letter in case there are two of same letter
            var check2 = randomWord.indexOf(userGuess) + 1;
            blankSpace[randomWord.indexOf(userGuess, check2)] = userGuess;
            pageblankSpace[0].innerHTML = blankSpace.join('');
            if (blankSpace.join('') == randomWord) {
                wins++;
                // after a win game needs to reset with sequence of functions below
                clearblankSpace();
                newWord();
                generateblankSpace(); {
                    pageblankSpace[0].innerHTML = blankSpace.join('');
                }
                resetGuessCount();
                resetWrongLetters();
                pageWinCount.innerHTML = wins ;
                pageGuessCount.innerHTML = "You have " + guesses + " left!";
                pageWrongGuess[0].innerHTML = wrongLetter;
            }
        } else {
            // wrong letter must subtract a guess
            guesses--;
            // check to see if wrong letter has been pressed before, if not place in worng guess box
            if (wrongLetter.indexOf(userGuess) < 0) {
                wrongLetter.push(userGuess);
                pageWrongGuess[0].innerHTML = wrongLetter;
                pageGuessCount.innerHTML = "You have " + guesses + " left!"

                if (guesses == 0) {
                    // after game over game is reset after an alert
                    clearblankSpace();
                    newWord();
                    generateblankSpace(); {
                        pageblankSpace[0].innerHTML = blankSpace.join('');
                    }
                    resetGuessCount();
                    resetWrongLetters();
                    pageWinCount.innerHTML = wins ;
                    pageGuessCount.innerHTML = "You have " + guesses + " left!";
                    pageWrongGuess[0].innerHTML = wrongLetter;
                    alert("Game Over")
                }
            }
        }
    }
}