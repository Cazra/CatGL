'use strict';

import {ValidationError} from './ValidationError.js';

/**
 * An error related to invalid geometry.
 */
export class GeometryError extends ValidationError {
  /**
   * @param {string} msg The error's message.
   */
  constructor(msg) {
    super(msg);
  }
}
