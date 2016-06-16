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
  }
  if ($(window).width() > 800){
    parallax();
  }
  // menu Responsive
  function menuResponsive(){
    $('#btn-nav').click(function(){
      $('.header').toggleClass('header-active');
      $('.header--btn--line').toggleClass('header--btn--line-active');
    });
  }
  menuResponsive();
  // masonry
  function masonryInit(){ 
    new AnimOnScroll( document.getElementById( 'grid' ), {
      minDuration : 0.4,
      maxDuration : 0.7,
      viewportFactor : 0.2
    });
  }
  masonryInit();
});