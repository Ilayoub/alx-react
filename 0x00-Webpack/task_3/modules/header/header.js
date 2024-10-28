import './header.css';
const $ = require('jquery');

$('body').append('<header></header>');
$("<img src='../../public/holberton-logo.jpg' alt='Holberton Logo'/>")
  .css({ width: "200px", height: "200px" })
  .appendTo('body');

console.log('Init header');
