<?php
// This file is generated. Do not modify it manually.
return array(
	'gw-fse-block-popup' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'gw/popup-container',
		'version' => '0.5.0',
		'title' => 'Popup container',
		'category' => 'design',
		'icon' => 'feedback',
		'description' => 'A popup activated by a button set as its trigger.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'GW_FSE_Block_Popup',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php',
		'attributes' => array(
			'blurBackground' => array(
				'type' => 'number',
				'default' => 0
			),
			'showCloseButton' => array(
				'type' => 'boolean',
				'default' => true
			)
		)
	)
);
