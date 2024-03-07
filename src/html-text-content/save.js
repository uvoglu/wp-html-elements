import { RawHTML } from '@wordpress/element'

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const {
		content
	} = attributes

	return (
		<RawHTML>
			{ content }
		</RawHTML>
	)
}
