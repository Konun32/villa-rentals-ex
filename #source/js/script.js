//slick slider
$(document).ready(function(){
	$('.main-block').slick({
		arrows: false,
		dots: true,
		centerMode: true,
		slidesToShow: 1,
	});
	$('.services__slider').slick({
		arrows: true,
		dots: false,
		variableWidth: true,
		//infinite: false,
		slidesToShow: 3,
	});
	$('.view__slider').slick({
		arrows: true,
		dots: true,
		centerMode: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 660,
				settings: {
					arrows: false,
				}
			},
		]
	});
});