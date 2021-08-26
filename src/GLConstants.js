'use strict';

/**
 * This module makes all WebGL constants become part of the global scope,
 * prepended with "GL_". For example, this allows you to use the `gl.LINES`
 * constant anywhere using `GL_LINES`.
 */
let GLConstants = {};

let constRegex = /^[A-Z]{2,}/;
let canvas = document.createElement('canvas');
let gl = canvas.getContext('webgl');

// Just grab all the constants that would normally be on a gl object.
_.each(_.allKeys(gl), key => {
  if(constRegex.test(key))
    GLConstants[key] = gl[key];

    // Add all the WebGL constants to the global scope, prepended with "GL_".
    // This will allow the library and programs created with it to reference
    // things like GL_LINES in place of gl.LINES as a convenience.
    window["GL_" + key] = gl[key];
});

export { GLConstants };
