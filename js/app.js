$( document ).ready(function() {
  //cover
  function HeightBackground(){
  	var height = $(window).height();
  	$("#cover").css({
  		'height': height
  	});
  }
  HeightBackground();
  $(window).resize(function(){
  	HeightBackground();
  });
  //parallax
  function parallax() {
    $('.banner--primary').parallax("50%", 0.2);
    $('#parallaxImg1').parallax("50%", 0.1);
    $('#parallaxImg2').parallax("50%", 0);
    $('#parallaxImg3').parallax("50%", 0.8);
  }
  if ($(window).width() > 800){
    parallax();
  }
  //menu Responsive
  function menuResponsive(){
    $('#btn-nav').click(function(){
      $('.header').toggleClass('header-active');
      $('.header--btn--line').toggleClass('header--btn--line-active');
    });
  }
  menuResponsive();
  //menu effect
  function menuEffect() {
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 200 && !$('.header').hasClass('none')) {
        $('.header').addClass('header-activeEffect');
        $('.header--logo').addClass('header--logo-activeEffect');
      } else {
        $('.header').removeClass('header-activeEffect');
        $('.header--logo').removeClass('header--logo-activeEffect');
      }
    });
  }
  menuEffect();
  //masonry
  function masonryInit(){
    new AnimOnScroll( document.getElementById( 'grid' ), {
      minDuration : 0.4,
      maxDuration : 0.7,
      viewportFactor : 0.2
    });
  }
  masonryInit();
  //imgZoom
  function imgZoom() {
    $('.lesToiles--masonry--item--img').click(function(){
      $(this).toggleClass('lesToiles--masonry--item--img-active');
      $('.zoom--background').fadeToggle(250);
    });
    $('.zoom--background').click(function(){
      $('.lesToiles--masonry--item--img').removeClass('lesToiles--masonry--item--img-active');
      $('.zoom--background').fadeOut(250);
    });
  }
  imgZoom();
});
