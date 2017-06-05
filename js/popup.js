		/* Попап Логин и Пароль */

		var link = document.querySelector(".login");
		var popup = document.querySelector(".modal-content");
		var close = popup.querySelector(".modal-content-close");
		var login = popup.querySelector("[name=login]");
		var form = popup.querySelector("form");
		var password = popup.querySelector("[name=password]");
		var storage = localStorage.getItem("login");
		var overlay = document.querySelector(".modal-overlay");
		
		link.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.add("modal-content-show");
			login.focus();
			document.classList.add("modal-overlay");
			if (storage) {
				login.value = storage;
				password.focus();
			} else {
				login.focus();
			}
		});
		
		close.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-error");
			document.classList.remove("modal-overlay");
		});
		
		form.addEventListener("submit", function(event){
			if (!login.value || !password.value) {
				event.preventDefault();
				popup.classList.add("modal-error");
			} else {
				localStorage.setItem("login", login.value);
			}
		});
		
		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if(popup.classList.contains("modal-content-show")) {
					popup.classList.remove("modal-content-show");
				}
			}
		});

		/* Попап Карта */

		var mapOpen = document.querySelector(".js-open-map");
		var mapPopup = document.querySelector(".modal-content-map");
		var mapClose = mapPopup.querySelector(".modal-content-close");
		
		mapOpen.addEventListener("click", function(event) {
			event.preventDefault();
			mapPopup.classList.add("modal-content-show");
		});
		
		mapClose.addEventListener("click", function(event) {
			event.preventDefault();
			mapPopup.classList.remove("modal-content-show");
		});
		
		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if(mapPopup.classList.contains("modal-content-show")) {
					mapPopup.classList.remove("modal-content-show");
				}
			}
		});
