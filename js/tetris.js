const screen = document.getElementById("screen");
const context = screen.getContext("2d");
screen.width = 640;
screen.height = 400;

const buffer = new Buffer();
buffer.draw();

let CurrentBlock = new Block('#'+Math.floor(Math.random()*16777215).toString(16));
let fallingBlocks = setInterval(function(){  
    buffer.draw();
    CurrentBlock.fall();
    if(CurrentBlock.pos.y >= 370){
        buffer.add(CurrentBlock);
        let newColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        CurrentBlock = new Block(newColor);
    }
}, 300);

document.addEventListener("keydown", moveCurrentBlock);

function moveCurrentBlock(e){
    if(e.keyCode == 37 || 39) buffer.draw();
    if(e.keyCode == 37) CurrentBlock.moveX(-16);
    if(e.keyCode == 39) CurrentBlock.moveX(16);
}

document.addEventListener("keydown", speedUp);

function speedUp(e){
    if(e.keyCode == 40) CurrentBlock.fall();
}

// var can = document.getElementById('canvas');
// can.height = 1000; can.width = 1300;
// var ctx = can.getContext('2d');
// var x = 10, y = 100;
// ctx.fillStyle = "black";
// ctx.fillRect(700, 100, 100, 100);

// function draw() {
//     ctx.beginPath();
//     ctx.arc(x, y, 20, 0, 2 * Math.PI);
//     ctx.fillStyle = 'rgba(250,0,0,0.4)';
//     ctx.fill();

//     x += 2;
//     ctx.fillStyle = "rgba(34,45,23,0.4)";
//     ctx.fillRect(0, 0, can.width, can.height);
//     requestAnimationFrame(draw);
//     //ctx.clearRect(0,0,can.width,can.height);
// }
// draw();