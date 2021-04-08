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

//
const introSlides = document.querySelectorAll('.intro__slide');
const introButtons = document.querySelectorAll('.intro__control-button');
if (introSlides) {
  for (let i = 0; i < introButtons.length; i++) {
    introButtons[i].addEventListener('click', () => {
      introSlides.forEach((slide) => {
        slide.classList.remove('intro__slide--active');
      });

      introButtons.forEach((button) => {
        button.classList.remove('intro__control-button--active');
      });

      introSlides[i].classList.add('intro__slide--active');
      introButtons[i].classList.add('intro__control-button--active')
    });
  }
}
