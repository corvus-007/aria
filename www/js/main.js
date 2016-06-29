// Загрузка карты
function loadMapScript() {
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?callback=initializeMap";
  document.head.appendChild(script);
}

// Инициализация карты
function initializeMap() {
  var locationPushkinPlaza = {
    lat: 55.763866,
    lng: 37.599654
  };

  function createProp(defaultLocation) {
    return {
      center: defaultLocation,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    };
  }

  var mapProp = createProp(locationPushkinPlaza);
  var map = new google.maps.Map(document.getElementById("distrtict-map"), mapProp);
  var markerPriem = new google.maps.Marker({
    position: locationPushkinPlaza,
    map: map,
    title: 'Филателист – Интернет-магазин для коллекционеров'
  });


}




var siteWidth = document.documentElement.clientWidth;



/*=================================================
=            Translating magnificPopup            =
=================================================*/

// Add it after jquery.magnific-popup.js and before first initialization code
$.extend(true, $.magnificPopup.defaults, {
  tClose: 'Закрыть (Esc)', // Alt text on close button
  tLoading: 'Загрузка...', // Text that is displayed during loading. Can contain %curr% and %total% keys
  gallery: {
    tPrev: 'Назад (Left arrow key)', // Alt text on left arrow
    tNext: 'Вперед (Right arrow key)', // Alt text on right arrow
    tCounter: '%curr% из %total%' // Markup for "1 of 7" counter
  },
  image: {
    tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
  },
  ajax: {
    tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
  }
});

/*=====  End of Translating magnificPopup  ======*/




// Выровнять элементы по высоте.
// elements - строка селектора, напр. '.element'
function setMaxHeight(elements) {
  var maxHeight = 0;

  if (!elements.length) {
    return;
  }

  Array.prototype.forEach.call(elements, function findMaxHeight(element) {
    maxHeight = (maxHeight > element.clientHeight) ? maxHeight : element.clientHeight;
  });

  Array.prototype.forEach.call(elements, function specifyMaxHeight(element) {
    element.style.height = maxHeight + 'px';
  });
}



$(document).ready(function() {
  'use srict';

  /*========================================
  =            HeroSlider            =
  ========================================*/

  var $heroSlider = $('.js-hero-slider');
  if ($heroSlider.length) {
    $heroSlider.slick({
      accessibility: false,
      autoplay: true,
      dots: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }]
    });
  }

  /*=====  End of HeroSlider  ======*/



  /*========================================
  =            Goods slider            =
  ========================================*/

  var $goodsSlider = $('.js-goods-slider');
  if ($goodsSlider.length) {

    $goodsSlider.each(function(index, el) {
      $(this).slick({
        accessibility: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><svg class="slick-arrow__icon icon"><use xlink:href="images/svg_icons.svg#arrow-prev"></use></svg></button>',
        nextArrow: '<button class="slick-next"><svg class="slick-arrow__icon icon"><use xlink:href="images/svg_icons.svg#arrow-next"></use></svg></button>',
        responsive: [{
          breakpoint: 1279,
          settings: {
            // arrows: false,
            slidesToShow: 3,
          }
        }, {
          breakpoint: 621,
          settings: {
            slidesToShow: 2,
          }
        }, {
          breakpoint: 581,
          settings: {
            slidesToShow: 1,
          }
        }]
      });
    });

  }


  /*=====  End of Goods slider  ======*/


  /*=======================================
=            Partners slider            =
=======================================*/

  var $partnersSlider = $('.js-partners-slider');
  if ($partnersSlider.length) {
    $partnersSlider.slick({
      accessibility: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-prev"><svg class="slick-arrow__icon icon"><use xlink:href="images/svg_icons.svg#arrow-prev"></use></svg></button>',
      nextArrow: '<button class="slick-next"><svg class="slick-arrow__icon icon"><use xlink:href="images/svg_icons.svg#arrow-next"></use></svg></button>',
      responsive: [{
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 621,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
        }
      }]
    });

  }

  /*=====  End of Partners slider  ======*/



  /*========================================
  =            Product card gallery            =
  ========================================*/

  var $productCardGallery = $('.js-product-card-gallery');
  if ($productCardGallery.length) {
    $productCardGallery.slick({
      accessibility: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '<button class="slick-prev"><svg class="slick-arrow__icon icon"><use xlink:href="images/svg_icons.svg#arrow-prev"></use></svg></button>',
      nextArrow: '<button class="slick-next"><svg class="slick-arrow__icon icon"><use xlink:href="images/svg_icons.svg#arrow-next"></use></svg></button>',
      responsive: [{
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 621,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
        }
      }]
    });

    // Popup
    $productCardGallery.magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      },
      removalDelay: 500,
      mainClass: 'mfp-zoom-out',
    });
  }

  /*=====  End of Product card gallery  ======*/




/*====================================
=            Rotator news            =
====================================*/

var $rotatorNews = $('.js-rotator-news');

if ($rotatorNews.length) {
  $rotatorNews.slick({
    accessibility: false,
    vertical: true,
    slidesToShow: 6,
    infinite: false,
    // centerMode: true
  });
}

/*=====  End of Rotator news  ======*/




  /*==============================
  =            Popups            =
  ==============================*/
  var $triggerPopupCallback = $('.js-trigger-popup-callback');
  if ($triggerPopupCallback.length) {
    $triggerPopupCallback.magnificPopup({
      focus: '',
      closeOnBgClick: false,
      // fixedContentPos: true,
      overflowY: 'scroll',
      removalDelay: 500,
      mainClass: 'mfp-zoom-out'
    });
  }

  /*=====  End of Popups  ======*/



  /*=============================
  =            Mmenu            =
  =============================*/

  $("#mobile-nav").mmenu({
    "extensions": [
      "pagedim-black",
      "pageshadow",
      "theme-dark"
    ],
    "navbar": {
      "title": "Меню"
    },
    "searchfield": {
      search: false,
      placeholder: 'Поиск'
    },
    "navbars": [{
      "position": "top",
      "content": [
        "searchfield"
      ]
    }]
  }, {
    // configuration
    classNames: {
      selected: "is-active"
    },
  });

  /*=====  End of Mmenu  ======*/



  /*==================================
  =            Input mask            =
  ==================================*/

  // Phone
  $('input[type="tel"]').inputmask("+7 (999) 999 99 99", {
    clearMaskOnLostFocus: false,
    // jitMasking: true
  });

  /*=====  End of Input mask  ======*/



  /*============================
  =            Tabs            =
  ============================*/
  
  var $tabs = $('.tabs');
  if ($tabs.length) {
      $tabs.tabslet();
  }
  
  /*=====  End of Tabs  ======*/
  


  /*=================================
  =            Accordion            =
  =================================*/
  
  var $catalogMenuList = $('.catalog-menu-list');

  if ($catalogMenuList.length) {

    $catalogMenuList.each(function(index, el) {
      $(this).parent('.catalog-menu-item').addClass('has-menu-list');
    });

    $('.catalog-menu-top-list').navgoco({
      save: true,
      slide: {
        duration: 600
      }
    });
    
  }

  /*=====  End of Accordion  ======*/
  


  /*====================================
  =            Contacts map            =
  ====================================*/
  if ($('#canvas-map').length) {
    window.onload = loadMapScript;
  }
  /*=====  End of Contacts map  ======*/


  setMaxHeight(document.querySelectorAll('.product__name a'));



});
