"use strict";  

var gSquareVertexBuffer = null;
var gCircleVertexCount = 99;
    
function initSquareBuffer()
{
    var verticesOfShapes = [
        // Basic Square
        0.5, 0.5, 0.0,
        -0.5, 0.5, 0.0,
        0.5, -0.5, 0.0,
        -0.5, -0.5, 0.0,
        
        // Basic Triangle
        0.5, -0.5, 0.0,
        0.0, 0.5, 0.0,
        -0.5, -0.5, 0.0,
        
        // Center of Circle
        0.0, 0.0, 0.0
    ];
    
    var delta = (2.0 * Math.PI)/(gCircleVertexCount - 1);
    for(var i = 1; i <= gCircleVertexCount; i++)
    {
        var angle = (i-1) * delta;
        verticesOfShapes.push(0.5 * Math.cos(angle));
        verticesOfShapes.push(0.5 * Math.sin(angle));
        verticesOfShapes.push(0);
    }

    gSquareVertexBuffer = gGL.createBuffer();
    gGL.bindBuffer(gGL.ARRAY_BUFFER, gSquareVertexBuffer);
    gGL.bufferData(gGL.ARRAY_BUFFER, new Float32Array(verticesOfShapes), gGL.STATIC_DRAW);
}