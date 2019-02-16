$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('#navbar-ul').removeClass('nav__ul-mob');
  $('#navbar').removeClass('nav-mob');
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});