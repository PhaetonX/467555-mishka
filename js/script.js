var toggle = document.querySelector('.page-header__toggle');
var siteMenu = document.querySelector('.page-header__site-menu');
var userMenu = document.querySelector('.page-header__user-menu');

toggle.addEventListener("click", function(event) {
	toggle.classList.toggle("page-header__toggle--closed");
	if (toggle.classList.contains('page-header__toggle--closed')) {
		siteMenu.classList.remove('page-header__site-menu--closed');
		userMenu.classList.remove('page-header__user-menu--closed');
	} else {
		siteMenu.classList.add('page-header__site-menu--closed');
		userMenu.classList.add('page-header__user-menu--closed');
	}
});
