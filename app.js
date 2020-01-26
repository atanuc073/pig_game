/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,roundScore,activePlayer;
score=[0,0];
roundScore=0;
activePlayer=0;


document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click',function(){

	diceDom=document.querySelector('.dice');
	//generate a random number
	dice=Math.floor(Math.random()*6)+1;

	//update the dice picture according to the dice value
	diceDom.style.display='block';
	diceDom.src='dice-'+dice+'.png';

	//Update the round Score if the rolled number was not a 1
	if (dice!==1){
		roundScore+=dice;
		console.log(roundScore);
		document.getElementById('current-'+activePlayer).textContent=roundScore;
	}else{
		//Next Player
		document.getElementById('current-'+activePlayer).textContent='0';
		activePlayer===0?activePlayer=1:activePlayer=0;
		roundScore=0
		document.getElementById('current-'+activePlayer).textContent

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display='none';

		// document.querySelector('.player-0-panel').classList.remove('active');
		// document.querySelector('.player-1-panel').classList.add('active');

	}


})


























// document.querySelector('#current-'+activePlayer).textContent=dice;
      // this is the way to manipulate a html element

// use of innerHTML

// document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';

// we can also read data by querySelector method
// var x=document.querySelector('#current-1').textContent;
// console.log(x);
// we can also manipulate css property using javascript