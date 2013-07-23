$(function(){
    $('.header .navigation').addClass('hidden');
    $('.menu-link').on('click', function(e){
        e.preventDefault();
        $('.header .navigation').toggleClass('hidden');
    });

    $(window).scroll(function(){
        if($(window).scrollTop() <= 20){
            $('.header').removeClass('alt')
        } else {
            $('.header').addClass('alt')
        }
    });
});


