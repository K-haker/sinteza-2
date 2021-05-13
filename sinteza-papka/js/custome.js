$(document).ready(function(){
   var show_popup_sert = false;


/*Аккордеон на станице вопросов и ответов FAQ*/
   $(".faq-open-close").click(function(){
      $(this).prev(".faq-link__answer").slideToggle(400);
      $(this).toggleClass("opened-answer");
      $(this).find('.faq-button-arr').toggleClass("faq-button-arr-opened");
   });

/*Аккордеон на странице Журнала*/
   $(".journal-open-close").click(function(){
      $(this).prev(".journ-link__answer").slideToggle(400);
      $(this).toggleClass("opened-answer");
      $(this).find('.faq-button-arr').toggleClass("faq-button-arr-opened");
   });

/*Выпадающее мобильное Меню*/
   /*открытие меню*/
    $("#dropDownMenuButton").on("click", function(event) {
        event.preventDefault();
        $("#dropDownMenu").show(300);
    });

   /*закрытие меню*/
   $("#closeDropdownMobMenu").on("click", function(){
      $('#dropDownMenu').hide(300);
   })

/*появление вкладок мебель и оборудование*/
   $('[data-open="furniture"]').on("click", function(e){
      e.preventDefault();

      $("#furniture-block").removeClass("dis-yes");
      $("#equipment-block").removeClass("dis-yes");

      $("#background-furn").addClass("drop-down-menu-furniture-active");
      $("#furniture-block").addClass("dis-yes");
      $("#mobFurnitureTopType").text("Мебель");


      $("#furitureMenuBlock").show(300);
   })

   $('[data-open="equipment"]').on("click", function(e){
      e.preventDefault();

      $("#furniture-block").removeClass("dis-yes");
      $("#equipment-block").removeClass("dis-yes");

      $("#background-furn").addClass("drop-down-menu-furniture-active");
      $("#equipment-block").addClass("dis-yes");
      $("#mobFurnitureTopType").text("Офисное оборудование");

      $("#furitureMenuBlock").show(300);
   })

/*Закрытие вкладки мебель/оборудование и возвращение к мобильному меню*/
   $('[data-type="close-furniture-equipment"]').on("click", function(e){
      e.preventDefault();
      $("#furitureMenuBlock").hide("300");
      $("#background-furn").removeClass("drop-down-menu-furniture-active");
      $("#furniture-block").removeClass("dis-yes");
      $("#equipment-block").removeClass("dis-yes");
   })


/*Закрыть вкладку мебель/оборудование и  мобильное меню*/
   $('[data-type="close-mob-menu-and-furniture"]').on("click", function(e){
      e.preventDefault();
      $("#furitureMenuBlock").hide("300");
      $("#dropDownMenu").hide("300");
      $("#background-furn").removeClass("drop-down-menu-furniture-active");
      $("#furniture-block").removeClass("dis-yes");
      $("#equipment-block").removeClass("dis-yes");
   })

   $("#background-furn").on("click", function(){
      $("#furitureMenuBlock").hide("300");
      $("#background-furn").removeClass("drop-down-menu-furniture-active");
      $("#furniture-block").removeClass("dis-yes");
      $("#equipment-block").removeClass("dis-yes");
   })

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

   /// спрятать попап с картинкой, по клику в любом месте страницы
$("body").click(function() {
  // если попап открыт, то закрывать
  if(show_popup_sert){
    // анимированно показать скрытый блок
       $(".big-slide-wrapper").fadeOut(300);
        $(".background-for-big-slide").fadeOut(100);
       show_popup_sert = false; // попап скрыт
  }
});

// обработка клика по динамическому слайду
$(".warranty-slider").on("click", ".carousel-center", function() {
  // получить картинку активного слайда, по которму кликнул
  var img_src = $(this).attr("src");
  // вставтить картинку в попап
  $(".big-slide-wrapper img").attr("src", img_src);
  // анимированно показать скрытый блок
  $(".big-slide-wrapper").fadeIn(300, function() {
    // когда пройдет 300 милисек, то меняем флаг попапа на "видимый" = true
    show_popup_sert = true;
  });
   $(".background-for-big-slide").fadeIn(300);
});

});

/***/
/*JS*/
/***/
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
   slidesPerView: '1',
   pagination:{
      el:'.pag-main-slider-block',
      clickable: true,
   },
   navigation:{
      nextEl:".m-sl-main-r",
      prevEl:".m-sl-main-l",
   },
});

let mainSliderFirst = new Swiper(".main-slider-1",{
   slidesPerView: 'auto',
   spaceBetween: 20,
   navigation:{
      nextEl:".m-sl-1-r",
      prevEl:".m-sl-1-l",
   },
});

let mainSliderStories = new Swiper(".stories-slider-main",{
   slidesPerView: 'auto',
   spaceBetween: 90,
   navigation:{
      nextEl:".m-sl-str-r",
      prevEl:".m-sl-str-l",
   },
   breakpoints:{
      10:{
         spaceBetween:26,
      },

      480:{
         spaceBetween:55,
      },
      1200:{
         spaceBetween:90,
      },
   }

});

let mainSliderSecond = new Swiper(".main-slider-2",{
   slidesPerView: 'auto',
   spaceBetween: 20,
   navigation:{
      nextEl:".m-sl-2-r",
      prevEl:".m-sl-2-l",
   },
});

let mainSliderThird = new Swiper(".main-slider-4",{
   slidesPerView: 'auto',
   spaceBetween: 25,
   navigation:{
      nextEl:".m-sl-3-r",
      prevEl:".m-sl-3-l",
   },
});





/*Смена вида стрелок на главном слайдере главной страницы*/

let mainSliderMainPageLeftArr = document.querySelector(".main-sl-l-ar");
let mainSliderMainPageRightArr = document.querySelector(".main-sl-r-ar");
let mainSliderMainPageLeftArrPar = document.querySelector(".m-sl-main-l");
let mainSliderMainPageRightArrPar = document.querySelector(".m-sl-main-r");

window.addEventListener("resize", function(){
   mainArrowsReplacingArrows();
})

try{
   mainArrowsReplacingArrows()
} catch{}

function mainArrowsReplacingArrows(){
      if(window.outerWidth < 1200){
      mainSliderMainPageLeftArr.src = "img/main/white-arr-sliders-main.svg";
      mainSliderMainPageRightArr.src = "img/main/white-arr-sliders-main.svg";
   } else {
      mainSliderMainPageLeftArr.src = "img/main/black-arr-sliders-main.svg";
      mainSliderMainPageRightArr.src = "img/main/black-arr-sliders-main.svg";
   }
}


/*Видео на главной*/

let videoMain = document.querySelector("#videoOnMainPage");
let videoMainButton = document.querySelector(".play-stop__block");


function playVideo(e){
   event.stopPropagation();
   videoMain.play();
   videoMainButton.style.display="none";
}

function pauseVideo(){
   videoMain.pause();
   videoMainButton.style.display="";
}











