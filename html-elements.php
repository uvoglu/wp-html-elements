<?php
/**
 * Plugin Name:       HTML Elements
 * Description:       A block that allows to create HTML elements as blocks.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            UVOGLU
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       html-elements
 *
 * @package           html-elements
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers a custom category for the blocks provided by this plugin.
 */
function html_elements_add_block_category( $block_categories, $editor_context ) {
	array_push(
		$block_categories,
		array(
			'slug'  => 'html-elements',
			'title' => __( 'HTML Elements', 'html-elements' ),
			'icon'  => null,
		)
	);
	return $block_categories;
}

add_filter( 'block_categories_all', 'html_elements_add_block_category', 10, 2 );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function html_elements_html_element_block_init() {
	register_block_type( __DIR__ . '/build/html-element' );
}
add_action( 'init', 'html_elements_html_element_block_init' );

function html_elements_html_text_content_block_init() {
	register_block_type( __DIR__ . '/build/html-text-content' );
}
add_action( 'init', 'html_elements_html_text_content_block_init' );
