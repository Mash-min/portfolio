$(document).ready(function() {
  $('.scrollspy').scrollSpy({
	  scrollOffset: 500
  });
  $(".button-collapse").sideNav();
  $('.owl-carousel').owlCarousel({
	  loop: true,
	  margin: 15,
	  center: false,
	  dotsEach: true,
      center: true,
	  responsive: {
		0:{
            items:1.2,
        },
        600:{
            items:2.3,
        },
        1000:{
            items:3.3,
        }
	  }
  });

  $('.owl-carousel-2').owlCarousel({
	  loop: true,
	  margin: 15,
	  center: false,
    dots: false,
    nav: true,
    center: true,
	  responsive: {
      1000:{
          items:1.2,
      }
	  }
  });

});