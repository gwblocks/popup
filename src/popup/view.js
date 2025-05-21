document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  function closePopup(popup) {
    if (popup) {
      popup.classList.remove('open');
      popup.setAttribute('aria-hidden', 'true');
      // Wait for CSS transition to finish before hiding
      setTimeout(() => {
        popup.setAttribute('hidden', '');
      }, 300); // 👈 match this to your CSS transition duration
    }
    if (body) {
      body.classList.remove('popup-active');
    }
  }

  document.querySelectorAll('.has-popup a').forEach((button) => {
    const popupId = button.getAttribute('rel');
    const popup = document.getElementById(popupId);

    if (popup) { // check button is associated with a popup container
      button.addEventListener('click', (e) => {
        e.preventDefault();
        popup.toggleAttribute('hidden');
        requestAnimationFrame(() => {
          popup.classList.toggle('open');
          const isHidden = popup.getAttribute('aria-hidden') === 'true';
          popup.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
          body.classList.toggle('popup-active');
        })
      });
    }
  });

  document.querySelectorAll('.popup-container__close').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const popup = button.closest('.popup-container');
      if (popup) {
        closePopup(popup)
      }
    });
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      document.querySelectorAll('.popup-container.open').forEach((popup) => {
        closePopup(popup)
      })
    }
  });

});

  
