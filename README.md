# HJsEditor
Как создать экземпляр движка
var editor = HJsEditor();

Создание текстового элемента
var text = new text({
	type : 'p',
	text : 'Text',
	fontSize : 20,
	fontFamily : 'monospace',
	color : 'green',
	marginLeft : 10,
	marginTop : 10,
	paddingTop : 10,
	position : 'fixed',
	float : 'left',
	id : 'myTextId',
	class : 'myTextCLass'
});
text.draw();

Создание дива
var div = new div({
	width : 50,
	height : 50,
	backgroundColor : 'red',
	borderRadius : 5,
	borderWidth : 5,
	borderColor : 5,
	borderStyle : 'solid'
});
div.draw();

Создание hr
var hr = new hr({});
hr.draw();

Создание кнопки
var btn = new btn({
	width : 50,
	height : 50,
	backgroundColor : 'red',
	borderWidth : 5,
	borderColor : 5,
	borderStyle : 'solid',
	text : 'Click Me!'

});
btn.draw();

Подключение css
var css = new link({
	href : 'style.css'
});
css.createLink();

Подключение js
var src = new script({
	src : 'script.js'
});
src.createLink();

Стилизация body
var body = new body({
	bgColor : 'blue',
	fontSize : 25
});
body.stylize();
