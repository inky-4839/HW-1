const burger = document?.querySelector('.burger');
const nav = document?.querySelector('.header__nav');
const navItems = nav?.querySelectorAll('.nav__link');
const body = document.body;
const header = document?.querySelector('header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav.classList.toggle('header__nav--visible');
});

navItems.forEach(element => {
  element.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav.classList.remove('header__nav--visible');
  });
});


let tabsBtn = document.querySelectorAll('.tabs__btn');
let tabsContent = document.querySelectorAll('.work__content');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs__btn--active') });
    e.currentTarget.classList.add('tabs__btn--active');

    tabsContent.forEach(function (element) { element.classList.remove('work__content--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('work__content--active');
  });
});


const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

let searchBtn = document.querySelector('.search-btn');
let search = document.querySelector('.header__search');

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('search-btn--active');
  search.classList.toggle('header__search--active');
});


