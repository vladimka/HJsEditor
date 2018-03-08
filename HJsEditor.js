function HJsEditor() {
	var D = document;

	this.script = function(param){
		this.src = param.src;

		if(!param.type){
			this.type = 'text/javascript';
		}else{
			this.type = param.type;
		}
	};

	this.link = function(param){
		if(!param.rel){
			this.rel = 'stylesheet';
		}else{
			this.rel = param.rel;
		}


		this.href = param.href;
	};

	this.createHR = function(param){
		if(!param.color){
			this.color = 'black';
		}else{
			this.color = param.color;
		}

		this.class = param.class;
		this.id = param.id;
	};

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

		this.fontSize = param.fontSize + 'px';

		if(!param.color){
			if(this.type == 'a'){
				this.color == 'blue';
			}else{
				this.color = 'black';
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

		this.class = param.class;
		this.id = param.id;
	};

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

		this.class = param.class;
		this.id = param.id;
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

		this.class = param.class;
		this.id = param.id;
	};

	this.createHR.prototype= {
		draw : function(){

			var hr = D.createElement("hr");

			hr.style.color = this.color;
			hr.class = this.class;
			hr.id = this.id;

			D.body.appendChild(hr);

		}
	};

	this.createText.prototype = {

		draw : function(){

			var text = D.createElement(this.type);

			text.innerText = this.text;
			text.style.fontSize = this.fontSize;
			text.style.fontFamily = this.fontFamily;
			text.style.color = this.color;
			text.href = this.href;
			text.class = this.class;
			text.id = this.id;

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
			div.class = this.class;
			div.id = this.id;
			

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
			btn.class = this.class;
			btn.id = this.id;

			D.body.appendChild(btn);

		},
	};

	this.link.prototype = {
		createLink : function(){
			var link = D.createElement("link");

			link.rel = this.rel;
			link.href = this.href;

			D.head.appendChild(link);
		}
	};

	this.script.prototype = {
		createScript : function(){
			var script = D.createElement("script");

			script.type = this.type;
			script.src = this.src;

			D.head.appendChild(script);
		}
	};
};