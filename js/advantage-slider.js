function advantageSlider() {

  
  document.querySelectorAll('.advantage-switchers .advantage-switcher').forEach(advantage => {
    advantage.addEventListener('click', function() {
      let viewport = $('body').width();

      if(viewport > 500 && viewport < 1100) {
        let target = this.getAttribute('data-advantage');

        $('.advantage').css('display', 'none');
        $('.advantage-switcher').removeClass('active');

        $(target).css({'display': 'flex', 'position': 'relative'});
        $(this).addClass('active');
      }

      if(viewport < 500) {
        let target = this.getAttribute('data-advantage-mobile');
        
        $('.advantage-switcher').removeClass('active');
        $('.advantage').css('display', 'none');

        $(target).css({'display': 'flex', 'position': 'relative'});
        $(this).addClass('active');
      }

      
    })
  })
}