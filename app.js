let answer = ``;
let guessed = [];
let wordGuess = null;

// Choose country
let words = ["australia", "belize", "canada", "switzerland", "mexico", "nicaragua"];

function chooseWord() {
    answer = words[Math.floor(Math.random() * words.length)];
}
chooseWord();

// Create alphabet buttons
function alphabetButtons() {
    let buttons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
        <button class="btn btn-danger m-2" id="` + letter + `" onClick="handleGuess('` + letter + `')">
            ` + letter + `
        </button>
        `).join('')
    document.getElementById('alphabet').innerHTML = buttons
}
alphabetButtons();

// Guess Word
function guessWord() {
    wordGuess = answer.split('').map(letter => 
        (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordDisplay').innerHTML = wordGuess
}
guessWord();

// HandleGuess Array
function handleGuess(letter) {
    guessed.indexOf(letter) === -1 ? guessed.push(letter) : null;
    document.getElementById(letter).setAttribute('disabled', true);

    if (answer.indexOf(letter) >= 0) {
        guessWord();
    }
}
handleGuess();



