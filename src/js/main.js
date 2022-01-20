(() => {
  // Слайдер блока intro
  const introControl = new Swiper('.control', {
    slidesPerView: 4,
    spaceBetween: 15,

    breakpoints: {
      768: {
        spaceBetween: 30
      }
    },

    wrapperClass: 'control__wrap',
    slideClass: 'control__button',
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
      slideThumbActiveClass: 'control__button--active'
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
      if (window.pageYOffset > 700) {
        scollToTop.classList.remove('scroll-to-top--hide');
      } else {
        scollToTop.classList.add('scroll-to-top--hide');
      }
    });

    scollToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, left: 0 });
    });
  }

  // Открытие закрытие бургер меню
  const nav = document.querySelector('.nav');
  if (nav) {
    const burger = document.querySelector('.nav__toggle');
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav--opened');
      document.querySelector('body').classList.toggle('overflow-hidden');
    });
  }

  // Modal map
  const modalMap = document.querySelector('.modal--map');
  if (modalMap) {
    const mapLink = document.querySelector('.map__title');
    const modalCloseButton = modalMap.querySelector('.modal__close');

    mapLink.addEventListener('click', (e) => {
      e.preventDefault();
      modalMap.classList.add('modal--active');
    });

    modalCloseButton.addEventListener('click', () => {
      modalMap.classList.remove('modal--active');
    });
  }

  // Modal search
  const modalSearch = document.querySelector('.modal--search');
  if (modalSearch) {
    const searchLink = document.querySelector('.header__link--search');
    const modalCloseButton = modalSearch.querySelector('.modal__close');

    searchLink.addEventListener('click', (e) => {
      e.preventDefault();
      modalSearch.classList.add('modal--active');
    });

    modalCloseButton.addEventListener('click', () => {
      modalSearch.classList.remove('modal--active');
    });
  }
})();
