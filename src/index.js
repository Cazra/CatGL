'use strict';

import * as debug from './debug';
import * as errors from './errors';
import * as geom from './geom';
import * as io from './io';

/**
 * The top-level CatGL namespace.
 * @namespace CatGL
 */
window.CatGL = (() => {
  /**
   * Gets the version of the CatGL library. This is given in
   * `MAJOR.MINOR.PATCH` format.
   * @return {string}
   */
  function getVersion() {
    return '0.0.0';
  }

  return {
    // packages
    debug,
    errors,
    geom,
    io,

    // constants
    EPSILON: glMatrix.EPSILON,

    // functions
    getVersion
  };
})();
