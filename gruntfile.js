'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jsdoc: {
      dist: {
        src: ['src/**/*.js'],
        dest: 'doc'
      }
    },
    jshint: {
      options: {
        maxerr: 50,

        // Enforcing
        bitwise: false,
        camelcase: true,
        curly: false,
        eqeqeq: true,
        forin: true,
        freeze: true,
        immed: false,
        indent: 2,
        latedef: 'nofunc',
        maxcomplexity: 20,
        maxdepth: 5,
        maxlen: 80,
        newcap: false,
        noarg: true,
        noempty: true,
        nonbsp: true,
        nonew: false,
        notypeof: false,
        plusplus: false,
        quotmark: false,
        shadow: false,
        strict: 'global',
        undef: true,
        unused: true,
        varstmt: false,

        // Environments
        browser: true,
        devel: true,
        mocha: true,
        node: false,

        // Relaxing
        asi: false,
        boss: false,
        debug: false,
        eqnull: false,
        esversion: 6,
        evil: false,
        expr: false,
        funcscope: false,
        iterator: false,
        lastsemic: false,
        laxbreak: false,
        laxcomma: false,
        loopfunc: false,
        moz: false,
        multistr: false,
        noyield: false,
        proto: false,
        scripturl: false,
        sub: false,
        supernew: false,
        validthis: false,

        globals: {
          _: false,
          glMatrix: false,
          CatGL: true,
          mat2: false,
          mat2d: false,
          mat3: false,
          mat4: false,
          quat: false,
          vec2: false,
          vec3: false,
          vec4: false,

          GL_ACTIVE_UNIFORMS: false,
          GL_ACTIVE_ATTRIBUTES: false,
          GL_ARRAY_BUFFER: false,
          GL_BACK: false,
          GL_BOOL: false,
          GL_BOOL_VEC2: false,
          GL_BOOL_VEC3: false,
          GL_BOOL_VEC4: false,
          GL_CCW: false,
          GL_CLAMP_TO_EDGE: false,
          GL_COLOR_ATTACHMENT0: false,
          GL_COLOR_BUFFER_BIT: false,
          GL_COMPILE_STATUS: false,
          GL_CULL_FACE: false,
          GL_CURRENT_VERTEX_ATTRIB: false,
          GL_ELEMENT_ARRAY_BUFFER: false,
          GL_FLOAT: false,
          GL_FLOAT_MAT2: false,
          GL_FLOAT_MAT3: false,
          GL_FLOAT_MAT4: false,
          GL_FLOAT_VEC2: false,
          GL_FLOAT_VEC3: false,
          GL_FLOAT_VEC4: false,
          GL_FRAGMENT_SHADER: false,
          GL_FRAMEBUFFER: false,
          GL_FRAMEBUFFER_BINDING: false,
          GL_FRAMEBUFFER_COMPLETE: false,
          GL_FRONT: false,
          GL_FRONT_AND_BACK: false,
          GL_INT: false,
          GL_INT_VEC2: false,
          GL_INT_VEC3: false,
          GL_INT_VEC4: false,
          GL_LINEAR: false,
          GL_LINK_STATUS: false,
          GL_RGBA: false,
          GL_SAMPLER_2D: false,
          GL_SAMPLER_CUBE: false,
          GL_STATIC_DRAW: false,
          GL_TEXTURE_2D: false,
          GL_TEXTURE_MIN_FILTER: false,
          GL_TEXTURE_WRAP_S: false,
          GL_TEXTURE_WRAP_T: false,
          GL_TEXTURE0: false,
          GL_TRIANGLES: false,
          GL_UNSIGNED_BYTE: false,
          GL_UNSIGNED_SHORT: false,
          GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: false,
          GL_VERTEX_ATTRIB_ARRAY_ENABLED: false,
          GL_VERTEX_ATTRIB_ARRAY_NORMALIZED: false,
          GL_VERTEX_ATTRIB_ARRAY_POINTER: false,
          GL_VERTEX_ATTRIB_ARRAY_SIZE: false,
          GL_VERTEX_ATTRIB_ARRAY_STRIDE: false,
          GL_VERTEX_ATTRIB_ARRAY_TYPE: false,
          GL_VERTEX_SHADER: false
        }
      },
      files: {
        src: [ 'src/**/*.js' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsdoc');

  // Grunt task(s).
  grunt.registerTask('default', ['jshint', 'jsdoc']);
};
