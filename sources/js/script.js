/**
 * Rock, Paper, Scissors Game
 */

 function rpsGame(yourChoice) {

    var human, bot;

    human = yourChoice.id;
  //  bot = randRpsChoice();
    bot = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)]; 
    console.log('Your choice: ' + yourChoice.id + ', Bot choice: ' + bot);

    result = decideWinner(human, bot);
    message = finalMessage(result);
    console.log(message);

    rpsFrontEnd(human, bot, message);

 }

 function decideWinner(human, bot) {
   let rpsDictionary = {
      'rock': { 'rock': 0.5, 'paper': 0, 'scissors': 1 },
      'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
      'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5 }
   };

   return rpsDictionary[human][bot]
 }

 function finalMessage(result) {
   if (result == 1 ) {   // you won !
      return {'message': 'You won!', 'color': 'green' };
   } 
   else if (result == 0.5 ) { // draw !
      return {'message': 'You tied!', 'color': 'yellow' };
   }
   else {   // you lost !
      return {'message': 'You lost!', 'color': 'red' };
   }
 }

 function randRpsChoice() {
    let rand = Math.floor(Math.random()*3);
    return ['rock', 'paper', 'scissors'][rand]
 }

 function rpsFrontEnd(human, bot, message) {
    let imagesDictionary = {  // get all images from HTML images within flex-box-rps div
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src 
    }

    // first in first ! Remove all images within flex-box-div conatiner
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var humanShadow, botShadow;
    if (message['color'] === "green") {
      humanShadow = "class='won-image-shadow'";
      botShadow = "class='lost-image-shadow'";
    } 
    else if ((message['color'] === "red")) {
      humanShadow = "class='lost-image-shadow'";
      botShadow = "class='won-image-shadow'";
    }
    else {
      humanShadow = "class='draw-image-shadow'";
      botShadow = "class='draw-image-shadow'";
    }

    humanDiv.innerHTML = "<img src='" +imagesDictionary[human] + "' width=150 height=150 " + humanShadow + ">";
    messageDiv.innerHTML = "<h1 style='padding: 30px; font-size: 50px; color: " + message['color'] +  "'>" + message['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" +imagesDictionary[bot] + "' width=150 height=150 " + botShadow + "'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
 }