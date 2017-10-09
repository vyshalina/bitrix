$(document).ready(function() {
	$('.js-burgerNav').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active');
		$('.js-nav').toggleClass('active');
	});
});