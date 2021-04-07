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
  noSwipingClass: 'intro__wrap',

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

// Кастомный скролл simplebar
const scrollItems = document.querySelectorAll('.accordion__content');
if (scrollItems) {
  scrollItems.forEach((item) => {
    item = new SimpleBar(item);
  });
}

// Скролл на верх сайта
const scollToTop = document.querySelector('.scroll-to-top');
if (scollToTop) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 900) {
      scollToTop.classList.remove('scroll-to-top--hide');
    } else {
      scollToTop.classList.add('scroll-to-top--hide');
    }
  });

  scollToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
}
