const canvas = document.createElement("canvas");
const c = canvas.getContext("2d");

let w = canvas.width = 300;
let h = canvas.height = 300;

document.body.appendChild(canvas);

c.fillRect(0,0,300,300);

function plot(x, y){
  c.fillStyle = "#09c";
  c.fillRect(x,y,10,10); 
}

plot(30, 30);
