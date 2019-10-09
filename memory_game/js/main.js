const cards = [
{
	rank: "queen",
	suit: "hearts",
	image: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	image: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	image: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	image: "images/king-of-diamonds.png",
},
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) { 
		alert("You found a match!");
		} else { 
			alert("Sorry, try again."); 
		}

}

var scoreBoard = function() {
	var totalScore = 0;
    if (cardsInPlay[0] === cardsInPlay[1]) {
        totalScore += 1;
        alert ('Your score is ' + totalScore + "!");
    } else {
    	totalScore -= 1;
    	alert ('Your score is ' + totalScore + "!");

     }
}

document.getElementById('score').addEventListener('load', scoreBoard);


var flipCard = function(cardId) {
var cardId = this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].image);
console.log(cards[cardId].suit);
this.setAttribute('src', cards[cardId].image);
if (cardsInPlay.length === 2) {
	checkForMatch();
	scoreBoard();
}
}

var createBoard = function() {
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img'); 
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}



createBoard();


var resetBoard = function() {
    	var board = document.getElementById('game-board');
    	cardsInPlay = [];
		while (board.hasChildNodes()) {
    	board.removeChild(board.firstChild);
} 
	createBoard();
}
const resetButton = document.getElementsByTagName('button');
resetButton.addEventListener('click', resetBoard);

