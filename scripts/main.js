var hambergurMenu = document.querySelector('.responsive_menu_icon');
var responsiveMenu = document.querySelector('.responsive__linkers');
var bgMenu = document.querySelector('.bg');
var bodyEl = document.querySelector('body')

hambergurMenu.addEventListener('click', function () {
});


hambergurMenu.addEventListener('click', function () {
  responsiveMenu.classList.toggle('opened')
  bgMenu.classList.toggle('opened')
  hambergurMenu.classList.toggle('opened')
  bodyEl.classList.toggle('hidden')
});

hambergurMenu.addEventListener('click', function () {
});

var cardToggler = document.querySelectorAll('.team_card_toggle');
var card = document.querySelectorAll('.card');

function removeClasses(clickedItem) {
  card.forEach(item => {
  if (item.dataset.togOrder != clickedItem.dataset.togOrder) {
    item.classList.remove("active");
  } else {
    item.classList.toggle('active');
  }
})}

cardToggler.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    removeClasses(item);
  })
})