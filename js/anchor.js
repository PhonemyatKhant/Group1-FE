$('.btns-blk button:nth-of-type(1)').addClass('active')

$('.btns-blk button:nth-of-type(1)').on('click', function () {
    $('.btns-blk button').removeClass('active')
    $('.btns-blk button:nth-of-type(1)').addClass('active')
    $('html, body').animate({
        scrollTop: $('.p-display').offset().top
    }, 800);
});
$('.btns-blk button:nth-of-type(2)').on('click', function () {
    $('.btns-blk button').removeClass('active')
    $('.btns-blk button:nth-of-type(2)').addClass('active')
    $('html, body').animate({
        scrollTop: $('.p-list2').offset().top
    }, 800);
});
$('.btns-blk button:nth-of-type(3)').on('click', function () {
    $('.btns-blk button').removeClass('active')
    $('.btns-blk button:nth-of-type(3)').addClass('active')
    $('html, body').animate({
        scrollTop: $('#sun-cream').offset().top
    }, 800);
});