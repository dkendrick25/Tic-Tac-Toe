$(function() {
  var clickCount = 0;
  //keeps up with clicks
  $('button').click(function () {
    clickCount++;
    //keeps track of txt
    var txt = $(this).text();
//alternates turns of O and X
    if (clickCount%2 === 0) {
      txt = $(this).text('O');
    } else if (clickCount%2 === 1) {
        txt = $(this).text('X');
    }
  })
});
