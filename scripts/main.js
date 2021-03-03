var hambergurMenu = document.querySelector('.responsive_menu_icon');
var responsiveMenu = document.querySelector('.responsive__linkers');
var bgMenu = document.querySelector('.bg');


hambergurMenu.addEventListener('click', function () {
  bgMenu.classList.toggle('opened')
});


hambergurMenu.addEventListener('click', function () {
  responsiveMenu.classList.toggle('opened')
});

hambergurMenu.addEventListener('click', function () {
  hambergurMenu.classList.toggle('opened')
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