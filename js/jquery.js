$(document).ready(function() {

    // スクロール
    $(window).scroll(function () {
        if ($(this).scrollTop() > 650) {
            $('header').addClass("fix");
            } else {
            $('header').removeClass("fix");
        }
    });

    // ページ内移動
    $('a[href^="#"]').click(function(){
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position-20}, speed, "swing");
        return false;
    });

    // ハンバーガーメニュー
    $('#btn-menu').on('click', function () {
        $("body").toggleClass("open");
    });

    // 文字type
    $('.title-text .1').typetype('I’m Tatsuya.');
    $('.title-text .2').typetype('Welcome to my \n\portfolio!!');

    // ポップアップ
    $('#popup-btn1').on('click',function(){
        $('#popup1').addClass('show').fadeIn();
    });
    $('#popup-btn2').on('click',function(){
        $('#popup2').addClass('show').fadeIn();
    });
    $('#popup-btn3').on('click',function(){
        $('#popup3').addClass('show').fadeIn();
    });
    $('#popup-btn4').on('click',function(){
        $('#popup4').addClass('show').fadeIn();
    });
    $('#popup-btn5').on('click',function(){
        $('#popup5').addClass('show').fadeIn();
    });
    $('#popup-btn6').on('click',function(){
        $('#popup6').addClass('show').fadeIn();
    });
    $('.popup').on('click',function(){
        $('.popup').fadeOut();
    });

    // 文字fadein
    $(".slide-bottom").fadeThis({
        speed: 1000,
        distance: 80,
        opacity: 0,
        reverse: false,
    });

});