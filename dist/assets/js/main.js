$(document).ready(function() {
	$('.js-burgerNav').click(function(e){
		e.preventDefault();

		$('body').toggleClass('ov-hidden');
		$(this).toggleClass('active');
		$('.js-nav').toggleClass('active');
	});
});

$(function(){

	$(".order").on("click", ".tabs a", function(){

		var tabs = $(".order .tabs a"),
		    cont = $(".order  .order-content article");

		// Удаляем классы active
		tabs.removeClass("active");
		cont.removeClass("active");
		// Добавляем классы active
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");

		return false;
	});
});