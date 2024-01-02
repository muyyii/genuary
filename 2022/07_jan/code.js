const canvas = document.createElement("canvas");
const c = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

document.body.appendChild(canvas);


let pallete = ["#EA5C2B", "#FF7F3F", "#F6D860", "#95CD41", "#F3C892", "#FFF1BD", "#A3DA8D",
			"#146356", "#FF5959", "#676FA3", "#CDDEFF", "#EEF2FF", "#DB6B97", "#F2FFE9"];
let P = []

for (let i=0; i<24; i++){
	let p = {x:0, y:0};
	p.x = Math.round(Math.random()*w);
	p.y = Math.round(Math.random()*h);
	P.push(p)
}


function plot(x, y){
  c.fillStyle = "#09c";
  c.fillRect(x,y,10,10); 
}

function point(x, y, r, color = "#00af5c"){
	c.fillStyle = color;
	c.beginPath();
	c.arc(x, y, r, 0, Math.PI*2, false);
	//c.stroke();
	c.fill();
}

function dist(p1, p2){
	distance = Math.sqrt( (p1.x-p2.x) * (p1.x-p2.x) + (p1.y - p2.y) * (p1.y - p2.y))
	return Math.round(distance);
}

c.fillStyle = "#000";
c.fillRect(0,0,w,h);

for(const p in P){
	
	lesDist = 100; 
	
	for (const i in P){
		newDist = dist(P[p], P[i])
		if(newDist!=0 && newDist < lesDist){
				lesDist = newDist;
		}
	}

	radius = Math.round(lesDist*0.5);
	color = pallete[Math.floor(Math.random() * pallete.length)]
	console.log(lesDist);
	point(P[p].x, P[p].y, lesDist, color);
	point(P[p].x, P[p].y, 5, "#fff");
}

console.log(dist({x:0, y:100}, {x:0, y:100}));
