'use strict';

import * as debug from './debug';
import * as errors from './errors';

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

    // constants
    EPSILON: glMatrix.EPSILON,

    // functions
    getVersion
  };
})();
