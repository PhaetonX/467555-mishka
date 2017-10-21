//header menu
var toggle = document.querySelector('.page-header__toggle');
var siteMenu = document.querySelector('.page-header__site-menu');
var userMenu = document.querySelector('.page-header__user-menu');

siteMenu.classList.remove('page-header__site-menu--no-js');
userMenu.classList.remove('page-header__user-menu--no-js');
toggle.classList.remove('page-header__toggle--no-js');

toggle.addEventListener('click', function(event) {
  toggle.classList.toggle('page-header__toggle--closed');
  if (toggle.classList.contains('page-header__toggle--closed')) {
    siteMenu.classList.remove('page-header__site-menu--closed');
    userMenu.classList.remove('page-header__user-menu--closed');
  } else {
    siteMenu.classList.add('page-header__site-menu--closed');
    userMenu.classList.add('page-header__user-menu--closed');
  }
});

//modal window
var order = document.querySelector('.week-product__order');
var modal = document.querySelector('.modal');
var addToBasket = document.querySelector('.product-preview__add-to-basket');
var modalOverlay = document.querySelector('.modal__overlay');

if (order !== null) {
  order.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.add('modal-show');
  });
}

if (addToBasket !== null) {
  addToBasket.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.add('modal-show');
  });
}

modalOverlay.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-show");
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal-show')) {
      modal.classList.remove('modal-show');
    }
  }
});
