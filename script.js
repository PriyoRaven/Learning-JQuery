$("h1").on('click', function(){
    $('h1').css('color','black');
});

$(".ones").on('click', function(){
    $('h1').css('color','red');
});

$('.twos').on('click', function(){
    $('h1').css('color','blue');
});

$('.threes').on('click', function(){
    $('h1').css('color','green');
});

$('.fours').on('click', function(){
    $('h1').css('color','yellow');
});

$('input').keypress(function(event){
    if (event.key === "Enter") {
      $(this).val("");
    } else {
      var word = $(this).val() + event.key;
      $('h1').text(word);
    }
  });
  
