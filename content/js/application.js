$(function(){
  $('#home .navigation').addClass('hidden');
    $('.menu-link').on('click', function(e){
        e.preventDefault();
        $('.top-bar nav').toggleClass('hidden');
    });

    $(window).scroll(function(){
        if($(window).scrollTop() <= 20){
            $('#home').removeClass('alt')
        } else {
            $('#home').addClass('alt')
        }
    });
});