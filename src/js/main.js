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
        button.classList.toggle('accordion__button--active');
      } else {
        accordionButtons.forEach((buttonActive) => {
          buttonActive.classList.remove('accordion__button--active');
        });
        button.classList.add('accordion__button--active');
      }
    });
  })
}
