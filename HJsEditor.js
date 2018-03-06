function HJsEditor(BgColor, TextColor, Title, P, M) {

	HJsEditor = this;
	
	var D = document;

	if(!BgColor){

		D.bgColor = 'white';

	}else{

		D.bgColor = BgColor;

	}

	if(!Title){
		D.title = "title";
	}else{
		D.title = Title;
	}

	D.body.style.padding = P + 'px';
	D.body.style.margin = M + 'px';

	this.createText = function(param){

		if(!param.type){
			this.type = 'p';
		}else{
			this.type = param.type;
		}

		if(!param.text){
			this.text = 'text';
		}else{
			this.text = param.text;
		}

		if(!param.fontFamily){
			this.fontFamily = 'sefif';
		}else{
			this.fontFamily = param.fontFamily;
		}

		if(!param.fontSize){
			this.fontSize = 25 + 'px';
		}else{
			this.fontSize = param.fontSize + 'px';
		}

		if(!param.color){
			this.color = TextColor;
		}else{
			this.color = param.color;
		}

		if(!param.padding){
			this.padding = 0 + 'px';
		}else{
			this.padding = param.padding + 'px';
		}

		if(!param.margin){
			this.margin = 0 + 'px';
		}else{
			this.margin = param.margin + 'px';
		}

		this.draw();

	}

	this.createDiv = function(param){

		if(!param.height){
			this.height = 0 + 'px';
		}else{
			this.height = param.height + 'px';
		}

		if(!param.width){
			this.width = 0 + 'px';
		}else{
			this.width = param.width + 'px';
		}

		if(!param.backgroundColor){
			this.backgroundColor = 'white';
		}else{
			this.backgroundColor = param.backgroundColor;
		}

		if(!param.padding){
			this.padding = 0 + 'px';
		}else{
			this.padding = param.padding + 'px';
		}

		if(!param.margin){
			this.margin = 0 + 'px';
		}else{
			this.margin = param.margin + 'px';
		}

		this.draw();

	};

	this.createText.prototype = {

		draw : function(){

			var text = D.createElement(this.type);

			text.innerText = this.text;
			text.style.fontSize = this.fontSize;
			text.style.fontFamily = this.fontFamily;
			text.style.color = this.color;

			D.body.appendChild(text);

		}

	};

	this.createDiv.prototype = {

		draw : function(){

			var div = D.createElement("div");

			div.style.width = this.width;
			div.style.height = this.height;
			div.style.backgroundColor = this.backgroundColor;
			div.style.padding = this.padding;
			div.style.margin = this.margin;

			D.body.appendChild(div);

		},

	};

}