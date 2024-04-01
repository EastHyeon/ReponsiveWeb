var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext('2d');



class Rect
{
    constructor(x, y, scale, color)
    {
        this.x = x;
        this.y = y;
        this.scale = scale * 2;
        this.color = color;
        this.vertexs = 
        [
            new Vertex(-1, 1),
            new Vertex(1, 1),
            new Vertex(1, - 1),
            new Vertex(-1, -1)
        ];

        this.seta = 0;
    }

    draw()
    {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        for (var i = 0; i < this.vertexs.length; i++)
        {
            var calX = this.vertexs[i].x;
            var calY = this.vertexs[i].y;
            
            // 크기 변환
            calX *= this.scale;
            calY *= this.scale;
            
            var rX = 0;
            var rY = 0;

            rX = 
                calX * Math.cos(this.seta * Math.PI / 180) +
                calY * -Math.sin(this.seta * Math.PI / 180);
            rY = 
                calX * Math.sin(this.seta * Math.PI / 180) + 
                calY * Math.cos(this.seta * Math.PI / 180);

            calX = rX;
            calY = rY;
            
            // 좌표 변환
            calX += canvas.offsetWidth / 2;
            calY += canvas.offsetHeight / 2;
            calX += this.x;
            calY += this.y;

            if(i == 0)
                ctx.moveTo(calX, calY);
            else
                ctx.lineTo(calX, calY);
        }
        ctx.fill();
        ctx.closePath();
    }

    rotate(seta)
    {
        this.seta = seta;
    }
}

class Vertex
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
}

var rect = new Rect(20, 0, 20, 'black');
rect.draw();