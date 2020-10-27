jQuery(document).ready(function($){    
  
  $('[data-nav]').click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

    
    //slider

    $('[data-slider]').slick({
      dots: true,
      speed: 300,
      slidesToShow: 3,
      responsive: [
      {
          breakpoint: 1200,
          settings: {
          slidesToShow: 2
          }
      },
      {
          breakpoint: 993,
          settings: {
          slidesToShow: 1,
          centerMode: true
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
        breakpoint: 1200,
        settings: {
        slidesToShow: 3
        }
    },
    {
        breakpoint: 993,
        settings: {
        slidesToShow: 2
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
      breakpoint: 1440,
      settings: {
      slidesToShow: 4
      }
  },
  {
      breakpoint: 1200,
      settings: {
      slidesToShow: 3
      }
  },
  {
      breakpoint: 994,
      settings: {
      slidesToShow: 2
      }
  }
  ]
});
    // date

    // Зададим стартовую дату
    var start = new Date(),
        prevDay,
        startHours = 10;

    // 10:00
    start.setHours(10);
    start.setMinutes(0);

    $('[data-date]').datepicker({
      timepicker: true,
      startDate: start,
      minHours: startHours,
      dateTimeSeparator: ', ',
      minutesStep: '0',
      dateFormat: 'd M',
      language: {
        monthsShort: ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
      },
      timeFormat: 'h часов (мск)',
      maxHours: 20,
      onSelect: function(fd, d, picker) {
          // Ничего не делаем если выделение было снято
          if (!d) return;

          var day = d.getDay();

          // Обновляем состояние календаря только если была изменена дата
          if (prevDay != undefined && prevDay == day) return;
          prevDay = day;
      }
  })
    
    // faq
    $('[data-faq]').click(function(){
      $(this).toggleClass('open');
      $(this).find('.faq__card-help').toggleClass('open');
      $(this).find('p').slideToggle(300);
    })
      // adaptive

      if ($(window).width() < 993) {
        // burger

        $('[data-burger]').click(function(){
          $('body').toggleClass("open");
          $(this).toggleClass("open");
          $('[data-nav]').toggleClass("open");
        });
        //header menu 
          
        function closeMenu () {
          $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $("[data-nav]"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
              && div.has(e.target).length === 0 && !$('[data-burger]').is(e.target)) { // и не по его дочерним элементам
              div.removeClass('open');
              $('[data-burger]').removeClass("open");
              $('body').removeClass('open');
            }
          });
        }

        closeMenu();
        
        $('[data-nav]').on("click","a", function (event) {
          event.preventDefault();
          $("[data-nav]").removeClass("open");
          $('[data-burger]').removeClass("open");
          $('body').removeClass('open');
      });
      //slider
      $('[data-lesson]').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true
      });
      $('[data-what]').click(function(){
        $(this).toggleClass('open');
        $(this).parent().find('p').slideToggle(300);
      })
    }
})