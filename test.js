var editor = HJsEditor();//Creation of instance of the engine

var css = new link({
	href : 'style.css',
	rel : 'stylesheet'
});//Connection to the css

var js = new script({
	src : 'script.js',
	type : 'text/javascript'
});//Connection to the js

var tx = new createText({
	type : 'h1',
	text : 'Hello',
	color : 'grey',
	fontSize : 50,
	fontFamily : 'monospace',
	margin : 0,
	padding : 0,
	class : 'txClass',
	id : 'txId'
});//Creation of the text element

var hr = new createHR({
	color : 'green'
})//Creating the hr

var div = new createDiv({
	width : 30,
	height : 30,
	backgroundColor : 'red',
	text : 'Its a div',
	margin : 0,
	padding : 0,
	borderRadius : 5,
	class : 'divClass',
	id : 'divId'
});//Creation of the div element

var btn = new createButton({
	width : 90,
	height : 30,
	backgroundColor : '#777',
	text : 'Its a btn',
	margin : 0,
	padding : 0,
	class : 'btnClass',
	id : 'btnId'
});//Creation of the button element

css.createLink();//Linking the css
js.createScript();//Linking the js
tx.draw();//Drawing the text
div.draw();//Drawing the div
hr.draw();//Drawing the hr
btn.draw();//Drawing the button