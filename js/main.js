$('.slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
});

$('.map-form form').submit(function(e) {
  $(this).css('display', 'none');

  $('.map-form .message').addClass('active');

  e.preventDefault();
});

// 
$('.contact-number form').submit(function(e) {
  let value = Number($('#phone-number').val());

  if(Number.isNaN(value)) {
    $('.contact-number .error-message').css('display', 'block');
  } else {
    $(this).hide()
    $('.contact-number .message').addClass('active');
  }

  e.preventDefault();
})

// 
$('.header-button .btn').click(function(e) {
  $('.header-button .modal').addClass('active');
})

$('.header-button form').submit(function(e) {
  let value = Number($('#header-phone-number').val());

  console.log(value);

  if(Number.isNaN(value)) {
    $('#header-phone-number').addClass('error');
    $('.error-message').css('display', 'block');
  } else {
    $('.header-button .message').css('display', 'block');
  }


  e.preventDefault();
})