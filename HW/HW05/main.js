var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext('2d');



class Rect
{
    constructor(x, y, scale, color, parrent = null)
    {
        this.x = x * 2;
        this.y = y * 2;
        this.scale = scale;
        this.color = color;
        this.vertexs = 
        [
            new Vertex(-1, 1),
            new Vertex(1, 1),
            new Vertex(1, - 1),
            new Vertex(-1, -1)
        ];

        this.seta = 0;
        this.rotateSpeed =  0.01;
        this.parrent = parrent;
    }

    draw()
    {
        ctx.fillStyle = this.color;
        ctx.beginPath();

        for (var i = 0; i < this.vertexs.length; i++)
        {
            var calX = this.vertexs[i].x;
            var calY = this.vertexs[i].y;
            
            // 스케일 행렬
            calX *= this.scale;
            calY *= this.scale;

            // 회전 행렬
            var rx = 0, ry = 0;
            rx = calX * Math.cos(this.seta) + calY * Math.sin(this.seta);
            ry = -calX * Math.sin(this.seta) + calY * Math.cos(this.seta);
            calX = rx;
            calY = ry;
            
            // 좌표 행렬
            calX += this.x;
            calY += this.y;
            
            // 좌표 행렬
            if(this.parrent != null)
            {
                var rx = 0, ry = 0;
                rx = calX * Math.cos(this.seta) + calY * Math.sin(this.seta);
                ry = -calX * Math.sin(this.seta) + calY * Math.cos(this.seta);
                calX = rx;
                calY = ry;
                calX += this.parrent.x;
                calY += this.parrent.y;
                if(this.parrent.parrent != null)
                {
                    var rx = 0, ry = 0;
                    rx = calX * Math.cos(this.seta) + calY * Math.sin(this.seta);
                    ry = -calX * Math.sin(this.seta) + calY * Math.cos(this.seta);
                    calX = rx;
                    calY = ry;
                    calX += this.parrent.parrent.x;
                    calY += this.parrent.parrent.y;
                }
            }


            calX += canvas.offsetWidth / 2;
            calY += canvas.offsetHeight / 2;
            
            if(i == 0)
                ctx.moveTo(calX, calY);
            else
                ctx.lineTo(calX, calY);
        }
        ctx.fill();
        ctx.closePath();
    }

    update()
    {
        this.seta += this.rotateSpeed;
        this.draw();
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

var rects = 
[
    new Rect(0, 0, 20, 'red'), 
    new Rect(100, 0, 15, 'green'),
    new Rect(30, 0, 10, 'gray'),
    new Rect(200, 0, 30, 'brown')
];

rects[1].parrent = rects[0];
rects[2].parrent = rects[1];
rects[3].parrent = rects[0];

var rotate = 0;

setInterval(() => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    
    for (var i = 0; i < rects.length; i++)
    {
        rects[i].update();
    }
}, 10);