'use strict';

let q = prompt("whats your name ?") ;
alert("welcome mr "+ q ) ;



let q1 = prompt("are you from jordan ?") ;
switch(q1) {
    case 'yes':
alert('you are welcome') ;
//console.log(q1)
      break;
    case 'no':
alert('you are welcome') ;
      break;
    default:
alert('you didnt choose') ;
  }



let q2 = prompt("do you like the it fields ?") ;

switch(q2) {
    case 'yes':
alert('thats cool') ;
//console.log(q2)
      break;
    case 'no':
alert('you are wrong') ;

      break;
    default:
alert('you must answer') ;

  }

let q3 = prompt("do you like my webpage?") ;


switch(q3) {
    case 'yes':
alert('thats kind from you') ;
//console.log(q3)

      break;
    case 'no':
alert('its your opinion') ;
      break;
    default:
alert('you must answer') ;

  }
let q4 = prompt("is this your first time here ?") ;


switch(q4) {
    case 'yes':
alert('you are welcome') ;
//console.log(q4)      
      break;
    case 'no':
alert('we miss you') ;
      break;
    default:
alert('come back') ;
  }
let q5 = prompt("would you like to visit us again?") ;
switch(q5) {
    case 'yes':
alert('we will wait') ;
//console.log(q5)
      break;
    case 'no':
alert('its up to you') ;

      break;
    default :
alert('you have to answer') ;

  }

  
  let guess = prompt('Guess a number between 1 and 10');
  let numGuess = Number(guess);
  let answer = 7;
  correct = 0
  for (var i = 0; i < 3; i++) {
    if (answer === numGuess){
      alert('That is correct!');
      correct++;
     i=3 
    }else if (numGuess < answer){
      numGuess = parseInt(prompt('Too Low, guess again'));
    }else
      numGuess = parseInt(prompt('That is too high, guess again!'));
  }
  alert('The correct answer was 7!');
  


let favcar = ['bmw', 'nissan', 'mercedes', 'volkswagen', 'kia'];

  for(let x = 0; x < 6; x++ ){
    let bigGuess = prompt('Can you guess one of my favorite cars?');
    if (favcar.includes(bigGuess)){
      alert('You are correct!');
      correct++;
      break;
    }else {
      alert('Sorry, please try again');
    }
  }

  alert('You got' + correct + '/2');
