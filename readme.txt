=== Popup ===
Contributors: gwdev
Tags: block, popup, gutenberg, editor, block-editor, fse
Tested up to: 6.7
Requires at least: 6.0
Stable tag: 0.1.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A lightweight, dependency-free popup block built for the WordPress block editor (FSE compatible). Uses native blocks like Button for triggering, and keeps layout clean, accessible, and native to Gutenberg.

== Description ==

This plugin provides a lightweight popup container block that can be triggered using the core Button block. Designed with accessibility and native WordPress workflows in mind, it requires no jQuery and works seamlessly within Full Site Editing themes.

== Features ==

* Works with the core Button block
* Decoupled trigger and popup container
* No jQuery, no bloat
* Lightweight CSS animations

== Coming Soon ==

* Keyboard navigation and Escape key support
* Focus trapping and improved accessibility
* Trigger on scroll
* Additional animations (e.g. slide, bounce)
* Improved dimension controls (custom width/height, max size, responsive behaviour)
* Improved visibility and editing of popup container in the block editor

== Usage ==

1. Add a Popup Container block to your page.
   - In the block's Advanced settings panel (in the sidebar), set an HTML Anchor.
     For example: contact-popup

2. Add a core Button block anywhere on the page.
   - In the block settings, toggle "Enable popup trigger" to ON (this option is added by the plugin).
   - In the Button's Advanced settings, set the "Rel" attribute to match the HTML Anchor of the popup container.

Example:

- Popup Container HTML Anchor: contact-popup  
- Button Rel attribute: contact-popup

When the button is clicked, it will trigger the matching popup container.

== Installation ==

1. Download the latest release (ZIP or clone the repository).
2. Copy the folder into one of the following locations:
   - `wp-content/plugins/`
   - or `wp-content/mu-plugins/` (for always-on usage).
3. If installed in `plugins/`, activate via the WordPress admin under Plugins.

== Changelog ==

= 0.1.0 =
* Initial public release of the Popup Container block.
* Allows triggering a popup via native WordPress Button blocks using `rel` and `id`.
* Lightweight, no jQuery, supports all inner blocks.
* Includes basic fade/scale animation.
