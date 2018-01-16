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
    hand = [];
    for (var i=0; i<5; i++) {
      $("#cards").append('<img src="img/'+ cards[i] +'.png">');
      hand.push(cards[i]);
    };


  });

  $("button#hint").click(function() {
    if (flush(hand)) {
      alert("You have a flush!")
    }
      else if(threeOfKind(hand) {
        alert("You have three of a kind");
    } else if (pairs(hand)) {
        alert("You have a pair");
    }

  });
});

var cards = [];
var suits = ["hearts","spades","diamonds","clubs"]
var numbers= ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]
var hand = [];

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

function pairs(hand) {
  for (var i=0; i<5; i++) {
    var compareOne = hand[i].split('_');
    for (var j=i+1; j<5; j++) {
      var compareTwo = hand[j].split('_');
      if (compareOne[0] === compareTwo[0]) {
        return true;
      }
    }
  }
}
function threeOfKind(hand) {
  for (var i=0; i<5; i++) {
    var compareOne = hand[i].split('_');
    for (var j=i+1; j<5; j++) {
      var compareTwo = hand[j].split('_');
      if (compareOne[0] === compareTwo[0]) {
        for (var k=j+1; k<5; k++) {
          var compareThree = hand[k].split('_');
          if (compareTwo[0]===compareThree[0]) {
            return true;
          }
        }
      }
    }
  }
}

function flush(hand) {
  for (var i=0; i<5; i++) {
    var compareOne = hand[i].split('_');
    for (var j=i+1; j<5; j++) {
      var compareTwo = hand[j].split('_');
      if (compareOne[2] === compareTwo[2]) {
        for (var k=j+1; k<5; k++) {
          var compareThree = hand[k].split('_');
          if (compareTwo[2]===compareThree[2])
            for (var l=0; l<5; l++) {
              var compareFour = hand[l].split('_');
              if (compareThree[2]===compareFour[2])
                for (var m=l+1; m<5; m++) {
                  var compareFive = hand[j].split('_');
                  if (compareFour[2] === compareFive[2]){
                    return true;
                  }
                }
              }
            }
          }
        }
      }
    }
