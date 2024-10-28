import '../css/main.css';
const $ = require('jquery');
const _ = require('lodash');

let counter = 0;

$("<img src='../public/holberton-logo.jpg' alt='Holberton Logo'/>")
  .css({ width: "200px", height: "200px" })
  .appendTo('body');
$("<p>Holberton Dashboard</p>").appendTo('body');
$("<p>Dashboard data for the students</p>").appendTo('body');
$("<button>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');
$("<p>Copyright - Holberton School</p>").appendTo('body');



function updateCounter() {
  counter++;
  $('#count').html(`${counter} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));
