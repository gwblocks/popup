import dialogPolyfill from 'dialog-polyfill';
import 'dialog-polyfill/dialog-polyfill.css';

document.addEventListener('DOMContentLoaded', () => {
  const dialogs = document.querySelectorAll('dialog.popup-container');
  dialogs.forEach((dialog) => {
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }

    // Setup internal close buttons
    dialog.querySelectorAll('.popup-container__close').forEach((btn) => {
      btn.addEventListener('click', () => dialog.close());
    });
  });

  // Set up triggers for .has-popup a
  document.querySelectorAll('.has-popup a').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

        if (!href || !href.startsWith('#')) return;

        e.preventDefault(); // Prevent default link behavior (page jump)

        const targetId = href.slice(1); // remove #
        const innerDivWithId = document.getElementById(targetId);

        if (innerDivWithId) {
            // Find the closest parent <dialog> element
            const parentDialog = innerDivWithId.closest('dialog');

            if (parentDialog && typeof parentDialog.showModal === 'function') {
                parentDialog.showModal(); // Open the modal dialog
            }
        }
    });
  });
});
