// Slider swiper
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
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

      accordionButtons.forEach((button) => {
        if (button.classList.contains('accordion__button--active')) {
          button.classList.remove('accordion__button--active');
        }
      });

      button.classList.add('accordion__button--active');
    });
  })
}
