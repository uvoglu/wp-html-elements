import { registerBlockType } from '@wordpress/blocks'
import Edit from './edit'
import save from './save'
import settings from './settings'
import metadata from './block.json'
import '../style.scss'

registerBlockType( metadata.name, {
	...settings( { defaultBlockLabel: metadata.title } ),
	edit: Edit,
	save,
} )
