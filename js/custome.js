$(document).ready(function(){

/*Аккордеон на станице вопросов и ответов FAQ*/
   $(".faq-open-close").click(function(){
      $(this).prev(".faq-link__answer").slideToggle(400);
      $(this).toggleClass("opened-answer");
      $(this).addClass(".bottom-arr-opened");
      $(this).find('.faq-button-arr').toggleClass("faq-button-arr-opened");
   });

   /*Выпадающее Меню*/
    $("#dropDownMenuButton").on("click", function(event) {
        event.preventDefault();

        $("#dropDownMenu").toggleClass("drop-down-menu-active");
    });

   /*Карусель на странице гарантий*/

   // код запустится, если на странице есть карусель, на остальных не будет работать
   if($(".warranty-slider").length > 0){
   // инициализации при старте страницы
   var waterWheel = $(".warranty-slider").waterwheelCarousel({
    separation: 300,
    opacityMultiplier: 0.5,
    horizon: 0,
    flankingItems: 2,
   })

   // событие при ресайзе
   $( window ).resize(function() {
    // удалить все стили с картинок карусели, чтобы сбросить размеры
    $(".slide-warranty").attr("style", "");
    // запомнить картинки
    var images_list = $(".warranty-slider").html();
    // стересть картинки из DOM, чтобы при новой инициализации пересчитать размеры картинок
    $(".warranty-slider").html("");
    // вернуть картинки на место в карусель
    $(".warranty-slider").html(images_list);
    // перезапусстить карусель
    waterWheel.reload();
   });
}
   $("#warr-prev").bind("click", function(){
      waterWheel.prev();
      return false;
   });
   $("#warr-next").bind("click", function(){
      waterWheel.next();
      return false;
   });


   /*POP UP*/
   $(".carousel-center").click(function(){
      console.log("hi!"); //проверяю отработку клика
   })

});


/*JS*/
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

   breakpoints:{
      768:{
         spaceBetween:10,
      },
      480:{
         spaceBetween:2,
      },
      320:{
         spaceBetween:2,
      },
   }
});


/*слайдеры на главной*/

let mainSliderMain = new Swiper(".main-slider-main",{
   slidesPerView: 'auto',
});

let mainSliderFirst = new Swiper(".main-slider-1");

let mainSliderSecond = new Swiper(".main-slider-2");

let mainSliderStories = new Swiper(".stories-main__slider-block");


/*Лупа на старнице гарантий*/

//new ImageZoom(document.getElementById("warranty-slider"),{
//
//    width: 400,
//    zoomWidth: 500,
//    offset: {vertical: 0, horizontal: 10}
//});










