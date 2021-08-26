'use strict';

import {CatGLError} from './CatGLError.js';

/**
 * An error thrown by calling an abstract method which hasn't been implemented
 * by a child class.
 */
export class AbstractError extends CatGLError {
  constructor() {
    super('Must be implemented by subclass.');
  }
}
