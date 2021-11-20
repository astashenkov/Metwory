// Matwory. My first simple web game.


'use strict'

const box = document.getElementById('box');
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');

const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');

// buttons[1].style.color = 'orange';
// buttons[1].style.background = 'green';
// buttons[4].textContent = 'Hello!';
// buttons[3].style.borderRadius = '100%'
// buttons[3].style.background = 'blue'
// buttons[0].style.height = '60px';
// hearts.forEach((item, i) => {
//     item.style.background = 'green';
//     item.textContent = i;
// });
// console.log(buttons[1].textContent);

// buttons[1].classList.add('test');

let div = document.createElement('div');
div.textContent = 'Test content';
div.classList.add('vidClass');
buttons[4].after(div);
document.querySelector('.qwe').append(div);
document.querySelector('.qwe').prepend(div);

div.insertAdjacentHTML("beforebegin", '<h2>Hello!</h2>');
// box.classList.add('test');
console.log(circles);