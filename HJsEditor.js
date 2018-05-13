class HJsEditor{
	setTitle(TITLE){
		document.title = TITLE;
	}

	createDivElement(param){
		return new div(param)
	}

	createTextElement(param){
		return new text(param)
	}
	
	linkCss(href){
		var link = document.createElement('link')

		link.href = href
		link.rel = "stylesheet"
		link.type = "text/css"

		$('head').append(link)
	}
}

class div{
	constructor(param){
		this.width = param.width
		this.height = param.height
		this.background = param.background
		this.id = param.id
		this.margin = param.margin;
		this.padding = param.padding;
		this.marginLeft = param.marginLeft;
		this.marginRight = param.marginRight;
		this.marginTop = param.marginTop;
		this.marginBottom = param.marginBottom;
		this.paddingLeft = param.paddingLeft;
		this.paddingRight = param.paddingRight;
		this.paddingTop = param.paddingTop;
		this.paddingBottom = param.paddingBottom;
		this.position = param.position;
		this.top = param.top;
		this.bottom = param.bottom;
		this.left = param.left;
		this.right = param.right;
		this.float = param.float;
		this.borderStyle = param.borderStyle;
		this.borderColor = param.borderColor;
		this.borderWidth = param.borderWidth;
		this.borderTop = param.borderTop;
		this.borderTopStyle = param.borderTopStyle;
		this.borderTopColor = param.borderTopColor;
		this.borderTopWidth = param.borderTopWidth;
		this.borderBottom = param.borderBottom;
		this.borderBottomStyle = param.borderBottomStyle;
		this.borderBottomColor = param.borderBottomColor;
		this.borderBottomWidth = param.borderBottomWidth;
		this.borderLeft = param.borderLeft;
		this.borderLeftStyle = param.borderLeftStyle;
		this.borderLeftColor = param.borderLeftColor;
		this.borderLeftWidth = param.borderLeftWidth;
		this.borderRight = param.borderRight;
		this.borderRightStyle = param.borderRightStyle;
		this.borderRightColor = param.borderRightColor;
		this.borderRightWidth = param.borderRightWidth;
		this.border = param.border;
		this.overflow = param.overflow;
		this.borderRadius = param.borderRadius
		this.borderRadiusTop = param.borderRadiusTop
		this.borderRadiusLeft = param.borderRadiusLeft
		this.borderRadiusBottom = param.borderRadiusBottom
		this.borderRadiusRight = param.borderRadiusRight
		this.display = param.display
	}

	draw(){
		var div = document.createElement('div')

		div.style.display = this.display
		div.id = this.id;
		div.class = this.class;
		div.style.paddingTop = this.paddingTop;
		div.style.paddingBottom = this.paddingBottom;
		div.style.paddingLeft = this.paddingLeft;
		div.style.paddingRight = this.paddingRight;
		div.style.marginTop = this.marginTop;
		div.style.marginBottom = this.marignBottom;
		div.style.marginLeft = this.marginLeft;
		div.style.marginRight = this.marginRight;
		div.style.float = this.float;
		div.style.position = this.position;
		div.style.top = this.top;
		div.style.left = this.left;
		div.style.bottom = this.bottom;
		div.style.right = this.right;
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
		div.style.border = this.border;
		div.style.overflow = this.overflow;
		div.style.width = this.width
		div.style.height = this.height
		div.style.background = this.background
		div.style.borderRadius = this.borderRadius
		div.style.borderRadiusTop = this.borderRadiusTop
		div.style.borderRadiusLeft = this.borderRadiusLeft
		div.style.borderRadiusBottom = this.borderRadiusBottom
		div.style.borderRadiusRight = this.borderRadiusRight

		$('body').append(div)
	}
}

class text{
	constructor(param){
		this.type = param.type
		this.text = param.text
		this.fontSize = param.fontSize
		this.fontWeight = param.fontWeight
		this.fontFamily = param.fontFamily
		this.color = param.color
		this.position = param.position
		this.top = param.top
		this.left = param.left
		this.right = param.right
		this.bottom = param.bottom
		this.transform = param.transform
		this.textAlign = param.textAlign
	}

	draw(){
		var tx = document.createElement(this.type)

		tx.innerText = this.text
		tx.style.fontSize = this.fontSize
		tx.style.fontWeight = this.fontWeight
		tx.style.fontFamily = this.fontFamily
		tx.style.color = this.color
		tx.style.position = this.position
		tx.style.top = this.top
		tx.style.left = this.left
		tx.style.right = this.right
		tx.style.bottom = this.bottom
		tx.style.textAlign = this.textAlign
		tx.style.transform = this.transform

		$('body').append(tx)
	}
}