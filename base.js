$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	arrows:false,
	slidesToShow: 3,
	responsive: [
	{
 		breakpoint: 1024,
				settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1,
 				infinite: true,
 				dots: true
			}
	},
	{
			breakpoint: 600,
			settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1
			}
		},
	{
		breakpoint: 480,
			settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1,
 				dots:false
				}
		}
	]
});
$('.slider-plan').slick({
	dots: false,
	infinite: true,
	speed: 300,
	arrows:false,
	slidesToShow: 3,
	responsive: [
	{
 		breakpoint: 1024,
				settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1,
 				infinite: true,
 				dots: true
			}
	},
	{
			breakpoint: 600,
			settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1
			}
		},
	{
		breakpoint: 480,
			settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1,
 				dots:false
				}
		}
	]
});
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
$(window).resize(function() {
    if (window.matchMedia('(max-width: 760px)').matches) {
        // functionality for screens smaller than 1200px
        var x = document.getElementById("con");
        if (x.className === "container") {
        	x.removeClass("container");
        	x.addClass("container-fluid");
        }
        else {
        	x.className="container";
        }
    }
});

