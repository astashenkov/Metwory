// Matwory. My first simple web game.


'use strict'

const numbers = [],
      cards = document.querySelectorAll('button');
const statusCards = {
    dropping: false,
    card1: 'empty',
    card2: 'empty',
};

spreadNumbers();

cards.forEach((item, i) => {
    item.addEventListener('click', () => {flipCard(i);});
});

function flipCard(i) {
    if (cards[i].classList != 'red') {
        if (statusCards.dropping) {
            cards[statusCards.card1].classList = 'blue';
            cards[statusCards.card1].textContent = 'Opend Card';
            cards[statusCards.card2].classList = 'blue';
            cards[statusCards.card2].textContent = 'Opend Card';
            statusCards.card1 = 'empty';
            statusCards.card2 = 'empty';
            statusCards.dropping = false;
        }
        (statusCards.card1 === 'empty') ? statusCards.card1 = i : statusCards.card2 = i;
        cards[i].classList = 'red';
        cards[i].textContent = `${numbers[i]}`;
        if (statusCards.card2 != 'empty') {
            if (numbers[statusCards.card1] != numbers[statusCards.card2]) {
                statusCards.dropping = true;
            } else {
                statusCards.card1 = 'empty';
                statusCards.card2 = 'empty';
            }
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