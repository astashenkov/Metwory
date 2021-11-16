// Matwory. My first simple web game.


'use strict'

const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'green';
hearts.forEach(item => {
    item.style.backgroundColor = 'orange'
});