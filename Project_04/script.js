let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('.guessField');
const submitButton = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remainGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;


if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`please enter a valid number`)
    } else if (guess < 1) {
        alert(`please enter a number more than 1`)
    } else if (guess > 100) {
        alert(`please enter a number less than 100`)
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over, Right number is ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};


function checkGuess(guess) {            // value high or low checking
    if (guess === randomNumber) {
        alert(`you guessed it right.`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`your number is TOOO low.`)
    } else if (guess > randomNumber) {
        displayMessage(`your number is TOOO high.`)
    }

};

function displayGuess(guess) {          // cleanup method / main DOM manipulation
    userInput.value = " ";
    guessSlot.innerHTML += ` ${guess} |`;
    numGuess++;
    remainGuess.innerHTML = `${11 - numGuess}`;
};

function displayMessage(message) {      // display
    lowOrHi.innerHTML = `<h3>${message}</h3>`
};

function endGame() {
    userInput.value = " ";
    userInput.setAttribute("disabled");
    p.classList.add('button');
    p.innerHTML = `<h3 id= newGame >Start new Game</h3>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        guessSlot.innerHTML = "";
        prevGuess = [];
        numGuess = 1;
        userInput.removeAttribute('disabled');
        remainGuess.innerHTML = `${11 - numGuess}`;
        startOver.removeChild(p)
    })
}





















// function endGame() {
//     userInput.value = " ";
//     userInput.setAttribute('disabled');
//     p.classList.add('button');
//     p.innerHTML = `<h3 id = "newGame">Start new Game</h3>`;
//     startOver.appendChild(p);
//     playGame = false;
//     newGame();
// };

// function newGame() {
//     const newGameButton = document.querySelector('#newGame');
//     newGameButton.addEventListener('click', function (e) {
//         randomNumber = parseInt(Math.random() * 100 + 1);
//         prevGuess = [];
//         numGuess = 1;
//         guessSlot.innerHTML = "";
//         remainGuess.innerHTML = `${11 - numGuess}`;
//         userInput.removeAttribute('disabled');
//         startOver.removeChild(p);
//         playGame = true;
//     })
// };
