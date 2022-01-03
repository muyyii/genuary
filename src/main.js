const canvas = document.createElement("canvas");
const c = canvas.getContext("2d");

document.body.appendChild(canvas);

c.fillRect(0,0,300,150);

function plot(x, y){
  c.fillStyle = "#fff";
  c.fillRect(x,y,1,1); 
}

function plotFriend(){
	let a = Math.cos(Math.PI/4);

	for (let y=1; y<=141; y+=5){
		let e = a * y;
		let c = y - 70;
		for (let x=1; x<=141; x++){
			let d = x - 70;
			let z = 80 * Math.exp(-0.001 * (c*c+d*d));
			let x1 = x + e ;
			let y1 = z + e ;
			plot(x1, y1);
		}
	}
}

plotFriend();

const ranger = document.createElement("input");
ranger.type = "range";
document.body.appendChild(ranger);

//const s1 = new Slider(document.body, "Width", 300, 0, 500, render);

class MagicSlider {
	//constructor(parent, label, value, min, max, defaultHandler) {
	constructor(parent, label, value, min, max) {
		//super();
		//super(parent, x, y);
		this._min = min || 0;
		this._max = max || 100;
		//this._setDefaults();
		this._value = value || 0;
		this._label = label || "";

		this._createSlider(parent);

		//this.element = document.createElement("input");
		//this.element.type = 'range'
		//parent.appendChild(this.element);
		//this.addEventListener("change", defaultHandler);
    	//this._addToParent();
	}
	_createSlider(parent){
		const sldr = document.createElement("input");
		sldr.type = "range"
		parent.appendChild(sldr);
		return sldr;
	}
	_createChildren(parent) {
		this._handle = this._createDiv(parent, "MagiclSliderHandle");
	}

	_createDiv(parent, className) {
		return this._createElement(parent, "div", className);
	}

	_createElement(parent, type, className) {
		const el = document.createElement(type);
		el.setAttribute("class", className);
		parent && parent.appendChild(el);
		return el;
	}

}

//customElements.define("magic-slider", Slider);

const s1 = new MagicSlider(document.body, "Width", 10, 10 ,10);

//	function createInput(type, id, className, parent) {
//        var input = createElement("input", id, className, parent);
//        input.type = type;
//        return input;
//    }



