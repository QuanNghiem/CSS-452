"use strict";  

var gGL = null;

function initializeGL()
{
    
    var canvas = document.getElementById("GLCanvas");

    gGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (gGL !== null)
    {
        gGL.clearColor(0.5, 0.5, 0.5, 1.0);  
        initSquareBuffer(); 
        initSimpleShader("VertexShader", "FragmentShader");
    } else
    {
        document.write("<br><b>WebGL is not supported!</b>");
    }
}

function initializeDraw()
{
    gGL.clear(gGL.COLOR_BUFFER_BIT);      
    gGL.useProgram(gSimpleShader);
    gGL.enableVertexAttribArray(gShaderVertexPositionAttribute);
}

function drawSquare(offset, scale, color)
{
    gGL.uniform2fv(gOffset, offset);
    gGL.uniform2fv(gScale, scale);
    gGL.uniform4fv(gColor, color);
    gGL.drawArrays(gGL.TRIANGLE_STRIP, 0, 4);
}

function drawTriangle(offset, scale, color)
{
    gGL.uniform2fv(gOffset, offset);
    gGL.uniform2fv(gScale, scale);
    gGL.uniform4fv(gColor, color);
    gGL.drawArrays(gGL.TRIANGLE_STRIP, 4, 3);
}

function drawCircle(offset, scale, color)
{
    gGL.uniform2fv(gOffset, offset);
    gGL.uniform2fv(gScale, scale);
    gGL.uniform4fv(gColor, color);
    gGL.drawArrays(gGL.TRIANGLE_FAN, 7, gCircleVertexCount + 1);
}

function drawSquares()
{
    drawSquare([-0.9, 0.6], [0.1, 0.3], [1.0, 0, 0, 1]);
    drawSquare([-0.65, 0.6], [0.3, 0.1], [0.0, 1.0, 0, 1]);
    drawSquare([-0.3, 0.6], [0.2, 0.2], [0.0, 0.0, 1.0, 1]);
    drawSquare([0.1, 0.6], [0.4, 0.4], [1.0, 1.0, 0.0, 1]);
    drawSquare([0.65, 0.6], [0.55, 0.55], [0.5, 0.0, 0.5, 1]);
}

function drawTriangles()
{
    drawTriangle([-0.9, 0.0], [0.1, 0.3], [1.0, 0, 0, 1]);
    drawTriangle([-0.65, 0.0], [0.3, 0.1], [0.0, 1.0, 0, 1]);
    drawTriangle([-0.3, 0.0], [0.2, 0.2], [0.0, 0.0, 1.0, 1]);
    drawTriangle([0.1, 0.0], [0.4, 0.4], [1.0, 1.0, 0.0, 1]);
    drawTriangle([0.65, 0.0], [0.55, 0.55], [0.5, 0.0, 0.5, 1]);
}

function drawCircles()
{
    drawCircle([-0.9, -0.6], [0.1, 0.3], [1.0, 0, 0, 1]);
    drawCircle([-0.65, -0.6], [0.3, 0.1], [0.0, 1.0, 0, 1]);
    drawCircle([-0.3, -0.6], [0.2, 0.2], [0.0, 0.0, 1.0, 1]);
    drawCircle([0.1, -0.6], [0.4, 0.4], [1.0, 1.0, 0.0, 1]);
    drawCircle([0.65, -0.6], [0.55, 0.55], [0.5, 0.0, 0.5, 1]);
}

function doGLDraw() {
    initializeGL();  
    initializeDraw();

    drawSquares();
    drawTriangles();
    drawCircles();
}