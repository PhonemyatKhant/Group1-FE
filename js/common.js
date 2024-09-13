$(document).ready(function () {
  $('.menu-toggle').click(function () {
      $(this).toggleClass('active');
      $('.nav-links').toggleClass('show')
  });
  function swapImages() {
    const windowWidth = $(window).width();

    // Image elements
    const img1 = $('.p-btm .ingre-list .ingre-card:nth-child(1) .ingre-img');
    const img2 = $('.p-btm .ingre-list .ingre-card:nth-child(2) .ingre-img');
    const img3 = $('.p-btm .ingre-list .ingre-card:nth-child(3) .ingre-img');

    if (windowWidth >= 768 && windowWidth <= 1180) {
       
        const tempSrc = img1.attr('src');
        img1.attr('src', img2.attr('src'));
        img2.attr('src', img3.attr('src'));
        img3.attr('src', tempSrc);
    } else {
        
        img1.attr('src', '/img/product/img_cacao_md.png');
        img2.attr('src', '/img/product/img_honey_md.png');
        img3.attr('src', '/img/product/img_mint.png');
    }
}


swapImages();

$(window).resize(function () {
    swapImages();
});
});