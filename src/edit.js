import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor'
import { TextControl, PanelBody } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import './editor.scss'

/**
 * Render inspector controls for the Group block.
 *
 * @param {Object} props Component props.
 * @param {string} props.tagName The HTML tag name.
 * @param {string} props.anchor The ID of the element.
 * @param {string} props.className The classes of the element.
 * @param {Function} props.onChangeTagName onChange function for the tagName TextControl.
 * @param {Function} props.onChangeAnchor onChange function for the ID TextControl.
 * @param {Function} props.onChangeClassName onChange function for the className TextControl.
 *
 * @return {JSX.Element}                The control group.
 */
function EditControls( {
	tagName,
	anchor,
	className,
	onChangeTagName,
	onChangeAnchor,
	onChangeClassName
} ) {
	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Settings' ) }
				initialOpen={ true }
			>
				<TextControl
					label={ __( 'Tag' ) }
					help={ __( 'The tag name to use for this HTML element' ) }
					value={ tagName }
					onChange={ onChangeTagName }
				/>
				<TextControl
					label={ __( 'ID' ) }
					help={ __( 'The ID to use for this HTML element' ) }
					value={ anchor }
					onChange={ onChangeAnchor }
				/>
				<TextControl
					label={ __( 'Class' ) }
					help={ __( 'The classes to use for this HTML element' ) }
					value={ className }
					onChange={ onChangeClassName }
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
	setAttributes,
	isSelected
} ) {
	const {
		tagName,
		anchor,
		className
	} = attributes
	const TagName = tagName || 'div'

	return (
		<>
			<EditControls
				tagName={ tagName }
				anchor={ anchor }
				className={ className }
				onChangeTagName={ (value) =>
					setAttributes( { tagName: value || null } )
				}
				onChangeAnchor={ (value) =>
					setAttributes( { anchor: value || null } )
				}
				onChangeClassName={ (value) =>
					setAttributes( { className: value || null } )
				}
			/>
			<TagName { ...useBlockProps( { id: anchor, className } ) }>
				<InnerBlocks
					renderAppender={ isSelected && InnerBlocks.ButtonBlockAppender }
				/>
			</TagName>
		</>
	)
}