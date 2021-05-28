let word = ``;
let wordGuess = null;
let guessed = [];
let maxWrongLetter = 6;
let wrongLetter = 0;
let audioWin = new Audio('./assets/audio/win.mp3');
let audioLost = new Audio('./assets/audio/lost.mp3');


// Choose country
let words = ["australia", "belize", "canada", "switzerland", "mexico", "nicaragua"];

function chooseWord() {
    word = words[Math.floor(Math.random() * words.length)];
}
chooseWord();

// Create alphabet buttons
function alphabetButtons() {
    let buttons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
        <button class="btn btn-danger m-2" id="${letter}" onClick="handleGuess('${letter}')">
            ${letter}
        </button>
        `).join('')
    document.getElementById('alphabet').innerHTML = buttons
}
alphabetButtons();

// Guess Word
function guessWord() {
    wordGuess = word.split('').map(letter => 
        (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordDisplay').innerHTML = wordGuess
}
guessWord();

// HandleGuess Array
function handleGuess(letter) {
    guessed.indexOf(letter) === -1 ? guessed.push(letter) : null;
    document.getElementById(letter).setAttribute('disabled', true);

    if (word.indexOf(letter) >= 0) { // if true
        guessWord();
        checkWon();
    } else if (word.indexOf(letter) === -1) { // if false
        wrongLetter++;
        checkLost();
        updateImg()
    }
}
handleGuess();

// if won
function checkWon() {
    if (wordGuess === word) {
        audioWin.play()
        alert("You Won!")
    }
}
// if lost
function checkLost() {
    if (wrongLetter === maxWrongLetter) {
        audioLost.play()
        document.getElementById('wordDisplay').innerHTML = "The answer was: " + word
        alert("You Lost!")
    }
}

// update Image
function updateImg() {
    document.getElementById('hangman-img').src = './assets/images/hangman_' + wrongLetter + '.png'
}

// reset button
function reset() {
    wrongLetter = 0;
    guessed = [];
    document.getElementById('hangman-img').src = './assets/images/hangman_0.png'

    chooseWord();
    alphabetButtons();
    guessWord();
}


