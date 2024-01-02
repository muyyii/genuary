const canvas = document.createElement("canvas");
const c = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

let m;

function setup() {
	createCanvas(w, h, WEBGL);
	m = createModel();
}

function draw() {
	background(100);
	orbitControl(2, 1, 0.05)
	model(m);
}

function createModel() {
  return new p5.Geometry(
    // detailX and detailY are not used in this example
    1, 1,
    // The callback must be an anonymous function, not an arrow function in
    // order for "this" to be bound correctly.
    function createGeometry() {
      this.vertices.push(
        new p5.Vector(-27, -56, 10),
        new p5.Vector(33, -12, 5),
        new p5.Vector(7, 46, 2)
      );
    }
  );
}
