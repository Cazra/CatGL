'use strict';

/**
 * A basic homogeneous 3D vertex. (Can be used for 2D too)
 * Extend this if you want additional per-vertex shader properties.
 */
export class Vert {

  /**
   * The surface bitangent vector. This is not necessarily a unit vector.
   * @type {vec3}
   */
  get bitangent() {
    return vec3.cross([], this.normal, this.tangent);
  }

  /**
   * The surface normal vector. This is not necessarily a unit vector.
   * @type {vec3}
   */
  get normal() {
    return this._n;
  }
  set normal(v) {
    this._n = v || [0, 0, 1];
  }

  /**
   * The surface tangent vector. This is not necessarily a unit vector.
   * @type {vec3}
   */
  get tangent() {
    return this._t;
  }
  set tangent(v) {
    if (!v) {
      let nHat = vec3.normalize([], this.normal);

      let up = [0, 1, 0];
      if (nHat[1] === 1)
        up[1] = -1;
      v = vec3.cross([], up, nHat);
    }
    this._t = v;
  }

  /**
   * The 2D texture coordinates.
   * @type {vec2}
   */
  get uv() {
    return this._uv;
  }
  set uv(v) {
    this._uv = v || [0, 0];
  }

  /**
   * The position of the vertex, in homogeneous 3D coordinates.
   * @type {vec4}
   */
  get xyz() {
    return this._xyz;
  }
  set xyz(v) {
    this._xyz = [
      v[0] || 0,
      v[1] || 0,
      v[2] || 0,
      1
    ];
  }

  /**
   * @param {vec4} xyz
   * @param {VertOpts} [opts]
   */
  constructor(xyz, opts) {
    opts = opts || {};
    this.xyz = xyz;
    this.normal = opts.normal;
    this.tangent = opts.tangent;
    this.uv = opts.uv;
  }
}
