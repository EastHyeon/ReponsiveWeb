var canvas = document.getElementById("canvas");

class ArcDrawer
{
    constructor(x, y, color, scale)
    {
        this.posX = x;
        this.posY = y;
        this.color = color;
        this.scale = scale;
        this.seta = 0.2;
        ctx.fillStyle = color;
    }

    draw()
    {
        ctx.beginPath();
        var radius = 5;
        this.posX = this.posX - radius;
        ctx.moveTo(this.posX, this.posY);
        for(var i = 0; i < Math.PI; i += 0.01)
        {
            var rx = radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));
            
            rx += this.posX;
            ry += this.posY;


            ctx.lineTo(rx,  ry);
            ctx.stroke();
        }
        for(var i = 0; i < Math.PI / 2; i += 0.01)
        {
            var rx = -radius;
            var ry = 0;
            var tempX = rx;
            var tempY = ry;

            rx = (tempX * Math.cos(i) + tempY * Math.sin(i));
            ry = (tempX * -Math.sin(i) + tempY * Math.cos(i));

            rx *= this.scale;
            ry *= this.scale;

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx += this.posX;
            ry += this.posY;

            ctx.lineTo(rx,  ry);
            ctx.stroke();
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

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx *= this.scale;
            ry *= this.scale;

            rx += this.posX;
            ry += this.posY;

            ctx.lineTo(rx,  ry);
            ctx.stroke();
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

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx *= this.scale;
            ry *= this.scale;

            rx += this.posX;
            ry += this.posY;

            ctx.lineTo(rx,  ry);
            ctx.stroke();
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

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx *= this.scale;
            ry *= this.scale;

            rx += this.posX;
            ry += this.posY;

            ctx.lineTo(rx,  ry);
            ctx.stroke();
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

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx *= this.scale;
            ry *= this.scale;

            rx += this.posX;
            ry += this.posY;

            ctx.lineTo(rx,  ry);
            ctx.stroke();
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

            tempX = rx;
            tempY = ry;
            rx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

            rx *= this.scale;
            ry *= this.scale;

            rx += this.posX;
            ry += this.posY;

            ctx.lineTo(rx,  ry);
            ctx.stroke();
        }
    }
}

posX = 50;
posY = 50;

if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    var hart = new HeartObject(150, 80, 'red', 10);
    hart.draw();
}