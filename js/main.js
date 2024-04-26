document.addEventListener("DOMContentLoaded", function () {
	// показать форму поиска из шапки
	const headerSearchOpen = document.querySelector("#search-open");
	const headerSearchForm = document.querySelector("#header-search-form");

	headerSearchOpen.addEventListener("click", () => {
		headerSearchForm.classList.toggle("search-form--open");
	});

	// burger
	const menuToggle = document.querySelector("#menu-toggle");
	const mobileMenu = document.querySelector("#header-menu");
	const bodyEl = document.body;
	if (menuToggle) {
		menuToggle.addEventListener("click", () => {
			if (menuToggle.classList.contains("active")) {
				menuToggle.classList.remove("active");
				mobileMenu.classList.remove("active");
				bodyEl.classList.remove("lock");
			} else {
				menuToggle.classList.add("active");
				mobileMenu.classList.add("active");
				bodyEl.classList.add("lock");
			}
		});

		mobileMenu.addEventListener("click", () => {
			menuToggle.classList.remove("active");
			mobileMenu.classList.remove("active");
			bodyEl.classList.remove("lock");
		});
	}

	// swiper1
	const headerSwiper = new Swiper(".header-slider", {
		loop: true,
		speed: 1000,
		effect: "fade",
		lazy: true,

		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
});
