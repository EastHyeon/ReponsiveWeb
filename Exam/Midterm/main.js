var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

const WIDTH = canvas.offsetWidth / 2;
const HEIGHT = canvas.offsetHeight / 2;

const STAR_VERTEX = 
[ 
    [0, -2],
    [0.7, -0.5],
    [2.2, -0.5],
    [1.1, 0.5],
    [1.7, 1.8],
    [0, 1],
    [-1.7, 1.8],
    [-1.1, 0.5],
    [-2.2, -0.5],
    [-0.7, -0.5],
    [0, -2],
];

class StarObject
{
    constructor(x, y, scale, color)
    {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.color = color;
    }

    start()
    {
        
    }

    update()
    {
        playerPosX = this.x;
        playerPosY = this.y;
    }

    render()
    {
        ctx.lineWidth = 3;
        ctx.fillStyle = this.color;
        ctx.beginPath();

        var fx = 0;
        var fy = 0;

        fx += STAR_VERTEX[0][0];
        fy += STAR_VERTEX[0][1];
        
        fx *= this.scale;
        fy *= this.scale;
        
        fx += WIDTH;
        fy += HEIGHT;
        
        fx += this.x;
        fy += this.y;

        ctx.moveTo(fx, fy);

        for(var i = 1; i < STAR_VERTEX.length; i++)
        {
            var cx = 0;
            var cy = 0;

            cx += STAR_VERTEX[i][0];
            cy += STAR_VERTEX[i][1];

            cx *= this.scale;
            cy *= this.scale;
            
            cx += WIDTH;
            cy += HEIGHT;

            cx += this.x;
            cy += this.y;

            ctx.lineTo(cx, cy);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}

class HeartObject
{
    constructor(x, y, scale, color, seta)
    {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.color = color;
        this.seta = seta;
    }

    start()
    {
        
    }

    update()
    {

    }

    render()
    {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        var radius = 1;
        ctx.moveTo(this.x, this.y);
        for(var i = 0; i < Math.PI; i += 0.01)
        {
            var rx = radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx -= radius;
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));
            
            rx += WIDTH;
            ry += HEIGHT;

            rx += this.x;
            ry += this.y;


            ctx.lineTo(rx,  ry);
        }
        for(var i = 0; i < Math.PI / 2; i += 0.01)
        {
            var rx = -radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));
            
            rx -= radius;
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta))

            rx += WIDTH;
            ry += HEIGHT;

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx,  ry);
        }
        for(var i = 0; i < Math.PI / 2; i += 0.01)
        {
            var rx = 0;
            var ry = -radius;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * -Math.sin(i));
            ry = (tempX * Math.sin(i) + tempY * Math.cos(i));

            ry = ry + radius * 2;

            rx -= radius;
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx += WIDTH;
            ry += HEIGHT;

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx,  ry);
        }
        for(var i = 0; i < Math.PI / 2; i += 0.01)
        {
            var rx = -radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * -Math.sin(i));
            ry = (tempX * Math.sin(i) + tempY * Math.cos(i));

            rx = rx + radius * 2;
            ry = ry + radius * 2;

            rx -= radius;
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta))

            rx += WIDTH;
            ry += HEIGHT;

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx,  ry);
        }
        for(var i = 0; i < Math.PI / 2; i += 0.01)
        {
            var rx = 0;
            var ry = radius;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx = rx + radius * 2;
            
            rx -= radius;
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta))

            rx += WIDTH;
            ry += HEIGHT;

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx,  ry);
        }
        for(var i = 0; i < Math.PI / 2; i += 0.01)
        {
            var rx = radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx = rx + radius * 2;

            rx -= radius;
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta))

            rx += WIDTH;
            ry += HEIGHT;

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx,  ry);
        }
        for(var i = 0; i < Math.PI / 2; i += 0.01)
        {
            var rx = 0;
            var ry = -radius;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx = rx + radius * 2;

            rx -= radius;
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta))

            rx += WIDTH;
            ry += HEIGHT;

            rx += this.x;
            ry += this.y;

            ctx.lineTo(rx,  ry);
        }
        ctx.closePath();
        ctx.fill();
    }
}


class EnemyObject
{
    constructor(x, y, scale, color)
    {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.color = color;
    }

    start()
    {
        
    }

    update()
    {
        var directionx = playerPosX - this.x;
        var directiony = playerPosY - this.y;

        var magnitude = Math.sqrt(directionx * directionx + directiony * directiony);

        directionx /= magnitude;
        directiony /= magnitude;

        this.x += directionx;
        this.y += directiony;
    }

    render()
    {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        var radius = 1;
        var fx = 0;
        var fy = 0;

        fx += STAR_VERTEX[0][0];
        fy += STAR_VERTEX[0][1];
        
        fx *= this.scale;
        fy *= this.scale;
        
        fx += WIDTH;
        fy += HEIGHT;
        
        fx += this.x;
        fy += this.y;

        ctx.moveTo(fx, fy);
        for(var i = 0; i < Math.PI * 2; i += 0.01)
        {
            var rx = radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));
            
