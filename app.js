'use strict'


// This is a single-line comment.

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

console.log('Here\'s a hidden message');
