**Version 0.5 – Initial release: Popup Block**

A lightweight, dependency-free popup block built for the WordPress block editor (FSE compatible). Uses native blocks like Button for triggering, and keeps layout clean, accessible, and native to Gutenberg.

## ✨ Features

- Works with the core Button block
- Decoupled trigger + popup container
- No jQuery, no bloat
- Lightweight CSS animations

## 🔧 Coming Soon
- Keyboard navigation + escape to close
- Focus management (accessibility)
- More animation options

## 🚀 Usage

1. Add the **Popup Container** block anywhere on the page.
2. Set the HTML anchor in the **Popup container's** advanced block settings
2. Use a **core Button block** with a matching `rel` attribute to trigger the popup.
3. The button will trigger the container with a matching `id`.