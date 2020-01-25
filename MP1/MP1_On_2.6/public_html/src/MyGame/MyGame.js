/*
 * File: MyGame.js 
 * This is the logic of our game. For now, this is very simple.
 */
/*jslint node: true, vars: true */
/*global gEngine: false, SimpleShader: false */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";  // Operate in Strict mode such that variables must be declared before used!
var gShader = null;
var gl = null;

function MyGame(htmlCanvasID) {
    // The shader for drawing
    this.mShader = null;

    // Step A: Initialize the webGL Context and the VertexBuffer
    gEngine.Core.initializeWebGL(htmlCanvasID);

    // Step B: Create, load and compile the shaders
    this.mShader = new SimpleShader(
            "src/GLSLShaders/SimpleVS.glsl", // Path to the VertexShader 
            "src/GLSLShaders/SimpleFS.glsl");       // Path to the FragmentShader
    gEngine.Core.clearCanvas([0.5, 0.5, 0.5, 1.0]);
    
    gl = gEngine.Core.getGL();

    // ---------- MP1 Section ---------- //

    gShader = this.mShader;

    // Red
    doDraw([-0.8, 0.7], [0.2, 0.4], [1.0, 0, 0, 1]);

    // Green
    doDraw([-0.47, 0.7], [0.3, 0.1], [0.0, 1.0, 0, 1]);

    // Blue
    doDraw([-0.15, 0.7], [0.2, 0.2], [0.0, 0.0, 1.0, 1]);

    // Pink
    doDraw([0.2, 0.7], [0.3, 0.3], [1.0, 0, 0.5, 1]);

    // Purple
    doDraw([0.7, 0.7], [0.5, 0.5], [0.5, 0.0, 0.5, 1]);

    // ---------- MP1 Section ---------- //
}

// ---------- MP1 Section ---------- //

function drawSquare(offset, scale, color) {
    gShader.activateShader(offset, scale, color);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function drawTriangle(offset, scale, color) {
    gShader.activateShader(offset, scale, color);
    gl.drawArrays(gl.TRIANGLE_STRIP, 4, 3);
}

function drawCircle(offset, scale, color) {
    gShader.activateShader(offset, scale, color);
    gl.drawArrays(gl.TRIANGLE_FAN, 7, gCircleCount + 1);
}

function doDraw(offset, scale, color) {
    const yInput = offset[1];
    drawSquare(offset, scale, color);
    var tempTriangle = offset;
    tempTriangle[1] = yInput * 0;
    drawTriangle(tempTriangle, scale, color);
    var tempCircle = offset;
    tempCircle[1] = yInput * (-1);
    drawCircle(tempCircle, scale, color);
}

// ---------- MP1 Section ---------- //