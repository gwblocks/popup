=== GW FSE Block Popup ===
Contributors: gwdev
Tags: block, popup, gutenberg, editor, fse
Tested up to: 6.8
Requires at least: 6.8
Stable tag: 0.5.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A lightweight, popup block built for the WordPress block editor (FSE compatible).

== Description ==

A custom popup block for WordPress Full Site Editing. Trigger popups using core Button blocks, opening an HTML5 <dialog> element.

== Features ==

* Works with the core Button block
* Decoupled trigger and popup container
* No jQuery, no bloat
* Lightweight CSS animations
* Escape key support

== Coming Soon ==

* Keyboard navigation
* Focus trapping and improved accessibility
* Trigger on scroll
* Additional animations (e.g. slide, bounce)
* Improved dimension controls (custom width/height, max size, responsive behaviour)
* Improved visibility and editing of popup container in the block editor

== Usage ==

1. Add a Popup Container block to your page.
   - In the block's "Advanced" settings panel (in the sidebar), set an HTML Anchor.
     For example: `contact-popup`

2. Add a core Button block anywhere on the page.
   - In the block settings, toggle **Enable popup trigger** to ON (this option is added by the plugin).
   - Set the button's link to an internal anchor, e.g. `#contact-popup`

Example:

- Popup Container HTML Anchor: contact-popup  
- Button href: #contact-popup

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
