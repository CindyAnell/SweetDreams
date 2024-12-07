//dark mode

let darkmode= localStorage.getItem('darkmode')
const lightMode = document.getElementById('light-mode')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () =>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode ==="active") enableDarkmode()


lightMode.addEventListener("click",() =>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})


//guessing game
const form = document.querySelector('form');
const numGuessInput = document.getElementById('numGuess');
const gameOutput = document.getElementById('gameOutput');

let randomNumber = Math.floor(Math.random() * 10) + 1;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userGuess = parseInt(numGuessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    gameOutput.textContent = 'Please enter a number between 1 and 10.';
    return;
  }

  if (userGuess === randomNumber) {
    gameOutput.textContent = `Congratulations! You guessed the number ${randomNumber} correctly.`;
    randomNumber = Math.floor(Math.random() * 10) + 1;
  } else {
    gameOutput.textContent = `Sorry, your guess is incorrect. The number was ${randomNumber}. Try again!`;
    randomNumber = Math.floor(Math.random() * 10) + 1;
  }

  numGuessInput.value = '';
});

//Product switcher
const items = document.querySelectorAll('.currentProduct, .hiddenItem');
const button = document.getElementById('btn1');
let currentIndex = 0;

function showCurrentItem() {
  items.forEach((item, index) => {
    item.style.display = index === currentIndex ? 'block' : 'none';
  });
}

button.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  showCurrentItem();
});

showCurrentItem();

