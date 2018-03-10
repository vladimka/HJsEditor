function HJsEditor() {
	var D = document;
	var B = D.body;

	this.setTitle = function(TITLE){
		D.title = TITLE;
	};

	this.body = function(param){
		if(!param.bgColor){
			this.bgColor = 'white';
		}else{
			this.bgColor = param.bgColor;
		}

		this.margin = param.margin + 'px';
		this.padding = param.padding + 'px';
		this.marginLeft = param.marginLeft + 'px';
		this.marginRight = param.marginRight + 'px';
		this.marginTop = param.marginTop + 'px';
		this.marginBottom = param.marginBottom + 'px';
		this.paddingLeft = param.paddingLeft + 'px';
		this.paddingRight = param.paddingRight + 'px';
		this.paddingTop = param.paddingTop + 'px';
		this.paddingBottom = param.paddingBottom + 'px';
		this.fontFamily = param.fontFamily;
		this.fontSize = param.fontSize + 'px';
	}

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

	this.hr = function(param){
		this.class = param.class;
		this.id = param.id;
		this.margin = param.margin + 'px';
		this.padding = param.padding + 'px';
		this.marginLeft = param.marginLeft + 'px';
		this.marginRight = param.marginRight + 'px';
		this.marginTop = param.marginTop + 'px';
		this.marginBottom = param.marginBottom + 'px';
		this.paddingLeft = param.paddingLeft + 'px';
		this.paddingRight = param.paddingRight + 'px';
		this.paddingTop = param.paddingTop + 'px';
		this.paddingBottom = param.paddingBottom + 'px';
	};

	this.text = function(param){
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

		this.text = param.text;
		this.fontFamily = param.fontFamily;
		this.fontSize = param.fontSize + 'px';
		this.color = param.color;
		this.padding = param.padding + 'px';
		this.paddingTop = param.paddingTop + 'px';
		this.paddingBottom = param.paddingBottom + 'px';
		this.paddingLeft = param.paddingLeft + 'px';
		this.paddingRight = param.paddingRight + 'px';
		this.margin = param.margin + 'px';
		this.marginTop = param.marginTop + 'px';
		this.marginBottom = param.marginBottom + 'px';
		this.marginLeft = param.marginLeft + 'px';
		this.marginRight = param.marginRight + 'px';
		this.class = param.class;
		this.id = param.id;
		this.position = param.position;
		this.top = param.top + 'px';
		this.bottom = param.bottom + 'px';
		this.left = param.left + 'px';
		this.right = param.right + 'px';
		this.float = param.float;
	};

	this.div = function(param){
		this.height = param.height + 'px';
		this.width = param.width + 'px';
		this.backgroundColor = param.backgroundColor;
		this.borderRadius = param.borderRadius + 'px';
		this.paddingTop = param.paddingTop + 'px';
		this.paddingBottom = param.paddingBottom + 'px';
		this.paddingLeft = param.paddingLeft + 'px';
		this.paddingRight = param.paddingRight + 'px';
		this.margin = param.margin + 'px';
		this.marginTop = param.marginTop + 'px';
		this.marginBottom = param.marginBottom + 'px';
		this.marginLeft = param.marginLeft + 'px';
		this.marginRight = param.marginRight + 'px';
		this.class = param.class;
		this.id = param.id;
		this.position = param.position;
		this.top = param.top;
		this.bottom = param.bottom;
		this.left = param.left;
		this.right = param.right;
		this.float = param.float;
		this.borderStyle = param.borderStyle;
		this.borderColor = param.borderColor;
		this.borderWidth = param.borderWidth + 'px';
		this.borderTop = param.borderTop;
		this.borderTopStyle = param.borderTopStyle;
		this.borderTopColor = param.borderTopColor;
		this.borderTopWidth = param.borderTopWidth + 'px';
		this.borderBottom = param.borderBottom;
		this.borderBottomStyle = param.borderBottomStyle;
		this.borderBottomColor = param.borderBottomColor;
		this.borderBottomWidth = param.borderBottomWidth + 'px';
		this.borderLeft = param.borderLeft;
		this.borderLeftStyle = param.borderLeftStyle;
		this.borderLeftColor = param.borderLeftColor;
		this.borderLeftWidth = param.borderLeftWidth + 'px';
		this.borderRight = param.borderRight;
		this.borderRightStyle = param.borderRightStyle;
		this.borderRightColor = param.borderRightColor;
		this.borderRightWidth = param.borderRightWidth + 'px';
	};

	this.button = function(param){
		this.height = param.height + 'px';
		this.width = param.width + 'px';
		this.backgroundColor = param.backgroundColor;
		this.padding = param.padding + 'px';
		this.margin = param.margin + 'px';
		this.borderRadius = param.borderRadius + 'px';
		this.text = param.text;
		this.paddingTop = param.paddingTop + 'px';
		this.paddingBottom = param.paddingBottom + 'px';
		this.paddingLeft = param.paddingLeft + 'px';
		this.paddingRight = param.paddingRight + 'px';
		this.margin = param.margin + 'px';
		this.marginTop = param.marginTop + 'px';
		this.marginBottom = param.marginBottom + 'px';
		this.marginLeft = param.marginLeft + 'px';
		this.marginRight = param.marginRight + 'px';
		this.class = param.class;
		this.id = param.id;
		this.borderStyle = param.borderStyle;
		this.borderColor = param.borderColor;
		this.borderWidth = param.borderWidth + 'px';
		this.borderTop = param.borderTop;
		this.borderTopStyle = param.borderTopStyle;
		this.borderTopColor = param.borderTopColor;
		this.borderTopWidth = param.borderTopWidth + 'px';
		this.borderBottom = param.borderBottom;
		this.borderBottomStyle = param.borderBottomStyle;
		this.borderBottomColor = param.borderBottomColor;
		this.borderBottomWidth = param.borderBottomWidth + 'px';
		this.borderLeft = param.borderLeft;
		this.borderLeftStyle = param.borderLeftStyle;
		this.borderLeftColor = param.borderLeftColor;
		this.borderLeftWidth = param.borderLeftWidth + 'px';
		this.borderRight = param.borderRight;
		this.borderRightStyle = param.borderRightStyle;
		this.borderRightColor = param.borderRightColor;
		this.borderRightWidth = param.borderRightWidth + 'px';
	};

	this.hr.prototype= {
		draw : function(){

			var hr = D.createElement("hr");

			hr.class = this.class;
			hr.id = this.id;
			hr.style.marginTop = this.marginTop;
			hr.style.marginBottom = this.marignBottom;
			hr.style.marginLeft = this.marginLeft;
			hr.style.marginRight = this.marginRight;
			hr.style.margin = this.margin;

			D.body.appendChild(hr);

		}
	};

	this.text.prototype = {

		draw : function(){

			var text = D.createElement(this.type);

			text.innerText = this.text;
			text.style.fontSize = this.fontSize;
			text.style.fontFamily = this.fontFamily;
			text.style.color = this.color;
			text.href = this.href;
			text.class = this.class;
			text.id = this.id;
			text.style.padding = this.padding;
			text.style.paddingTop = this.paddingTop;
			text.style.paddingBottom = this.paddingBottom;
			text.style.paddingLeft = this.paddingLeft;
			text.style.paddingRight = this.paddingRight;
			text.style.margin = this.margin;
			text.style.marginTop = this.marginTop;
			text.style.marginBottom = this.marignBottom;
			text.style.marginLeft = this.marginLeft;
			text.style.marginRight = this.marginRight;
			text.style.position = this.position;
			text.style.top = this.top;
			text.style.bottom = this.bottom;
			text.style.left = this.left;
			text.style.right = this.right;
			text.style.float = this.float;

			D.body.appendChild(text);

		}
	};

	this.div.prototype = {
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
			div.style.paddingTop = this.paddingTop;
			div.style.paddingBottom = this.paddingBottom;
			div.style.paddingLeft = this.paddingLeft;
			div.style.paddingRight = this.paddingRight;
			div.style.marginTop = this.marginTop;
			div.style.marginBottom = this.marignBottom;
			div.style.marginLeft = this.marginLeft;
			div.style.marginRight = this.marginRight;
			div.style.position = this.position;
			div.style.top = this.top;
			div.style.bottom = this.bottom;
			div.style.left = this.left;
			div.style.right = this.right;
			div.style.float = this.float;
			div.style.borderStyle = this.borderStyle;
			div.style.borderColor = this.borderColor;		
			div.style.borderWidth = this.borderWidth;
			div.style.borderTop = this.borderTop;
			div.style.borderTopColor = this.borderTopColor;
			div.style.borderTopStyle = this.borderTopStyle;
			div.style.borderTopWidth = this.borderTopWidth;
			div.style.borderBottom = this.borderBottom;
			div.style.borderBottomColor = this.borderBottomColor;
			div.style.borderBottomStyle = this.borderBottomStyle;
			div.style.borderBottomWidth = this.borderBottomWidth;
			div.style.borderLeft = this.borderLeft;
			div.style.borderLeftColor = this.borderLeftColor;
			div.style.borderLeftStyle = this.borderLeftStyle;
			div.style.borderLeftWidth = this.borderLeftWidth;
			div.style.borderRight = this.borderRight;
			div.style.borderRightColor = this.borderRightColor;
			div.style.borderRightStyle = this.borderRightStyle;
			div.style.borderRightWidth = this.borderRightWidth;

			D.body.appendChild(div);

		}
	};

	this.button.prototype = {
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
			btn.style.borderStyle = this.borderStyle;
			btn.style.borderColor = this.borderColor;		
			btn.style.borderWidth = this.borderWidth;
			btn.style.borderTop = this.borderTop;
			btn.style.borderTopColor = this.borderTopColor;
			btn.style.borderTopStyle = this.borderTopStyle;
			btn.style.borderTopWidth = this.borderTopWidth;
			btn.style.borderBottom = this.borderBottom;
			btn.style.borderBottomColor = this.borderBottomColor;
			btn.style.borderBottomStyle = this.borderBottomStyle;
			btn.style.borderBottomWidth = this.borderBottomWidth;
			btn.style.borderLeft = this.borderLeft;
			btn.style.borderLeftColor = this.borderLeftColor;
			btn.style.borderLeftStyle = this.borderLeftStyle;
			btn.style.borderLeftWidth = this.borderLeftWidth;
			btn.style.borderRight = this.borderRight;
			btn.style.borderRightColor = this.borderRightColor;
			btn.style.borderRightStyle = this.borderRightStyle;
			btn.style.borderRightWidth = this.borderRightWidth;
			btn.style.paddingTop = this.paddingTop;
			btn.style.paddingBottom = this.paddingBottom;
			btn.style.paddingLeft = this.paddingLeft;
			btn.style.paddingRight = this.paddingRight;
			btn.style.marginTop = this.marginTop;
			btn.style.marginBottom = this.marignBottom;
			btn.style.marginLeft = this.marginLeft;
			btn.style.marginRight = this.marginRight;

			D.body.appendChild(btn);

		}
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

	this.body.prototype = {
		stylize : function(){
			B.bgColor = this.bgColor;
			B.style.margin = this.margin;
			B.style.padding = this.padding;
			B.style.marginTop = this.marginTop;
			B.style.marginLeft = this.marginLeft;
			B.style.marginRight = this.marginRight;
			B.style.marginBottom = this.marginBottom;
			B.style.paddingTop = this.paddingTop;
			B.style.paddingLeft = this.paddingLeft;
			B.style.paddingRight = this.paddingRight;
			B.style.paddingBottom = this.paddingBottom;
			B.style.fontFamily = this.fontFamily;
			B.style.fontSize = this.fontSize;
		}
	}
};