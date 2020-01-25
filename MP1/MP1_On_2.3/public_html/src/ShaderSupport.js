"use strict";  

var gSimpleShader = null;

var gShaderVertexPositionAttribute = null;
    
var gOffset = null;
var gScale = null;
var gColor = null;

function initSimpleShader(vertexShaderID, fragmentShaderID) {
    var vertexShader = loadAndCompileShader(vertexShaderID, gGL.VERTEX_SHADER);
    var fragmentShader = loadAndCompileShader(fragmentShaderID, gGL.FRAGMENT_SHADER);

    gSimpleShader = gGL.createProgram();
    gGL.attachShader(gSimpleShader, vertexShader);
    gGL.attachShader(gSimpleShader, fragmentShader);
    gGL.linkProgram(gSimpleShader);

    if (!gGL.getProgramParameter(gSimpleShader, gGL.LINK_STATUS)) {
        alert("Error linking shader");
    }

    gShaderVertexPositionAttribute = gGL.getAttribLocation(gSimpleShader, "aSquareVertexPosition");

    gGL.bindBuffer(gGL.ARRAY_BUFFER, gSquareVertexBuffer);
    gGL.vertexAttribPointer(gShaderVertexPositionAttribute, 3, gGL.FLOAT, false, 0, 0);

     gOffset = gGL.getUniformLocation(gSimpleShader, "uOffset");
     gScale = gGL.getUniformLocation(gSimpleShader, "uScale");
     gColor = gGL.getUniformLocation(gSimpleShader, "uColor");
}

function loadAndCompileShader(id, shaderType) {
    var shaderText, shaderSource, compiledShader;
    
    shaderText = document.getElementById(id);
    shaderSource = shaderText.firstChild.textContent;
    
    compiledShader = gGL.createShader(shaderType);
    
    gGL.shaderSource(compiledShader, shaderSource);
    gGL.compileShader(compiledShader);
    
    if (!gGL.getShaderParameter(compiledShader, gGL.COMPILE_STATUS)) {
        alert("A shader compiling error occurred: " + gGL.getShaderInfoLog(compiledShader));
    }

    return compiledShader;
}