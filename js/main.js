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

$('.slider-wrapper').slick({
  // slidesToShow: 5,
  // slidesToScroll: 1,
  // autoplay: false,
  // autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
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
})