var clickCount = 0;
//need to make winning combinations
var winningCombos = [

]

//function that checks for a winner
function checkWinner() {

}

$(function() {
  $('.button').click(function() {
    var txt = $(this).text();
    if (txt === 'O' || txt === 'X'){
      txt = $(this).text();
      //alternates turns of O and X
    } else if (clickCount % 2 === 0) {
      txt = $(this).text('O');
          clickCount++;
    } else if (clickCount % 2 === 1) {
      txt = $(this).text('X');
      clickCount++;
    }
  });
});
