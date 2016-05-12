$(function() {
  var clickCount = 0;
  //keeps up with clicks
  $('button').click(function () {
    var txt = $(this).text();
//doesn't allow you to change non blank squares
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


/* Working on declaring a winner
var winningCombo1 = [1, 2, 3];
var winngCombo2 = [4, 5, 6];
var winningCombo3 = [7, 8, 9];
var winningComob4 = [1, 4 ,7];
var winningCombo5 = [2, 5, 8];
var winningCombo6 = [3, 6, 9];
var winningCombo7 = [1, 5, 9];
var winningCombo8 = [3, 5, 7];
}
