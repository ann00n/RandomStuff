var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//create red rectangle on canvas
ctx.beginPath();
ctx.rect(200, 200, 10, 10);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();



