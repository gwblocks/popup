document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.has-popup a');
  const body = document.querySelector('body');

  buttons.forEach((button) => {
    const popupId = button.getAttribute('rel');
    const popup = document.getElementById(popupId);

    if (popup) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.toggle('open');
        body.classList.toggle('popup-active');
      });
    }
  });

  const popup_close_buttons = document.querySelectorAll('.popup-container__close');

  popup_close_buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = button.closest('.popup-container');
      if (popup) {
        popup.classList.remove('open');
        body.classList.toggle('popup-active');
      }
    });
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      body.classList.remove('popup-active');
      const popups = document.querySelectorAll('.popup-container.open');
      popups.forEach((popup) => {
        popup.classList.remove('open');
      })
    }
  });

});

  
