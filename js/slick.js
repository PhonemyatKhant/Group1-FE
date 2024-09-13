$(document).ready(function () {
    $('.mv-lt .slick-prev').text("")
    $('.mv-lt .slick-prev').css({ "width": "36px", "height": "36px" })
    $('.mv-lt .slick-next').text("")
    $('.mv-lt .slick-next').css({ "width": "36px", "height": "36px" })
    $('.mv-lt .slick-dots li button').text("")
})


$('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true
});

