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