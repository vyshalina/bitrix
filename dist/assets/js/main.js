$(document).ready(function() {
	$('.js-burgerNav').click(function(e){
		e.preventDefault();

		$('body').toggleClass('ov-hidden');
		$(this).toggleClass('active');
		$('.js-nav').toggleClass('active');
	});
});