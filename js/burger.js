let menuOpenButton = document.querySelector('.burger');
let menu = document.querySelector('.navigation__menu');
let menuCloseButton = menu.querySelector('.close');

menuOpenButton.addEventListener('click', () => {
  menu.classList.add('show');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close')
    || !e.target.classList.contains('navigation__menu')
    && !e.target.classList.contains('burger')) {
    menu.classList.remove('show');
  }
})

menu.addEventListener('click', (e) => {
    if(!e.target.classList.contains('menu')) {
    menu.classList.remove('show');
    menu.classList.remove('active')
    }
});
