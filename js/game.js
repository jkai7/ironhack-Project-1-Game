
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var paddleHeight = 20;
var paddleWidth = 90;
var paddleX = (canvas.width-paddleWidth)/2;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight - 20, paddleWidth, paddleHeight);
    ctx.fillStyle = "#222222";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
}
setInterval(draw,10);