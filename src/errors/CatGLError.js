'use strict';

/**
 * Base Error type for errors thrown by the CatGL library.
 */
export class CatGLError extends Error {
  /**
   * @param {string|Error} msg The error's message, or another Error
   *    wrapped by this one.
   */
  constructor(msg) {
    super(msg);
  }
}
