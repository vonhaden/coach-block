/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: coach-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    PlainText = _wp$blockEditor.PlainText,\n    MediaUpload = _wp$blockEditor.MediaUpload,\n    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-coach-block', {\n\ttitle: __('Coach'),\n\ticon: 'id-alt',\n\tcategory: 'common',\n\tkeywords: [__('Coach')],\n\tattributes: {\n\t\tname: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'text',\n\t\t\tselector: '.name'\n\t\t},\n\t\trole: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'text',\n\t\t\tselector: '.role'\n\t\t},\n\t\tdescription: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'html',\n\t\t\tselector: '.description'\n\t\t},\n\t\timgUrl: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'https://placehold.it/75'\n\t\t}\n\t},\n\n\t// -------------- EDIT --------------//\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\n\t\t// set the properties in props\n\t\tvar _props$attributes = props.attributes,\n\t\t    name = _props$attributes.name,\n\t\t    role = _props$attributes.role,\n\t\t    description = _props$attributes.description,\n\t\t    imgUrl = _props$attributes.imgUrl,\n\t\t    setAttributes = props.setAttributes,\n\t\t    className = props.className;\n\n\t\t// Functions\n\n\t\tfunction changeName(value) {\n\t\t\tsetAttributes({ name: value });\n\t\t}\n\n\t\tfunction changeRole(value) {\n\t\t\tsetAttributes({ role: value });\n\t\t}\n\n\t\tfunction changeDescription(value) {\n\t\t\tsetAttributes({ description: value });\n\t\t}\n\n\t\tfunction selectImage(value) {\n\t\t\tconsole.log(value);\n\t\t\tsetAttributes({ imgUrl: value.sizes.thumbnail.url });\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(PlainText, { className: 'name',\n\t\t\t\tvalue: name,\n\t\t\t\tonChange: changeName,\n\t\t\t\tplaceholder: 'Coach Name'\n\t\t\t}),\n\t\t\twp.element.createElement(PlainText, { className: 'role',\n\t\t\t\tvalue: role,\n\t\t\t\tonChange: changeRole,\n\t\t\t\tplaceholder: 'Role'\n\t\t\t}),\n\t\t\twp.element.createElement(RichText, { className: 'description',\n\t\t\t\ttagName: 'div',\n\t\t\t\tvalue: description,\n\t\t\t\tonChange: changeDescription,\n\t\t\t\tplaceholder: 'A description of the coach.'\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\tMediaUploadCheck,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(MediaUpload, { allowedTypes: ['images'],\n\t\t\t\t\tonSelect: selectImage,\n\t\t\t\t\trender: function render(_ref) {\n\t\t\t\t\t\tvar open = _ref.open;\n\t\t\t\t\t\treturn wp.element.createElement('img', { src: imgUrl, onClick: open });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\n\t// -------------- SAVE --------------//\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'photo' },\n\t\t\t\twp.element.createElement('img', { src: props.attributes.imgUrl,\n\t\t\t\t\talt: 'Photo of ' + props.attributes.name\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'text' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'name' },\n\t\t\t\t\tprops.attributes.name\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'role' },\n\t\t\t\t\tprops.attributes.role\n\t\t\t\t),\n\t\t\t\twp.element.createElement(RichText.Content, { tagName: 'div',\n\t\t\t\t\tclassName: 'description',\n\t\t\t\t\tvalue: props.attributes.description\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGNvYWNoLWJsb2NrXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkYmxvY2tFZGl0b3IgPSB3cC5ibG9ja0VkaXRvcixcbiAgICBSaWNoVGV4dCA9IF93cCRibG9ja0VkaXRvci5SaWNoVGV4dCxcbiAgICBQbGFpblRleHQgPSBfd3AkYmxvY2tFZGl0b3IuUGxhaW5UZXh0LFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGJsb2NrRWRpdG9yLk1lZGlhVXBsb2FkLFxuICAgIE1lZGlhVXBsb2FkQ2hlY2sgPSBfd3AkYmxvY2tFZGl0b3IuTWVkaWFVcGxvYWRDaGVjaztcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1jb2FjaC1ibG9jaycsIHtcblx0dGl0bGU6IF9fKCdDb2FjaCcpLFxuXHRpY29uOiAnaWQtYWx0Jyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRrZXl3b3JkczogW19fKCdDb2FjaCcpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdG5hbWU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAndGV4dCcsXG5cdFx0XHRzZWxlY3RvcjogJy5uYW1lJ1xuXHRcdH0sXG5cdFx0cm9sZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICd0ZXh0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLnJvbGUnXG5cdFx0fSxcblx0XHRkZXNjcmlwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdodG1sJyxcblx0XHRcdHNlbGVjdG9yOiAnLmRlc2NyaXB0aW9uJ1xuXHRcdH0sXG5cdFx0aW1nVXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdodHRwczovL3BsYWNlaG9sZC5pdC83NSdcblx0XHR9XG5cdH0sXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0gRURJVCAtLS0tLS0tLS0tLS0tLS8vXG5cdC8qKlxuICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICpcbiAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgKi9cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXG5cdFx0Ly8gc2V0IHRoZSBwcm9wZXJ0aWVzIGluIHByb3BzXG5cdFx0dmFyIF9wcm9wcyRhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgbmFtZSA9IF9wcm9wcyRhdHRyaWJ1dGVzLm5hbWUsXG5cdFx0ICAgIHJvbGUgPSBfcHJvcHMkYXR0cmlidXRlcy5yb2xlLFxuXHRcdCAgICBkZXNjcmlwdGlvbiA9IF9wcm9wcyRhdHRyaWJ1dGVzLmRlc2NyaXB0aW9uLFxuXHRcdCAgICBpbWdVcmwgPSBfcHJvcHMkYXR0cmlidXRlcy5pbWdVcmwsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG5cblx0XHQvLyBGdW5jdGlvbnNcblxuXHRcdGZ1bmN0aW9uIGNoYW5nZU5hbWUodmFsdWUpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBuYW1lOiB2YWx1ZSB9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjaGFuZ2VSb2xlKHZhbHVlKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgcm9sZTogdmFsdWUgfSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2hhbmdlRGVzY3JpcHRpb24odmFsdWUpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBkZXNjcmlwdGlvbjogdmFsdWUgfSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gc2VsZWN0SW1hZ2UodmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBpbWdVcmw6IHZhbHVlLnNpemVzLnRodW1ibmFpbC51cmwgfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBsYWluVGV4dCwgeyBjbGFzc05hbWU6ICduYW1lJyxcblx0XHRcdFx0dmFsdWU6IG5hbWUsXG5cdFx0XHRcdG9uQ2hhbmdlOiBjaGFuZ2VOYW1lLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ0NvYWNoIE5hbWUnXG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQbGFpblRleHQsIHsgY2xhc3NOYW1lOiAncm9sZScsXG5cdFx0XHRcdHZhbHVlOiByb2xlLFxuXHRcdFx0XHRvbkNoYW5nZTogY2hhbmdlUm9sZSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdSb2xlJ1xuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHsgY2xhc3NOYW1lOiAnZGVzY3JpcHRpb24nLFxuXHRcdFx0XHR0YWdOYW1lOiAnZGl2Jyxcblx0XHRcdFx0dmFsdWU6IGRlc2NyaXB0aW9uLFxuXHRcdFx0XHRvbkNoYW5nZTogY2hhbmdlRGVzY3JpcHRpb24sXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnQSBkZXNjcmlwdGlvbiBvZiB0aGUgY29hY2guJ1xuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwgeyBhbGxvd2VkVHlwZXM6IFsnaW1hZ2VzJ10sXG5cdFx0XHRcdFx0b25TZWxlY3Q6IHNlbGVjdEltYWdlLFxuXHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcblx0XHRcdFx0XHRcdHZhciBvcGVuID0gX3JlZi5vcGVuO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IGltZ1VybCwgb25DbGljazogb3BlbiB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHQvLyAtLS0tLS0tLS0tLS0tLSBTQVZFIC0tLS0tLS0tLS0tLS0tLy9cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdwaG90bycgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogcHJvcHMuYXR0cmlidXRlcy5pbWdVcmwsXG5cdFx0XHRcdFx0YWx0OiAnUGhvdG8gb2YgJyArIHByb3BzLmF0dHJpYnV0ZXMubmFtZVxuXHRcdFx0XHR9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAndGV4dCcgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ25hbWUnIH0sXG5cdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5uYW1lXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQncCcsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdyb2xlJyB9LFxuXHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMucm9sZVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQuQ29udGVudCwgeyB0YWdOYW1lOiAnZGl2Jyxcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdkZXNjcmlwdGlvbicsXG5cdFx0XHRcdFx0dmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb25cblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);