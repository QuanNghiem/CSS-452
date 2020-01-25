/*
 * File: EngineCore_VertexBuffer.js
 *  
 * defines the object that supports the loading and using of the buffer that 
 * contains vertex positions of a square onto the gGL context
 * 
 * Notice, this is a singleton object.
 */

/*jslint node: true, vars: true */
/*global gEngine: false, Float32Array: false */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

var gEngine = gEngine || { };
var gCircleCount = 1000;

// The VertexBuffer object
gEngine.VertexBuffer = (function () {
    // reference to the vertex positions for the square in the gl context
    var mShapeVertexBuffer = null;

    // First: define the vertices for a square
    var verticesOfShape = [
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
    
    var delta = (2.0 * Math.PI)/(gCircleCount - 1);
    for(var i = 1; i <= gCircleCount; i++)
    {
        var angle = (i-1) * delta;
        verticesOfShape.push(0.5 * Math.cos(angle));
        verticesOfShape.push(0.5 * Math.sin(angle));
        verticesOfShape.push(0);
    }

    var initialize = function () {
        var gl = gEngine.Core.getGL();

        // Step A: Create a buffer on the gGL context for our vertex positions
        mShapeVertexBuffer = gl.createBuffer();

        // Step B: Activate vertexBuffer
        gl.bindBuffer(gl.ARRAY_BUFFER, mShapeVertexBuffer);

        // Step C: Loads verticesOfShape into the vertexBuffer
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesOfShape), gl.STATIC_DRAW);
    };

    var getGLVertexRef = function () { return mShapeVertexBuffer; };

    var mPublic = {
        initialize: initialize,
        getGLVertexRef: getGLVertexRef
    };

    return mPublic;
}());