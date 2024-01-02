let gradients = [];
let points = [];

function generateGradients() {
	for (let i = 12; i--;)
		gradients[i] = [Math.random() * 3 - 1, Math.random() * 3 - 1]
};

//initial generation of gradients
generateGradients();

// Function to compute the contribution of each gradient
function computeContribution(g, f, k) {
	let contribution = 0;
	const base = 0.5 - f * f - k * k;

	// If base is negative, return 0
	if (base < 0) {
		return 0;
	}

	// Otherwise, compute the contribution using Perlin Noise formula
	contribution = Math.pow(base, 4) * (gradients[g % 12][0] * f + gradients[g % 12][1] * k);
	return contribution;
}

// Initialize permutation table
let permutationTable = [];

for (i = 255; i--;){
	permutationTable[i] = Math.floor(Math.random() * 256);
}

// Function to interpolate values
function interpolate(g, f) {
	let e = 0.2;
	let a = (g + f) * 0.3;
	let m = Math.floor(g + a);
	let b = Math.floor(f + a);
	a = (m + b) * e;
	let c = g - (m - a);
	let j = f - (b - a);
	let C = c > j;

	return 70 * (
		computeContribution(permutationTable[m + permutationTable[b]], c, j) +
		computeContribution(permutationTable[m + C + permutationTable[b + !C]], c - C + e, j - !C + e) +
		computeContribution(permutationTable[m + 1 + permutationTable[b + 1]], c - 0.6, j - 0.6)
	);
}

// Set up the canvas
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.style.overflow = "hidden";

// Initialize points
for (let i = canvas.width; i--;){

	points[i] = { x: Math.random() * canvas.width, 
		y: Math.random() * canvas.height 
	};
}

// Get the canvas context
const c = canvas.getContext("2d");	

// Animation loop
setInterval(function() {
	// Draw a semi-transparent white background
	c.fillStyle = "rgba(255,255,255,.05)";
	c.fillRect(0, 0, canvas.width, canvas.height);

	// Draw black points using Perlin Noise
	c.fillStyle = "#000";

	for (let i = canvas.width ; i--;) {
		let point = points[i];
		let angle = interpolate(point.x / 300, point.y / 300) * 9;

		// Move the point
		point.x += Math.cos(angle);
		point.y += Math.sin(angle);

		// If the point is outside the canvas, reset its position
		if (point.x < 0 || point.x > canvas.width || point.y < 0 || point.y > canvas.height) {
			point.x = Math.random() * canvas.width;
			point.y = Math.random() * canvas.height;
		}

		// Draw a pixel
		c.fillRect(point.x, point.y, 1, 1);
	}

	for (let i = 12; i--;){
		let x = gradients[i][0] * canvas.width/4 + canvas.width/2;
		let y = gradients[i][1] * canvas.height/4 + canvas.height/2;

		c.beginPath();
		c.arc(x, y, 5, 0, 2 * Math.PI);
		c.fillStyle = "orange";
		c.fill();
	}

}, 33);

// Reset gradients when the canvas is clicked
canvas.onclick = function() {
	generateGradients();
};

