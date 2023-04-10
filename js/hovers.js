/*Показать модальное окно "Обратная связь"
======================================*/
var delivery = document.querySelector(".js-delivery");
var Popup_Delivery = document.querySelector(".modal-delivery");
var overlay = document.querySelector(".modal-overlay");

delivery.addEventListener("click", function(event) {
	event.preventDefault();
	Popup_Delivery.classList.add("modal-delivery-show");
	overlay.classList.add("modal-overlay-show");
});

/*Закрыть модальное окно "Обратная связь" 
======================================*/
var close = document.querySelector(".modal-close");

close.addEventListener("click", function(event) {
	event.preventDefault();
	Popup_Delivery.classList.remove("modal-delivery-show");
	overlay.classList.remove("modal-overlay-show");
});

/*Закрыть модальное окно "Обратная связь" по ESC
======================================*/
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (Popup_Delivery.classList.contains("modal-delivery-show")) {
			Popup_Delivery.classList.remove("modal-delivery-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});

/*Показать модальное окно "Поиск"
======================================*/
var search = document.querySelector(".search");
var Popup_Searching = document.querySelector(".modal-searching");

search.addEventListener("click", function(event) {
	event.preventDefault();
	Popup_Searching.classList.add("modal-searching-show");
});

/*Закрыть модальное окно "Поиск" по ESC
======================================*/
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (Popup_Searching.classList.contains("modal-searching-show")) {
			Popup_Searching.classList.remove("modal-searching-show");
		}
	}
});

/*Показать модальное окно "Вход"
======================================*/
var login = document.querySelector(".login");
var Popup_Entry = document.querySelector(".modal-entry");

login.addEventListener("click", function(event) {
	event.preventDefault();
	Popup_Entry.classList.add("modal-entry-show");
});

/*Закрыть модальное окно "Вход" по ESC
======================================*/
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (Popup_Entry.classList.contains("modal-entry-show")) {
			Popup_Entry.classList.remove("modal-entry-show");
		}
	}
});

/*Показать модальное окно "Корзина"
======================================*/
var cart = document.querySelector(".cart");
var Popup_Cart = document.querySelector(".modal-cart");

cart.addEventListener("click", function(event) {
	event.preventDefault();
	Popup_Cart.classList.add("modal-cart-show");
});

/*Закрыть модальное окно "Корзина" по ESC
======================================*/
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (Popup_Cart.classList.contains("modal-cart-show")) {
			Popup_Cart.classList.remove("modal-cart-show");
		}
	}
});

