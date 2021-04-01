// Слайдер блока intro
const introControl = new Swiper('.intro__control', {
  slidesPerView: 4,
  spaceBetween: 30,

  wrapperClass: 'intro__control-wrap',
  slideClass: 'intro__control-button',
});
const intro = new Swiper('.intro', {
  slidesPerView: 1,
  spaceBetween: 175,
  speed: 500,

  wrapperClass: 'intro__wrap',
  slideClass: 'intro__slide',

  thumbs: {
    swiper: introControl,
    slideThumbActiveClass: 'intro__control-button--active'
  }
});

// Слайдер секции comments
const swiper = new Swiper('.swiper-container', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Переключаем аккордион
const accordionButtons = document.querySelectorAll('.accordion__button');
if (accordionButtons) {
  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('accordion__button--active')) {
        button.classList.remove('accordion__button--active');
      } else {
        accordionButtons.forEach((buttonActive) => {
          buttonActive.classList.remove('accordion__button--active');
        });
        button.classList.add('accordion__button--active');
      }
    });
  })
}
