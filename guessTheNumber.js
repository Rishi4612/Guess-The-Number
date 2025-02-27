let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector("#resultParas");

// setting new game button as global
const newGameButton = document.querySelector("#newGame");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // to check whether the number between 1 and 100
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // to check whether the guess is equal to the random number or not, if yes then use other functions like displayMessage to let the user know they won the game
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOOO High`);
  }
}

function displayGuess(guess) {
  // clean the values, so we can enter the next values, not the same value; update the guess array; update the remaining guesses
  userInput.value = ""; // cleaning up the userInput for the next value
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // we will use lowOrHi and pass the message onto it to display it
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  //   if (!document.querySelector("#newgame")) {
  //     p.classList.add("button");
  //     p.innerHTML = `<button id="newGame">Start New Game</button>`; // used button tag instead of h2 tag
  //   startOver.appendChild(p);
  //   }

  newGameButton.style.display = "block";
  playGame = false;
  newGame();
}

function newGame() {
  //   const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    lowOrHi.innerHTML = "";
    userInput.removeAttribute("disabled");
    // startOver.removeChild(p);
    newGameButton.style.display = "none";
    playGame = true;
  });
}
