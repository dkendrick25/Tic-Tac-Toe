var clickCount = 0;

var winningCombos = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2]
];
//function takes the board and returns the winner o or x or
//null
function checkWinner(board) {
  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i];
    //if true
    if (playerOccupiesSquares('O', combo, board)) {
      return 'O';
    }
    if (playerOccupiesSquares('X', combo, board)) {
      return 'X';
    }
  }
  return null;
}

//function that takes a player o or x and a winning combo
// array of 3 numbers(array indices)
//returns true if player occupies all three
function playerOccupiesSquares(player, squares, board) {
  for (var i = 0; i < squares.length; i++) {
    var idx = squares[i];
    var value = board[idx];
    //does player occupy all three spots
    if (value !== player) {
      return false;
    }
  }
  //player occupies all three spots
  return true;
}


//function that returns an array consisting of the current moves on the board
function getCurrentBoard() {
  var buttons = $('.button');
  var moves = [];
  for (var i = 0; i < buttons.length; i++) {
    var button = $(buttons[i]);
    moves.push(button.text());
  }
  return moves;
}
//to keep score
var winO = 0;
var winX = 0;
var drawCount = 0;

$(function() {
  $('.play-again').hide();
  $('.game-board').addClass('animated bounceIn');
  //keeps up with clicks
  $('.button').click(function () {
    var txt = $(this).text();
    //doesn't allow you to change non blank squares
    if (txt === 'O' || txt === 'X'){
      txt = $(this).text();
      //alternates turns of O and X
    } else if (clickCount % 2 === 0) {
      txt = $(this).text('O');
      clickCount++;
      var board = getCurrentBoard();
      var winner = checkWinner(board);
      if(winner) {
        //keeps score of winners
        if(winner === 'O') {
          winO++;
        } else {
          winX++;
        }
        $('#winner').text('The winner is ' + winner).addClass("animated flipInX");
        $('.play-again').show();
        updateScore();
      }
      //debugger
    } else if (clickCount % 2 === 1) {
      txt = $(this).text('X');
      clickCount++;
      var board = getCurrentBoard();
      var winner = checkWinner(board);
      if(winner) {
        $('#winner').text('The winner is ' + winner).addClass("animated flipInX");
        $('.play-again').show();
        updateScore();
      }
    }

    if (clickCount === 9) {
      drawCount++;
      $('#winner').text("It's a draw!").addClass('animated flipInX');
      $('.play-again').show();
      updateScore();
    }
  });

  $('.play-again').click(function() {
    resetGame();
  });
});
//function to clear the board when play again is hit
//resets the clickCount, gameboard and removes the banner and play-again
function resetGame() {
  clickCount = 0;
  $('.button').text('');
  //$('#winner').hide();
  $('.play-again').hide();
}
//function to update the score
function updateScore() {
  $('.scoreboard').text('O:  ' + winO + '  X: ' + winX + '  Draws:  ' + drawCount);
}
