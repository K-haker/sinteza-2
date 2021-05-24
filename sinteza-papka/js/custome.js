$(document).ready(function(){
   var show_popup_sert = false;
   var theItemToDelete;


/*Работа с корзиной*/
   /*очищение всей корзины*/
   $("#clearBusketButton").on("click", function(){
      $("#background-furn").addClass("dis-bl");
      $("#clearBusketQuestionWindow").slideDown(300);
   })

   $("#yesClearBusket").on("click", function(){
      $("#busketProductsListBlock").empty();
      $("#background-furn").removeClass("dis-bl");
      $(".busket__modal-clear-all-items").slideUp(300);
      $("#visibleBlockIfTheCartHasAnItem").addClass("dis-none");
   })

   /*Удаление элемента*/
   $(".busket-products-list__item-delete").on("click", function(){
      $("#background-furn").addClass("dis-bl");
      $("#deleteItemQuestionWindow").slideDown(300);

      theItemToDelete = $(this).closest(".busket-products-list__item");

      console.log(parent);
   })

   $("#yesDeleteElement").on("click", function(){
      theItemToDelete.remove();
      $("#background-furn").removeClass("dis-bl");
      $(".busket__modal-clear-all-items").slideUp(300);
   });

   /*Закрытие уточняющих окон*/
   $('[data-close="busketQuestionWindow"]').on("click", function(){
      $("#background-furn").removeClass("dis-bl");
      $(".busket__modal-clear-all-items").slideUp(300);
   })

/*Аккордеон на станице вопросов и ответов FAQ*/
   $(".faq-open-close").click(function(){
      $(this).prev(".faq-link__answer").slideToggle(400);
      $(this).toggleClass("opened-answer");
      $(this).find('.faq-button-arr').toggleClass("faq-button-arr-opened");
   });

/*Аккордеон на странице Журнала*/
   $(".journal-open-close").click(function(){
      $(this).prev(".journ-link__answer").slideToggle(400);
      $(this).find('.faq-button-arr').toggleClass("faq-button-arr-opened");
   });

/*Выпадающее мобильное Меню*/
   /*открытие меню*/
    $("#dropDownMenuButton").on("click", function(event) {
        event.preventDefault();
        $("#dropDownMenu").slideDown(300);
    });

   /*закрытие меню*/
   $("#closeDropdownMobMenu").on("click", function(){
      $('#dropDownMenu').slideUp(300);
   })

/*появление вкладок мебель и оборудование*/
   $('[data-open="furniture"]').on("click", function(e){
      e.preventDefault();

      $("#furniture-block").slideUp(0);
      $("#equipment-block").slideUp(0);

      $("#background-furn").addClass("drop-down-menu-furniture-active");
      $("#furniture-block").slideDown(300);
      $("#mobFurnitureTopType").text("Мебель");

      $('[data-open="equipment"]').removeClass("f-w-bold");
      $('[data-open="furniture"]').addClass("f-w-bold");
      $("#furitureMenuBlock").slideDown(300);
   })


   $('[data-open="equipment"]').on("click", function(e){
      e.preventDefault();

      $("#furniture-block").slideUp(0);
      $("#equipment-block").slideUp(0);

      $("#background-furn").addClass("drop-down-menu-furniture-active");
      $("#equipment-block").slideDown(300);
      $("#mobFurnitureTopType").text("Офисное оборудование");


      $('[data-open="furniture"]').removeClass("f-w-bold");
      $('[data-open="equipment"]').addClass("f-w-bold");
      $("#furitureMenuBlock").slideDown(300);
   })

/*Закрытие вкладки мебель/оборудование и возвращение к мобильному меню*/
   $('[data-type="close-furniture-equipment"]').on("click", function(e){
      e.preventDefault();
      $("#furitureMenuBlock").slideUp(300);
      $("#background-furn").removeClass("drop-down-menu-furniture-active");
      $("#furniture-block").slideUp(300);
      $("#equipment-block").slideUp(300);

      $('[data-open="furniture"]').removeClass("f-w-bold");
      $('[data-open="equipment"]').removeClass("f-w-bold");
   })


   /*Закрыть вкладку мебель/оборудование и  мобильное меню*/
   $('[data-type="close-mob-menu-and-furniture"]').on("click", function(e){
      e.preventDefault();
      $("#furitureMenuBlock").slideUp(300);
      $("#dropDownMenu").slideUp(300);
      $("#background-furn").removeClass("drop-down-menu-furniture-active");
      $("#furniture-block").slideUp(300);
      $("#equipment-block").slideUp(300);
      $('[data-open="furniture"]').removeClass("f-w-bold");
      $('[data-open="equipment"]').removeClass("f-w-bold");
   })


   /*Закрытике при клике на подложку*/
   $("#background-furn").on("click", function(){
      $("#furitureMenuBlock").slideUp(300);
      $("#background-furn").removeClass("drop-down-menu-furniture-active");
      $("#furniture-block").slideUp(300);
      $("#equipment-block").slideUp(300);

      $('[data-open="furniture"]').removeClass("f-w-bold");
      $('[data-open="equipment"]').removeClass("f-w-bold");
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


   /*Фиксированное положение хедера*/


/*работа с карточкой товаров*/
   /*Фиксированое положение блока на карточке товара*/



   /*Открытие боковых панелей на карточке товара при клике на треугольники/стрелочки*/
   $("#proCardOpenColorsBlock").on("click", function(){
       $("#productCardsWindowColor").animate({'left':'0px'},300)
   });

   $("#proCardOpenComplectationBlock").on("click", function(){
      $("#productCardsWindowComplectation").animate({'left':'0px'},300)
   });

   $("#proCardOpenSizeBlock").on("click", function(){
       $("#productCardsWindowSize").animate({'left':'0px'},300)
   });

   $("#proCardOpenMaterialsBlock").on("click", function(){
     $("#productCardsWindowMaterial").animate({'left':'0px'},300)
   });

   /*открытие мобильных блоков*/
   if($(window).width()< 481){
      $('[data-open="openMobileBlockColor"]').on('click', function(){
         $("#productCardsWindowColor").animate({'bottom':'0px'},300);
         $("#background-furn").addClass("dis-bl");
      })

      $('[data-open="openMobileBlockMaterial"]').on('click', function(){
         $("#productCardsWindowMaterial").animate({'bottom':'0px'},300)
         $("#background-furn").addClass("dis-bl");
      })

      $('[data-open="openMobileBlockSize"]').on('click', function(){
         $("#productCardsWindowSize").animate({'bottom':'0px'},300)
         $("#background-furn").addClass("dis-bl");
      })

      $("[data-open='openMobileBlockComplectation']").on('click', function(){      $("#productCardsWindowComplectation").animate({'bottom':'0px'},300);
         $("#background-furn").addClass("dis-bl");
      })
   }


   /*Закрытие всех боковых окон при нажатии на крестик*/

   if($(window).width() > 480){
      $('[data-type="closeWindowsProductCard"]').on('click', function(){
         $('[data-type="productCardsWindows"]').animate({'left':'-414px'},300);
         $("#background-furn").removeClass("dis-bl");
      })
   }else{
      $('[data-type="closeWindowsProductCard"]').on('click', function(){
         $('[data-type="productCardsWindows"]').animate({'bottom':'-700'},300);
         $("#background-furn").removeClass("dis-bl");
      })
   }

   /*Смотреть весь отзыв*/
   $('.read-more-button-reviews').on("click", function(){
       $(this).siblings('.reviews-review').addClass('height-auto');
      $(this).addClass("dis-none");
   })



   /*Фиксированный блок при скролле над слайдером*/
   var OffsetTopFixedBlock = $("#prodCardotherInfoNavWrapper").offset().top;

   $(window).on("scroll resize", function(){
      var scrollTopWindow = $(window).scrollTop();

         if(scrollTopWindow > OffsetTopFixedBlock -95 && $(window).width() >480){
            $("#prodCardotherInfoNavWrapper").addClass("fixed-block");
            $('.product-card__other-information').addClass('block-was-fixed');
         } else {
            $("#prodCardotherInfoNavWrapper").removeClass("fixed-block");
            $('.product-card__other-information').removeClass('block-was-fixed');
         }

      if(scrollTopWindow > OffsetTopFixedBlock -65 && $(window).width() <481){
            $("#prodCardotherInfoNavWrapper").addClass("fixed-block-mobile");
            $('.product-card__other-information').addClass('block-was-fixed-mobile');
         } else {
            $("#prodCardotherInfoNavWrapper").removeClass("fixed-block-mobile");
            $('.product-card__other-information').removeClass('block-was-fixed-mobile');
         }


   })


   /*Фиксированная цена и наименование товара в мобилке в карточке товара*/
      var OffsetTopFixedBlockProductCard = $(".general-info-product__price").offset().top;
      var productCardTextContent = $(".general-info-product__price .prc").text();
      var fixedBottomPriceText = $(".product-card__fixed-price").text(productCardTextContent)

      var productCardTextContentName = $(".product-info__name").text();
      var fixedBottomPriceTextName = $(".product-card__mobile-bottom-block__name").text(productCardTextContentName)

      $(window).on("scroll resize", function(){
      var scrollTopWindow = $(window).scrollTop();

      if(scrollTopWindow > OffsetTopFixedBlockProductCard){
         $(".product-card__mobile-bottom-block").addClass("dis-fl");
         $(".product-card__mobile-bottom").addClass("dis-flexed");

      } else {
          $(".product-card__mobile-bottom-block").removeClass("dis-fl");
         $(".product-card__mobile-bottom").removeClass("dis-flexed");

      }
   })


   /*переход к блоку при клике на пункт навигации товара*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var elementId = $(this).data('scroll');
        var elementOffset = $(elementId).offset().top;

       if($(window).width() >480){
          $("html, body").animate({
            scrollTop: elementOffset - 200
        }, 700);
       }else{
          $("html, body").animate({
            scrollTop: elementOffset - 120
        }, 700);
       }

    });





})


/***/
/*начало JS кода*/
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

var mainSliderMain = new Swiper(".main-slider-main",{
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

var mainSliderFirst = new Swiper(".main-slider-1",{
   slidesPerView: 'auto',
   spaceBetween: 20,
   navigation:{
      nextEl:".m-sl-1-r",
      prevEl:".m-sl-1-l",
   },
});

var mainSliderStories = new Swiper(".stories-slider-main",{
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

var mainSliderSecond = new Swiper(".main-slider-2",{
   slidesPerView: 'auto',
   spaceBetween: 20,
   navigation:{
      nextEl:".m-sl-2-r",
      prevEl:".m-sl-2-l",
   },
});

var mainSliderThird = new Swiper(".main-slider-4",{
   slidesPerView: 'auto',
   spaceBetween: 25,
   navigation:{
      nextEl:".m-sl-3-r",
      prevEl:".m-sl-3-l",
   },
});

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



/*Слайдеры на карточке товара*/

let productCardPhotoSlider = new Swiper(".other-information__photo-slider-wrapper",{
   slidesPerView: 'auto',
   spaceBetween: 30,
   navigation:{
      nextEl:".arrs-sl-prod-card-first-r",
      prevEl:".arrs-sl-prod-card-first-l",
   },
   pagination:{
      el:'.prod-card__photo-slider-dots',
      clickable: true,
   },
   breakpoints:{
      480:{
         spaceBetween:10,
      },
      1200:{
         spaceBetween:30,
      },

   },
});

let productCardStoriesSlider = new Swiper(".stories-slider-product-card",{
   slidesPerView: 'auto',
   spaceBetween: 120,
   navigation:{
      nextEl:".p-c-sl-str-r",
      prevEl:".p-c-sl-str-l",
   },
   breakpoints:{
      10:{
         spaceBetween:25,
      },

      480:{
         spaceBetween:55,
      },
      1200:{
         spaceBetween:130,
      },

   },
});

let productCardBottomSlider = new Swiper(".product-slider-bottom",{
   slidesPerView: 'auto',
   spaceBetween: 20,
   navigation:{
      nextEl:".p-c-sl-b-r",
      prevEl:".p-c-sl-b-l",
   },
});

let productCardReviewsSlider = new Swiper(".reviews-slider-product-card",{
   slidesPerView: 'auto',
   spaceBetween: 40,
   navigation:{
      nextEl:".p-c-sl-reviews-r",
      prevEl:".p-c-sl-reviews-l",
   },
});


let productCardMobilesSlider = new Swiper(".prod-card__mob-slider-wrapper",{
   slidesPerView: 1 ,
   navigation:{
      nextEl:".mob-slider-arrow-r",
      prevEl:".mob-slider-arrow-l",
   },
   pagination:{
      el:'.prod-card__mob-slider-wrapper-pagg',
      clickable: true,
   },
});





/*Слайдеры на странице карточки товара*/

let productCardMobilesSliderColorWindow = new Swiper(".slide-left__colors-slider_wrapper",{
   slidesPerView:'auto',
   navigation:{
      nextEl:".colors-mob-slider-arr-r",
      prevEl:".colors-mob-slider-arr-l",
   },
   speed:300,
   spaceBetween: 20,
   slidesPerGroup:1,
   centeredSlides: true,
});


var productCardMobilesSliderComplectationWindow = new Swiper(".slide-left__complectation-slider_wrapper",{
   slidesPerView:'auto',
   navigation:{
      nextEl:".complectation-mob-slider-arr-right",
      prevEl:".complectation-mob-slider-arr-left",
   },
   speed:300,
   spaceBetween: 20,
   slidesPerGroup:1,
   centeredSlides: true,
});

var productCardMobilesSliderMaterialsWindow = new Swiper(".slide-left__material-slider_wrapper",{
   slidesPerView:'auto',
   navigation:{
      nextEl:".material-mob-slider-arr-right",
      prevEl:".material-mob-slider-arr-left",
   },
   speed:300,
   spaceBetween: 20,
   slidesPerGroup:1,
   centeredSlides: true,
});


var reviewsPhotosGroup = document.querySelectorAll(".reviews-photos");
var reviewsPhotosGroupSlider = document.querySelector(".review-slider-photos-block");
var reviewSliderPhotosBlockWrapper = document.querySelector(".review-slider-photos-block_wrapper");
var closePhohSliderReview = document.querySelector(".review-slider-photos-block_wrapper-close")


for( let i = 0; i<reviewsPhotosGroup.length; i++){
   reviewsPhotosGroup[i].addEventListener("click", function(){
      reviewSliderPhotosBlockWrapper.style.left="0px";

      setTimeout(function(){
      var prodCardSliderPopUpReviewsPhotos = new Swiper(".prod-card-reviews-slider",{
         navigation:{
            nextEl:".review-slider-photos__right-arr",
            prevEl:".review-slider-photos__left-arr",
         },
         slidesPerView: 1,
         slidesPerGroup:1,
      });
      }, 1000);

      var childrenOfPhotoreviewsBlock = reviewsPhotosGroup[i].querySelectorAll('.reviews-photos-item__wrapper img')

      for(i=0; i<childrenOfPhotoreviewsBlock.length; i++){
        var srcImg = childrenOfPhotoreviewsBlock[i].getAttribute('src');

         reviewsPhotosGroupSlider.insertAdjacentHTML("beforeend",
         `
            <div class="review-slider-photos-item swiper-slide">
              <img src=${srcImg} alt="">
           </div>
         `
         )
      }
   })
}


try{
   closePhohSliderReview.addEventListener("click", function(){
      reviewSliderPhotosBlockWrapper.style.left= "-3000px";
   })
} catch{}

/*Слайдеры на странице корзина*/

var BusketSliderBottomBeforeFooter = new Swiper(".container-buscket-bottom-slider",{
   slidesPerView:'auto',
   navigation:{
      nextEl:".busket-slider-bottom-arr-r",
      prevEl:".busket-slider-bottom-arr-l",
   },
   spaceBetween: 20,

});



/*Слайдер в поп апе на странице карточки товара*/

var  productCardPhotosGroup = document.querySelectorAll(".prod-card__mob-slider");
var  productCardPhotosGroupSlider = document.querySelector(".product-card__mibile-pop-up");
var productCardSliderPhotosBlockWrapper = document.querySelector(".prod-card__mob-pop-up__block");
var closeProdCardSlider = document.querySelector(".product-card__mibile-pop-up-wrapper-close")

for( let i = 0; i<productCardPhotosGroup.length; i++){
   productCardPhotosGroup[i].addEventListener("click", function(){
      productCardSliderPhotosBlockWrapper.style.left ="0px";

      setTimeout(function(){
      var productCardMobilePopupWindowSlider = new Swiper(".product-card__mibile-pop-up-wrapper",{
         slidesPerView:'auto',
         navigation:{
            nextEl:".product-card__mob-popup__arrow-r",
            prevEl:".product-card__mob-popup__arrow-l",
         },
         spaceBetween: 20,

      });
      }, 1000);


      var childrenSliderMobilePopUp = productCardPhotosGroup[i].querySelectorAll('.prod-card__mob-slider-item img')

      for(i=0; i<childrenSliderMobilePopUp.length; i++){
        var srcImgMobPopUp = childrenSliderMobilePopUp[i].getAttribute('src');

         productCardPhotosGroupSlider.insertAdjacentHTML("beforeend",
         `
            <div class="product-card__mibile-pop-up-item swiper-slide">
              <img src="img/product-card/mob-pop-up-1.jpg" alt="">
           </div>
         `
         )
      }
   })


   closeProdCardSlider.addEventListener("click", function(){
      productCardSliderPhotosBlockWrapper.style.left ="-2000px";
   })
}



/*Подчеркивание активного пункта в навигации product card*/

window.addEventListener("scroll", function(){
   let productCardScrollDistance = window.scrollY;

   if(window.width>480){
      document.querySelectorAll(".prod-card__ither-information-item").forEach((el,i)=>{
         if(el.offsetTop - 200 <= productCardScrollDistance){
            document.querySelectorAll(".other-information__nav-item").forEach((el) =>{
               if(el.classList.contains('other-information__nav-item-active')){
                  el.classList.remove("other-information__nav-item-active")
               }
            })

            document.querySelectorAll(".other-information__nav-item")[i].classList.add("other-information__nav-item-active")
            }
      })
   } else {
      document.querySelectorAll(".prod-card__ither-information-item").forEach((el,i)=>{
         if(el.offsetTop - 120 <= productCardScrollDistance){
            document.querySelectorAll(".other-information__nav-item").forEach((el) =>{
               if(el.classList.contains('other-information__nav-item-active')){
                  el.classList.remove("other-information__nav-item-active")
               }
            })

            document.querySelectorAll(".other-information__nav-item")[i].classList.add("other-information__nav-item-active")
            }
      })
   }
})

















