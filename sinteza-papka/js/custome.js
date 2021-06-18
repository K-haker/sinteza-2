$(document).ready(function(){
   var show_popup_sert = false;
   var theItemToDelete;


   /*работа с карточкой товара смена картинки при выборе цвета*/
   $(".slide-left__color-variants-item__fake-radio").on("click", function(){

     var srcNewColorProdCard =  $(this).closest('.colors-variants-item').attr('data-src');
      $(".general-info-product__img").attr("src", `${srcNewColorProdCard}`);

   })

   /*работа с карточкой товара смена картинки при выборе материала*/

   $('[data-radio="material-prod-card"]').on("click", function(){

     var srcNewMaterialProdCard =  $(this).closest('.slide-left__material-variants-item').attr('data-srcMaterial');
      $(".general-info-product__img").attr("src", `${srcNewMaterialProdCard}`);

   });

   /*изменение конфигурация в таблице при нажатии на кнопку выбрать*/



   /*Показ информации о материале при ховере*/
   if($(window).width > 1024){
      $(".materials-products__item-photo").mouseenter(function(){
         $(".materials-products__item-info").slideUp(0)
         $(this).closest(".materials-products__item").find(".materials-products__item-info").slideDown(100)
      })

      $("body").on("click", function(){
         $(".materials-products__item-info").slideUp(0)
      })
   }





   /*переключение блоков со строиз на странице принтеров*/
   $(".printers-stories__mini-nav-item").on("click", function(){
      $(".stor-sl-main-wrapp-link").removeClass("dis-bl");
      $(".printers-stories__mini-nav-item").removeClass("printers-stories__mini-nav-item-active")
      $(this).addClass("printers-stories__mini-nav-item-active")
   })

   $("#catalogStoriesNavRent").on("click", function(){
      $('[data-printerStories="rent"]').addClass("dis-bl")
   })

   $("#catalogStoriesNavRepair").on("click", function(){
      $('[data-printerStories="repair"]').addClass("dis-bl")
   })

   $("#catalogStoriesNavCopy").on("click", function(){
      $('[data-printerStories="copy-equipment"]').addClass("dis-bl")
   })



   /*открыие мобильного меню сортировки в каталоге*/
   $("[data-catalogMobMenuSort]").on("click", function(){
      $(".upholstered-furniture__info-block").slideDown(300);
      $("#background-furn").addClass("dis-bl");
      $(".upholstered-furniture__info-block__choose-sort__dropdown-menu").slideDown(0)
   })

   /*закрытие мобильного меню сортировки в каталоге*/
   $(".upholstered-furniture__info-block__mob-close").on("click", function(){
      $(".upholstered-furniture__info-block").slideUp(300);
      $("#background-furn").removeClass("dis-bl")
   })

   /*появление мобильное меню фильтров в каталоге*/
   $("[data-catalogMobMenuFiltres]").on("click", function(){
      $(".catalog_filters-dropdown-menu").slideDown(300)
      $("#background-furn").addClass("dis-bl")
   })

   /*закрытие мобильное меню фильров в каталоге*/
      $(".catalog_filters-dropdown-menu__close").on("click", function(){
         $(".catalog_filters-dropdown-menu").slideUp(300);
         $("#background-furn").removeClass("dis-bl");
      })

   /*работа с активным слайдом в скролящемся меню*/
   $(".upholstered-furniture__mini-nav__span").on("click", function(){
      if($(this).hasClass("upholstered-furniture__mini-nav__span-active")){
         $(this).removeClass("upholstered-furniture__mini-nav__span-active")
      } else{
         $(this).addClass("upholstered-furniture__mini-nav__span-active")
      }

   })

   /*работа с сортировкой по типу в каталоге */
      $(".upholstered-furniture__info-block__choose-sort_click-block").on("click", function(){
         $(".upholstered-furniture__info-block__choose-sort__dropdown-menu").slideDown(300);

         $(".upholstered-furniture__info-block__choose-sort_click-block img").addClass("upholstered-furniture__info-block__choose-sort_click-block-img-active")
      })

   /*нажатие на пункт выпадающего меню*/
   if($(window).width() > 380){
         $(".upholstered-furniture__info-block__choose-sort__dropdown-menu div").on("click", function(){
         $(".upholstered-furniture__info-block__choose-sort__dropdown-menu div").removeClass("upholstered-furniture__info-block__choose-sort__dropdown-menu-div-active")
         $(this).addClass("upholstered-furniture__info-block__choose-sort__dropdown-menu-div-active")

         var textDropdownMEnuCatalog = $(this).text()
         $(".upholstered-furniture__info-block__choose-sort span").text(textDropdownMEnuCatalog)

         $(".upholstered-furniture__info-block__choose-sort__dropdown-menu").slideUp(300)

         $(".upholstered-furniture__info-block__choose-sort_click-block img").removeClass("upholstered-furniture__info-block__choose-sort_click-block-img-active")
      })
   } else{
      $(".upholstered-furniture__info-block__choose-sort__dropdown-menu div").on("click", function(){
         $(".upholstered-furniture__info-block__choose-sort__dropdown-menu div").removeClass("upholstered-furniture__info-block__choose-sort__dropdown-menu-div-active")
         $(this).addClass("upholstered-furniture__info-block__choose-sort__dropdown-menu-div-active")
      })
   }

   /*работа с поиском*/
   /*открытие поиска*/
   $("#open-search-panel").on("click", function(){
      $("#search-block").slideDown(300);
      $("#background-furn").addClass("display-block");
   })

   /*Закрытие поиска*/
   $("#close-search-panel").on("click", function(){
      $("#search-block").slideUp(300);
      $("#background-furn").removeClass("display-block");
   })

   /*скрытие/показ блока с товарами, которые часто ищут при длине value нпута поиска*/
//   $("#searchPanelInput").on("keydown", function(){
//      console.log($("#searchPanelInput").val().length )
//
//      if($("#searchPanelInput").val === ""){
//         $("#frequently-searched-block").addClass("dis-none");
//      } else if($("#searchPanelInput").val !== ""){
//         $("#frequently-searched-block").addClass("dis-bl");
//      }
//   })




   /*Скрипты на странице поиска*/
   $('[data-searchPage="searchedButtons"]').on("click", function(){
      $('[data-searchPage="searchedButtons"]').removeClass("search-page__radio-buttons__item-active");
      $('[data-searchPage="searchedButtons"]').find('[data-searchPage="searchedCounters"]').slideUp(0)

      $(this).addClass("search-page__radio-buttons__item-active");
      $(this).find('[data-searchPage="searchedCounters"]').slideDown(0);
   })

   /**/
   $('[data-searchButton="searchedButton"]').on("click", function(event){
      $('[data-searchButton="searchedButton"]').removeClass("search-matches-found__left-buttons-items-active");
      $('[data-searchButton="searchedButton"]').find('[data-count="search-matches__counters"]').slideUp(0)

      $(this).addClass("search-matches-found__left-buttons-items-active");
      $(this).find('[data-count="search-matches__counters"]').slideDown(0);
   })

   $("#searchedProductsRadio").on("click", function(){
      $("#searchJournalMatchedBlock").slideUp(0)
      $("#searchProductsMatchedBlock").slideDown(0);
   })

   $("#searchedJournalsRadio").on("click", function(){
      $("#searchJournalMatchedBlock").slideDown(0)
      $("#searchProductsMatchedBlock").slideUp(0);
   })


   /*Открытие сине зеленого блока*/

   if($(window).width < 480){
      $(".question-circle__hover").on("click", function(){

         if($(".blue-green-window__delivery").hasClass('display-block')){
            $(".blue-green-window__delivery").removeClass("display-block")
         } else{
            $(".blue-green-window__delivery").addClass("display-block")
         }

      })
   }  else {

      $(".question-circle__hover").hover(function(){
         $(".blue-green-window__delivery").addClass("display-block")
      },function(){
         $(".blue-green-window__delivery").removeClass("display-block");
      })

   }


   /*появление ошибки об оплате при нажатии на кнопку*/
   $("#making-order__payment-pay-button").on("click", function(){
      $(".making-order__payment-error").slideDown(300);
      $("#background-furn").addClass("dis-bl");
   })

   $(".making-order__payment-error__bottom-item").on("click", function(){
      $(".making-order__payment-error").slideUp(300);
      $("#background-furn").removeClass("dis-bl");
   })

   /*работа с радио кнопками способов оплаты*/
   $(".making-order__payment__variants-item").on("click", function(){
      $(".making-order__payment__variants-item").removeClass("making-order__payment__variants-item-active");
      $(this).addClass("making-order__payment__variants-item-active");

      if ($(event.target).attr('id') == 'making-order__payment__variants-cash'){
         $("#making-order__payment-pay-button__cart").slideUp(0);
         $("#making-order__payment-pay-button__cash").slideDown(0);
      } else {
         $("#making-order__payment-pay-button__cart").slideDown(0);
         $("#making-order__payment-pay-button__cash").slideUp(0);
      }
   })

   /*Работа с радиокнопками Ваши данные/способ получения/оплата*/
   $("#makingOrderRadioButonYouData").on("click", function(){
      $("#how-get__wrapper-block").slideUp(0);
      $("#making-order__your-data__wrraper-block").slideDown(0);
      $("#makibg-order__wrapper-all").slideDown(0);
      $("#making-order__payment-wrapper").slideUp(0);

      $(".making-order__switching-menu_item").removeClass("making-order__switching-menu_item-active");
      $(this).addClass("making-order__switching-menu_item-active");
   })

    $("#makingOrderRadioButonHowToGetIt").on("click", function(){
      $("#how-get__wrapper-block").slideDown(0);
      $("#making-order__your-data__wrraper-block").slideUp(0);
       $("#makibg-order__wrapper-all").slideDown(0);
       $("#making-order__payment-wrapper").slideUp(0)
       $("#making-order__order-info__delivery").addClass("display-flex");
       $("#making-order__order-info__pick-up-sevice").removeClass("display-flex");

       $(".making-order__switching-menu_item").removeClass("making-order__switching-menu_item-active");
       $(this).addClass("making-order__switching-menu_item-active");
   })

   $("#makingOrderRadioButonPayment").on("click", function(){
      $("#makibg-order__wrapper-all").slideUp(0);
      $(".making-order__switching-menu_item").removeClass("making-order__switching-menu_item-active");
       $(this).addClass("making-order__switching-menu_item-active")
      $("#making-order__payment-wrapper").slideDown(0);
   })

   /*показ/скрытие блока о поднятии на этаж в зависимости от того выбран input или нет*/
   $(".how-get__additional-services-choice__item-left").on("click", function(){
      if($("#ascent-to-the-foor-input").is(":checked")){
         $("#ascent-to-the-foor-block").slideDown(300);
      } else{
         $("#ascent-to-the-foor-block").slideUp(300);
      }

      if($('[data-type="additional-services"]').is(":checked") > 0){
         $("#making-order__order-info__additional-services").addClass("display-flex");
      } else{
         $("#making-order__order-info__additional-services").removeClass("display-flex");
      }
   })

   /*Самовывоз*/
   $("#making-order__pick-up-service").on("click", function(){
      $("#making-order__order-info__delivery").removeClass("display-flex");
      $("#making-order__order-info__pick-up-sevice").addClass("display-flex");
      $("#making-order__order-info__additional-services").removeClass("display-flex");
   })

   /*Доставка*/
   $('[data-delivery="yes"]').on("click", function(){
      $("#making-order__order-info__delivery").addClass("display-flex");
      $("#making-order__order-info__pick-up-sevice").removeClass("display-flex");
   })


   /*Работа с радио кнопками во вкладке Ваши данные*/
   $(".making-order__how-to-contact__variants-item").on("click", function(){
      $(".making-order__how-to-contact__variants-item").removeClass("making-order__how-to-contact__variants-item-active");
      $(event.target).addClass("making-order__how-to-contact__variants-item-active")
   })

   /*Открытие всплывающих окон на странице оформление заказа*/

   $("#chooseYourCity").on("click", function(){
      $("#making-order__window-choose-sity").slideToggle(300);
      $("#background-furn").addClass("dis-bl");

      var nameCityInInputOfWindowMakingOrder = $("#nameChoosedCity").text();
      $("#cityInWindowChooseCity").val(nameCityInInputOfWindowMakingOrder);
   })

   /*Закрытие всплывающих окон на странице форомление заказа*/
   $("#close-making-order-city-window").on("click", function(){

      var choosedCityNameEnded = $("#cityInWindowChooseCity").val();
      $("#nameChoosedCity").text(choosedCityNameEnded);
      $("#making-order__window-choose-sity").slideToggle(300);
      $("#background-furn").removeClass("dis-bl");
   })

   /*выбор города и смена названия в Инпуте в открытом окне*/
   $(".making-order__window-choose-sity__list-item").on("click", function(){
      $(event.target).text();
      var choosedCityName = $(event.target).text();
      $("#cityInWindowChooseCity").val(choosedCityName);
   })


   /*Работа с тремя радиобатонами о доставке/самовывозе*/
   $(".how-get__choose-variants-item").on("click", function(){
      $(".how-get__choose-variants-item").removeClass("how-get__choose-variants-item-active");
      $(this).addClass("how-get__choose-variants-item-active");

      if ($(event.target).attr('id') == 'making-order__pick-up-service'){
         $("#how-get__pick-up-service").slideDown(0);
         $("#making-order__delivery").slideUp(0);
      } else {
         $("#how-get__pick-up-service").slideUp(0);
         $("#making-order__delivery").slideDown(0);
      }

      if ($(event.target).attr('id') == 'making-order__pick-up-service'){
         $("#making-order__order-info__pick-up-sevice").addClass("dis-fl");
         $("#making-order__order-info__additional services").slideUp(0);
         $("#making-order__order-info__delivery").slideUp(0);
      }
   })


   /*перемещение к верху страницы при нажтии на кнопку "вверх" на странице Оформление заказа*/
   $("#goToTopPageMakingOrder").on('click', function(){
        $('body,html').animate({scrollTop: 0}, 500);
    });

   /*маска телефона на странице Ваши данные*/


   if($("#telephoneNumberMakingOrd").length > 0){
      $("#telephoneNumberMakingOrd").mask("+7(999)999-99-99");
   }



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


   /*Открытие боковых панелей на карточке товара при клике на треугольники/стрелочки*/
   $("#proCardOpenColorsBlock").on("click", function(){
       $("#productCardsWindowColor").animate({'left':'0px'},300);
   });

   $("#proCardOpenComplectationBlock").on("click", function(){
      $("#productCardsWindowComplectation").animate({'left':'0px'},300);
   });

   $("#proCardOpenSizeBlock").on("click", function(){
       $("#productCardsWindowSize").animate({'left':'0px'},300);
   });

   $("#proCardOpenMaterialsBlock").on("click", function(){
        $("#productCardsWindowMaterial").animate({'left':'0px'},300);
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
   var OffsetTopFixedBlock = $("#prodCardotherInfoNavWrapper");

   if(OffsetTopFixedBlock.length > 0){

      $(window).on("scroll resize", function(){
      var scrollTopWindow = $(window).scrollTop();


         if(scrollTopWindow > OffsetTopFixedBlock.offset().top -95 && $(window).width() >480){
            $("#prodCardotherInfoNavWrapper").addClass("fixed-block");
            $('.product-card__other-information').addClass('block-was-fixed');
         } else{
            $("#prodCardotherInfoNavWrapper").removeClass("fixed-block");
            $('.product-card__other-information').removeClass('block-was-fixed');
         }

      if(scrollTopWindow > OffsetTopFixedBlock.offset().top -65 && $(window).width() <481){
            $("#prodCardotherInfoNavWrapper").addClass("fixed-block-mobile");
            $('.product-card__other-information').addClass('block-was-fixed-mobile');
         } else {
            $("#prodCardotherInfoNavWrapper").removeClass("fixed-block-mobile");
            $('.product-card__other-information').removeClass('block-was-fixed-mobile');
         }

         console.log(`скролл от верха окна ${scrollTopWindow}`)
         console.log(`скролл ${OffsetTopFixedBlock.offset().top}`)

      })
   }



   /*Фиксированная цена и наименование товара в мобилке в карточке товара*/
      var OffsetTopFixedBlockProductCard = $(".general-info-product__price");
      var productCardTextContent = $(".general-info-product__price .prc").text();
      var fixedBottomPriceText = $(".product-card__fixed-price").text(productCardTextContent)

      var productCardTextContentName = $(".product-info__name").text();
      var fixedBottomPriceTextName = $(".product-card__mobile-bottom-block__name").text(productCardTextContentName)

      $(window).on("scroll resize", function(){
      var scrollTopWindow = $(window).scrollTop();

         if(OffsetTopFixedBlockProductCard){
            if(scrollTopWindow > OffsetTopFixedBlockProductCard.offset().top - 30){
               $(".product-card__mobile-bottom-block").addClass("dis-fl");
               $(".product-card__mobile-bottom").addClass("dis-flexed");

            } else {
                $(".product-card__mobile-bottom-block").removeClass("dis-fl");
               $(".product-card__mobile-bottom").removeClass("dis-flexed");

            }
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

   /*Валидация формы на странице Ваши данные*/
   $(".making-order__form-registered__item-input").blur(function(){

      if($(this).val() ===""){
         $(this).parent().find("label").removeClass("label-active");
         $(this).parent().addClass("errored-form-input");
      }

      if($(this).val() !==""){
         $(this).parent().find("label").addClass("label-active");
         $(this).parent().removeClass("errored-form-input");
      }

   })



   $(".making-order__form-registered__item-input").focus(function(){
      console.log("focus")
      $(this).parent().find("label").addClass("label-active");
   })


})


/***/
/*начало JS кода*/
/***/


/*слайдеры*/


var firstSwiper = new Swiper(".swiper-1",{
   slidesPerView: 'auto',
   spaceBetween: 20,
   navigation:{
      nextEl:".coll-arr-right",
      prevEl:".coll-arr-left",
   },
})

var firstSwiper = new Swiper(".search-page-slider",{
   slidesPerView: 'auto',
   spaceBetween: 20,

})


var secondSwiper = new Swiper(".swiper-2",{
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

var videoMain = document.querySelector("#videoOnMainPage");
var videoMainButton = document.querySelector(".play-stop__block");


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

var productCardPhotoSlider = new Swiper(".other-information__photo-slider-wrapper",{
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

var productCardStoriesSlider = new Swiper(".stories-slider-product-card",{
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

var productCardBottomSlider = new Swiper(".product-slider-bottom",{
   slidesPerView: 'auto',
   spaceBetween: 20,
   navigation:{
      nextEl:".p-c-sl-b-r",
      prevEl:".p-c-sl-b-l",
   },
});

var productCardReviewsSlider = new Swiper(".reviews-slider-product-card",{
   slidesPerView: 'auto',
   spaceBetween: 40,
   navigation:{
      nextEl:".p-c-sl-reviews-r",
      prevEl:".p-c-sl-reviews-l",
   },
});


var productCardMobilesSlider = new Swiper(".prod-card__mob-slider-wrapper",{
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

var productCardMobilesSliderColorWindow = new Swiper(".slide-left__colors-slider_wrapper",{
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

/*Появление поп апа при клике на картинку в отзыве*/
var reviewsPhotosGroup = document.querySelectorAll(".reviews-photos");
var reviewsPhotosGroupSlider = document.querySelector(".review-slider-photos-block");
var reviewSliderPhotosBlockWrapper = document.querySelector(".review-slider-photos-block_wrapper");
var closePhohSliderReview = document.querySelector(".review-slider-photos-block_wrapper-close")


for( var i = 0; i<reviewsPhotosGroup.length; i++){
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


if(closePhohSliderReview){
   closePhohSliderReview.addEventListener("click", function(){
      reviewSliderPhotosBlockWrapper.style.left= "-3000px";
   })
}


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

for( var i = 0; i<productCardPhotosGroup.length; i++){
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


      var childrenSliderMobilePopUp = productCardPhotosGroup[i].querySelectorAll('.prod-card__mob-slider-item img');

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
   var productCardScrollDistance = window.scrollY;

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


/*Корзина. Блоки в зависимости от наличия товара в корзине*/

var basketBlockWithBasketItems = document.querySelector("#visibleBlockIfTheCartHasAnItem");
var basketNoProductsInTheBusket = document.querySelector("#noProductsInTheBusket");
var basketbusketProductsListBlock = document.querySelectorAll("#busketProductsListBlock .busket-products-list__item");


function checkingAvailabilityOfProductsInBasket(){
   if(basketBlockWithBasketItems || basketNoProductsInTheBusket){
      if(basketbusketProductsListBlock.length > 0){
         basketBlockWithBasketItems.classList.add("dis-bl");
         basketNoProductsInTheBusket.classList.add("dis-none")
      } else {
         basketBlockWithBasketItems.classList.add("dis-none");
         basketNoProductsInTheBusket.classList.add("dis-bl")
      }
   }
}



checkingAvailabilityOfProductsInBasket()

/*подсчет количества товаров в корзине*/


var basketCounterInputs = document.querySelectorAll(".busket-product-counter-input");
var basketProductsTotalCounter = document.querySelector(".busket-top__left-counter")

function countingNumberOfItemsIndasket(){
   var counterInputsOfBasket = 0;

   for(var i =0; i<basketCounterInputs.length; i++){
      counterInputsOfBasket = +counterInputsOfBasket + +basketCounterInputs[i].value;
   }

   if(basketProductsTotalCounter){
      basketProductsTotalCounter.textContent = counterInputsOfBasket;
   }

}

countingNumberOfItemsIndasket()


/*Подсчет стоимости всех товаров без учета скидки*/
var generalPriceNoDiscountCounter = document.querySelector(".busket-general-price__no-discount_counter");
var basketProductItem = document.querySelectorAll(".busket-products-list__item")
var counterOfTotalPrice;

function busketCostCalculation(){
   counterOfTotalPrice =0;

   for(var i =0; i < basketProductItem.length; i++){
      var counterInItemBasket = basketProductItem[i].querySelector('.busket-product-counter-input');
      var priceInItemBasket = basketProductItem[i].querySelector('.busket-products-list__item-main-info__price-counter');
      var priceOfOneItem = +counterInItemBasket.value * +priceInItemBasket.textContent;

      counterOfTotalPrice = counterOfTotalPrice + priceOfOneItem
   }


   if(generalPriceNoDiscountCounter){
      generalPriceNoDiscountCounter.textContent = counterOfTotalPrice;
   }
}

busketCostCalculation();


/*Подсчет скидки*/
var discontCounterInBasketpage;
var discontmeaningInBasketpage = document.querySelector(".busket-general-price__discount-counter")

function calculatingЕheВiscount(){
   discontCounterInBasketpage =0

   for(i=0; i < basketProductItem.length; i++){

      if(basketProductItem[i].querySelector(".product-discount-value")){

         var priceInItemBasket = basketProductItem[i].querySelector('.busket-products-list__item-main-info__price-counter').textContent;

         var productsCounterDiscount = basketProductItem[i].querySelector('.busket-product-counter-input').value;

         var disconBusketProductItem = +(basketProductItem[i].querySelector(".product-discount-value").textContent / 100) * +priceInItemBasket * +productsCounterDiscount;

           discontCounterInBasketpage = +discontCounterInBasketpage + +disconBusketProductItem
      }
   }

   if(discontmeaningInBasketpage){
      discontmeaningInBasketpage.textContent = discontCounterInBasketpage;
   }

}

calculatingЕheВiscount()


/*функция обнуления стоимости и скидки при перерасчете из-за изменения кол-ва товаров*/
function basketResetToZero(){
   finalСostbasket.textContent = 0;
   discontmeaningInBasketpage.textContent = 0;
   generalPriceNoDiscountCounter.textContent = 0;
}


/*Считаем конечную стоимость*/
var finalСostbasket = document.querySelector(".busket-final-price__counter")

function calculatingTheFinalCost(){
   if(finalСostbasket){
      finalСostbasket.textContent = counterOfTotalPrice - discontCounterInBasketpage;
   }
}

calculatingTheFinalCost();


/* работа с + и - в корзине*/
var plusOnePiece = document.querySelectorAll(".busket-product-counter-plus");
var minusOnePiece = document.querySelectorAll(".busket-product-counter-minus");
/*  +  */
for(i=0; i< plusOnePiece.length; i++){
   plusOnePiece[i].addEventListener("click", function(){
      var counterPiecesOfProductItem = event.target.parentNode.parentNode.querySelector(".busket-product-counter-input");

      counterPiecesOfProductItem.value = +counterPiecesOfProductItem.value + 1;

      busketCostCalculation();
      calculatingЕheВiscount();
      calculatingTheFinalCost();
      countingNumberOfItemsIndasket();
   })
}

/*   -   */
for(i=0; i < minusOnePiece.length; i++){
   minusOnePiece[i].addEventListener("click", function(){
      var counterPiecesOfProductItem = event.target.parentNode.parentNode.querySelector(".busket-product-counter-input");

      counterPiecesOfProductItem.value = +counterPiecesOfProductItem.value - 1;
      if(counterPiecesOfProductItem.value < 0){
         counterPiecesOfProductItem.value = 0;
      }

      busketCostCalculation();
      calculatingЕheВiscount();
      calculatingTheFinalCost();
      countingNumberOfItemsIndasket()

   })
}

/*пересчет цены и количества при удалении позиции в списке*/
var basketDeleteProductItem = document.querySelector("#yesDeleteElement");

if(basketDeleteProductItem){
   basketDeleteProductItem.addEventListener("click", function(){

   /*пересчет цены и кол-ва товара*/
   busketCostCalculation();
   calculatingЕheВiscount();
   calculatingTheFinalCost();
   countingNumberOfItemsIndasket();

   /*проверка на наличие товара в корзине*/
   checkingAvailabilityOfProductsInBasket();
})

}


var catalogPrintersSlider = new Swiper(".printers-stories-slider-container",{
   slidesPerView: 'auto',
   spaceBetween: 20,
})



function materialsSliders(){
   var materialsProductsItemCounter = 0;

   var materialsProductsItem = document.querySelectorAll(".materials-products__item");

   if(window.screen.width <1024){
      for(var i = 0; i<materialsProductsItem.length; i++){
         /*задаем классы (html структуру) для каждого материала*/
         materialsProductsItem[i].classList.add('swiper-container');
         materialsProductsItem[i].querySelector(".materials-products__item-block").classList.add('swiper-wrapper');
         materialsProductsItem[i].querySelector(".materials-products__item-main-block").classList.add('swiper-slide')
         materialsProductsItem[i].querySelector(".materials-products__item-info").classList.add("swiper-slide");
      }

      /*инициализация слайдера*/

         var sliderMaterialName = new Swiper(`.materials-products__item`,{
            slidesPerView: '1',
            spaceBetween: 20,
            pagination:{
               el:'.materials-products__item-pagination',
            }
         })

   }

}

window.addEventListener("load", function(){

})

materialsSliders();