            rx *= this.scale;
            ry *= this.scale;
            
            rx += WIDTH;
            ry += HEIGHT;

            rx += this.x;
            ry += this.y;


            ctx.lineTo(rx,  ry);
        }
        ctx.closePath();
        ctx.fill();
    }
}

var GAMESTATE = 'game'

var playerPosX = 0;
var playerPosY = 0;

var posX = 0;
var posY = 0;
var isClick = false;
var prevPosX = 0;
var prevPosY = 0;

canvas.onmousemove = (e) => 
{
    posX = e.offsetX;
    posY = e.offsetY;
}

canvas.onmousedown = (e) =>
{
    isClick = true;
}

var startFlag = false;

var prevTime = new Date();

var enemyPool = [];

if(ctx)
{
    setInterval(() => {        
        switch(GAMESTATE)
        {
            case 'title':
                ctx.fillStyle = 'skyblue';
                ctx.fillRect(0, 0, WIDTH * 2, HEIGHT * 2);
                ctx.textAlign = 'center';
                ctx.fillStyle = 'white';
                ctx.font = 'normal bold 30px Arial';
                ctx.fillText('한숨이라도 자고싶다 게임', WIDTH, HEIGHT - 100, WIDTH * 2);
                ctx.fillText('교수님, 실례지만 살려주세요.', WIDTH, HEIGHT - 20, WIDTH * 2);
                
                if(!startFlag)
                {
                    ctx.fillStyle = 'lightgray';
                    ctx.fillRect(WIDTH - 100, HEIGHT + 60, 200, 50);
                    ctx.strokeRect(WIDTH - 100, HEIGHT + 60, 200, 50);
        
                    ctx.fillStyle = 'white';
                    ctx.font = 'normal bold 30px Arial';
                    ctx.fillText('시작', WIDTH, HEIGHT + 95, WIDTH * 2);
                }
                else
                {
                    var currentTime = new Date();

                    if(currentTime.getTime() - prevTime.getTime() > 1000)
                    {
                        GAMESTATE = 'game';
                        prevTime = new Date();
                    }

                    ctx.fillStyle = '#004060';
                    ctx.fillRect(WIDTH - 100, HEIGHT + 60, 200, 50);
                    ctx.strokeRect(WIDTH - 100, HEIGHT + 60, 200, 50);
        
                    ctx.fillStyle = 'white';
                    ctx.font = 'normal bold 30px Arial';
                    ctx.fillText('시작', WIDTH, HEIGHT + 95, WIDTH * 2);
                }
                
    
                if
                (
                    posX > WIDTH - 100 && posX < WIDTH + 100 &&
                    posY > HEIGHT + 60 && posY < HEIGHT + 120
                )
                {
                    if(isClick)
                    {
                        startFlag = true;
                        prevTime = new Date();
                    }
                    if(startFlag)
                    {
                        ctx.fillStyle = '#004060';
                        ctx.fillRect(WIDTH - 100, HEIGHT + 60, 200, 50);
                        ctx.strokeRect(WIDTH - 100, HEIGHT + 60, 200, 50);
            
                        ctx.fillStyle = 'white';
                        ctx.font = 'normal bold 30px Arial';
                        ctx.fillText('시작', WIDTH, HEIGHT + 95, WIDTH * 2);
                    }
                    else
                    {
                        ctx.fillStyle = '#F8CBB2';
                        ctx.fillRect(WIDTH - 100, HEIGHT + 60, 200, 50);
                        ctx.strokeRect(WIDTH - 100, HEIGHT + 60, 200, 50);
            
                        ctx.fillStyle = 'white';
                        ctx.font = 'normal bold 30px Arial';
                        ctx.fillText('시작', WIDTH, HEIGHT + 95, WIDTH * 2);
                    }
                }
                break;
            case 'game':
                ctx.fillStyle = '#B4B4B4';
                ctx.fillRect(0, 0, WIDTH * 2, HEIGHT * 2);
                var test = new StarObject(0, 0, 20, 'yellow');
                test.render();
            
                var random = Math.random();
                test = new HeartObject(random * (WIDTH * 2) - WIDTH, random * (HEIGHT * 2) - HEIGHT, 20, 'red', 0);
                test.render();

                var currentTime = new Date();
                if(currentTime.getTime() - prevTime.getTime() > 1000)
                {
                    for(var i = 0; i < Math.random() * 14 + 1; i++)
                    {
                        enemyPool.push(new EnemyObject(-(Math.random() * (WIDTH * 2)), Math.random() * HEIGHT * 2 + 20, 20, 'black')); 
                    }
                    prevTime = new Date();
                }
                enemyPool.forEach((element) =>{
                    element.update();
                    element.render();
                });
                break;
        }
    }, 10);
}
