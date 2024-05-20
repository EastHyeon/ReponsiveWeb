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

var playerPosX = 0;
var playerPosY = 0;

class StarObject
{
    constructor(x, y, scale, color, speed)
    {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.color = color;
        this.hp = 100;
        this.seta = 0;
        this.speed = speed;
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
        fy *= this.scale * 1.2;
        
        var tempX = fx;
        var tempY = fy;
        fx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
        fy = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

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
            cy *= this.scale * 1.2;
            
            var tempX = cx;
            var tempY = cy;
            cx = (tempX * Math.cos(this.seta) + tempY * Math.sin(this.seta));
            cy = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

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

    on_damaged(damage)
    {
        if(this.hp - damage >= 0)
            this.hp -= damage;
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
            ry = (tempX * -Math.sin(this.seta) + tempY * Math.cos(this.seta));

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
    constructor(x, y, scale, speed, color)
    {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.color = color;
        this.radius = 1;
        this.speed = speed;
        this.active = true;
    }

    init()
    {
        this.directionx = playerPosX - this.x;
        this.directiony = playerPosY - this.y;

        var magnitude = Math.sqrt(this.directionx * this.directionx + this.directiony * this.directiony);

        this.directionx /= magnitude;
        this.directiony /= magnitude;
    }

    update()
    { 
        this.x += this.directionx * deltaTime * this.speed;
        this.y += this.directiony * deltaTime * this.speed;

        var posX = this.x;
        var posY = this.y;

        var distanceX = playerPosX - posX;
        var distanceY = playerPosY - posY;

        var r = this.radius * this.scale + player.scale;
        
        var distance = distanceX * distanceX + distanceY * distanceY;

        if(distance < r * r){
            console.log("플레이어 접촉!");
            enemyPool.return_object(this);
            player.on_damaged(1);
        }
        else if (distance > 1000000){
            console.log("범위를 벗어나서 삭제!");
            enemyPool.return_object(this);
        }
    }

    render()
    {
        if(this.active)
        {            
            ctx.fillStyle = this.color;
            ctx.beginPath();
    
            ctx.moveTo(0, 0);
            for(var i = 0; i < Math.PI * 2; i += 0.01)
            {
                var rx = this.radius;
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

                rx += moveX * player.speed;
                ry += moveY * player.speed;

                console.log(moveX);
    
                ctx.lineTo(rx,  ry);
            }
            ctx.closePath();
            ctx.fill();
        }
    }
}

var object_array = [];

class EnemyPool
{
    constructor(initCount)
    {
        this.MAX_COUNT = initCount;
        this.initCount = initCount;
        this.pool = [];
    }

    init()
    {
        this.pool = [];
        for(var i = 0; i < this.initCount; i++)
        {
            var obj = new EnemyObject(0, 0, 20, 5, 'black');
            this.pool.push(obj);
            object_array.push(obj);
        }
    }

    get_object()
    {
        if(this.pool.length > 0)
        {
            console.log("풀에서 꺼냄!");
            console.log("풀 남은 갯수: " + this.pool.length);
            var obj = this.pool.pop();
            obj.active = true;
            return obj;
        }
        else
        {
            // if(this.pool.length < this.MAX_COUNT)
            // {
            //     console.log("새로 생성됨!");                
            //     var new_obj = new EnemyObject(0, 0, 20, 5, 'black');
            //     object_array.push(new_obj);
            //     return new_obj;
            // }
        }
    }

    return_object(enemy)
    {
        console.log("돌려 받음!");
        enemy.active = false;
        this.pool.push(enemy);
    }
}

var GAMESTATE = 'game';

var mouseX = 0;
var mouseY = 0;

var isClick = false;
var prevPosX = 0;
var prevPosY = 0;

var moveX = 0;
var moveY = 0;

var keys = [];

keys['KeyW'] = false;
keys['KeyA'] = false;
keys['KeyD'] = false;
keys['KeyS'] = false;

document.addEventListener('keypress', (event) =>{
    keys[event.code] = true;

    if(keys['KeyW'] == true)
    {
        moveY = 1;
    }
    if(keys['KeyA'] == true)
    {
        moveX = 1;
    }
    if(keys['KeyS'] == true)
    {
        moveY = -1;
    }
    if(keys['KeyD'] == true)
    {
        moveX = -1;
    }
});

document.addEventListener('keyup', (event) =>{
    keys[event.code] = false;
    if(keys['KeyA'] == false && keys['KeyD'] == false)
        moveX = 0;
    if(keys['KeyW'] == false && keys['KeyS'] == false)
        moveY = 0;
});

canvas.onmousemove = (e) => 
{
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}

canvas.onmousedown = (e) =>
{
    isClick = true;
}
var startFlag = false;

var prevTime = new Date();

var enemyPool = new EnemyPool(1);
enemyPool.init();

var player = new StarObject(0, 0, 20, 'yellow', 5);
var test = new HeartObject(120, 120, 20, 'red', 0);

var deltaTime = 0;

var prevDelta = new Date();

if(ctx)
{
    setInterval(() => {        
        switch(GAMESTATE)
        {
            case 'title':
                console.log(mouseX);
                ctx.fillStyle = 'skyblue';
                ctx.fillRect(0, 0, WIDTH * 2, HEIGHT * 2);
                ctx.textAlign = 'center';
                ctx.fillStyle = 'white';
                ctx.font = 'normal bold 30px Arial';
                ctx.fillText('한숨이라도 자고싶다 게임', WIDTH, HEIGHT - 100, WIDTH * 2);
                ctx.fillText('야호', WIDTH, HEIGHT - 20, WIDTH * 2);
                
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
                        isClick = false;
                        startFlag = false;
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
                    mouseX > WIDTH - 100 && mouseX < WIDTH + 100 &&
                    mouseY > HEIGHT + 60 && mouseY < HEIGHT + 120
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

                var currentDelta = new Date();
                deltaTime = currentDelta.getTime() - prevDelta.getTime();
                prevDelta = new Date();
                deltaTime /= 10;
                
                player.seta = Math.atan2(moveX, moveY);
                player.update();
                player.render();
                
                test.x += moveX * deltaTime * player.speed;
                test.y += moveY * deltaTime * player.speed;
                test.render();

                if(player.hp == 0)
                {
                    enemyPool.init();
                    GAMESTATE = 'gameover';
                    player.hp = 100;
                    isClick = false;
                    startFlag = false;
                }

                var currentTime = new Date();
                if(currentTime.getTime() - prevTime.getTime() > 1000)
                {
                    console.log(deltaTime);
                    for(var i = 0; i < Math.random() * 14 + 1; i++)
                    {
                        var obj = enemyPool.get_object();
                        if(obj != null)
                        {
                            obj.x = -(Math.random() * WIDTH + 200) - 20;
                            obj.y = Math.random() * HEIGHT * 2 - HEIGHT;
                            obj.init();
                        }
                    }

                    for(var i = 0; i < Math.random() * 14 + 1; i++)
                    {
                        var obj = enemyPool.get_object();
                        if(obj != null)
                        {
                            obj.x = (Math.random() * WIDTH + 200) + 20;
                            obj.y = Math.random() * HEIGHT * 2 - HEIGHT;
                            obj.init();
                        }
                    }

                    for(var i = 0; i < Math.random() * 14 + 1; i++)
                    {
                        var obj = enemyPool.get_object();
                        if(obj != null)
                        {
                            obj.x = (Math.random() * WIDTH * 2) - WIDTH;
                            obj.y = -(Math.random() * 200) - HEIGHT - 20;
                            obj.init();
                        }
                    }

                    for(var i = 0; i < Math.random() * 14 + 1; i++)
                    {
                        var obj = enemyPool.get_object();
                        if(obj != null)
                        {
                            obj.x = (Math.random() * WIDTH * 2) - WIDTH;
                            obj.y = (Math.random() * 200) + HEIGHT + 20;
                            obj.init();
                        }
                    }
                    prevTime = new Date();
                }

                for(var i = 0; i < object_array.length; i++)
                {
                    if(object_array[i].active)
                    {                        
                        object_array[i].update();
                        object_array[i].render();
                    }
                }

                ctx.fillStyle = 'white';
                ctx.font = 'normal bold 30px Arial';
                ctx.fillText('HP: ' + player.hp, WIDTH, HEIGHT + 95, WIDTH * 2);
                break;
            case 'gameover':
                ctx.fillStyle = 'skyblue';
                ctx.fillRect(0, 0, WIDTH * 2, HEIGHT * 2);
                ctx.textAlign = 'center';
                ctx.fillStyle = 'white';
                ctx.font = 'normal bold 30px Arial';
                ctx.fillText('그는 시험을 치다 플레이어를 죽여버렸다.', WIDTH, HEIGHT - 100, WIDTH * 2);
                ctx.fillText('잔인한사람....', WIDTH, HEIGHT - 20, WIDTH * 2);
                
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
                        isClick = false;
                        startFlag = false;
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
                    mouseX > WIDTH - 100 && mouseX < WIDTH + 100 &&
                    mouseY > HEIGHT + 60 && mouseY < HEIGHT + 120
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
        }
    }, 10);
}
