'use strict';

import {CatGLError} from './CatGLError.js';

/**
 * An error caused by a failed validation.
 */
export class ValidationError extends CatGLError {
  /**
   * @param {string} msg The error's message.
   */
  constructor(msg) {
    super(msg);
  }
}
