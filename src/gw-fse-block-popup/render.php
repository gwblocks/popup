<?php
$blur_background  = is_numeric($attributes['blurBackground']) ? $attributes['blurBackground'] : 0;
$style = '--dialog-backdrop-blur: ' . $blur_background .'px;';
$wrapper_attributes = get_block_wrapper_attributes(['class' => 'popup-container' , 'style' => $style]);
?>
<dialog <?php echo wp_kses_post($wrapper_attributes); ?>>
    <?php echo wp_kses_post($content) ?>
    <button class="popup-container__close" aria-label="Close popup">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    </button>
</dialog>