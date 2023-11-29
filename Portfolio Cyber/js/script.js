// menu mobile hamburguer -----------------------------------------------
const btnMobileI = document.getElementById('btnMobile');

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  // toggle: adicione caso não tenha, remova caso tenha
  nav.classList.toggle('active');
  btnMobileI.classList.toggle('fa-x');
}
btnMobileI.addEventListener('click', toggleMenu);

// swipper projetos -----------------------------------------------
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

// scroll da página -----------------------------------------------
const navigation = document.querySelector("navLinks");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty (
  "--scroll-padding", navigationHeight + "px"
);
