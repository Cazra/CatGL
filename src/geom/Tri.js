'use strict';

import {GeometryError} from '../errors/GeometryError.js';
import {Vert} from './Vert.js';

/**
 * WIP
 * A basic face consisting of 3 Verts forming a triangle.
 * Vertices are stored in counter-clockwise order for the purpose of
 * determining their surface normal vectors.
 */
export class Tri {

  /**
   * The unit surface normal vector for this Tri.
   * @return {vec3}
   */
  get normal() {
    if (this._n === undefined) {
      let u = vec3.sub([], this.v2.xyz, this.v1.xyz);
      let v = vec3.sub([], this.v3.xyz, this.v1.xyz);
      this._n = vec3.cross([], u, v);
    }
    return this._n;
  }

  /**
   * The first vertex.
   * @type {Vert}
   */
  get v1() {
    return this._verts[0];
  }
  set v1(v) {
    if (!(v instanceof Vert))
      throw new GeometryError('v1 must be a Vert.');
    else {
      this._n = undefined;
      this._verts[0] = v;
    }
  }

  /**
   * The second vertex.
   * @type {Vert}
   */
  get v2() {
    return this._verts[1];
  }
  set v2(v) {
    if (!(v instanceof Vert))
      throw new GeometryError('v2 must be a Vert.');
    else {
      this._n = undefined;
      this._verts[1] = v;
    }
  }

  /**
   * The third vertex.
   * @type {Vert}
   */
  get v3() {
    return this._verts[2];
  }
  set v3(v) {
    if (!(v instanceof Vert))
      throw new GeometryError('v3 must be a Vert.');
    else {
      this._n = undefined;
      this._verts[2] = v;
    }
  }

  /**
   * The 3 Verts making up this Tri.
   * @type {Vert[]}
   */
  get verts() {
    return this._verts;
  }
  set verts(verts) {
    if (verts.length !== 3)
      throw new GeometryError(`Tri must be set to exactly 3 Verts.`);
    _.each(verts, v => {
      if (!(v instanceof Vert))
        throw new GeometryError(
          `Must construct Tri out of 3 Vert elements. Got ${verts}.`);
    });
    this._verts = verts;
    this._n = undefined;
  }

  /**
   * @param {Vert[]} verts The 3 vertices making up this Tri.
   */
  constructor(verts) {
    this.verts = verts;
  }
}
