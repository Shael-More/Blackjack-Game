let player = {
  name: 'Harry',
  chips: 200,
};

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
// or
// let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
  let rand1 = Math.floor(Math.random() * 13) + 1;

  if (rand1 > 10) {
    return 10;
  } else if (rand1 === 1) {
    return 11;
  } else {
    return rand1;
  }
  // return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
  let firstNumber = getRandomCard();
  let secondNumber = getRandomCard();
  cards = [firstNumber, secondNumber];
  sum = firstNumber + secondNumber;
  isAlive = true;
  renderGame();
}
function renderGame() {
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = 'Sum: ' + sum;
  cardsEl.textContent = 'Cards: ';

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();

    sum += card;
    cards.push(card);
    renderGame();
  }
}
