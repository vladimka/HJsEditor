var editor = HJsEditor();
var D = document;
var clientWidth = D.body.style.clientWidth + 'px';
var clientHeight = D.body.style.clientHeight + 'px';

new setTitle("HJsEditor");

var css = new link({
	href : 'style.css'
});

var text = new text({
	type : 'h1',
	text : 'Text',
});

css.createLink();
text.draw();