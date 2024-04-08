var canvas = document.getElementById("canvas");

class HeartObject
{
    constructor(x, y, color, scale)
    {
        this.posX = x;
        this.posY = y;
        this.color = color;
        this.scale = scale;
        this.seta = 0;
    }

    draw()
    {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        var radius = 5;
        ctx.moveTo(this.posX, this.posY);
        for(var i = 0; i < Math.PI; i += 0.01)
        {
            var rx = radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx -= radius;
            
            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));
            
            rx *= this.scale;
            ry *= this.scale;
            
            rx += this.posX;
            ry += this.posY;


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
            
            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx *= this.scale;
            ry *= this.scale;

            rx += this.posX;
            ry += this.posY;

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

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));
            
            rx *= this.scale;
            ry *= this.scale;

            rx += this.posX;
            ry += this.posY;

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

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx *= this.scale;
            ry *= this.scale;

            rx += this.posX;
            ry += this.posY;

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

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx *= this.scale;
            ry *= this.scale;

            rx += this.posX;
            ry += this.posY;

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

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx *= this.scale;
            ry *= this.scale;

            rx += this.posX;
            ry += this.posY;

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

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx *= this.scale;
            ry *= this.scale;

            rx += this.posX;
            ry += this.posY;

            ctx.lineTo(rx,  ry);
        }
        ctx.closePath();
        ctx.fill();
    }
}

class Vector
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
}

class MouseEffector
{
    constructor(x, y, color, particleScale, speed)
    {
        this.x = x;
        this.y = y;
        this.color = color;
        this.scale = particleScale;
        this.speed = speed;
        this.particles = 
        [
            new HeartObject(this.x, this.y, this.color, this.scale),
            new HeartObject(this.x, this.y, this.color, this.scale),
            new HeartObject(this.x, this.y, this.color, this.scale),
            new HeartObject(this.x, this.y, this.color, this.scale),
            new HeartObject(this.x, this.y, this.color, this.scale),
            new HeartObject(this.x, this.y, this.color, this.scale),
            new HeartObject(this.x, this.y, this.color, this.scale),
            new HeartObject(this.x, this.y, this.color, this.scale),
        ];
        this.directions = 
        [
            new Vector(1, 0),
            new Vector(0.75, 0.75),
            new Vector(0, 1),
            new Vector(-0.75, 0.75),
            new Vector(-1, 0),
            new Vector(-0.75, -0.75),
            new Vector(0, -1),
            new Vector(0.75, -0.75),
        ];
    }

    draw()
    {
        var i = 0;
        this.particles.forEach(element => {
            element.seta = Math.atan2(this.directions[i].x, this.directions[i].y);
            element.posX += (this.directions[i].x * this.speed);
            element.posY += (this.directions[i].y * this.speed);
            if(element.scale > 1)
                element.scale -= 0.05;
            element.draw();
            i++;
        });
    }
}

var ctx = canvas.getContext("2d");

class EffectPool
{
    constructor()
    {
        this.pool = [];
        this.prevDate = new Date();
    }

    push(item)
    {
        this.pool.push(item);
    }

    update()
    {
        var currentDate = new Date();
        if (currentDate.getTime() - this.prevDate.getTime() > 100 && this.pool.length > 15)
        {
            this.pool.shift();
            this.prevDate = currentDate;
        }
        if(this.pool.length > 20)
        {
            this.pool.shift();
        }
        this.pool.forEach(element => {
            element.draw();
        });
    }
}

var posX = 0;
var posY = 0;
var prevPosX = 0;
var prevPosY = 0;

canvas.onmousemove = (e) => 
{
    posX = e.offsetX;
    posY = e.offsetY;
}

var prevDate = new Date();

var effectPool = new EffectPool();

setInterval(() => {
    if (canvas.getContext) {
        var currentDate = new Date();
        if (currentDate.getTime() - prevDate.getTime() > 20)
        {
            if(Math.abs(posX - prevPosX) > 30 || Math.abs(posY - prevPosY) > 30)
            {
                effectPool.push(new MouseEffector(posX, posY, 'red', 4, 1));
                prevPosX = posX;
                prevPosY = posY;
            }
            prevDate = currentDate;
        }
        ctx.fillStyle = canvas.style.backgroundColor;
        ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        effectPool.update();
    }
}, 10);