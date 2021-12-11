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

console.log('Game Metwory by Astashenkov Viacheslav');      
spreadNumbers();

let timerId = setInterval(setTime, 1000);

cards.forEach((item, i) => {
    item.addEventListener('click', () => {flipCard(i);});
});

function flipCard(i) {
    if (cards[i].classList != 'red' && cards[i].classList != 'green') {

        (statusCards.card1 === 'empty') ? statusCards.card1 = i : statusCards.card2 = i;
        cards[i].classList = 'red';
        cards[i].textContent = `${numbers[i]}`;

        if (statusCards.card2 !== 'empty') {
            if (numbers[statusCards.card1] !== numbers[statusCards.card2]) {
                setTimeout(dropping, 400);
            } else {
                statusCards.card1 = statusCards.card2 = 'empty';
                (statusCards.counter < 9) ? document.querySelector('.steps').textContent = '0' + ++statusCards.counter : document.querySelector('.steps').textContent = ++statusCards.counter;
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
            clearInterval(timerId);
        }
    }
}

function spreadNumbers() {
    let i = 0;
    while (numbers.length < 36) {
        let rndm = Math.floor(Math.random() * 101);
        if (!numbers.includes(rndm)) {
            numbers[i] = numbers[i+18] = rndm;
            i++;
        }
    }
    numbers.sort(function() {
        return Math.random() - 0.5;
    });
}

function dropping() {
    cards[statusCards.card1].classList = cards[statusCards.card2].classList = 'blue';
    cards[statusCards.card1].textContent = cards[statusCards.card2].textContent = 'Opend Card';
    statusCards.card1 = statusCards.card2 = 'empty';
    (statusCards.counter < 9) ? document.querySelector('.steps').textContent = '0' + ++statusCards.counter : document.querySelector('.steps').textContent = ++statusCards.counter;
}

let seconds = 0,
    minutes = 0,
    hours = 0;

function setTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    (hours < 10) ? document.querySelector('.hours').textContent = '0' + hours : document.querySelector('.hours').textContent = hours;
    (minutes < 10) ? document.querySelector('.minutes').textContent = '0' + minutes : document.querySelector('.minutes').textContent = minutes;
    (seconds < 10) ? document.querySelector('.seconds').textContent = '0' + seconds : document.querySelector('.seconds').textContent = seconds;
}