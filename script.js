const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

let x1 = 100;
let y1 = 150;

let x2 = 900;
let y2 = 150;

let count = 0;
function add() {
    count++;
    document.getElementById("cart").innerText = count;
}

const circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

const drawBee = function (x, y) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Gold";

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x - 5, y - 11, 5, false);
    circle(x + 5, y - 11, 5, false);
    circle(x - 2, y - 1, 2, false);
    circle(x + 2, y - 1, 2, false);
};

const update = function (coordinate) {
    let offset = Math.random() * 4 - 2;
    coordinate += offset;

    if (coordinate > canvas.width) {
        coordinate = canvas.width;
    }

    if (coordinate < 0) {
        coordinate = 1;
    }

    return coordinate;
};

let angle = 0;
const radius = 50;

ctx.strokeStyle = "Black";
ctx.fillStyle = "Red";

function animate() {
    const beeX = canvas.width / 2 + radius * Math.cos(angle);
    const beeY = canvas.height / 2 + radius * Math.sin(angle);
    angle += 0.05;
    drawBee(beeX, beeY);
}


setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBee(x1, y1);
    x1 = update(x1);
    y1 = update(y1);
    drawBee(x2,y2);
    x2 = update(x2);
    y2 = update(y2);
    animate();
}, 100);


			