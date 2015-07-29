$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 135) {
    $('topper').fadeIn();
  } else {
    $('topper').fadeOut();
  }
});

$('topper').click(function(){
    $('html, body').stop().animate({
           scrollTop: 0
        }, 400);
});

$('.jumper').click(function(){
    $(document.body).animate({
        'scrollTop': $('#sharing').offset().top
    }, 400);
});