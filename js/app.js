$(document).ready(function() {
  $('.scrollspy').scrollSpy({
	  scrollOffset: 500
  });
  $(".button-collapse").sideNav();
  $('.owl-carousel').owlCarousel({
	  loop: true,
	  margin: 15,
	  center: true,
	  dots: false,
	  responsive: {
		0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
	  }
  });
});

let skills = document.getElementById('skills');
let sample_projects = document.getElementById('sample_projects');
var options = [
	{selector: '#sample_projects', offset: 500, callback: function(el) {
		Materialize.fadeInImage($(el));
		sample_projects.style.display = '';
	} },
	{selector: '#skills', offset: 500, callback: function(el) {
		Materialize.fadeInImage($(el));
		skills.style.display = '';
	} }
  ];
  Materialize.scrollFire(options);