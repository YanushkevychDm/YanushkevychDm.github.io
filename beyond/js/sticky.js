
jQuery("document").ready(function($){
 
  // STICKY NAV
	var nav = $('#navbar');
  var logo = $(".nav__logo");
  var icon = $(".menu__icon");

	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
      nav.addClass("sticky");
      logo.addClass("sticky-logo");
    
      
		} else {
      nav.removeClass("sticky");
      logo.removeClass("sticky-logo");
     
		}
  });
  
  $('.nav__btn').on('click', function() {
    // console.log('dd');
    // $('#navbar-ul').removeClass('nav__ul');
    $('#navbar-ul').toggleClass('nav__ul-mob');
    $('#navbar').toggleClass('nav-mob');

  });

 
});

