$(document).ready(function () {
    $('.tab-content-blk').hide();
    $('.tab-content-blk').eq(0).show();
    $('.tab-btns li').eq(0).removeClass('active')
    $('.tab-btns li').eq(0).addClass('active')

    $('.tab-btns li').eq(0).click(function () {
        $('.tab-btns li').removeClass('active')
        $('.tab-btns li').eq(0).addClass('active')
        $('.tab-content-blk').hide();
        $('.tab-content-blk').eq(0).show();
    });
    $('.tab-btns li').eq(1).click(function () {
        $('.tab-btns li').removeClass('active')
        $('.tab-btns li').eq(1).addClass('active')
        $('.tab-content-blk').hide();
        $('.tab-content-blk').eq(1).show();
    });
    $('.tab-btns li').eq(2).click(function () {
        $('.tab-btns li').removeClass('active')
        $('.tab-btns li').eq(2).addClass('active')
        $('.tab-content-blk').hide();
        $('.tab-content-blk').eq(2).show();
    });
    $('.tab-btns li').eq(3).click(function () {
        $('.tab-btns li').removeClass('active')
        $('.tab-btns li').eq(3).addClass('active')
        $('.tab-content-blk').hide();
        $('.tab-content-blk').eq(3).show();
    });
    $('.tab-btns li').eq(4).click(function () {
        $('.tab-btns li').removeClass('active')
        $('.tab-btns li').eq(4).addClass('active')
        $('.tab-content-blk').hide();
        $('.tab-content-blk').eq(4).show();
    });
});