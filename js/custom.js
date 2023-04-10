$(function() {
	/*Скроллим модальное окно "Обратная связь" вверх
=====================================================*/
	$(".js-delivery").on("click", function(e) {
		e.preventDefault();
		var contactsOffset = $("#js-contacts").offset().top;
		$("html, body").animate({
			scrollTop: contactsOffset
		}, 500);
	});
});
