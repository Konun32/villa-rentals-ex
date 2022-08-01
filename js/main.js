
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
let imgSpollers = document.querySelectorAll(".question-answer__img");
document.querySelectorAll('.answers__answer').forEach((item, ind) => 
	item.addEventListener('click', () => {
		if (item.classList.contains('answers__answer_active')) {
			item.classList.remove('answers__answer_active');
			item.nextElementSibling.classList.remove('answers__text_active');
			imgSpollers[ind].classList.remove('question-answer__img_active');		
		} else {
			let answers = document.querySelectorAll('.answers__answer');
			for (let index = 0; index < answers.length; index++) {
				let item = answers[index];
				item.classList.remove('answers__answer_active');
				item.nextElementSibling.classList.remove('answers__text_active')
				imgSpollers[index].classList.remove('question-answer__img_active');	
			}
			item.classList.add('answers__answer_active');
			item.nextElementSibling.classList.add('answers__text_active');
			imgSpollers[ind].classList.add('question-answer__img_active');		
		}
	}))
const animItems = document.getElementsByClassName('_anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')){
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll();
}