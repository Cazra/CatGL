'use strict';

/**
 * Base Error type for errors thrown by the CatGL library.
 */
export class CatGLError extends Error {
  constructor(msg) {
    super(msg);
  }
}
