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
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));
            
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
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta))

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
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

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
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta))

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
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta))

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
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta))

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
            
            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta))

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
    constructor(x, y, color, particleScale, speed, direction)
    {
        this.x = x;
        this.y = y;
        this.color = color;
        this.scale = particleScale;
        this.speed = speed;
        this.particle = new HeartObject(this.x, this.y, this.color, this.scale)
        this.direction = direction;
    }

    draw()
    {
        this.particle.seta = Math.atan2(this.direction.x, this.direction.y);
        this.particle.posX += (this.direction.x * this.speed);
        this.particle.posY += (this.direction.y * this.speed);
        this.particle.draw();
    }
}

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
        if(this.pool.length > 100)
        {
            this.pool.shift();
        }
        this.pool.forEach(element => {
            element.draw();
        });
    }
}

var ctx = canvas.getContext("2d");
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
        if (currentDate.getTime() - prevDate.getTime() > 200)
        {
            var direction = new Vector(prevPosX - posX, prevPosY - posY);
            var magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            if(magnitude > 50)
            {
                direction = new Vector(direction.x / magnitude, direction.y / magnitude);
                
                effectPool.push(
                    new MouseEffector(
                        posX, posY, 
                        "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16), 
                        Math.random() * 8 + 1, 
                        Math.random() * 4 + 1, 
                        direction));
                
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