$(document).ready(function () {

  $(".accordion-item:nth-child(2) .accordion-content").show();
  $(".accordion-item:nth-child(2) .toggle").text('-');


  $(".accordion-header").click(function () {

      if ($(this).next(".accordion-content").is(":visible")) {
          $(this).next(".accordion-content").slideUp(); 
          $(this).find(".toggle").text('+'); 
      } else {
          //$(".accordion-content").slideUp();
          //$(".toggle").text('+'); 
          
          $(this).next(".accordion-content").slideDown();
          $(this).find(".toggle").text('-'); 
      }
  });
});
