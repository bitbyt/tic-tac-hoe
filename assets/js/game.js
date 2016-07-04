//I miss JQuery
function init() {
  console.log("Tic Tac Toe Ready.");
  var currentPlayer = 'Player 1';
  //create array to store game logic. Fill array with box IDs.
  var boardCount = 0;

  var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  var gameBoard = document.getElementsByClassName('box');
  var gameStatus = document.querySelector('h4');
  var resetButton = document.getElementById('ctrl-btn');

  var addCross = '<div id="playerOne" class="content"><i class="crossIcon" aria-hidden="fa"></i></div>';
  var addCircle = '<div id="playerTwo" class="content"><i class="circleIcon"></i></div>';

  for ( var i = 0; i < gameBoard.length; i++ ) {
    gameBoard[i].addEventListener('click', playerMove);
  }

  function removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className);
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className=el.className.replace(reg, ' ');
    }
  }
  resetButton.addEventListener('click', resetBoard);

  function resetBoard() {
    for ( var i = 0; i < gameBoard.length; i++ ) {
      gameBoard[i].innerHTML = "";
      removeClass(gameBoard[i], 'circle');
      removeClass(gameBoard[i], 'cross');
      gameStatus.innerHTML = "A simple game of tic tac toe";
    }
  }

  function playerMove() {
    var selectedBox = event.target;
    var unmarkedBox = this.innerHTML === "";

    if (currentPlayer === 'Player 1' && unmarkedBox) {
      this.classList.add('cross');
      this.innerHTML = addCross;
      setMove('X', this.id);
      checkForWinner();
      switchPlayer('Player 2');
    } else if (currentPlayer === 'Player 2' && unmarkedBox) {
      this.classList.add('circle');
      this.innerHTML = addCircle;
      setMove('O', this.id);
      checkForWinner();
      switchPlayer('Player 1');
    } else {
        alert('Whoops, this box has been marked.');
    }
  }

  function switchPlayer(player) {
      //Toggle value of current player
      currentPlayer = player;
      //Update display display to show which player is next
      gameStatus.innerHTML = "It is " + player + "'s turn.";

  }

  function setMove(move, buttonId) {
        if (buttonId === 'b1') {
            board[0][0] = move;
        } else if (buttonId === 'b2') {
            board[0][1] = move;
        } else if (buttonId === 'b3') {
            board[0][2] = move;
        } else if (buttonId === 'b4') {
            board[1][0] = move;
        } else if (buttonId === 'b5') {
            board[1][1] = move;
        } else if (buttonId === 'b6') {
            board[1][2] = move;
        } else if (buttonId === 'b7') {
            board[2][0] = move;
        } else if (buttonId === 'b8') {
            board[2][1] = move;
        } else {
            //Set button b9
            board[2][2] = move;
        }
        boardCount++;
    }

    function getButtonState(buttonId) {
        if (buttonId === 'b1') {
            return board[0][0];
        } else if (buttonId === 'b2') {
            return board[0][1];
        } else if (buttonId === 'b3') {
            return board[0][2];
        } else if (buttonId === 'b4') {
            return board[1][0];
        } else if (buttonId === 'b5') {
            return board[1][1];
        } else if (buttonId === 'b6') {
            return board[1][2];
        } else if (buttonId === 'b7') {
            return board[2][0];
        } else if (buttonId === 'b8') {
            return board[2][1];
        } else {
            //return val of button b9.
            return board[2][2];
        }
    }

    function alertWinner(buttonValue){
        if(buttonValue === 'O'){
            alert('Game Over, Player 2 wins!');
            gameStatus.innerHTML = "Player 2 wins!";
            resetBoard();
        }else {
            alert('Game Over, Player 1 wins!');
            gameStatus.innerHTML = "Player 1 wins!";
            resetBoard();
        }
    }

    function checkForWinner() {
        //Check row 1 win
        if ((board[0][0] === board[0][1]) && (board[0][1] === board[0][2]) && (board[0][2] !== null)) {
            alertWinner(board[0][0]);
        }
        else if ((board[1][0] === board[1][1]) && (board[1][1] === board[1][2]) && (board[1][2] !== null)) {
            alertWinner(board[1][0]);
        }
        else if ((board[2][0] === board[2][1]) && (board[2][1] === board[2][2]) && (board[2][2] !== null)) {
            alertWinner(board[2][0]);
        }
        else if ((board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && (board[2][0] !== null)) {
            alertWinner(board[0][0]);
        }
        else if ((board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && (board[2][1] !== null)) {
            alertWinner(board[0][1]);
        }
        else if ((board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && (board[2][2] !== null)) {
            alertWinner(board[0][2]);
        }
        else if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[2][2] !== null)) {
            alertWinner(board[0][0]);
        }
        else if ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[2][0] !== null)) {
            alertWinner(board[0][2]);
        }
        else if(boardCount === 9){
            //boardCount stores the number of spaces already filled in the board
            //If value is == 9 and not a winning combination, it is a tie.
            alert('It is a tie!');
            resetBoard();
        }else {
            console.log('No winner yet!');
        }
    }


  //start game for ai v human
}

window.addEventListener("load",init,false);
