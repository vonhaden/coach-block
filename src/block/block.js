/**
 * BLOCK: coach-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, PlainText, MediaUpload, MediaUploadCheck } = wp.blockEditor;


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-coach-block', {
	title: __( 'Coach' ),
	icon: 'id-alt',
	category: 'common',
	keywords: [
		__( 'Coach' ),
	],
	attributes: {
		name: {
			type: 'string',
			source: 'text',
			selector: '.name',
		},
		role: {
			type: 'string',
			source: 'text',
			selector: '.role',
		},
		description: {
			type: 'string',
			source: 'html',
			selector: '.description',
		},
		imgUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		}
	},



	// -------------- EDIT --------------//
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {

		// set the properties in props
		let {
			attributes: { name, role, description, imgUrl },
			setAttributes,
			className
		} = props;


		// Functions
		function changeName( value ) {
			setAttributes( { name: value } )
		}

		function changeRole( value ) {
			setAttributes( { role: value } )
		}

		function changeDescription( value ) {
			setAttributes( { description: value } )
		}

		function selectImage( value ) {
			console.log(value);
			setAttributes( { imgUrl: value.sizes.thumbnail.url } );
		}



		return (
			<div className={ props.className }>

				<div className='photo'>
					<MediaUploadCheck>
						<MediaUpload allowedTypes={ ['images'] }
									 onSelect={ selectImage }
									 render={
										 ({ open }) => <img src={ imgUrl } onClick={ open } />
									 }
						/>
					</MediaUploadCheck>
				</div>

				<div className='text'>
					<PlainText className='name'
							   value={ name }
							   onChange={ changeName }
							   placeholder='Coach Name'
					/>

					<PlainText className='role'
							   value={ role }
							   onChange={ changeRole }
							   placeholder='Role'
					/>

					<RichText className="description"
							  tagName="div"
							  value={ description }
							  onChange={ changeDescription }
							  placeholder="A description of the coach."
					/>
				</div>

			</div>
		);
	},



	// -------------- SAVE --------------//
	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return (
			<div className={ props.className }>
				<div className="photo">
					<img src={ props.attributes.imgUrl }
						 alt={ 'Photo of ' + props.attributes.name }
					/>
				</div>
				<div className='text'>
					<p className='name'>
						{ props.attributes.name }
					</p>
					<p className='role'>
						{ props.attributes.role }
					</p>
					<RichText.Content tagName="div"
									  className="description"
									  value={ props.attributes.description }
					/>
				</div>
			</div>
		);
	},
} );
