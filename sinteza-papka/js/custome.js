$(document).ready(function(){

//   $(".coll-slider").slick({
//      infinite:false,
//   });


   $(".faq-open-close").click(function(){
      $(this).prev(".faq-link__answer").slideToggle(400);
      $(this).toggleClass("opened-answer");
   });


   /*появление-исчезновение выпадающего меню при клике на кнопку*/
   $('.drop-down-menu__button').on('click', function(){
        $('.drop-down-menu').toggleClass('drop-down-menu-active');
   })


});

