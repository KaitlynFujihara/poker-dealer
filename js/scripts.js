$(document).ready(function(){

$("button#show").click(function() {
  $("#cards").empty();
  cards.forEach(function(card) {
  $("#cards").append('<img src="img/'+card+'.png">');

  });
});

$("button#shuffle").click(function() {
  shuffle(cards);
  $("#cards").empty();
  cards.forEach(function(card) {
  $("#cards").append('<img src="img/'+card+'.png">');
    });
  });

$("button#deal").click(function() {
  shuffle(cards);
  $("#cards").empty();
  for (var i=0; i<5; i++) {
    $("#cards").append('<img src="img/'+ cards[i] +'.png">');
    };
  });

});

var cards = [];
var suits = ["hearts","spades","diamonds","clubs"]
var numbers= ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]

suits.forEach(function(suit){
  numbers.forEach(function(number){
    cards.push(number + "_of_" + suit);
  });
});

function shuffle(cards) {
  var i, x, j
  for (let i = cards.length -1; i>0; i--) {
       j = Math.floor(Math.random()*(i+1));
       x=cards[i]
       cards[i] = cards[j]
       cards[j] = x ;
  }
}
