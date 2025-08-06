import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

// Add a new attribute
addFilter(
  'blocks.registerBlockType',
  'gw/add-popup-toggle-attribute',
  (settings, name) => {
    if (name !== 'core/button') return settings;

    settings.attributes = {
      ...settings.attributes,
      enablePopup: {
        type: 'boolean',
        default: false,
      },
    };
    return settings;
  }
);

// Add toggle control to inspector
addFilter(
  'editor.BlockEdit',
  'gw/add-popup-toggle-control',
  createHigherOrderComponent((BlockEdit) => {
    return (props) => {
      if (props.name !== 'core/button') return <BlockEdit {...props} />;

      const { attributes, setAttributes } = props;
      const { enablePopup } = attributes;

      return (
        <Fragment>
          <BlockEdit {...props} />
          <InspectorControls>
            <PanelBody title="Popup Settings">
              <ToggleControl
                label="Enable popup trigger"
                checked={enablePopup}
                onChange={(value) =>
                  setAttributes({ enablePopup: value })
                }
                help="Set the button link to match the HTML anchor of a popup container block (e.g. #contact-popup)"
              />
            </PanelBody>
          </InspectorControls>
        </Fragment>
      );
    };
  }, 'withPopupToggle')
);

// Add className at save time
addFilter(
  'blocks.getSaveContent.extraProps',
  'gw/add-popup-class',
  (extraProps, blockType, attributes) => {
    if (blockType.name !== 'core/button') return extraProps;

    if (attributes.enablePopup) {
      extraProps.className = (extraProps.className || '') + ' has-popup';
    }

    return extraProps;
  }
);
