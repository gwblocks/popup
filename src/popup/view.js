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

      // Ignore external links or empty href
      if (!href || !href.startsWith('#')) return;

      const targetId = href.slice(1); // remove #
      const targetDialog = document.getElementById(targetId);

      // If matching dialog found, prevent default and show popup/modal
      if (targetDialog && targetDialog.tagName.toLowerCase() === 'dialog') {
        e.preventDefault();
        targetDialog.showModal();
      }
    });
  });
});
