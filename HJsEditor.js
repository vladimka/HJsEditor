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
			if(param.type == 'a'){

				if(!param.href){
					this.href = '#';
				}else{
					this.href = param.href;
				}

			}
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
			if(this.type == 'a'){
				this.color == 'blue';
			}else{
				this.color = TextColor;
			}
			
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

		if(!param.borderRadius){
			this.borderRadius = 0 + 'px';
		}else{
			this.borderRadius = param.borderRadius + 'px';
		}

		this.draw();

	};

	this.createButton = function(param){
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

		if(!param.borderRadius){
			this.borderRadius = 0 + 'px';
		}else{
			this.borderRadius = param.borderRadius + 'px';
		}

		if(!param.text){
			this.text = 'text';
		}else{
			this.text = param.text;
		}

		this.draw();
	}

	this.createText.prototype = {

		draw : function(){

			var text = D.createElement(this.type);

			text.innerText = this.text;
			text.style.fontSize = this.fontSize;
			text.style.fontFamily = this.fontFamily;
			text.style.color = this.color;
			text.href = this.href

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
			div.style.borderRadius = this.borderRadius;

			D.body.appendChild(div);

		}

	};

	this.createButton.prototype = {

		draw : function(){

			var btn = D.createElement("button");

			btn.style.width = this.width;
			btn.style.height = this.height;
			btn.style.backgroundColor = this.backgroundColor;
			btn.style.padding = this.padding;
			btn.style.margin = this.margin;
			btn.innerText = this.text;

			D.body.appendChild(btn);

		},

	};

}