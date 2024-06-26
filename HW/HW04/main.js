var canvas = document.getElementById('GameScreenCanvas');
var ctx = canvas.getContext('2d');

var studentId = 202327005;

const SEGMENT_HORIZONTAL_SIZE = 1;
const SEGMENT_VERTICAL_SIZE = 4;


// (50,300) (974,300) magenta 3
ctx.beginPath();
ctx.moveTo(50,canvas.height/2);
ctx.lineTo(canvas.width - 50, canvas.height/2);
ctx.strokeStyle = "magenta";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

function drawNum(num, fontSize, x, y)
{
    var padding = (SEGMENT_VERTICAL_SIZE * fontSize) + (SEGMENT_HORIZONTAL_SIZE * 4 * fontSize) + (fontSize * 0.8) + fontSize;
    
    var digit = 0;
    for (var i = num; parseInt(i) != 0; i /= 10)
        digit++;
    
    const CONST_DIGIT = digit;
    for (var i = 0; i < digit; i++)
    {
        sevenSegment(padding * i + x, y, fontSize, 8, "lightgray");
    }

    for (var i = 0; i < digit; i++)
    {
        var digitNum = num / (10 ** (digit - (i + 1)));
        num %= (10 ** (digit - (i + 1)));
        sevenSegment(padding * i + x, y, fontSize, digitNum, "black");
    }
}

drawNum(studentId, 4, 0, 0);

function sevenSegment(x, y, fontSize, num, color)
{
    if (num > 9)
        return;
    
    var padding = fontSize * 0.5;
    
    const SEGMENT_SIZE = (SEGMENT_VERTICAL_SIZE * fontSize) / 2 + SEGMENT_HORIZONTAL_SIZE * fontSize;
    
    // 이진수 분해
    var A = num & 0b1000;
    A = A >> 3;
    var B = num & 0b0100;
    B = B >> 2;
    var C = num & 0b0010;
    C = C >> 1;
    var D = num & 0b0001;
    
    // ABCD to 7 segment decoder 논리식
    //a
    if ((!B & !D) | (C) | (B & D) | A)
        drawSegment(SEGMENT_SIZE + SEGMENT_HORIZONTAL_SIZE * fontSize + padding / 2 + x, SEGMENT_HORIZONTAL_SIZE * fontSize + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, false, color);
    // //b
    if ((!B) | (!C & !D) | (C & D))
        drawSegment(SEGMENT_SIZE * 2 + SEGMENT_HORIZONTAL_SIZE * fontSize + padding + x, SEGMENT_SIZE + SEGMENT_HORIZONTAL_SIZE * fontSize + padding + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true, color);
    // //c -
    if (!C | D | B)
        drawSegment(SEGMENT_SIZE * 2 + SEGMENT_HORIZONTAL_SIZE * fontSize + padding + x, (SEGMENT_SIZE * 3) + SEGMENT_HORIZONTAL_SIZE * fontSize + padding * 3 + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true, color);
    // //d
    if ((!B & !D) | (!B & C) | (B & !C & D) | (C & !D) | A)
        drawSegment(SEGMENT_SIZE + SEGMENT_HORIZONTAL_SIZE * fontSize + padding / 2 + x, (SEGMENT_SIZE * 4) + SEGMENT_HORIZONTAL_SIZE * fontSize + padding * 4 + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, false, color);
    // //e -
    if ((!B & !D) | (C & !D))
        drawSegment(SEGMENT_HORIZONTAL_SIZE * fontSize + x, (SEGMENT_SIZE * 3) + SEGMENT_HORIZONTAL_SIZE * fontSize + padding * 3 + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true, color);
    // //f
    if ((!C & !D) | (B & !C) | (B & !D) | (A))
        drawSegment(SEGMENT_HORIZONTAL_SIZE * fontSize + x, SEGMENT_SIZE + SEGMENT_HORIZONTAL_SIZE * fontSize + padding + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, true, color);
    // //g
    if ((!B & C) | (B & !C) | (A) | (B & !D)) 
        drawSegment(SEGMENT_SIZE + SEGMENT_HORIZONTAL_SIZE * fontSize + padding / 2 + x, SEGMENT_SIZE * 2 + SEGMENT_HORIZONTAL_SIZE * fontSize + padding * 2 + y, fontSize, SEGMENT_HORIZONTAL_SIZE, SEGMENT_VERTICAL_SIZE, false, color);
}

function drawSegment(x, y, segmentSize, hSize, vSize, isHorizontal, color)
{
    ctx.beginPath();

    var currentX = x;
    var currentY = y;
    
    hSize *= segmentSize;
    vSize *= segmentSize;
    
    ctx.arc(currentX, currentY, segmentSize * 0.5, 0, 2 * Math.PI);
    
    ctx.fillStyle = color;

    if (isHorizontal)
    {        
        ctx.moveTo(currentX, currentY -= ((vSize / 2) + hSize));
        ctx.lineTo(currentX += hSize, currentY += hSize);
        ctx.lineTo(currentX, currentY += vSize);
        ctx.lineTo(currentX -= hSize, currentY += hSize);
        ctx.lineTo(currentX -= hSize, currentY -= hSize);
        ctx.lineTo(currentX, currentY -= vSize);
        ctx.lineTo(currentX += hSize, currentY -= hSize);
    }
    else
    {        
        ctx.moveTo(currentX -= ((vSize / 2) + hSize), currentY);
        ctx.lineTo(currentX += hSize, currentY -= hSize);
        ctx.lineTo(currentX += vSize, currentY);
        ctx.lineTo(currentX += hSize, currentY += hSize);
        ctx.lineTo(currentX -= hSize, currentY += hSize);
        ctx.lineTo(currentX -= vSize, currentY);
        ctx.lineTo(currentX -= hSize, currentY -= hSize);
    }

    ctx.fill();
    ctx.closePath();
}