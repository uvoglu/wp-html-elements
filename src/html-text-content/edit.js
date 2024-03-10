import { InspectorControls } from '@wordpress/block-editor'
import { TextareaControl, PanelBody } from '@wordpress/components'
import { RawHTML } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import '../editor.scss'

/**
 * Render inspector controls for the HTML Text Content block.
 *
 * @param {Object} props Component props.
 * @param {string} props.content The text content.
 * @param {Function} props.onChangeContent onChange function for the content TextControl.
 *
 * @return {JSX.Element} The control group.
 */
function EditControls( {
	content,
	onChangeContent
} ) {
	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Settings', 'html-elements' ) }
				initialOpen={ true }
			>
				<TextareaControl
					label={ __( 'Text Content', 'html-elements' ) }
					help={ __( 'The text content of the element', 'html-elements' ) }
					value={ content }
					onChange={ onChangeContent }
				/>
			</PanelBody>
		</InspectorControls>
	)
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @return {Element} Element to render.
 */
export default function Edit( {
	attributes,
	setAttributes
} ) {
	const {
		content,
	} = attributes

	return (
		<>
			<EditControls
				content={ content }
				onChangeContent={ (value) =>
					setAttributes( { content: value || null } )
				}
			/>
			<RawHTML>
				{ content }
			</RawHTML>
		</>
	)
}
