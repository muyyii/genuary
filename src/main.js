const canvas = document.createElement("canvas");
const c = canvas.getContext("2d");
const scene = document.getElementById("scene");
const stage = document.getElementById("stage");

document.getElementById('bg').appendChild(canvas);

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

c.fillStyle = "#b983ff";
c.fillRect(0,0, w, h);

function plot(x, y){
	c.fillStyle = "#09c";
  	c.fillRect(x,y,1,1); 
}

function setFrame(arg){
	scene.src = "./"+arg+"/main.html";
	stage.style.display = "block";
}

function unsetFrame(){
	scene.src = '';	
	stage.style.display = "none";
}


class Frame {
	constructor(parent, name, src){
		
	}
}















//const ranger = document.createElement("input");
//ranger.type = "range";
//document.body.appendChild(ranger);

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
//const s1 = new MagicSlider(document.body, "Width", 10, 10 ,10);




