document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.has-popup a');

  buttons.forEach((button) => {
    const popupId = button.getAttribute('rel');
    const popup = document.getElementById(popupId);

    console.log(popupId)

    if (popup) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.toggle('open');
      });
    }
  });

  const popup_close_buttons = document.querySelectorAll('.popup__content__close');

  popup_close_buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = button.closest('.popup__content');
      if (popup) {
        popup.classList.remove('open');
      }
    });
  });

});

  
