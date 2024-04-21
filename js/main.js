document.addEventListener("DOMContentLoaded", function () {
	// показать форму поиска из шапки
	const headerSearchOpen = document.querySelector("#search-open");
	const headerSearchForm = document.querySelector("#header-search-form");

	headerSearchOpen.addEventListener("click", () => {
		headerSearchForm.classList.toggle("search-form--open");
	});
});
