$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $(this).toggleClass('active');
        $('.nav-links').toggleClass('show')
    });
});