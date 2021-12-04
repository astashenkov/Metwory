// Metwory. My first simple web game.


'use strict'

const numbers = [],
      cards = document.querySelectorAll('button'),
      statusCards = {
          card1: 'empty',
          card2: 'empty',
          win: false,
          counter: 0,
      };

spreadNumbers();

cards.forEach((item, i) => {
    item.addEventListener('click', () => {flipCard(i);});
});

function flipCard(i) {
    if (cards[i].classList != 'red' && cards[i].classList != 'green') {
        (statusCards.card1 == 'empty') ? statusCards.card1 = i : statusCards.card2 = i;
        cards[i].classList = 'red';
        cards[i].textContent = `${numbers[i]}`;
        if (statusCards.card2 != 'empty') {
            if (numbers[statusCards.card1] != numbers[statusCards.card2]) {
                setTimeout(dropping, 500);
            } else {
                statusCards.card1 = 'empty';
                statusCards.card2 = 'empty';
                console.log(`Step №${++statusCards.counter}`);
            }
        }
        statusCards.win = true;
        cards.forEach((item) => {
            if (item.classList == 'blue') {
                statusCards.win = false;
            }
        });
        if (statusCards.win === true) {
            cards.forEach((item) => {
                item.classList = 'green';
                item.textContent = 'You win!'
            });
            console.log(`Congratulations! You did it in ${statusCards.counter} steps!`);
        }
    }
}

function spreadNumbers() {
    for (let i = 0; i < 8; i++) {
        numbers[i] = Math.floor(Math.random() * 101);
        numbers[i+8] = numbers[i];
    }
    numbers.sort(function() {
        return Math.random() - 0.5;
    });
}

function dropping() {
    cards[statusCards.card1].classList = 'blue';
    cards[statusCards.card1].textContent = 'Opend Card';
    cards[statusCards.card2].classList = 'blue';
    cards[statusCards.card2].textContent = 'Opend Card';
    statusCards.card1 = 'empty';
    statusCards.card2 = 'empty';
    console.log(`Step №${++statusCards.counter}`);
}