$(document).ready(function(){


});

var cards = [];
var suits = ["hearts","spades","diamonds","clubs"]
var numbers= ["Ace","2","3","4","5","6","7","8","9","Jack","Queen","King"]

suits.forEach(suit){
  numbers.forEach(number){
    cards.push(number + "of" + suit);
  };
};

console.log(cards);
