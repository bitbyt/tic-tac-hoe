//I miss JQuery

//create array to store game logic. Fill array with box IDs.
var gameArray = [];
var gameBoard = document.getElementsByClassName('box');
var gameStatus = document.querySelector('h4');

var winningCombinations = [
  // Horizontals
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Verticals
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonals
  [0, 4, 8],
  [2, 4, 6]
];

//create player classes
var player1 = 'Player One', player2 = 'Player Two';
var addCross = '<div class="content"><i class="crossIcon" aria-hidden="fa"></i></div>';
var addCircle = '<div class="content"><i class="circleIcon"></i></div>';

//check for turn
var playerTurn = true;

//start game with score of zero

//function to check for win
/* function checkWin(playerClass) {
  //id selector function
  function thisId(theId) {
    return document.getElementById('\'' + theId + '\'');
  }
  //define the 8 rules to win
 if ( thisId(1).classList.contains(playerClass) && thisId(2).classList.contains(playerClass) && thisId(3).classList.contains(playerClass) || thisId(4).classList.contains(playerClass) && thisId(5).classList.contains(playerClass) && thisId(6).classList.contains(playerClass) || thisId(7).classList.contains(playerClass) && thisId(8).classList.contains(playerClass) && thisId(9).classList.contains(playerClass) || thisId(1).classList.contains(playerClass) && thisId(5).classList.contains(playerClass) && thisId(9).classList.contains(playerClass) || thisId(3).classList.contains(playerClass) && thisId(5).classList.contains(playerClass) && thisId(7).classList.contains(playerClass) || thisId(1).classList.contains(playerClass) && thisId(4).classList.contains(playerClass) && thisId(7).classList.contains(playerClass) || thisId(2).classList.contains(playerClass) && thisId(5).classList.contains(playerClass) && thisId(8).classList.contains(playerClass) || thisId(3).classList.contains(playerClass) && thisId(6).classList.contains(playerClass) && thisId(9).classList.contains(playerClass)) {
    console.log(player + " has won");
    return true;
  } else {
    return false;
  }
} */
//check if all boxes are full which ends in a tie

//score counter

//clear board

//basic ai

//start game for human v human

  for ( var i = 0; i < gameBoard.length; i++ ) {
    gameBoard[i].addEventListener('click', playerMove);
  }

  function playerMove() {
    if (this.innerHTML === "" && playerTurn) {
      this.classList.add("cross");
      this.innerHTML = addCross;
      gameStatus.innerHTML = "Player 2, it's your turn!";
      playerTurn = false;
    } else if (this.innerHTML === "" && !playerTurn) {
      this.classList.add("circle");
      this.innerHTML = addCircle;
      gameStatus.innerHTML = "Player 1, your move!";
      playerTurn = true;
    }
  }


//start game for ai v human
