$('.slider').slick({
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

$('[data-modal]').click(function(e) {
  $(`.card`).removeClass('active');
  $(`.card .main-content`).addClass('active');
  $(`.card .changed-content`).removeClass('active');

    let target = this.getAttribute('data-modal');
    
    $(`.card${target}`).addClass('active');
    $(`.card${target} .main-content`).removeClass('active');
    $(`.card${target} .changed-content`).addClass('active');

    if (e.target.getAttribute('data-modal') === 'close') {
        $(`.card${target}`).removeClass('active');
        $(`.card${target} .main-content`).addClass('active');
        $(`.card${target} .changed-content`).removeClass('active');
    };
});

advantageSlider();


// Read more in about section
$('.about-content-text .mobile-button').click(function() {
  $('.about-content-text p .mobile-text').toggleClass('active');

  if($('.about-content-text p .mobile-text').hasClass('active')) {
    $(this).text('Свернуть');
  } else {
    $(this).text('Подробнее');
  }
})