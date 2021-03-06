let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
//param snows
let fps = 45;
let density = 100;
let speedY = 10;
let speedX = 2;
let sizeSnowFlake = 10;
let opacity = 0.4;

function rand(min, max){
    return Math.random() * (max - min) + min;
}
function SnowFlake(s){
    this.radius = s.radius;
    this.x = s.x;
    this.y = s.y;
    this.vx = s.vx;
    this.vy = s.vy;
}
let randRad;
let snowFlakes = new Array(Math.floor(canvas.width * canvas.height / 307200 * density));
for(let i = 0; i<snowFlakes.length; i++){
    snowFlakes[i] = new SnowFlake({
        radius: randRad = rand(sizeSnowFlake * 0.2, sizeSnowFlake * 0.7),
        x: rand(randRad, canvas.width - 2 * randRad),
        y: rand(randRad, canvas.height - 2 * randRad),
        vx: rand(-2, 2),
        vy: rand(-2, 2),
    });
}

ctx.fillStyle = '#cdd1df';
ctx.fillStyle = `rgba(205, 209, 223, ${opacity})`;
function show(){
    let now = +new Date();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowFlakes.forEach((item) => {
        item.date = item.date || now;
        let diff = now - item.date;
        item.x += (speedX + item.vx) * diff * 0.002;
        item.x += (item.x <= 0 ? 1 : 0) * canvas.width;
        item.x -= ~~(item.x / canvas.width) * canvas.width;
        item.y += (speedY + item.vy + item.radius) * diff * 0.002;
        item.y -= ~~(item.y / canvas.height) * canvas.height;
        item.vx += rand(-0.014, 0.014);
        item.vy += rand(-0.014, 0.014);

        ctx.beginPath();
        ctx.arc(item.x, item.y, item.radius, 0, 2 * Math.PI, !1);
        ctx.fill();
        item.date = now;
    });
    setTimeout(show, 1000/fps);
}
show();

