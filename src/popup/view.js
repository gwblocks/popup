document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const untrap = null;

  function closePopup(popup) {
    if (popup) {
      popup.classList.remove('open');
      popup.setAttribute('aria-hidden', 'true');
      // Wait for CSS transition to finish before hiding
      setTimeout(() => {
        popup.setAttribute('hidden', '');
        if(untrap) untrap()
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
        const isHidden = popup.hasAttribute('hidden');

        if (isHidden) {
          popup.removeAttribute('hidden');
          requestAnimationFrame(() => {
            popup.classList.add('open');
            popup.setAttribute('aria-hidden', 'false');
            body.classList.add('popup-active');
            untrap = trapFocus(popup); // after showing and setting attributes
          });
        } else {
          closePopup(popup)
        }

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


function trapFocus(popup) {
  const focusableSelectors = [
    'a[href]', 'button:not([disabled])', 'textarea:not([disabled])',
    'input:not([disabled])', 'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ];

  const focusableElements = popup.querySelectorAll(focusableSelectors.join(','));
  const firstEl = focusableElements[0];
  const lastEl = focusableElements[focusableElements.length - 1];

  function handleKeydown(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  }

  document.addEventListener('keydown', handleKeydown);

  firstEl?.focus();

  // Return a function to remove the event listener
  return function untrapFocus() {
    document.removeEventListener('keydown', handleKeydown);
  };
}


  
