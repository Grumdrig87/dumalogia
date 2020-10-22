jQuery(document).ready(function($){    
  
  $('[data-nav]').on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

    //header menu 
    // if ($(window).width() > 993) {
    //   $('.menu-item-has-children').click(function(){
    //     $(this).find('.sub-menu').addClass('opened');
    //     $('header').addClass('opened');
    //     $('body').addClass('opened');
    //     $('[data-blkscr]').css('top', ($('.header').height() + $('.menu-item-has-children > .sub-menu').height()))
    //   })
  
    //   function closeMenu () {
    //     $(document).mouseup(function (e){ // событие клика по веб-документу
    //       var div = $(".menu-item-has-children"); // тут указываем ID элемента
    //       if (!div.is(e.target) // если клик был не по нашему блоку
    //         && div.has(e.target).length === 0) { // и не по его дочерним элементам
    //         div.find('.sub-menu').removeClass('opened');
    //         $('header').removeClass("opened");
    //         $('body').removeClass('opened');
    //       }
    //     });
    //   };
  
    //   closeMenu();
    // }
    //slider

    $('[data-slider]').slick({
      dots: true,
      speed: 300,
      slidesToShow: 3,
      responsive: [
      {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          variableWidth: false
          }
      },
      {
          breakpoint: 567,
          settings: {
          slidesToShow: 1,
          variableWidth: false
          }
      }
      ]
  });
  $('[data-pedag]').slick({
    dots: true,
    speed: 300,
    slidesToShow: 4,
    responsive: [
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        variableWidth: false
        }
    },
    {
        breakpoint: 567,
        settings: {
        slidesToShow: 1,
        variableWidth: false
        }
    }
    ]
});
$('[data-sert]').slick({
  dots: true,
  speed: 300,
  slidesToShow: 5,
  responsive: [
  {
      breakpoint: 768,
      settings: {
      slidesToShow: 1,
      variableWidth: false
      }
  },
  {
      breakpoint: 567,
      settings: {
      slidesToShow: 1,
      variableWidth: false
      }
  }
  ]
});
    // burger

    $('[data-burger]').click(function(){
        $('html').toggleClass("open");
        $(this).toggleClass("open");
        $('[data-nav]').toggleClass("open");
      });

    // faq
    $('[data-faq]').click(function(){
      $(this).toggleClass('open');
      $(this).find('.faq__card-help').toggleClass('open');
      $(this).find('p').slideToggle(300);
    })
      // adaptive
      
})