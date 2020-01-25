// For NetBeans Syntax Highlight: http://plugins.netbeans.org/plugin/46515/glsl-syntax-highlighter 
//
// This is the vertex shader 
attribute vec3 aSquareVertexPosition;  // Vertex shader expects one vertex position
uniform vec2 uOffset;
uniform vec2 uScale;
void main(void)
{
    gl_Position = vec4(aSquareVertexPosition, 1.0); 
    gl_Position.x = gl_Position[0] * uScale[0] + uOffset[0];
    gl_Position.y = gl_Position[1] * uScale[1] + uOffset[1];
}
