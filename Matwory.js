// Matwory. My first simple web game.


'use strict'

const numbers = [];
const cards = document.querySelectorAll('button');
let statusCards = {
    dropping: false,
    card1: 'empty',
    card2: 'empty',
};

spreadNumbers();

cards.forEach((item, i) => {
    item.addEventListener('click', () => {flipCard(i);});
});

function flipCard(i) {
    if (cards[i].style.backgroundColor != '#f44336') {
        if (statusCards.dropping) {
            cards[statusCards.card1].style.backgroundColor = '#2962ff';
            cards[statusCards.card1].textContent = 'Opend Card';
            cards[statusCards.card1].style.fontSize = '20px';
            cards[statusCards.card2].style.backgroundColor = '#2962ff';
            cards[statusCards.card2].textContent = 'Opend Card';
            cards[statusCards.card2].style.fontSize = '20px';
            statusCards.card1 = 'empty';
            statusCards.card2 = 'empty';
            statusCards.dropping = false;
        }
        (statusCards.card1 == 'empty') ? statusCards.card1 = i : statusCards.card2 = i;
        cards[i].style.backgroundColor = '#f44336';
        cards[i].textContent = `${numbers[i]}`;
        cards[i].style.fontSize = '50px';
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