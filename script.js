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
