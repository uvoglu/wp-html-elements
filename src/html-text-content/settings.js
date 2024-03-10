import { html as icon } from '@wordpress/icons'

export default function settings( { defaultBlockLabel } ) {
	return {
		icon,
		__experimentalLabel( { content } ) {
			return content?.substring( 0, 60 ) || defaultBlockLabel
		}
	}
}
