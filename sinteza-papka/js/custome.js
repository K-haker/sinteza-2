$(document).ready(function(){


//   $(".faq-open-close").click(function(){
//      $(this).prev(".faq-link__answer").slideToggle(400);
//      $(this).toggleClass("opened-answer");
//   });




   /*Аккордеон*/

   $('.faq-link__question, .faq-link__question, .faq-open-close').click(function(event) {
      var parent = $(this).closest('.faq-link');
      parent.find('.contact-toggle').slideToggle(300);
      parent.toggleClass('cont-open');
   });


   /*Меню*/

    $("#dropDownMenuButton").on("click", function(event) {
        event.preventDefault();

        $("#dropDownMenu").toggleClass("drop-down-menu-active");
    });

   /*Карусель на странице гарантий*/

   let waterWheel = $(".warranty-slider").waterwheelCarousel({
      separation: 300,
      opacityMultiplier: 0.5,
      horizon: 0,
      flankingItems: 2,




   })

//   $("#warr-prev").bind("click", function(){
//      carousel.prev();
//      return false;
//   });
//
//   $("#warr-next").bind("click", function(){
//      carousel.next();
//      return false;
//   });
});


let firstSwiper = new Swiper(".swiper-1",{
   slidesPerView: 'auto',
   spaceBetween: 20,
   navigation:{
      nextEl:".coll-arr-right",
      prevEl:".coll-arr-left",
   },
})


let secondSwiper = new Swiper(".swiper-2",{
   slidesPerView: 'auto',
   spaceBetween: 30,
})






