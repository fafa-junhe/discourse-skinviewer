                            "use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* @preserve skinview3d / MIT License / https://github.com/bs-community/skinview3d */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).skinview3d = {});
}(void 0, function (t) {
  "use strict";

  var e = 0,
      n = 1,
      i = 2,
      r = 0,
      a = 1,
      o = 2,
      s = 3;

  function c() {}

  Object.assign(c.prototype, {
    addEventListener: function addEventListener(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      var n = this._listeners;
      void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
    },
    hasEventListener: function hasEventListener(t, e) {
      if (void 0 === this._listeners) return !1;
      var n = this._listeners;
      return void 0 !== n[t] && -1 !== n[t].indexOf(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      if (void 0 === this._listeners) return;
      var n = this._listeners[t];

      if (void 0 !== n) {
        var _t2 = n.indexOf(e);

        -1 !== _t2 && n.splice(_t2, 1);
      }
    },
    dispatchEvent: function dispatchEvent(t) {
      if (void 0 === this._listeners) return;
      var e = this._listeners[t.type];

      if (void 0 !== e) {
        t.target = this;

        var _n2 = e.slice(0);

        for (var _e2 = 0, _i2 = _n2.length; _e2 < _i2; _e2++) {
          _n2[_e2].call(this, t);
        }
      }
    }
  });
  var l = [];

  for (var _t3 = 0; _t3 < 256; _t3++) {
    l[_t3] = (_t3 < 16 ? "0" : "") + _t3.toString(16);
  }

  var h = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: function generateUUID() {
      var t = 4294967295 * Math.random() | 0,
          e = 4294967295 * Math.random() | 0,
          n = 4294967295 * Math.random() | 0,
          i = 4294967295 * Math.random() | 0;
      return (l[255 & t] + l[t >> 8 & 255] + l[t >> 16 & 255] + l[t >> 24 & 255] + "-" + l[255 & e] + l[e >> 8 & 255] + "-" + l[e >> 16 & 15 | 64] + l[e >> 24 & 255] + "-" + l[63 & n | 128] + l[n >> 8 & 255] + "-" + l[n >> 16 & 255] + l[n >> 24 & 255] + l[255 & i] + l[i >> 8 & 255] + l[i >> 16 & 255] + l[i >> 24 & 255]).toUpperCase();
    },
    clamp: function clamp(t, e, n) {
      return Math.max(e, Math.min(n, t));
    },
    euclideanModulo: function euclideanModulo(t, e) {
      return (t % e + e) % e;
    },
    mapLinear: function mapLinear(t, e, n, i, r) {
      return i + (t - e) * (r - i) / (n - e);
    },
    lerp: function lerp(t, e, n) {
      return (1 - n) * t + n * e;
    },
    smoothstep: function smoothstep(t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
    },
    smootherstep: function smootherstep(t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
    },
    randInt: function randInt(t, e) {
      return t + Math.floor(Math.random() * (e - t + 1));
    },
    randFloat: function randFloat(t, e) {
      return t + Math.random() * (e - t);
    },
    randFloatSpread: function randFloatSpread(t) {
      return t * (.5 - Math.random());
    },
    degToRad: function degToRad(t) {
      return t * h.DEG2RAD;
    },
    radToDeg: function radToDeg(t) {
      return t * h.RAD2DEG;
    },
    isPowerOfTwo: function isPowerOfTwo(t) {
      return 0 == (t & t - 1) && 0 !== t;
    },
    ceilPowerOfTwo: function ceilPowerOfTwo(t) {
      return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
    },
    floorPowerOfTwo: function floorPowerOfTwo(t) {
      return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
    },
    setQuaternionFromProperEuler: function setQuaternionFromProperEuler(t, e, n, i, r) {
      var a = Math.cos,
          o = Math.sin,
          s = a(n / 2),
          c = o(n / 2),
          l = a((e + i) / 2),
          h = o((e + i) / 2),
          u = a((e - i) / 2),
          d = o((e - i) / 2),
          f = a((i - e) / 2),
          p = o((i - e) / 2);

      switch (r) {
        case "XYX":
          t.set(s * h, c * u, c * d, s * l);
          break;

        case "YZY":
          t.set(c * d, s * h, c * u, s * l);
          break;

        case "ZXZ":
          t.set(c * u, c * d, s * h, s * l);
          break;

        case "XZX":
          t.set(s * h, c * p, c * f, s * l);
          break;

        case "YXY":
          t.set(c * f, s * h, c * p, s * l);
          break;

        case "ZYZ":
          t.set(c * p, c * f, s * h, s * l);
          break;

        default:
          console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
      }
    }
  };

  function u() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this.x = t, this.y = e;
  }

  function d() {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
  }

  var f;
  Object.defineProperties(u.prototype, {
    width: {
      get: function get() {
        return this.x;
      },
      set: function set(t) {
        this.x = t;
      }
    },
    height: {
      get: function get() {
        return this.y;
      },
      set: function set(t) {
        this.y = t;
      }
    }
  }), Object.assign(u.prototype, {
    isVector2: !0,
    set: function set(t, e) {
      return this.x = t, this.y = e, this;
    },
    setScalar: function setScalar(t) {
      return this.x = t, this.y = t, this;
    },
    setX: function setX(t) {
      return this.x = t, this;
    },
    setY: function setY(t) {
      return this.y = t, this;
    },
    setComponent: function setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;

        case 1:
          this.y = e;
          break;

        default:
          throw new Error("index is out of range: " + t);
      }

      return this;
    },
    getComponent: function getComponent(t) {
      switch (t) {
        case 0:
          return this.x;

        case 1:
          return this.y;

        default:
          throw new Error("index is out of range: " + t);
      }
    },
    clone: function clone() {
      return new this.constructor(this.x, this.y);
    },
    copy: function copy(t) {
      return this.x = t.x, this.y = t.y, this;
    },
    add: function add(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this);
    },
    addScalar: function addScalar(t) {
      return this.x += t, this.y += t, this;
    },
    addVectors: function addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this;
    },
    addScaledVector: function addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this;
    },
    sub: function sub(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this);
    },
    subScalar: function subScalar(t) {
      return this.x -= t, this.y -= t, this;
    },
    subVectors: function subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this;
    },
    multiply: function multiply(t) {
      return this.x *= t.x, this.y *= t.y, this;
    },
    multiplyScalar: function multiplyScalar(t) {
      return this.x *= t, this.y *= t, this;
    },
    divide: function divide(t) {
      return this.x /= t.x, this.y /= t.y, this;
    },
    divideScalar: function divideScalar(t) {
      return this.multiplyScalar(1 / t);
    },
    applyMatrix3: function applyMatrix3(t) {
      var e = this.x,
          n = this.y,
          i = t.elements;
      return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
    },
    min: function min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
    },
    max: function max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
    },
    clamp: function clamp(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
    },
    clampScalar: function clampScalar(t, e) {
      return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
    },
    clampLength: function clampLength(t, e) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    },
    floor: function floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    },
    ceil: function ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    },
    round: function round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    },
    roundToZero: function roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
    },
    negate: function negate() {
      return this.x = -this.x, this.y = -this.y, this;
    },
    dot: function dot(t) {
      return this.x * t.x + this.y * t.y;
    },
    cross: function cross(t) {
      return this.x * t.y - this.y * t.x;
    },
    lengthSq: function lengthSq() {
      return this.x * this.x + this.y * this.y;
    },
    length: function length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    manhattanLength: function manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    },
    normalize: function normalize() {
      return this.divideScalar(this.length() || 1);
    },
    angle: function angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    },
    distanceTo: function distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    },
    distanceToSquared: function distanceToSquared(t) {
      var e = this.x - t.x,
          n = this.y - t.y;
      return e * e + n * n;
    },
    manhattanDistanceTo: function manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    },
    setLength: function setLength(t) {
      return this.normalize().multiplyScalar(t);
    },
    lerp: function lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
    },
    lerpVectors: function lerpVectors(t, e, n) {
      return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
    },
    equals: function equals(t) {
      return t.x === this.x && t.y === this.y;
    },
    fromArray: function fromArray(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this;
    },
    toArray: function toArray(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t;
    },
    fromBufferAttribute: function fromBufferAttribute(t, e, n) {
      return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this;
    },
    rotateAround: function rotateAround(t, e) {
      var n = Math.cos(e),
          i = Math.sin(e),
          r = this.x - t.x,
          a = this.y - t.y;
      return this.x = r * n - a * i + t.x, this.y = r * i + a * n + t.y, this;
    },
    random: function random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
  }), Object.assign(d.prototype, {
    isMatrix3: !0,
    set: function set(t, e, n, i, r, a, o, s, c) {
      var l = this.elements;
      return l[0] = t, l[1] = i, l[2] = o, l[3] = e, l[4] = r, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
    },
    identity: function identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    },
    clone: function clone() {
      return new this.constructor().fromArray(this.elements);
    },
    copy: function copy(t) {
      var e = this.elements,
          n = t.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
    },
    extractBasis: function extractBasis(t, e, n) {
      return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
    },
    setFromMatrix4: function setFromMatrix4(t) {
      var e = t.elements;
      return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
    },
    multiply: function multiply(t) {
      return this.multiplyMatrices(this, t);
    },
    premultiply: function premultiply(t) {
      return this.multiplyMatrices(t, this);
    },
    multiplyMatrices: function multiplyMatrices(t, e) {
      var n = t.elements,
          i = e.elements,
          r = this.elements,
          a = n[0],
          o = n[3],
          s = n[6],
          c = n[1],
          l = n[4],
          h = n[7],
          u = n[2],
          d = n[5],
          f = n[8],
          p = i[0],
          m = i[3],
          g = i[6],
          v = i[1],
          x = i[4],
          _ = i[7],
          y = i[2],
          M = i[5],
          b = i[8];
      return r[0] = a * p + o * v + s * y, r[3] = a * m + o * x + s * M, r[6] = a * g + o * _ + s * b, r[1] = c * p + l * v + h * y, r[4] = c * m + l * x + h * M, r[7] = c * g + l * _ + h * b, r[2] = u * p + d * v + f * y, r[5] = u * m + d * x + f * M, r[8] = u * g + d * _ + f * b, this;
    },
    multiplyScalar: function multiplyScalar(t) {
      var e = this.elements;
      return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
    },
    determinant: function determinant() {
      var t = this.elements,
          e = t[0],
          n = t[1],
          i = t[2],
          r = t[3],
          a = t[4],
          o = t[5],
          s = t[6],
          c = t[7],
          l = t[8];
      return e * a * l - e * o * c - n * r * l + n * o * s + i * r * c - i * a * s;
    },
    getInverse: function getInverse(t, e) {
      void 0 !== e && console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");
      var n = t.elements,
          i = this.elements,
          r = n[0],
          a = n[1],
          o = n[2],
          s = n[3],
          c = n[4],
          l = n[5],
          h = n[6],
          u = n[7],
          d = n[8],
          f = d * c - l * u,
          p = l * h - d * s,
          m = u * s - c * h,
          g = r * f + a * p + o * m;
      if (0 === g) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      var v = 1 / g;
      return i[0] = f * v, i[1] = (o * u - d * a) * v, i[2] = (l * a - o * c) * v, i[3] = p * v, i[4] = (d * r - o * h) * v, i[5] = (o * s - l * r) * v, i[6] = m * v, i[7] = (a * h - u * r) * v, i[8] = (c * r - a * s) * v, this;
    },
    transpose: function transpose() {
      var t;
      var e = this.elements;
      return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
    },
    getNormalMatrix: function getNormalMatrix(t) {
      return this.setFromMatrix4(t).getInverse(this).transpose();
    },
    transposeIntoArray: function transposeIntoArray(t) {
      var e = this.elements;
      return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
    },
    setUvTransform: function setUvTransform(t, e, n, i, r, a, o) {
      var s = Math.cos(r),
          c = Math.sin(r);
      this.set(n * s, n * c, -n * (s * a + c * o) + a + t, -i * c, i * s, -i * (-c * a + s * o) + o + e, 0, 0, 1);
    },
    scale: function scale(t, e) {
      var n = this.elements;
      return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this;
    },
    rotate: function rotate(t) {
      var e = Math.cos(t),
          n = Math.sin(t),
          i = this.elements,
          r = i[0],
          a = i[3],
          o = i[6],
          s = i[1],
          c = i[4],
          l = i[7];
      return i[0] = e * r + n * s, i[3] = e * a + n * c, i[6] = e * o + n * l, i[1] = -n * r + e * s, i[4] = -n * a + e * c, i[7] = -n * o + e * l, this;
    },
    translate: function translate(t, e) {
      var n = this.elements;
      return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this;
    },
    equals: function equals(t) {
      var e = this.elements,
          n = t.elements;

      for (var _t4 = 0; _t4 < 9; _t4++) {
        if (e[_t4] !== n[_t4]) return !1;
      }

      return !0;
    },
    fromArray: function fromArray(t, e) {
      void 0 === e && (e = 0);

      for (var _n3 = 0; _n3 < 9; _n3++) {
        this.elements[_n3] = t[_n3 + e];
      }

      return this;
    },
    toArray: function toArray(t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var n = this.elements;
      return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
    }
  });

  var p = function p(t) {
    if (/^data:/i.test(t.src)) return t.src;
    if ("undefined" == typeof HTMLCanvasElement) return t.src;
    var e;
    if (_instanceof(t, HTMLCanvasElement)) e = t;else {
      void 0 === f && (f = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), f.width = t.width, f.height = t.height;

      var _n4 = f.getContext("2d");

      _instanceof(t, ImageData) ? _n4.putImageData(t, 0, 0) : _n4.drawImage(t, 0, 0, t.width, t.height), e = f;
    }
    return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png");
  };

  var m = 0;

  function g(t, e, n, i, r, a, o, s, c, l) {
    Object.defineProperty(this, "id", {
      value: m++
    }), this.uuid = h.generateUUID(), this.name = "", this.image = void 0 !== t ? t : g.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : g.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : 1001, this.wrapT = void 0 !== i ? i : 1001, this.magFilter = void 0 !== r ? r : 1006, this.minFilter = void 0 !== a ? a : 1008, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : 1023, this.internalFormat = null, this.type = void 0 !== s ? s : 1009, this.offset = new u(0, 0), this.repeat = new u(1, 1), this.center = new u(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new d(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== l ? l : 3e3, this.version = 0, this.onUpdate = null;
  }

  function v() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    this.x = t, this.y = e, this.z = n, this.w = i;
  }

  function x(t, e, n) {
    this.width = t, this.height = e, this.scissor = new v(0, 0, t, e), this.scissorTest = !1, this.viewport = new v(0, 0, t, e), n = n || {}, this.texture = new g(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = t, this.texture.image.height = e, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null;
  }

  function _() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    this._x = t, this._y = e, this._z = n, this._w = i;
  }

  g.DEFAULT_IMAGE = void 0, g.DEFAULT_MAPPING = 300, g.prototype = Object.assign(Object.create(c.prototype), {
    constructor: g,
    isTexture: !0,
    updateMatrix: function updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this;
    },
    toJSON: function toJSON(t) {
      var e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      var n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };

      if (void 0 !== this.image) {
        var _i3 = this.image;

        if (void 0 === _i3.uuid && (_i3.uuid = h.generateUUID()), !e && void 0 === t.images[_i3.uuid]) {
          var _e3;

          if (Array.isArray(_i3)) {
            _e3 = [];

            for (var _t5 = 0, _n5 = _i3.length; _t5 < _n5; _t5++) {
              _e3.push(p(_i3[_t5]));
            }
          } else _e3 = p(_i3);

          t.images[_i3.uuid] = {
            uuid: _i3.uuid,
            url: _e3
          };
        }

        n.image = _i3.uuid;
      }

      return e || (t.textures[this.uuid] = n), n;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    },
    transformUv: function transformUv(t) {
      if (300 !== this.mapping) return t;
      if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
        case 1e3:
          t.x = t.x - Math.floor(t.x);
          break;

        case 1001:
          t.x = t.x < 0 ? 0 : 1;
          break;

        case 1002:
          1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
      }
      if (t.y < 0 || t.y > 1) switch (this.wrapT) {
        case 1e3:
          t.y = t.y - Math.floor(t.y);
          break;

        case 1001:
          t.y = t.y < 0 ? 0 : 1;
          break;

        case 1002:
          1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
      }
      return this.flipY && (t.y = 1 - t.y), t;
    }
  }), Object.defineProperty(g.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  }), Object.defineProperties(v.prototype, {
    width: {
      get: function get() {
        return this.z;
      },
      set: function set(t) {
        this.z = t;
      }
    },
    height: {
      get: function get() {
        return this.w;
      },
      set: function set(t) {
        this.w = t;
      }
    }
  }), Object.assign(v.prototype, {
    isVector4: !0,
    set: function set(t, e, n, i) {
      return this.x = t, this.y = e, this.z = n, this.w = i, this;
    },
    setScalar: function setScalar(t) {
      return this.x = t, this.y = t, this.z = t, this.w = t, this;
    },
    setX: function setX(t) {
      return this.x = t, this;
    },
    setY: function setY(t) {
      return this.y = t, this;
    },
    setZ: function setZ(t) {
      return this.z = t, this;
    },
    setW: function setW(t) {
      return this.w = t, this;
    },
    setComponent: function setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;

        case 1:
          this.y = e;
          break;

        case 2:
          this.z = e;
          break;

        case 3:
          this.w = e;
          break;

        default:
          throw new Error("index is out of range: " + t);
      }

      return this;
    },
    getComponent: function getComponent(t) {
      switch (t) {
        case 0:
          return this.x;

        case 1:
          return this.y;

        case 2:
          return this.z;

        case 3:
          return this.w;

        default:
          throw new Error("index is out of range: " + t);
      }
    },
    clone: function clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    },
    copy: function copy(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this;
    },
    add: function add(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this);
    },
    addScalar: function addScalar(t) {
      return this.x += t, this.y += t, this.z += t, this.w += t, this;
    },
    addVectors: function addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
    },
    addScaledVector: function addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
    },
    sub: function sub(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this);
    },
    subScalar: function subScalar(t) {
      return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
    },
    subVectors: function subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
    },
    multiplyScalar: function multiplyScalar(t) {
      return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
    },
    applyMatrix4: function applyMatrix4(t) {
      var e = this.x,
          n = this.y,
          i = this.z,
          r = this.w,
          a = t.elements;
      return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r, this;
    },
    divideScalar: function divideScalar(t) {
      return this.multiplyScalar(1 / t);
    },
    setAxisAngleFromQuaternion: function setAxisAngleFromQuaternion(t) {
      this.w = 2 * Math.acos(t.w);
      var e = Math.sqrt(1 - t.w * t.w);
      return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
    },
    setAxisAngleFromRotationMatrix: function setAxisAngleFromRotationMatrix(t) {
      var e, n, i, r;
      var a = t.elements,
          o = a[0],
          s = a[4],
          c = a[8],
          l = a[1],
          h = a[5],
          u = a[9],
          d = a[2],
          f = a[6],
          p = a[10];

      if (Math.abs(s - l) < .01 && Math.abs(c - d) < .01 && Math.abs(u - f) < .01) {
        if (Math.abs(s + l) < .1 && Math.abs(c + d) < .1 && Math.abs(u + f) < .1 && Math.abs(o + h + p - 3) < .1) return this.set(1, 0, 0, 0), this;
        e = Math.PI;

        var _t6 = (o + 1) / 2,
            _a = (h + 1) / 2,
            _m = (p + 1) / 2,
            _g = (s + l) / 4,
            _v = (c + d) / 4,
            _x = (u + f) / 4;

        return _t6 > _a && _t6 > _m ? _t6 < .01 ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(_t6), i = _g / n, r = _v / n) : _a > _m ? _a < .01 ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(_a), n = _g / i, r = _x / i) : _m < .01 ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(_m), n = _v / r, i = _x / r), this.set(n, i, r, e), this;
      }

      var m = Math.sqrt((f - u) * (f - u) + (c - d) * (c - d) + (l - s) * (l - s));
      return Math.abs(m) < .001 && (m = 1), this.x = (f - u) / m, this.y = (c - d) / m, this.z = (l - s) / m, this.w = Math.acos((o + h + p - 1) / 2), this;
    },
    min: function min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
    },
    max: function max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
    },
    clamp: function clamp(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
    },
    clampScalar: function clampScalar(t, e) {
      return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
    },
    clampLength: function clampLength(t, e) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    },
    floor: function floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    },
    ceil: function ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    },
    round: function round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    },
    roundToZero: function roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
    },
    negate: function negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    },
    dot: function dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    },
    lengthSq: function lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    },
    length: function length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    },
    manhattanLength: function manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    },
    normalize: function normalize() {
      return this.divideScalar(this.length() || 1);
    },
    setLength: function setLength(t) {
      return this.normalize().multiplyScalar(t);
    },
    lerp: function lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
    },
    lerpVectors: function lerpVectors(t, e, n) {
      return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
    },
    equals: function equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
    },
    fromArray: function fromArray(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
    },
    toArray: function toArray(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
    },
    fromBufferAttribute: function fromBufferAttribute(t, e, n) {
      return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
    },
    random: function random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
  }), x.prototype = Object.assign(Object.create(c.prototype), {
    constructor: x,
    isWebGLRenderTarget: !0,
    setSize: function setSize(t, e) {
      this.width === t && this.height === e || (this.width = t, this.height = e, this.texture.image.width = t, this.texture.image.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }), Object.assign(_, {
    slerp: function slerp(t, e, n, i) {
      return n.copy(t).slerp(e, i);
    },
    slerpFlat: function slerpFlat(t, e, n, i, r, a, o) {
      var s = n[i + 0],
          c = n[i + 1],
          l = n[i + 2],
          h = n[i + 3];
      var u = r[a + 0],
          d = r[a + 1],
          f = r[a + 2],
          p = r[a + 3];

      if (h !== p || s !== u || c !== d || l !== f) {
        var _t7 = 1 - o,
            _e4 = s * u + c * d + l * f + h * p,
            _n6 = _e4 >= 0 ? 1 : -1,
            _i4 = 1 - _e4 * _e4;

        if (_i4 > Number.EPSILON) {
          var _r3 = Math.sqrt(_i4),
              _a2 = Math.atan2(_r3, _e4 * _n6);

          _t7 = Math.sin(_t7 * _a2) / _r3, o = Math.sin(o * _a2) / _r3;
        }

        var _r2 = o * _n6;

        if (s = s * _t7 + u * _r2, c = c * _t7 + d * _r2, l = l * _t7 + f * _r2, h = h * _t7 + p * _r2, _t7 === 1 - o) {
          var _t8 = 1 / Math.sqrt(s * s + c * c + l * l + h * h);

          s *= _t8, c *= _t8, l *= _t8, h *= _t8;
        }
      }

      t[e] = s, t[e + 1] = c, t[e + 2] = l, t[e + 3] = h;
    },
    multiplyQuaternionsFlat: function multiplyQuaternionsFlat(t, e, n, i, r, a) {
      var o = n[i],
          s = n[i + 1],
          c = n[i + 2],
          l = n[i + 3],
          h = r[a],
          u = r[a + 1],
          d = r[a + 2],
          f = r[a + 3];
      return t[e] = o * f + l * h + s * d - c * u, t[e + 1] = s * f + l * u + c * h - o * d, t[e + 2] = c * f + l * d + o * u - s * h, t[e + 3] = l * f - o * h - s * u - c * d, t;
    }
  }), Object.defineProperties(_.prototype, {
    x: {
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t, this._onChangeCallback();
      }
    },
    y: {
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t, this._onChangeCallback();
      }
    },
    z: {
      get: function get() {
        return this._z;
      },
      set: function set(t) {
        this._z = t, this._onChangeCallback();
      }
    },
    w: {
      get: function get() {
        return this._w;
      },
      set: function set(t) {
        this._w = t, this._onChangeCallback();
      }
    }
  }), Object.assign(_.prototype, {
    isQuaternion: !0,
    set: function set(t, e, n, i) {
      return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
    },
    clone: function clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    },
    copy: function copy(t) {
      return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
    },
    setFromEuler: function setFromEuler(t, e) {
      if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
      var n = t._x,
          i = t._y,
          r = t._z,
          a = t.order,
          o = Math.cos,
          s = Math.sin,
          c = o(n / 2),
          l = o(i / 2),
          h = o(r / 2),
          u = s(n / 2),
          d = s(i / 2),
          f = s(r / 2);

      switch (a) {
        case "XYZ":
          this._x = u * l * h + c * d * f, this._y = c * d * h - u * l * f, this._z = c * l * f + u * d * h, this._w = c * l * h - u * d * f;
          break;

        case "YXZ":
          this._x = u * l * h + c * d * f, this._y = c * d * h - u * l * f, this._z = c * l * f - u * d * h, this._w = c * l * h + u * d * f;
          break;

        case "ZXY":
          this._x = u * l * h - c * d * f, this._y = c * d * h + u * l * f, this._z = c * l * f + u * d * h, this._w = c * l * h - u * d * f;
          break;

        case "ZYX":
          this._x = u * l * h - c * d * f, this._y = c * d * h + u * l * f, this._z = c * l * f - u * d * h, this._w = c * l * h + u * d * f;
          break;

        case "YZX":
          this._x = u * l * h + c * d * f, this._y = c * d * h + u * l * f, this._z = c * l * f - u * d * h, this._w = c * l * h - u * d * f;
          break;

        case "XZY":
          this._x = u * l * h - c * d * f, this._y = c * d * h - u * l * f, this._z = c * l * f + u * d * h, this._w = c * l * h + u * d * f;
          break;

        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
      }

      return !1 !== e && this._onChangeCallback(), this;
    },
    setFromAxisAngle: function setFromAxisAngle(t, e) {
      var n = e / 2,
          i = Math.sin(n);
      return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
    },
    setFromRotationMatrix: function setFromRotationMatrix(t) {
      var e = t.elements,
          n = e[0],
          i = e[4],
          r = e[8],
          a = e[1],
          o = e[5],
          s = e[9],
          c = e[2],
          l = e[6],
          h = e[10],
          u = n + o + h;

      if (u > 0) {
        var _t9 = .5 / Math.sqrt(u + 1);

        this._w = .25 / _t9, this._x = (l - s) * _t9, this._y = (r - c) * _t9, this._z = (a - i) * _t9;
      } else if (n > o && n > h) {
        var _t10 = 2 * Math.sqrt(1 + n - o - h);

        this._w = (l - s) / _t10, this._x = .25 * _t10, this._y = (i + a) / _t10, this._z = (r + c) / _t10;
      } else if (o > h) {
        var _t11 = 2 * Math.sqrt(1 + o - n - h);

        this._w = (r - c) / _t11, this._x = (i + a) / _t11, this._y = .25 * _t11, this._z = (s + l) / _t11;
      } else {
        var _t12 = 2 * Math.sqrt(1 + h - n - o);

        this._w = (a - i) / _t12, this._x = (r + c) / _t12, this._y = (s + l) / _t12, this._z = .25 * _t12;
      }

      return this._onChangeCallback(), this;
    },
    setFromUnitVectors: function setFromUnitVectors(t, e) {
      var n = t.dot(e) + 1;
      return n < 1e-6 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
    },
    angleTo: function angleTo(t) {
      return 2 * Math.acos(Math.abs(h.clamp(this.dot(t), -1, 1)));
    },
    rotateTowards: function rotateTowards(t, e) {
      var n = this.angleTo(t);
      if (0 === n) return this;
      var i = Math.min(1, e / n);
      return this.slerp(t, i), this;
    },
    inverse: function inverse() {
      return this.conjugate();
    },
    conjugate: function conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    },
    dot: function dot(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    },
    lengthSq: function lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    },
    length: function length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    },
    normalize: function normalize() {
      var t = this.length();
      return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
    },
    multiply: function multiply(t, e) {
      return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
    },
    premultiply: function premultiply(t) {
      return this.multiplyQuaternions(t, this);
    },
    multiplyQuaternions: function multiplyQuaternions(t, e) {
      var n = t._x,
          i = t._y,
          r = t._z,
          a = t._w,
          o = e._x,
          s = e._y,
          c = e._z,
          l = e._w;
      return this._x = n * l + a * o + i * c - r * s, this._y = i * l + a * s + r * o - n * c, this._z = r * l + a * c + n * s - i * o, this._w = a * l - n * o - i * s - r * c, this._onChangeCallback(), this;
    },
    slerp: function slerp(t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      var n = this._x,
          i = this._y,
          r = this._z,
          a = this._w;
      var o = a * t._w + n * t._x + i * t._y + r * t._z;
      if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
      var s = 1 - o * o;

      if (s <= Number.EPSILON) {
        var _t13 = 1 - e;

        return this._w = _t13 * a + e * this._w, this._x = _t13 * n + e * this._x, this._y = _t13 * i + e * this._y, this._z = _t13 * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
      }

      var c = Math.sqrt(s),
          l = Math.atan2(c, o),
          h = Math.sin((1 - e) * l) / c,
          u = Math.sin(e * l) / c;
      return this._w = a * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this;
    },
    equals: function equals(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
    },
    fromArray: function fromArray(t, e) {
      return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
    },
    toArray: function toArray(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
    },
    fromBufferAttribute: function fromBufferAttribute(t, e) {
      return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this;
    },
    _onChange: function _onChange(t) {
      return this._onChangeCallback = t, this;
    },
    _onChangeCallback: function _onChangeCallback() {}
  });
  var y = new b(),
      M = new _();

  function b() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    this.x = t, this.y = e, this.z = n;
  }

  Object.assign(b.prototype, {
    isVector3: !0,
    set: function set(t, e, n) {
      return this.x = t, this.y = e, this.z = n, this;
    },
    setScalar: function setScalar(t) {
      return this.x = t, this.y = t, this.z = t, this;
    },
    setX: function setX(t) {
      return this.x = t, this;
    },
    setY: function setY(t) {
      return this.y = t, this;
    },
    setZ: function setZ(t) {
      return this.z = t, this;
    },
    setComponent: function setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;

        case 1:
          this.y = e;
          break;

        case 2:
          this.z = e;
          break;

        default:
          throw new Error("index is out of range: " + t);
      }

      return this;
    },
    getComponent: function getComponent(t) {
      switch (t) {
        case 0:
          return this.x;

        case 1:
          return this.y;

        case 2:
          return this.z;

        default:
          throw new Error("index is out of range: " + t);
      }
    },
    clone: function clone() {
      return new this.constructor(this.x, this.y, this.z);
    },
    copy: function copy(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this;
    },
    add: function add(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this);
    },
    addScalar: function addScalar(t) {
      return this.x += t, this.y += t, this.z += t, this;
    },
    addVectors: function addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
    },
    addScaledVector: function addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
    },
    sub: function sub(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this);
    },
    subScalar: function subScalar(t) {
      return this.x -= t, this.y -= t, this.z -= t, this;
    },
    subVectors: function subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
    },
    multiply: function multiply(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this);
    },
    multiplyScalar: function multiplyScalar(t) {
      return this.x *= t, this.y *= t, this.z *= t, this;
    },
    multiplyVectors: function multiplyVectors(t, e) {
      return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
    },
    applyEuler: function applyEuler(t) {
      return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(M.setFromEuler(t));
    },
    applyAxisAngle: function applyAxisAngle(t, e) {
      return this.applyQuaternion(M.setFromAxisAngle(t, e));
    },
    applyMatrix3: function applyMatrix3(t) {
      var e = this.x,
          n = this.y,
          i = this.z,
          r = t.elements;
      return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
    },
    applyNormalMatrix: function applyNormalMatrix(t) {
      return this.applyMatrix3(t).normalize();
    },
    applyMatrix4: function applyMatrix4(t) {
      var e = this.x,
          n = this.y,
          i = this.z,
          r = t.elements,
          a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
      return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a, this;
    },
    applyQuaternion: function applyQuaternion(t) {
      var e = this.x,
          n = this.y,
          i = this.z,
          r = t.x,
          a = t.y,
          o = t.z,
          s = t.w,
          c = s * e + a * i - o * n,
          l = s * n + o * e - r * i,
          h = s * i + r * n - a * e,
          u = -r * e - a * n - o * i;
      return this.x = c * s + u * -r + l * -o - h * -a, this.y = l * s + u * -a + h * -r - c * -o, this.z = h * s + u * -o + c * -a - l * -r, this;
    },
    project: function project(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
    },
    unproject: function unproject(t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
    },
    transformDirection: function transformDirection(t) {
      var e = this.x,
          n = this.y,
          i = this.z,
          r = t.elements;
      return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
    },
    divide: function divide(t) {
      return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
    },
    divideScalar: function divideScalar(t) {
      return this.multiplyScalar(1 / t);
    },
    min: function min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
    },
    max: function max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
    },
    clamp: function clamp(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
    },
    clampScalar: function clampScalar(t, e) {
      return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
    },
    clampLength: function clampLength(t, e) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    },
    floor: function floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    },
    ceil: function ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    },
    round: function round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    },
    roundToZero: function roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
    },
    negate: function negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    },
    dot: function dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    },
    lengthSq: function lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    },
    length: function length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    manhattanLength: function manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    },
    normalize: function normalize() {
      return this.divideScalar(this.length() || 1);
    },
    setLength: function setLength(t) {
      return this.normalize().multiplyScalar(t);
    },
    lerp: function lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
    },
    lerpVectors: function lerpVectors(t, e, n) {
      return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
    },
    cross: function cross(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t);
    },
    crossVectors: function crossVectors(t, e) {
      var n = t.x,
          i = t.y,
          r = t.z,
          a = e.x,
          o = e.y,
          s = e.z;
      return this.x = i * s - r * o, this.y = r * a - n * s, this.z = n * o - i * a, this;
    },
    projectOnVector: function projectOnVector(t) {
      var e = t.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      var n = t.dot(this) / e;
      return this.copy(t).multiplyScalar(n);
    },
    projectOnPlane: function projectOnPlane(t) {
      return y.copy(this).projectOnVector(t), this.sub(y);
    },
    reflect: function reflect(t) {
      return this.sub(y.copy(t).multiplyScalar(2 * this.dot(t)));
    },
    angleTo: function angleTo(t) {
      var e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      var n = this.dot(t) / e;
      return Math.acos(h.clamp(n, -1, 1));
    },
    distanceTo: function distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    },
    distanceToSquared: function distanceToSquared(t) {
      var e = this.x - t.x,
          n = this.y - t.y,
          i = this.z - t.z;
      return e * e + n * n + i * i;
    },
    manhattanDistanceTo: function manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
    },
    setFromSpherical: function setFromSpherical(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    },
    setFromSphericalCoords: function setFromSphericalCoords(t, e, n) {
      var i = Math.sin(e) * t;
      return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
    },
    setFromCylindrical: function setFromCylindrical(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    },
    setFromCylindricalCoords: function setFromCylindricalCoords(t, e, n) {
      return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
    },
    setFromMatrixPosition: function setFromMatrixPosition(t) {
      var e = t.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this;
    },
    setFromMatrixScale: function setFromMatrixScale(t) {
      var e = this.setFromMatrixColumn(t, 0).length(),
          n = this.setFromMatrixColumn(t, 1).length(),
          i = this.setFromMatrixColumn(t, 2).length();
      return this.x = e, this.y = n, this.z = i, this;
    },
                            setFromMatrixColumn: function setFromMatrixColumn(t, e) {
      return this.fromArray(t.elements, 4 * e);
    },
    setFromMatrix3Column: function setFromMatrix3Column(t, e) {
      return this.fromArray(t.elements, 3 * e);
    },
    equals: function equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    },
    fromArray: function fromArray(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
    },
    toArray: function toArray(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
    },
    fromBufferAttribute: function fromBufferAttribute(t, e, n) {
      return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
    },
    random: function random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
  });
  var w = new b(),
      S = new C(),
      E = new b(0, 0, 0),
      T = new b(1, 1, 1),
      L = new b(),
      A = new b(),
      P = new b();

  function C() {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
  }

  Object.assign(C.prototype, {
    isMatrix4: !0,
    set: function set(t, e, n, i, r, a, o, s, c, l, h, u, d, f, p, m) {
      var g = this.elements;
      return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = h, g[14] = u, g[3] = d, g[7] = f, g[11] = p, g[15] = m, this;
    },
    identity: function identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    },
    clone: function clone() {
      return new C().fromArray(this.elements);
    },
    copy: function copy(t) {
      var e = this.elements,
          n = t.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
    },
    copyPosition: function copyPosition(t) {
      var e = this.elements,
          n = t.elements;
      return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
    },
    extractBasis: function extractBasis(t, e, n) {
      return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
    },
    makeBasis: function makeBasis(t, e, n) {
      return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
    },
    extractRotation: function extractRotation(t) {
      var e = this.elements,
          n = t.elements,
          i = 1 / w.setFromMatrixColumn(t, 0).length(),
          r = 1 / w.setFromMatrixColumn(t, 1).length(),
          a = 1 / w.setFromMatrixColumn(t, 2).length();
      return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    },
    makeRotationFromEuler: function makeRotationFromEuler(t) {
      t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
      var e = this.elements,
          n = t.x,
          i = t.y,
          r = t.z,
          a = Math.cos(n),
          o = Math.sin(n),
          s = Math.cos(i),
          c = Math.sin(i),
          l = Math.cos(r),
          h = Math.sin(r);

      if ("XYZ" === t.order) {
        var _t14 = a * l,
            _n7 = a * h,
            _i5 = o * l,
            _r4 = o * h;

        e[0] = s * l, e[4] = -s * h, e[8] = c, e[1] = _n7 + _i5 * c, e[5] = _t14 - _r4 * c, e[9] = -o * s, e[2] = _r4 - _t14 * c, e[6] = _i5 + _n7 * c, e[10] = a * s;
      } else if ("YXZ" === t.order) {
        var _t15 = s * l,
            _n8 = s * h,
            _i6 = c * l,
            _r5 = c * h;

        e[0] = _t15 + _r5 * o, e[4] = _i6 * o - _n8, e[8] = a * c, e[1] = a * h, e[5] = a * l, e[9] = -o, e[2] = _n8 * o - _i6, e[6] = _r5 + _t15 * o, e[10] = a * s;
      } else if ("ZXY" === t.order) {
        var _t16 = s * l,
            _n9 = s * h,
            _i7 = c * l,
            _r6 = c * h;

        e[0] = _t16 - _r6 * o, e[4] = -a * h, e[8] = _i7 + _n9 * o, e[1] = _n9 + _i7 * o, e[5] = a * l, e[9] = _r6 - _t16 * o, e[2] = -a * c, e[6] = o, e[10] = a * s;
      } else if ("ZYX" === t.order) {
        var _t17 = a * l,
            _n10 = a * h,
            _i8 = o * l,
            _r7 = o * h;

        e[0] = s * l, e[4] = _i8 * c - _n10, e[8] = _t17 * c + _r7, e[1] = s * h, e[5] = _r7 * c + _t17, e[9] = _n10 * c - _i8, e[2] = -c, e[6] = o * s, e[10] = a * s;
      } else if ("YZX" === t.order) {
        var _t18 = a * s,
            _n11 = a * c,
            _i9 = o * s,
            _r8 = o * c;

        e[0] = s * l, e[4] = _r8 - _t18 * h, e[8] = _i9 * h + _n11, e[1] = h, e[5] = a * l, e[9] = -o * l, e[2] = -c * l, e[6] = _n11 * h + _i9, e[10] = _t18 - _r8 * h;
      } else if ("XZY" === t.order) {
        var _t19 = a * s,
            _n12 = a * c,
            _i10 = o * s,
            _r9 = o * c;

        e[0] = s * l, e[4] = -h, e[8] = c * l, e[1] = _t19 * h + _r9, e[5] = a * l, e[9] = _n12 * h - _i10, e[2] = _i10 * h - _n12, e[6] = o * l, e[10] = _r9 * h + _t19;
      }

      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    },
    makeRotationFromQuaternion: function makeRotationFromQuaternion(t) {
      return this.compose(E, t, T);
    },
    lookAt: function lookAt(t, e, n) {
      var i = this.elements;
      return P.subVectors(t, e), 0 === P.lengthSq() && (P.z = 1), P.normalize(), L.crossVectors(n, P), 0 === L.lengthSq() && (1 === Math.abs(n.z) ? P.x += 1e-4 : P.z += 1e-4, P.normalize(), L.crossVectors(n, P)), L.normalize(), A.crossVectors(P, L), i[0] = L.x, i[4] = A.x, i[8] = P.x, i[1] = L.y, i[5] = A.y, i[9] = P.y, i[2] = L.z, i[6] = A.z, i[10] = P.z, this;
    },
    multiply: function multiply(t, e) {
      return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t);
    },
    premultiply: function premultiply(t) {
      return this.multiplyMatrices(t, this);
    },
    multiplyMatrices: function multiplyMatrices(t, e) {
      var n = t.elements,
          i = e.elements,
          r = this.elements,
          a = n[0],
          o = n[4],
          s = n[8],
          c = n[12],
          l = n[1],
          h = n[5],
          u = n[9],
          d = n[13],
          f = n[2],
          p = n[6],
          m = n[10],
          g = n[14],
          v = n[3],
          x = n[7],
          _ = n[11],
          y = n[15],
          M = i[0],
          b = i[4],
          w = i[8],
          S = i[12],
          E = i[1],
          T = i[5],
          L = i[9],
          A = i[13],
          P = i[2],
          C = i[6],
          D = i[10],
          N = i[14],
          R = i[3],
          I = i[7],
          O = i[11],
          z = i[15];
      return r[0] = a * M + o * E + s * P + c * R, r[4] = a * b + o * T + s * C + c * I, r[8] = a * w + o * L + s * D + c * O, r[12] = a * S + o * A + s * N + c * z, r[1] = l * M + h * E + u * P + d * R, r[5] = l * b + h * T + u * C + d * I, r[9] = l * w + h * L + u * D + d * O, r[13] = l * S + h * A + u * N + d * z, r[2] = f * M + p * E + m * P + g * R, r[6] = f * b + p * T + m * C + g * I, r[10] = f * w + p * L + m * D + g * O, r[14] = f * S + p * A + m * N + g * z, r[3] = v * M + x * E + _ * P + y * R, r[7] = v * b + x * T + _ * C + y * I, r[11] = v * w + x * L + _ * D + y * O, r[15] = v * S + x * A + _ * N + y * z, this;
    },
    multiplyScalar: function multiplyScalar(t) {
      var e = this.elements;
      return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
    },
    determinant: function determinant() {
      var t = this.elements,
          e = t[0],
          n = t[4],
          i = t[8],
          r = t[12],
          a = t[1],
          o = t[5],
          s = t[9],
          c = t[13],
          l = t[2],
          h = t[6],
          u = t[10],
          d = t[14];
      return t[3] * (+r * s * h - i * c * h - r * o * u + n * c * u + i * o * d - n * s * d) + t[7] * (+e * s * d - e * c * u + r * a * u - i * a * d + i * c * l - r * s * l) + t[11] * (+e * c * h - e * o * d - r * a * h + n * a * d + r * o * l - n * c * l) + t[15] * (-i * o * l - e * s * h + e * o * u + i * a * h - n * a * u + n * s * l);
    },
    transpose: function transpose() {
      var t = this.elements;
      var e;
      return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
    },
    setPosition: function setPosition(t, e, n) {
      var i = this.elements;
      return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
    },
    getInverse: function getInverse(t, e) {
      void 0 !== e && console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");
      var n = this.elements,
          i = t.elements,
          r = i[0],
          a = i[1],
          o = i[2],
          s = i[3],
          c = i[4],
          l = i[5],
          h = i[6],
          u = i[7],
          d = i[8],
          f = i[9],
          p = i[10],
          m = i[11],
          g = i[12],
          v = i[13],
          x = i[14],
          _ = i[15],
          y = f * x * u - v * p * u + v * h * m - l * x * m - f * h * _ + l * p * _,
          M = g * p * u - d * x * u - g * h * m + c * x * m + d * h * _ - c * p * _,
          b = d * v * u - g * f * u + g * l * m - c * v * m - d * l * _ + c * f * _,
          w = g * f * h - d * v * h - g * l * p + c * v * p + d * l * x - c * f * x,
          S = r * y + a * M + o * b + s * w;
      if (0 === S) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      var E = 1 / S;
      return n[0] = y * E, n[1] = (v * p * s - f * x * s - v * o * m + a * x * m + f * o * _ - a * p * _) * E, n[2] = (l * x * s - v * h * s + v * o * u - a * x * u - l * o * _ + a * h * _) * E, n[3] = (f * h * s - l * p * s - f * o * u + a * p * u + l * o * m - a * h * m) * E, n[4] = M * E, n[5] = (d * x * s - g * p * s + g * o * m - r * x * m - d * o * _ + r * p * _) * E, n[6] = (g * h * s - c * x * s - g * o * u + r * x * u + c * o * _ - r * h * _) * E, n[7] = (c * p * s - d * h * s + d * o * u - r * p * u - c * o * m + r * h * m) * E, n[8] = b * E, n[9] = (g * f * s - d * v * s - g * a * m + r * v * m + d * a * _ - r * f * _) * E, n[10] = (c * v * s - g * l * s + g * a * u - r * v * u - c * a * _ + r * l * _) * E, n[11] = (d * l * s - c * f * s - d * a * u + r * f * u + c * a * m - r * l * m) * E, n[12] = w * E, n[13] = (d * v * o - g * f * o + g * a * p - r * v * p - d * a * x + r * f * x) * E, n[14] = (g * l * o - c * v * o - g * a * h + r * v * h + c * a * x - r * l * x) * E, n[15] = (c * f * o - d * l * o + d * a * h - r * f * h - c * a * p + r * l * p) * E, this;
    },
    scale: function scale(t) {
      var e = this.elements,
          n = t.x,
          i = t.y,
          r = t.z;
      return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
    },
    getMaxScaleOnAxis: function getMaxScaleOnAxis() {
      var t = this.elements,
          e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
          n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
          i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, n, i));
    },
    makeTranslation: function makeTranslation(t, e, n) {
      return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
    },
    makeRotationX: function makeRotationX(t) {
      var e = Math.cos(t),
          n = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
    },
    makeRotationY: function makeRotationY(t) {
      var e = Math.cos(t),
          n = Math.sin(t);
      return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
    },
    makeRotationZ: function makeRotationZ(t) {
      var e = Math.cos(t),
          n = Math.sin(t);
      return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    },
    makeRotationAxis: function makeRotationAxis(t, e) {
      var n = Math.cos(e),
          i = Math.sin(e),
          r = 1 - n,
          a = t.x,
          o = t.y,
          s = t.z,
          c = r * a,
          l = r * o;
      return this.set(c * a + n, c * o - i * s, c * s + i * o, 0, c * o + i * s, l * o + n, l * s - i * a, 0, c * s - i * o, l * s + i * a, r * s * s + n, 0, 0, 0, 0, 1), this;
    },
    makeScale: function makeScale(t, e, n) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    },
    makeShear: function makeShear(t, e, n) {
      return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this;
    },
    compose: function compose(t, e, n) {
      var i = this.elements,
          r = e._x,
          a = e._y,
          o = e._z,
          s = e._w,
          c = r + r,
          l = a + a,
          h = o + o,
          u = r * c,
          d = r * l,
          f = r * h,
          p = a * l,
          m = a * h,
          g = o * h,
          v = s * c,
          x = s * l,
          _ = s * h,
          y = n.x,
          M = n.y,
          b = n.z;

      return i[0] = (1 - (p + g)) * y, i[1] = (d + _) * y, i[2] = (f - x) * y, i[3] = 0, i[4] = (d - _) * M, i[5] = (1 - (u + g)) * M, i[6] = (m + v) * M, i[7] = 0, i[8] = (f + x) * b, i[9] = (m - v) * b, i[10] = (1 - (u + p)) * b, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
    },
    decompose: function decompose(t, e, n) {
      var i = this.elements;
      var r = w.set(i[0], i[1], i[2]).length(),
          a = w.set(i[4], i[5], i[6]).length(),
          o = w.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], S.copy(this);
      var s = 1 / r,
          c = 1 / a,
          l = 1 / o;
      return S.elements[0] *= s, S.elements[1] *= s, S.elements[2] *= s, S.elements[4] *= c, S.elements[5] *= c, S.elements[6] *= c, S.elements[8] *= l, S.elements[9] *= l, S.elements[10] *= l, e.setFromRotationMatrix(S), n.x = r, n.y = a, n.z = o, this;
    },
    makePerspective: function makePerspective(t, e, n, i, r, a) {
      void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
      var o = this.elements,
          s = 2 * r / (e - t),
          c = 2 * r / (n - i),
          l = (e + t) / (e - t),
          h = (n + i) / (n - i),
          u = -(a + r) / (a - r),
          d = -2 * a * r / (a - r);
      return o[0] = s, o[4] = 0, o[8] = l, o[12] = 0, o[1] = 0, o[5] = c, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
    },
    makeOrthographic: function makeOrthographic(t, e, n, i, r, a) {
      var o = this.elements,
          s = 1 / (e - t),
          c = 1 / (n - i),
          l = 1 / (a - r),
          h = (e + t) * s,
          u = (n + i) * c,
          d = (a + r) * l;
      return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * l, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
    },
    equals: function equals(t) {
      var e = this.elements,
          n = t.elements;

      for (var _t20 = 0; _t20 < 16; _t20++) {
        if (e[_t20] !== n[_t20]) return !1;
      }

      return !0;
    },
    fromArray: function fromArray(t, e) {
      void 0 === e && (e = 0);

      for (var _n13 = 0; _n13 < 16; _n13++) {
        this.elements[_n13] = t[_n13 + e];
      }

      return this;
    },
    toArray: function toArray(t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var n = this.elements;
      return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
    }
  });
  var D = new C(),
      N = new _();

  function R() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : R.DefaultOrder;
    this._x = t, this._y = e, this._z = n, this._order = i;
  }

  function I() {
    this.mask = 1;
  }

  R.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], R.DefaultOrder = "XYZ", Object.defineProperties(R.prototype, {
    x: {
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t, this._onChangeCallback();
      }
    },
    y: {
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t, this._onChangeCallback();
      }
    },
    z: {
      get: function get() {
        return this._z;
      },
      set: function set(t) {
        this._z = t, this._onChangeCallback();
      }
    },
    order: {
      get: function get() {
        return this._order;
      },
      set: function set(t) {
        this._order = t, this._onChangeCallback();
      }
    }
  }), Object.assign(R.prototype, {
    isEuler: !0,
    set: function set(t, e, n, i) {
      return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this._onChangeCallback(), this;
    },
    clone: function clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    },
    copy: function copy(t) {
      return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
    },
    setFromRotationMatrix: function setFromRotationMatrix(t, e, n) {
      var i = h.clamp,
          r = t.elements,
          a = r[0],
          o = r[4],
          s = r[8],
          c = r[1],
          l = r[5],
          u = r[9],
          d = r[2],
          f = r[6],
          p = r[10];

      switch (e = e || this._order) {
        case "XYZ":
          this._y = Math.asin(i(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(f, l), this._z = 0);
          break;

        case "YXZ":
          this._x = Math.asin(-i(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(s, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, a), this._z = 0);
          break;

        case "ZXY":
          this._x = Math.asin(i(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-d, p), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, a));
          break;

        case "ZYX":
          this._y = Math.asin(-i(d, -1, 1)), Math.abs(d) < .9999999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, l));
          break;

        case "YZX":
          this._z = Math.asin(i(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, a)) : (this._x = 0, this._y = Math.atan2(s, p));
          break;

        case "XZY":
          this._z = Math.asin(-i(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-u, p), this._y = 0);
          break;

        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
      }

      return this._order = e, !1 !== n && this._onChangeCallback(), this;
    },
    setFromQuaternion: function setFromQuaternion(t, e, n) {
      return D.makeRotationFromQuaternion(t), this.setFromRotationMatrix(D, e, n);
    },
    setFromVector3: function setFromVector3(t, e) {
      return this.set(t.x, t.y, t.z, e || this._order);
    },
    reorder: function reorder(t) {
      return N.setFromEuler(this), this.setFromQuaternion(N, t);
    },
    equals: function equals(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
    },
    fromArray: function fromArray(t) {
      return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this;
    },
    toArray: function toArray(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
    },
    toVector3: function toVector3(t) {
      return t ? t.set(this._x, this._y, this._z) : new b(this._x, this._y, this._z);
    },
    _onChange: function _onChange(t) {
      return this._onChangeCallback = t, this;
    },
    _onChangeCallback: function _onChangeCallback() {}
  }), Object.assign(I.prototype, {
    set: function set(t) {
      this.mask = 1 << t | 0;
    },
    enable: function enable(t) {
      this.mask |= 1 << t | 0;
    },
    enableAll: function enableAll() {
      this.mask = -1;
    },
    toggle: function toggle(t) {
      this.mask ^= 1 << t | 0;
    },
    disable: function disable(t) {
      this.mask &= ~(1 << t | 0);
    },
    disableAll: function disableAll() {
      this.mask = 0;
    },
    test: function test(t) {
      return 0 != (this.mask & t.mask);
    }
  });
  var O = 0;
  var z = new b(),
      U = new _(),
      F = new C(),
      B = new b(),
      G = new b(),
      k = new b(),
      V = new _(),
      H = new b(1, 0, 0),
      W = new b(0, 1, 0),
      j = new b(0, 0, 1),
      X = {
    type: "added"
  },
      Y = {
    type: "removed"
  };

  function q() {
    Object.defineProperty(this, "id", {
      value: O++
    }), this.uuid = h.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = q.DefaultUp.clone();
    var t = new b(),
        e = new R(),
        n = new _(),
        i = new b(1, 1, 1);
    e._onChange(function () {
      n.setFromEuler(e, !1);
    }), n._onChange(function () {
      e.setFromQuaternion(n, void 0, !1);
    }), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new C()
      },
      normalMatrix: {
        value: new d()
      }
    }), this.matrix = new C(), this.matrixWorld = new C(), this.matrixAutoUpdate = q.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new I(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {};
  }

  function Z() {
    q.call(this), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }

  q.DefaultUp = new b(0, 1, 0), q.DefaultMatrixAutoUpdate = !0, q.prototype = Object.assign(Object.create(c.prototype), {
    constructor: q,
    isObject3D: !0,
    onBeforeRender: function onBeforeRender() {},
    onAfterRender: function onAfterRender() {},
    applyMatrix4: function applyMatrix4(t) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
    },
    applyQuaternion: function applyQuaternion(t) {
      return this.quaternion.premultiply(t), this;
    },
    setRotationFromAxisAngle: function setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    },
    setRotationFromEuler: function setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0);
    },
    setRotationFromMatrix: function setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    },
    setRotationFromQuaternion: function setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    },
    rotateOnAxis: function rotateOnAxis(t, e) {
      return U.setFromAxisAngle(t, e), this.quaternion.multiply(U), this;
    },
    rotateOnWorldAxis: function rotateOnWorldAxis(t, e) {
      return U.setFromAxisAngle(t, e), this.quaternion.premultiply(U), this;
    },
    rotateX: function rotateX(t) {
      return this.rotateOnAxis(H, t);
    },
    rotateY: function rotateY(t) {
      return this.rotateOnAxis(W, t);
    },
    rotateZ: function rotateZ(t) {
      return this.rotateOnAxis(j, t);
    },
    translateOnAxis: function translateOnAxis(t, e) {
      return z.copy(t).applyQuaternion(this.quaternion), this.position.add(z.multiplyScalar(e)), this;
    },
    translateX: function translateX(t) {
      return this.translateOnAxis(H, t);
    },
    translateY: function translateY(t) {
      return this.translateOnAxis(W, t);
    },
    translateZ: function translateZ(t) {
      return this.translateOnAxis(j, t);
    },
    localToWorld: function localToWorld(t) {
      return t.applyMatrix4(this.matrixWorld);
    },
    worldToLocal: function worldToLocal(t) {
      return t.applyMatrix4(F.getInverse(this.matrixWorld));
    },
    lookAt: function lookAt(t, e, n) {
      t.isVector3 ? B.copy(t) : B.set(t, e, n);
      var i = this.parent;
      this.updateWorldMatrix(!0, !1), G.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? F.lookAt(G, B, this.up) : F.lookAt(B, G, this.up), this.quaternion.setFromRotationMatrix(F), i && (F.extractRotation(i.matrixWorld), U.setFromRotationMatrix(F), this.quaternion.premultiply(U.inverse()));
    },
    add: function add(t) {
      if (arguments.length > 1) {
        for (var _t21 = 0; _t21 < arguments.length; _t21++) {
          this.add(arguments[_t21]);
        }

        return this;
      }

      return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(X)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
    },
    remove: function remove(t) {
      if (arguments.length > 1) {
        for (var _t22 = 0; _t22 < arguments.length; _t22++) {
          this.remove(arguments[_t22]);
        }

        return this;
      }

      var e = this.children.indexOf(t);
      return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Y)), this;
    },
    attach: function attach(t) {
      return this.updateWorldMatrix(!0, !1), F.getInverse(this.matrixWorld), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), F.multiply(t.parent.matrixWorld)), t.applyMatrix4(F), t.updateWorldMatrix(!1, !1), this.add(t), this;
    },
    getObjectById: function getObjectById(t) {
      return this.getObjectByProperty("id", t);
    },
    getObjectByName: function getObjectByName(t) {
      return this.getObjectByProperty("name", t);
    },
    getObjectByProperty: function getObjectByProperty(t, e) {
      if (this[t] === e) return this;

      for (var _n14 = 0, _i11 = this.children.length; _n14 < _i11; _n14++) {
        var _i12 = this.children[_n14].getObjectByProperty(t, e);

        if (void 0 !== _i12) return _i12;
      }
    },
    getWorldPosition: function getWorldPosition(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new b()), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld);
    },
    getWorldQuaternion: function getWorldQuaternion(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new _()), this.updateMatrixWorld(!0), this.matrixWorld.decompose(G, t, k), t;
    },
    getWorldScale: function getWorldScale(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new b()), this.updateMatrixWorld(!0), this.matrixWorld.decompose(G, V, t), t;
    },
    getWorldDirection: function getWorldDirection(t) {
      void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new b()), this.updateMatrixWorld(!0);
      var e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    },
    raycast: function raycast() {},
    traverse: function traverse(t) {
      t(this);
      var e = this.children;

      for (var _n15 = 0, _i13 = e.length; _n15 < _i13; _n15++) {
        e[_n15].traverse(t);
      }
    },
    traverseVisible: function traverseVisible(t) {
      if (!1 === this.visible) return;
      t(this);
      var e = this.children;

      for (var _n16 = 0, _i14 = e.length; _n16 < _i14; _n16++) {
        e[_n16].traverseVisible(t);
      }
    },
    traverseAncestors: function traverseAncestors(t) {
      var e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t));
    },
    updateMatrix: function updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    },
    updateMatrixWorld: function updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
      var e = this.children;

      for (var _n17 = 0, _i15 = e.length; _n17 < _i15; _n17++) {
        e[_n17].updateMatrixWorld(t);
      }
    },
    updateWorldMatrix: function updateWorldMatrix(t, e) {
      var n = this.parent;

      if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
        var _t23 = this.children;

        for (var _e5 = 0, _n18 = _t23.length; _e5 < _n18; _e5++) {
          _t23[_e5].updateWorldMatrix(!1, !0);
        }
      }
    },
    toJSON: function toJSON(t) {
      var e = void 0 === t || "string" == typeof t,
          n = {};
      e && (t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {}
      }, n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      var i = {};

      function r(e, n) {
        return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
      }

      if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON()), this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t.geometries, this.geometry);
        var _e6 = this.geometry.parameters;

        if (void 0 !== _e6 && void 0 !== _e6.shapes) {
          var _n19 = _e6.shapes;
          if (Array.isArray(_n19)) for (var _e7 = 0, _i16 = _n19.length; _e7 < _i16; _e7++) {
            var _i17 = _n19[_e7];
            r(t.shapes, _i17);
          } else r(t.shapes, _n19);
        }
      }

      if (void 0 !== this.material) if (Array.isArray(this.material)) {
        var _e8 = [];

        for (var _n20 = 0, _i18 = this.material.length; _n20 < _i18; _n20++) {
          _e8.push(r(t.materials, this.material[_n20]));
        }

        i.material = _e8;
      } else i.material = r(t.materials, this.material);

      if (this.children.length > 0) {
        i.children = [];

        for (var _e9 = 0; _e9 < this.children.length; _e9++) {
          i.children.push(this.children[_e9].toJSON(t).object);
        }
      }

      if (e) {
        var _e10 = a(t.geometries),
            _i19 = a(t.materials),
            _r10 = a(t.textures),
            _o = a(t.images),
            _s = a(t.shapes);

        _e10.length > 0 && (n.geometries = _e10), _i19.length > 0 && (n.materials = _i19), _r10.length > 0 && (n.textures = _r10), _o.length > 0 && (n.images = _o), _s.length > 0 && (n.shapes = _s);
      }

      return n.object = i, n;

      function a(t) {
        var e = [];

        for (var _n21 in t) {
          var _i20 = t[_n21];
          delete _i20.metadata, e.push(_i20);
        }

        return e;
      }
    },
    clone: function clone(t) {
      return new this.constructor().copy(this, t);
    },
    copy: function copy(t, e) {
      if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) for (var _e11 = 0; _e11 < t.children.length; _e11++) {
        var _n22 = t.children[_e11];
        this.add(_n22.clone());
      }
      return this;
    }
  }), Z.prototype = Object.assign(Object.create(q.prototype), {
    constructor: Z,
    isScene: !0,
    copy: function copy(t, e) {
      return q.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this;
    },
    toJSON: function toJSON(t) {
      var e = q.prototype.toJSON.call(this, t);
      return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.environment && (e.object.environment = this.environment.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });
  var J = [new b(), new b(), new b(), new b(), new b(), new b(), new b(), new b()],
      K = new b(),
      Q = new lt(),
      $ = new b(),
      tt = new b(),
      et = new b(),
      nt = new b(),
      it = new b(),
      rt = new b(),
      at = new b(),
      ot = new b(),
      st = new b(),
      ct = new b();

  function lt(t, e) {
    this.min = void 0 !== t ? t : new b(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new b(-1 / 0, -1 / 0, -1 / 0);
  }

  function ht(t, e, n, i, r) {
    for (var _a3 = 0, _o2 = t.length - 3; _a3 <= _o2; _a3 += 3) {
      ct.fromArray(t, _a3);

      var _o3 = r.x * Math.abs(ct.x) + r.y * Math.abs(ct.y) + r.z * Math.abs(ct.z),
          _s2 = e.dot(ct),
          _c = n.dot(ct),
          _l = i.dot(ct);

      if (Math.max(-Math.max(_s2, _c, _l), Math.min(_s2, _c, _l)) > _o3) return !1;
    }

    return !0;
  }

  Object.assign(lt.prototype, {
    isBox3: !0,
    set: function set(t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    },
    setFromArray: function setFromArray(t) {
      var e = 1 / 0,
          n = 1 / 0,
          i = 1 / 0,
          r = -1 / 0,
          a = -1 / 0,
          o = -1 / 0;

      for (var _s3 = 0, _c2 = t.length; _s3 < _c2; _s3 += 3) {
        var _c3 = t[_s3],
            _l2 = t[_s3 + 1],
            _h = t[_s3 + 2];
        _c3 < e && (e = _c3), _l2 < n && (n = _l2), _h < i && (i = _h), _c3 > r && (r = _c3), _l2 > a && (a = _l2), _h > o && (o = _h);
      }

      return this.min.set(e, n, i), this.max.set(r, a, o), this;
    },
    setFromBufferAttribute: function setFromBufferAttribute(t) {
      var e = 1 / 0,
          n = 1 / 0,
          i = 1 / 0,
          r = -1 / 0,
          a = -1 / 0,
          o = -1 / 0;

      for (var _s4 = 0, _c4 = t.count; _s4 < _c4; _s4++) {
        var _c5 = t.getX(_s4),
            _l3 = t.getY(_s4),
            _h2 = t.getZ(_s4);

        _c5 < e && (e = _c5), _l3 < n && (n = _l3), _h2 < i && (i = _h2), _c5 > r && (r = _c5), _l3 > a && (a = _l3), _h2 > o && (o = _h2);
      }

      return this.min.set(e, n, i), this.max.set(r, a, o), this;
    },
    setFromPoints: function setFromPoints(t) {
      this.makeEmpty();

      for (var _e12 = 0, _n23 = t.length; _e12 < _n23; _e12++) {
        this.expandByPoint(t[_e12]);
      }

      return this;
    },
    setFromCenterAndSize: function setFromCenterAndSize(t, e) {
      var n = K.copy(e).multiplyScalar(.5);
      return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
    },
    setFromObject: function setFromObject(t) {
      return this.makeEmpty(), this.expandByObject(t);
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    },
    makeEmpty: function makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    },
    isEmpty: function isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    },
    getCenter: function getCenter(t) {
      return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new b()), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
    },
    getSize: function getSize(t) {
      return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new b()), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    },
    expandByPoint: function expandByPoint(t) {
      return this.min.min(t), this.max.max(t), this;
    },
    expandByVector: function expandByVector(t) {
      return this.min.sub(t), this.max.add(t), this;
    },
    expandByScalar: function expandByScalar(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    },
    expandByObject: function expandByObject(t) {
      t.updateWorldMatrix(!1, !1);
      var e = t.geometry;
      void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), Q.copy(e.boundingBox), Q.applyMatrix4(t.matrixWorld), this.union(Q));
      var n = t.children;

      for (var _t24 = 0, _e13 = n.length; _t24 < _e13; _t24++) {
        this.expandByObject(n[_t24]);
      }

      return this;
    },
    containsPoint: function containsPoint(t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
    },
    containsBox: function containsBox(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
    },
    getParameter: function getParameter(t, e) {
      return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new b()), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
    },
    intersectsBox: function intersectsBox(t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
    },
    intersectsSphere: function intersectsSphere(t) {
      return this.clampPoint(t.center, K), K.distanceToSquared(t.center) <= t.radius * t.radius;
    },
    intersectsPlane: function intersectsPlane(t) {
      var e, n;
      return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
    },
    intersectsTriangle: function intersectsTriangle(t) {
      if (this.isEmpty()) return !1;
      this.getCenter(at), ot.subVectors(this.max, at), $.subVectors(t.a, at), tt.subVectors(t.b, at), et.subVectors(t.c, at), nt.subVectors(tt, $), it.subVectors(et, tt), rt.subVectors($, et);
      var e = [0, -nt.z, nt.y, 0, -it.z, it.y, 0, -rt.z, rt.y, nt.z, 0, -nt.x, it.z, 0, -it.x, rt.z, 0, -rt.x, -nt.y, nt.x, 0, -it.y, it.x, 0, -rt.y, rt.x, 0];
      return !!ht(e, $, tt, et, ot) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!ht(e, $, tt, et, ot) && (st.crossVectors(nt, it), e = [st.x, st.y, st.z], ht(e, $, tt, et, ot)));
    },
    clampPoint: function clampPoint(t, e) {
      return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new b()), e.copy(t).clamp(this.min, this.max);
    },
    distanceToPoint: function distanceToPoint(t) {
      return K.copy(t).clamp(this.min, this.max).sub(t).length();
    },
    getBoundingSphere: function getBoundingSphere(t) {
      return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), t.radius = .5 * this.getSize(K).length(), t;
    },
    intersect: function intersect(t) {
      return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
    },
    union: function union(t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    },
    applyMatrix4: function applyMatrix4(t) {
      return this.isEmpty() || (J[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), J[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), J[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), J[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), J[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), J[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), J[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), J[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(J)), this;
    },
    translate: function translate(t) {
      return this.min.add(t), this.max.add(t), this;
    },
    equals: function equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }
  });
  var ut = new lt();

  function dt(t, e) {
    this.center = void 0 !== t ? t : new b(), this.radius = void 0 !== e ? e : -1;
  }

  Object.assign(dt.prototype, {
    set: function set(t, e) {
      return this.center.copy(t), this.radius = e, this;
    },
    setFromPoints: function setFromPoints(t, e) {
      var n = this.center;
      void 0 !== e ? n.copy(e) : ut.setFromPoints(t).getCenter(n);
      var i = 0;

      for (var _e14 = 0, _r11 = t.length; _e14 < _r11; _e14++) {
        i = Math.max(i, n.distanceToSquared(t[_e14]));
      }

      return this.radius = Math.sqrt(i), this;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.center.copy(t.center), this.radius = t.radius, this;
    },
    isEmpty: function isEmpty() {
      return this.radius < 0;
    },
    makeEmpty: function makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    },
    containsPoint: function containsPoint(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    },
    distanceToPoint: function distanceToPoint(t) {
      return t.distanceTo(this.center) - this.radius;
    },
    intersectsSphere: function intersectsSphere(t) {
      var e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    },
    intersectsBox: function intersectsBox(t) {
      return t.intersectsSphere(this);
    },
    intersectsPlane: function intersectsPlane(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    },
    clampPoint: function clampPoint(t, e) {
      var n = this.center.distanceToSquared(t);
      return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new b()), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
    },
    getBoundingBox: function getBoundingBox(t) {
      return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new lt()), this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
    },
    applyMatrix4: function applyMatrix4(t) {
      return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
    },
    translate: function translate(t) {
      return this.center.add(t), this;
    },
    equals: function equals(t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }
  });

  var ft = new b(),
      pt = new b(),
      mt = new b(),
      gt = new b(),
      vt = new b(),
      xt = new b(),
      _t = new b();

  function yt(t, e) {
    this.origin = void 0 !== t ? t : new b(), this.direction = void 0 !== e ? e : new b(0, 0, -1);
  }

  Object.assign(yt.prototype, {
    set: function set(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    },
    at: function at(t, e) {
      return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new b()), e.copy(this.direction).multiplyScalar(t).add(this.origin);
    },
    lookAt: function lookAt(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this;
    },
    recast: function recast(t) {
      return this.origin.copy(this.at(t, ft)), this;
    },
    closestPointToPoint: function closestPointToPoint(t, e) {
      void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new b()), e.subVectors(t, this.origin);
      var n = e.dot(this.direction);
      return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
    },
    distanceToPoint: function distanceToPoint(t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    },
    distanceSqToPoint: function distanceSqToPoint(t) {
      var e = ft.subVectors(t, this.origin).dot(this.direction);
      return e < 0 ? this.origin.distanceToSquared(t) : (ft.copy(this.direction).multiplyScalar(e).add(this.origin), ft.distanceToSquared(t));
    },
    distanceSqToSegment: function distanceSqToSegment(t, e, n, i) {
      pt.copy(t).add(e).multiplyScalar(.5), mt.copy(e).sub(t).normalize(), gt.copy(this.origin).sub(pt);
      var r = .5 * t.distanceTo(e),
          a = -this.direction.dot(mt),
          o = gt.dot(this.direction),
          s = -gt.dot(mt),
          c = gt.lengthSq(),
          l = Math.abs(1 - a * a);
      var h, u, d, f;
      if (l > 0) {
        if (h = a * s - o, u = a * o - s, f = r * l, h >= 0) {
          if (u >= -f) {
            if (u <= f) {
              var _t25 = 1 / l;

              h *= _t25, u *= _t25, d = h * (h + a * u + 2 * o) + u * (a * h + u + 2 * s) + c;
            } else u = r, h = Math.max(0, -(a * u + o)), d = -h * h + u * (u + 2 * s) + c;
          } else u = -r, h = Math.max(0, -(a * u + o)), d = -h * h + u * (u + 2 * s) + c;
        } else u <= -f ? (h = Math.max(0, -(-a * r + o)), u = h > 0 ? -r : Math.min(Math.max(-r, -s), r), d = -h * h + u * (u + 2 * s) + c) : u <= f ? (h = 0, u = Math.min(Math.max(-r, -s), r), d = u * (u + 2 * s) + c) : (h = Math.max(0, -(a * r + o)), u = h > 0 ? r : Math.min(Math.max(-r, -s), r), d = -h * h + u * (u + 2 * s) + c);
      } else u = a > 0 ? -r : r, h = Math.max(0, -(a * u + o)), d = -h * h + u * (u + 2 * s) + c;
      return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(mt).multiplyScalar(u).add(pt), d;
    },
    intersectSphere: function intersectSphere(t, e) {
      ft.subVectors(t.center, this.origin);
      var n = ft.dot(this.direction),
          i = ft.dot(ft) - n * n,
          r = t.radius * t.radius;
      if (i > r) return null;
      var a = Math.sqrt(r - i),
          o = n - a,
          s = n + a;
      return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e);
    },
    intersectsSphere: function intersectsSphere(t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    },
    distanceToPlane: function distanceToPlane(t) {
      var e = t.normal.dot(this.direction);
      if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      var n = -(this.origin.dot(t.normal) + t.constant) / e;
      return n >= 0 ? n : null;
    },
    intersectPlane: function intersectPlane(t, e) {
      var n = this.distanceToPlane(t);
      return null === n ? null : this.at(n, e);
    },
    intersectsPlane: function intersectsPlane(t) {
      var e = t.distanceToPoint(this.origin);
      if (0 === e) return !0;
      return t.normal.dot(this.direction) * e < 0;
    },
    intersectBox: function intersectBox(t, e) {
      var n, i, r, a, o, s;
      var c = 1 / this.direction.x,
          l = 1 / this.direction.y,
          h = 1 / this.direction.z,
          u = this.origin;
      return c >= 0 ? (n = (t.min.x - u.x) * c, i = (t.max.x - u.x) * c) : (n = (t.max.x - u.x) * c, i = (t.min.x - u.x) * c), l >= 0 ? (r = (t.min.y - u.y) * l, a = (t.max.y - u.y) * l) : (r = (t.max.y - u.y) * l, a = (t.min.y - u.y) * l), n > a || r > i ? null : ((r > n || n != n) && (n = r), (a < i || i != i) && (i = a), h >= 0 ? (o = (t.min.z - u.z) * h, s = (t.max.z - u.z) * h) : (o = (t.max.z - u.z) * h, s = (t.min.z - u.z) * h), n > s || o > i ? null : ((o > n || n != n) && (n = o), (s < i || i != i) && (i = s), i < 0 ? null : this.at(n >= 0 ? n : i, e)));
    },
    intersectsBox: function intersectsBox(t) {
      return null !== this.intersectBox(t, ft);
    },
    intersectTriangle: function intersectTriangle(t, e, n, i, r) {
      vt.subVectors(e, t), xt.subVectors(n, t), _t.crossVectors(vt, xt);
      var a,
          o = this.direction.dot(_t);

      if (o > 0) {
        if (i) return null;
        a = 1;
      } else {
        if (!(o < 0)) return null;
        a = -1, o = -o;
      }

      gt.subVectors(this.origin, t);
      var s = a * this.direction.dot(xt.crossVectors(gt, xt));
      if (s < 0) return null;
      var c = a * this.direction.dot(vt.cross(gt));
      if (c < 0) return null;
      if (s + c > o) return null;
      var l = -a * gt.dot(_t);
      return l < 0 ? null : this.at(l / o, r);
    },
    applyMatrix4: function applyMatrix4(t) {
      return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
    },
    equals: function equals(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }
  });
  var Mt = new b(),
      bt = new b(),
      wt = new d();

  function St(t, e) {
    this.normal = void 0 !== t ? t : new b(1, 0, 0), this.constant = void 0 !== e ? e : 0;
  }

  Object.assign(St.prototype, {
    isPlane: !0,
    set: function set(t, e) {
      return this.normal.copy(t), this.constant = e, this;
    },
    setComponents: function setComponents(t, e, n, i) {
      return this.normal.set(t, e, n), this.constant = i, this;
    },
    setFromNormalAndCoplanarPoint: function setFromNormalAndCoplanarPoint(t, e) {
      return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
    },
    setFromCoplanarPoints: function setFromCoplanarPoints(t, e, n) {
      var i = Mt.subVectors(n, e).cross(bt.subVectors(t, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, t), this;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.normal.copy(t.normal), this.constant = t.constant, this;
    },
    normalize: function normalize() {
      var t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), this.constant *= t, this;
    },
    negate: function negate() {
      return this.constant *= -1, this.normal.negate(), this;
    },
    distanceToPoint: function distanceToPoint(t) {
      return this.normal.dot(t) + this.constant;
    },
    distanceToSphere: function distanceToSphere(t) {
      return this.distanceToPoint(t.center) - t.radius;
    },
    projectPoint: function projectPoint(t, e) {
      return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new b()), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
    },
    intersectLine: function intersectLine(t, e) {
      void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new b());
      var n = t.delta(Mt),
          i = this.normal.dot(n);
      if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
      var r = -(t.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? void 0 : e.copy(n).multiplyScalar(r).add(t.start);
    },
    intersectsLine: function intersectsLine(t) {
      var e = this.distanceToPoint(t.start),
          n = this.distanceToPoint(t.end);
      return e < 0 && n > 0 || n < 0 && e > 0;
    },
    intersectsBox: function intersectsBox(t) {
      return t.intersectsPlane(this);
    },
    intersectsSphere: function intersectsSphere(t) {
      return t.intersectsPlane(this);
    },
    coplanarPoint: function coplanarPoint(t) {
      return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new b()), t.copy(this.normal).multiplyScalar(-this.constant);
    },
    applyMatrix4: function applyMatrix4(t, e) {
      var n = e || wt.getNormalMatrix(t),
          i = this.coplanarPoint(Mt).applyMatrix4(t),
          r = this.normal.applyMatrix3(n).normalize();
      return this.constant = -i.dot(r), this;
    },
    translate: function translate(t) {
      return this.constant -= t.dot(this.normal), this;
    },
    equals: function equals(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    }
  });
  var Et = new b(),
      Tt = new b(),
      Lt = new b(),
      At = new b(),
      Pt = new b(),
      Ct = new b(),
      Dt = new b(),
      Nt = new b(),
      Rt = new b(),
      It = new b();

  function Ot(t, e, n) {
    this.a = void 0 !== t ? t : new b(), this.b = void 0 !== e ? e : new b(), this.c = void 0 !== n ? n : new b();
  }

  Object.assign(Ot, {
    getNormal: function getNormal(t, e, n, i) {
      void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new b()), i.subVectors(n, e), Et.subVectors(t, e), i.cross(Et);
      var r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    },
    getBarycoord: function getBarycoord(t, e, n, i, r) {
      Et.subVectors(i, e), Tt.subVectors(n, e), Lt.subVectors(t, e);
      var a = Et.dot(Et),
          o = Et.dot(Tt),
          s = Et.dot(Lt),
          c = Tt.dot(Tt),
          l = Tt.dot(Lt),
          h = a * c - o * o;
      if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new b()), 0 === h) return r.set(-2, -1, -1);
      var u = 1 / h,
          d = (c * s - o * l) * u,
          f = (a * l - o * s) * u;
      return r.set(1 - d - f, f, d);
    },
    containsPoint: function containsPoint(t, e, n, i) {
      return Ot.getBarycoord(t, e, n, i, At), At.x >= 0 && At.y >= 0 && At.x + At.y <= 1;
    },
    getUV: function getUV(t, e, n, i, r, a, o, s) {
      return this.getBarycoord(t, e, n, i, At), s.set(0, 0), s.addScaledVector(r, At.x), s.addScaledVector(a, At.y), s.addScaledVector(o, At.z), s;
    },
    isFrontFacing: function isFrontFacing(t, e, n, i) {
      return Et.subVectors(n, e), Tt.subVectors(t, e), Et.cross(Tt).dot(i) < 0;
    }
  }), Object.assign(Ot.prototype, {
    set: function set(t, e, n) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
    },
    setFromPointsAndIndices: function setFromPointsAndIndices(t, e, n, i) {
      return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    },
    getArea: function getArea() {
      return Et.subVectors(this.c, this.b), Tt.subVectors(this.a, this.b), .5 * Et.cross(Tt).length();
    },
    getMidpoint: function getMidpoint(t) {
      return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new b()), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    },
    getNormal: function getNormal(t) {
      return Ot.getNormal(this.a, this.b, this.c, t);
    },
    getPlane: function getPlane(t) {
      return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new St()), t.setFromCoplanarPoints(this.a, this.b, this.c);
    },
    getBarycoord: function getBarycoord(t, e) {
      return Ot.getBarycoord(t, this.a, this.b, this.c, e);
    },
    getUV: function getUV(t, e, n, i, r) {
      return Ot.getUV(t, this.a, this.b, this.c, e, n, i, r);
    },
    containsPoint: function containsPoint(t) {
      return Ot.containsPoint(t, this.a, this.b, this.c);
    },
    isFrontFacing: function isFrontFacing(t) {
      return Ot.isFrontFacing(this.a, this.b, this.c, t);
    },
    intersectsBox: function intersectsBox(t) {
      return t.intersectsTriangle(this);
    },
    closestPointToPoint: function closestPointToPoint(t, e) {
      void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new b());
      var n = this.a,
          i = this.b,
          r = this.c;
      var a, o;
      Pt.subVectors(i, n), Ct.subVectors(r, n), Nt.subVectors(t, n);
      var s = Pt.dot(Nt),
          c = Ct.dot(Nt);
      if (s <= 0 && c <= 0) return e.copy(n);
      Rt.subVectors(t, i);
      var l = Pt.dot(Rt),
          h = Ct.dot(Rt);
      if (l >= 0 && h <= l) return e.copy(i);
      var u = s * h - l * c;
      if (u <= 0 && s >= 0 && l <= 0) return a = s / (s - l), e.copy(n).addScaledVector(Pt, a);
      It.subVectors(t, r);
      var d = Pt.dot(It),
          f = Ct.dot(It);
      if (f >= 0 && d <= f) return e.copy(r);
      var p = d * c - s * f;
      if (p <= 0 && c >= 0 && f <= 0) return o = c / (c - f), e.copy(n).addScaledVector(Ct, o);
      var m = l * f - d * h;
      if (m <= 0 && h - l >= 0 && d - f >= 0) return Dt.subVectors(r, i), o = (h - l) / (h - l + (d - f)), e.copy(i).addScaledVector(Dt, o);
      var g = 1 / (m + p + u);
      return a = p * g, o = u * g, e.copy(n).addScaledVector(Pt, a).addScaledVector(Ct, o);
    },
    equals: function equals(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }
  });
  var zt = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  },
      Ut = {
    h: 0,
    s: 0,
    l: 0
  },
      Ft = {
    h: 0,
    s: 0,
    l: 0
  };

  function Bt(t, e, n) {
    return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
  }

  function Gt(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t;
  }

  function kt(t) {
    return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4);
  }

  function Vt(t) {
    return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055;
  }

  function Ht(t, e, n, i, r, a) {
    this.a = t, this.b = e, this.c = n, this.normal = i && i.isVector3 ? i : new b(), this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new Bt(), this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0;
  }

  Object.assign(Bt.prototype, {
    isColor: !0,
    r: 1,
    g: 1,
    b: 1,
    set: function set(t) {
      return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this;
    },
    setScalar: function setScalar(t) {
      return this.r = t, this.g = t, this.b = t, this;
    },
    setHex: function setHex(t) {
      return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this;
    },
    setRGB: function setRGB(t, e, n) {
      return this.r = t, this.g = e, this.b = n, this;
    },
    setHSL: function setHSL(t, e, n) {
      if (t = h.euclideanModulo(t, 1), e = h.clamp(e, 0, 1), n = h.clamp(n, 0, 1), 0 === e) this.r = this.g = this.b = n;else {
        var _i21 = n <= .5 ? n * (1 + e) : n + e - n * e,
            _r12 = 2 * n - _i21;

        this.r = Gt(_r12, _i21, t + 1 / 3), this.g = Gt(_r12, _i21, t), this.b = Gt(_r12, _i21, t - 1 / 3);
      }
      return this;
    },
    setStyle: function setStyle(t) {
      function e(e) {
        void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
      }

      var n;

      if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
        var _t26;

        var _i22 = n[1],
            _r13 = n[2];

        switch (_i22) {
          case "rgb":
          case "rgba":
            if (_t26 = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(_r13)) return this.r = Math.min(255, parseInt(_t26[1], 10)) / 255, this.g = Math.min(255, parseInt(_t26[2], 10)) / 255, this.b = Math.min(255, parseInt(_t26[3], 10)) / 255, e(_t26[5]), this;
            if (_t26 = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(_r13)) return this.r = Math.min(100, parseInt(_t26[1], 10)) / 100, this.g = Math.min(100, parseInt(_t26[2], 10)) / 100, this.b = Math.min(100, parseInt(_t26[3], 10)) / 100, e(_t26[5]), this;
            break;

          case "hsl":
          case "hsla":
            if (_t26 = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(_r13)) {
              var _n24 = parseFloat(_t26[1]) / 360,
                  _i23 = parseInt(_t26[2], 10) / 100,
                  _r14 = parseInt(_t26[3], 10) / 100;

              return e(_t26[5]), this.setHSL(_n24, _i23, _r14);
            }

        }
      } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
        var _t27 = n[1],
            _e15 = _t27.length;
        if (3 === _e15) return this.r = parseInt(_t27.charAt(0) + _t27.charAt(0), 16) / 255, this.g = parseInt(_t27.charAt(1) + _t27.charAt(1), 16) / 255, this.b = parseInt(_t27.charAt(2) + _t27.charAt(2), 16) / 255, this;
        if (6 === _e15) return this.r = parseInt(_t27.charAt(0) + _t27.charAt(1), 16) / 255, this.g = parseInt(_t27.charAt(2) + _t27.charAt(3), 16) / 255, this.b = parseInt(_t27.charAt(4) + _t27.charAt(5), 16) / 255, this;
      }

      return t && t.length > 0 ? this.setColorName(t) : this;
    },
    setColorName: function setColorName(t) {
      var e = zt[t];
      return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this;
    },
    clone: function clone() {
      return new this.constructor(this.r, this.g, this.b);
    },
    copy: function copy(t) {
      return this.r = t.r, this.g = t.g, this.b = t.b, this;
    },
    copyGammaToLinear: function copyGammaToLinear(t, e) {
      return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this;
    },
    copyLinearToGamma: function copyLinearToGamma(t, e) {
      void 0 === e && (e = 2);
      var n = e > 0 ? 1 / e : 1;
      return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this;
    },
    convertGammaToLinear: function convertGammaToLinear(t) {
      return this.copyGammaToLinear(this, t), this;
    },
    convertLinearToGamma: function convertLinearToGamma(t) {
      return this.copyLinearToGamma(this, t), this;
    },
    copySRGBToLinear: function copySRGBToLinear(t) {
      return this.r = kt(t.r), this.g = kt(t.g), this.b = kt(t.b), this;
    },
    copyLinearToSRGB: function copyLinearToSRGB(t) {
      return this.r = Vt(t.r), this.g = Vt(t.g), this.b = Vt(t.b), this;
    },
    convertSRGBToLinear: function convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    },
    convertLinearToSRGB: function convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    },
    getHex: function getHex() {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
    },
    getHexString: function getHexString() {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    },
    getHSL: function getHSL(t) {
      void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
        h: 0,
        s: 0,
        l: 0
      });
      var e = this.r,
          n = this.g,
          i = this.b,
          r = Math.max(e, n, i),
          a = Math.min(e, n, i);
      var o, s;
      var c = (a + r) / 2;
      if (a === r) o = 0, s = 0;else {
        var _t28 = r - a;

        switch (s = c <= .5 ? _t28 / (r + a) : _t28 / (2 - r - a), r) {
          case e:
            o = (n - i) / _t28 + (n < i ? 6 : 0);
            break;

          case n:
            o = (i - e) / _t28 + 2;
            break;

          case i:
            o = (e - n) / _t28 + 4;
        }

        o /= 6;
      }
      return t.h = o, t.s = s, t.l = c, t;
    },
    getStyle: function getStyle() {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
    },
    offsetHSL: function offsetHSL(t, e, n) {
      return this.getHSL(Ut), Ut.h += t, Ut.s += e, Ut.l += n, this.setHSL(Ut.h, Ut.s, Ut.l), this;
    },
    add: function add(t) {
      return this.r += t.r, this.g += t.g, this.b += t.b, this;
    },
    addColors: function addColors(t, e) {
      return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
    },
    addScalar: function addScalar(t) {
      return this.r += t, this.g += t, this.b += t, this;
    },
    sub: function sub(t) {
      return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
    },
    multiply: function multiply(t) {
      return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
    },
    multiplyScalar: function multiplyScalar(t) {
      return this.r *= t, this.g *= t, this.b *= t, this;
    },
    lerp: function lerp(t, e) {
      return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
    },
    lerpHSL: function lerpHSL(t, e) {
      this.getHSL(Ut), t.getHSL(Ft);
      var n = h.lerp(Ut.h, Ft.h, e),
          i = h.lerp(Ut.s, Ft.s, e),
          r = h.lerp(Ut.l, Ft.l, e);
      return this.setHSL(n, i, r), this;
    },
    equals: function equals(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    },
    fromArray: function fromArray(t, e) {
      return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
    },
    toArray: function toArray(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
    },
    fromBufferAttribute: function fromBufferAttribute(t, e) {
      return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this;
    },
    toJSON: function toJSON() {
      return this.getHex();
    }
  }), Bt.NAMES = zt, Object.assign(Ht.prototype, {
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;

      for (var _e16 = 0, _n25 = t.vertexNormals.length; _e16 < _n25; _e16++) {
        this.vertexNormals[_e16] = t.vertexNormals[_e16].clone();
      }

      for (var _e17 = 0, _n26 = t.vertexColors.length; _e17 < _n26; _e17++) {
        this.vertexColors[_e17] = t.vertexColors[_e17].clone();
      }

      return this;
    }
  });
  var Wt = 0;

  function jt() {
    Object.defineProperty(this, "id", {
      value: Wt++
    }), this.uuid = h.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.flatShading = !1, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0;
  }

  function Xt(t) {
    jt.call(this), this.type = "MeshBasicMaterial", this.color = new Bt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(t);
  }

  jt.prototype = Object.assign(Object.create(c.prototype), {
    constructor: jt,
    isMaterial: !0,
    onBeforeCompile: function onBeforeCompile() {},
    customProgramCacheKey: function customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    },
    setValues: function setValues(t) {
      if (void 0 !== t) for (var _e18 in t) {
        var _n27 = t[_e18];

        if (void 0 === _n27) {
          console.warn("THREE.Material: '" + _e18 + "' parameter is undefined.");
          continue;
        }

        if ("shading" === _e18) {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === _n27;
          continue;
        }

        var _i24 = this[_e18];
        void 0 !== _i24 ? _i24 && _i24.isColor ? _i24.set(_n27) : _i24 && _i24.isVector3 && _n27 && _n27.isVector3 ? _i24.copy(_n27) : this[_e18] = _n27 : console.warn("THREE." + this.type + ": '" + _e18 + "' is not a property of this material.");
      }
    },
    toJSON: function toJSON(t) {
      var e = void 0 === t || "string" == typeof t;
      e && (t = {
        textures: {},
        images: {}
      });
      var n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };

      function i(t) {
        var e = [];

        for (var _n28 in t) {
          var _i25 = t[_n28];
          delete _i25.metadata, e.push(_i25);
        }

        return e;
      }

      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
        var _e19 = i(t.textures),
            _r15 = i(t.images);

        _e19.length > 0 && (n.textures = _e19), _r15.length > 0 && (n.images = _r15);
      }

      return n;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
      var e = t.clippingPlanes;
      var n = null;

      if (null !== e) {
        var _t29 = e.length;
        n = new Array(_t29);

        for (var _i26 = 0; _i26 !== _t29; ++_i26) {
          n[_i26] = e[_i26].clone();
        }
      }

      return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }), Object.defineProperty(jt.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  }), Xt.prototype = Object.create(jt.prototype), Xt.prototype.constructor = Xt, Xt.prototype.isMeshBasicMaterial = !0, Xt.prototype.copy = function (t) {
    return jt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this;
  };
  var Yt = new b(),
      qt = new u();

  function Zt(t, e, n) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = 35044, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0;
  }

  function Jt(t, e, n) {
    Zt.call(this, new Int8Array(t), e, n);
  }

  function Kt(t, e, n) {
    Zt.call(this, new Uint8Array(t), e, n);
  }

  function Qt(t, e, n) {
    Zt.call(this, new Uint8ClampedArray(t), e, n);
  }

  function $t(t, e, n) {
    Zt.call(this, new Int16Array(t), e, n);
  }

  function te(t, e, n) {
    Zt.call(this, new Uint16Array(t), e, n);
  }

  function ee(t, e, n) {
    Zt.call(this, new Int32Array(t), e, n);
  }

  function ne(t, e, n) {
    Zt.call(this, new Uint32Array(t), e, n);
  }

  function ie(t, e, n) {
    Zt.call(this, new Float32Array(t), e, n);
  }

  function re(t, e, n) {
    Zt.call(this, new Float64Array(t), e, n);
  }

  function ae() {
    this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1;
  }

  function oe(t) {
    if (0 === t.length) return -1 / 0;
    var e = t[0];

    for (var _n29 = 1, _i27 = t.length; _n29 < _i27; ++_n29) {
      t[_n29] > e && (e = t[_n29]);
    }

    return e;
  }

  Object.defineProperty(Zt.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  }), Object.assign(Zt.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function onUploadCallback() {},
    setUsage: function setUsage(t) {
      return this.usage = t, this;
    },
    copy: function copy(t) {
      return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
    },
    copyAt: function copyAt(t, e, n) {
      t *= this.itemSize, n *= e.itemSize;

      for (var _i28 = 0, _r16 = this.itemSize; _i28 < _r16; _i28++) {
        this.array[t + _i28] = e.array[n + _i28];
      }

      return this;
    },
    copyArray: function copyArray(t) {
      return this.array.set(t), this;
    },
    copyColorsArray: function copyColorsArray(t) {
      var e = this.array;
      var n = 0;

      for (var _i29 = 0, _r17 = t.length; _i29 < _r17; _i29++) {
        var _r18 = t[_i29];
        void 0 === _r18 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", _i29), _r18 = new Bt()), e[n++] = _r18.r, e[n++] = _r18.g, e[n++] = _r18.b;
      }

      return this;
    },
    copyVector2sArray: function copyVector2sArray(t) {
      var e = this.array;
      var n = 0;

      for (var _i30 = 0, _r19 = t.length; _i30 < _r19; _i30++) {
        var _r20 = t[_i30];
        void 0 === _r20 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", _i30), _r20 = new u()), e[n++] = _r20.x, e[n++] = _r20.y;
      }

      return this;
    },
    copyVector3sArray: function copyVector3sArray(t) {
      var e = this.array;
      var n = 0;

      for (var _i31 = 0, _r21 = t.length; _i31 < _r21; _i31++) {
        var _r22 = t[_i31];
        void 0 === _r22 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", _i31), _r22 = new b()), e[n++] = _r22.x, e[n++] = _r22.y, e[n++] = _r22.z;
      }

      return this;
    },
    copyVector4sArray: function copyVector4sArray(t) {
      var e = this.array;
      var n = 0;

      for (var _i32 = 0, _r23 = t.length; _i32 < _r23; _i32++) {
        var _r24 = t[_i32];
        void 0 === _r24 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", _i32), _r24 = new v()), e[n++] = _r24.x, e[n++] = _r24.y, e[n++] = _r24.z, e[n++] = _r24.w;
      }

      return this;
    },
    applyMatrix3: function applyMatrix3(t) {
      if (2 === this.itemSize) for (var _e20 = 0, _n30 = this.count; _e20 < _n30; _e20++) {
        qt.fromBufferAttribute(this, _e20), qt.applyMatrix3(t), this.setXY(_e20, qt.x, qt.y);
      } else if (3 === this.itemSize) for (var _e21 = 0, _n31 = this.count; _e21 < _n31; _e21++) {
        Yt.fromBufferAttribute(this, _e21), Yt.applyMatrix3(t), this.setXYZ(_e21, Yt.x, Yt.y, Yt.z);
      }
      return this;
    },
    applyMatrix4: function applyMatrix4(t) {
      for (var _e22 = 0, _n32 = this.count; _e22 < _n32; _e22++) {
        Yt.x = this.getX(_e22), Yt.y = this.getY(_e22), Yt.z = this.getZ(_e22), Yt.applyMatrix4(t), this.setXYZ(_e22, Yt.x, Yt.y, Yt.z);
      }

      return this;
    },
    applyNormalMatrix: function applyNormalMatrix(t) {
      for (var _e23 = 0, _n33 = this.count; _e23 < _n33; _e23++) {
        Yt.x = this.getX(_e23), Yt.y = this.getY(_e23), Yt.z = this.getZ(_e23), Yt.applyNormalMatrix(t), this.setXYZ(_e23, Yt.x, Yt.y, Yt.z);
      }

      return this;
    },
    transformDirection: function transformDirection(t) {
      for (var _e24 = 0, _n34 = this.count; _e24 < _n34; _e24++) {
        Yt.x = this.getX(_e24), Yt.y = this.getY(_e24), Yt.z = this.getZ(_e24), Yt.transformDirection(t), this.setXYZ(_e24, Yt.x, Yt.y, Yt.z);
      }

      return this;
    },
    set: function set(t, e) {
      return void 0 === e && (e = 0), this.array.set(t, e), this;
    },
    getX: function getX(t) {
      return this.array[t * this.itemSize];
    },
    setX: function setX(t, e) {
      return this.array[t * this.itemSize] = e, this;
    },
    getY: function getY(t) {
      return this.array[t * this.itemSize + 1];
    },
    setY: function setY(t, e) {
      return this.array[t * this.itemSize + 1] = e, this;
    },
    getZ: function getZ(t) {
      return this.array[t * this.itemSize + 2];
    },
    setZ: function setZ(t, e) {
      return this.array[t * this.itemSize + 2] = e, this;
    },
    getW: function getW(t) {
      return this.array[t * this.itemSize + 3];
    },
    setW: function setW(t, e) {
      return this.array[t * this.itemSize + 3] = e, this;
    },
    setXY: function setXY(t, e, n) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this;
    },
    setXYZ: function setXYZ(t, e, n, i) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
    },
    setXYZW: function setXYZW(t, e, n, i, r) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this;
    },
    onUpload: function onUpload(t) {
      return this.onUploadCallback = t, this;
    },
    clone: function clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    },
    toJSON: function toJSON() {
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized
      };
    }
  }), Jt.prototype = Object.create(Zt.prototype), Jt.prototype.constructor = Jt, Kt.prototype = Object.create(Zt.prototype), Kt.prototype.constructor = Kt, Qt.prototype = Object.create(Zt.prototype), Qt.prototype.constructor = Qt, $t.prototype = Object.create(Zt.prototype), $t.prototype.constructor = $t, te.prototype = Object.create(Zt.prototype), te.prototype.constructor = te, ee.prototype = Object.create(Zt.prototype), ee.prototype.constructor = ee, ne.prototype = Object.create(Zt.prototype), ne.prototype.constructor = ne, ie.prototype = Object.create(Zt.prototype), ie.prototype.constructor = ie, re.prototype = Object.create(Zt.prototype), re.prototype.constructor = re, Object.assign(ae.prototype, {
    computeGroups: function computeGroups(t) {
      var e = [];
      var n,
          i,
          r = void 0;
      var a = t.faces;

      for (i = 0; i < a.length; i++) {
        var _t30 = a[i];
        _t30.materialIndex !== r && (r = _t30.materialIndex, void 0 !== n && (n.count = 3 * i - n.start, e.push(n)), n = {
          start: 3 * i,
          materialIndex: r
        });
      }

      void 0 !== n && (n.count = 3 * i - n.start, e.push(n)), this.groups = e;
    },
    fromGeometry: function fromGeometry(t) {
      var e = t.faces,
          n = t.vertices,
          i = t.faceVertexUvs,
          r = i[0] && i[0].length > 0,
          a = i[1] && i[1].length > 0,
          o = t.morphTargets,
          s = o.length;
      var c;

      if (s > 0) {
        c = [];

        for (var _t31 = 0; _t31 < s; _t31++) {
          c[_t31] = {
            name: o[_t31].name,
            data: []
          };
        }

        this.morphTargets.position = c;
      }

      var l = t.morphNormals,
          h = l.length;
      var d;

      if (h > 0) {
        d = [];

        for (var _t32 = 0; _t32 < h; _t32++) {
          d[_t32] = {
            name: l[_t32].name,
            data: []
          };
        }

        this.morphTargets.normal = d;
      }

      var f = t.skinIndices,
          p = t.skinWeights,
          m = f.length === n.length,
          g = p.length === n.length;
      n.length > 0 && 0 === e.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");

      for (var _t33 = 0; _t33 < e.length; _t33++) {
        var _v2 = e[_t33];
        this.vertices.push(n[_v2.a], n[_v2.b], n[_v2.c]);
        var _x2 = _v2.vertexNormals;
        if (3 === _x2.length) this.normals.push(_x2[0], _x2[1], _x2[2]);else {
          var _t34 = _v2.normal;
          this.normals.push(_t34, _t34, _t34);
        }
        var _2 = _v2.vertexColors;
        if (3 === _2.length) this.colors.push(_2[0], _2[1], _2[2]);else {
          var _t35 = _v2.color;
          this.colors.push(_t35, _t35, _t35);
        }

        if (!0 === r) {
          var _e25 = i[0][_t33];
          void 0 !== _e25 ? this.uvs.push(_e25[0], _e25[1], _e25[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", _t33), this.uvs.push(new u(), new u(), new u()));
        }

        if (!0 === a) {
          var _e26 = i[1][_t33];
          void 0 !== _e26 ? this.uvs2.push(_e26[0], _e26[1], _e26[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", _t33), this.uvs2.push(new u(), new u(), new u()));
        }

        for (var _t36 = 0; _t36 < s; _t36++) {
          var _e27 = o[_t36].vertices;

          c[_t36].data.push(_e27[_v2.a], _e27[_v2.b], _e27[_v2.c]);
        }

        for (var _e28 = 0; _e28 < h; _e28++) {
          var _n35 = l[_e28].vertexNormals[_t33];

          d[_e28].data.push(_n35.a, _n35.b, _n35.c);
        }

        m && this.skinIndices.push(f[_v2.a], f[_v2.b], f[_v2.c]), g && this.skinWeights.push(p[_v2.a], p[_v2.b], p[_v2.c]);
      }

      return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this;
    }
  });
  var se = 1;
  var ce = new C(),
      le = new q(),
      he = new b(),
      ue = new lt(),
      de = new lt(),
      fe = new b();

  function pe() {
    Object.defineProperty(this, "id", {
      value: se += 2
    }), this.uuid = h.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {};
  }

  pe.prototype = Object.assign(Object.create(c.prototype), {
    constructor: pe,
    isBufferGeometry: !0,
    getIndex: function getIndex() {
      return this.index;
    },
    setIndex: function setIndex(t) {
      Array.isArray(t) ? this.index = new (oe(t) > 65535 ? ne : te)(t, 1) : this.index = t;
    },
    getAttribute: function getAttribute(t) {
      return this.attributes[t];
    },
    setAttribute: function setAttribute(t, e) {
      return this.attributes[t] = e, this;
    },
    deleteAttribute: function deleteAttribute(t) {
      return delete this.attributes[t], this;
    },
    addGroup: function addGroup(t, e, n) {
      this.groups.push({
        start: t,
        count: e,
        materialIndex: void 0 !== n ? n : 0
      });
    },
    clearGroups: function clearGroups() {
      this.groups = [];
    },
    setDrawRange: function setDrawRange(t, e) {
      this.drawRange.start = t, this.drawRange.count = e;
    },
    applyMatrix4: function applyMatrix4(t) {
      var e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
      var n = this.attributes.normal;

      if (void 0 !== n) {
        var _e29 = new d().getNormalMatrix(t);

        n.applyNormalMatrix(_e29), n.needsUpdate = !0;
      }

      var i = this.attributes.tangent;
      return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    },
    rotateX: function rotateX(t) {
      return ce.makeRotationX(t), this.applyMatrix4(ce), this;
    },
    rotateY: function rotateY(t) {
      return ce.makeRotationY(t), this.applyMatrix4(ce), this;
    },
    rotateZ: function rotateZ(t) {
      return ce.makeRotationZ(t), this.applyMatrix4(ce), this;
    },
    translate: function translate(t, e, n) {
      return ce.makeTranslation(t, e, n), this.applyMatrix4(ce), this;
    },
    scale: function scale(t, e, n) {
      return ce.makeScale(t, e, n), this.applyMatrix4(ce), this;
    },
    lookAt: function lookAt(t) {
      return le.lookAt(t), le.updateMatrix(), this.applyMatrix4(le.matrix), this;
    },
    center: function center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(he).negate(), this.translate(he.x, he.y, he.z), this;
    },
    setFromObject: function setFromObject(t) {
      var e = t.geometry;

      if (t.isPoints || t.isLine) {
        var _t37 = new ie(3 * e.vertices.length, 3),
            _n36 = new ie(3 * e.colors.length, 3);

        if (this.setAttribute("position", _t37.copyVector3sArray(e.vertices)), this.setAttribute("color", _n36.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
          var _t38 = new ie(e.lineDistances.length, 1);

          this.setAttribute("lineDistance", _t38.copyArray(e.lineDistances));
        }

        null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone());
      } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);

      return this;
    },
    setFromPoints: function setFromPoints(t) {
      var e = [];

      for (var _n37 = 0, _i33 = t.length; _n37 < _i33; _n37++) {
        var _i34 = t[_n37];
        e.push(_i34.x, _i34.y, _i34.z || 0);
      }

      return this.setAttribute("position", new ie(e, 3)), this;
    },
    updateFromObject: function updateFromObject(t) {
      var e = t.geometry;

      if (t.isMesh) {
        var _t39 = e.__directGeometry;
        if (!0 === e.elementsNeedUpdate && (_t39 = void 0, e.elementsNeedUpdate = !1), void 0 === _t39) return this.fromGeometry(e);
        _t39.verticesNeedUpdate = e.verticesNeedUpdate, _t39.normalsNeedUpdate = e.normalsNeedUpdate, _t39.colorsNeedUpdate = e.colorsNeedUpdate, _t39.uvsNeedUpdate = e.uvsNeedUpdate, _t39.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = _t39;
      }

      if (!0 === e.verticesNeedUpdate) {
        var _t40 = this.attributes.position;
        void 0 !== _t40 && (_t40.copyVector3sArray(e.vertices), _t40.needsUpdate = !0), e.verticesNeedUpdate = !1;
      }

      if (!0 === e.normalsNeedUpdate) {
        var _t41 = this.attributes.normal;
        void 0 !== _t41 && (_t41.copyVector3sArray(e.normals), _t41.needsUpdate = !0), e.normalsNeedUpdate = !1;
      }

      if (!0 === e.colorsNeedUpdate) {
        var _t42 = this.attributes.color;
        void 0 !== _t42 && (_t42.copyColorsArray(e.colors), _t42.needsUpdate = !0), e.colorsNeedUpdate = !1;
      }

      if (e.uvsNeedUpdate) {
        var _t43 = this.attributes.uv;
        void 0 !== _t43 && (_t43.copyVector2sArray(e.uvs), _t43.needsUpdate = !0), e.uvsNeedUpdate = !1;
      }

      if (e.lineDistancesNeedUpdate) {
        var _t44 = this.attributes.lineDistance;
        void 0 !== _t44 && (_t44.copyArray(e.lineDistances), _t44.needsUpdate = !0), e.lineDistancesNeedUpdate = !1;
      }

      return e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this;
    },
    fromGeometry: function fromGeometry(t) {
      return t.__directGeometry = new ae().fromGeometry(t), this.fromDirectGeometry(t.__directGeometry);
    },
    fromDirectGeometry: function fromDirectGeometry(t) {
      var e = new Float32Array(3 * t.vertices.length);

      if (this.setAttribute("position", new Zt(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
        var _e30 = new Float32Array(3 * t.normals.length);

        this.setAttribute("normal", new Zt(_e30, 3).copyVector3sArray(t.normals));
      }

      if (t.colors.length > 0) {
        var _e31 = new Float32Array(3 * t.colors.length);

        this.setAttribute("color", new Zt(_e31, 3).copyColorsArray(t.colors));
      }

      if (t.uvs.length > 0) {
        var _e32 = new Float32Array(2 * t.uvs.length);

        this.setAttribute("uv", new Zt(_e32, 2).copyVector2sArray(t.uvs));
      }

      if (t.uvs2.length > 0) {
        var _e33 = new Float32Array(2 * t.uvs2.length);

        this.setAttribute("uv2", new Zt(_e33, 2).copyVector2sArray(t.uvs2));
      }

      this.groups = t.groups;

      for (var _e34 in t.morphTargets) {
        var _n38 = [],
            _i35 = t.morphTargets[_e34];

        for (var _t45 = 0, _e35 = _i35.length; _t45 < _e35; _t45++) {
          var _e36 = _i35[_t45],
              _r25 = new ie(3 * _e36.data.length, 3);

          _r25.name = _e36.name, _n38.push(_r25.copyVector3sArray(_e36.data));
        }

        this.morphAttributes[_e34] = _n38;
      }

      if (t.skinIndices.length > 0) {
        var _e37 = new ie(4 * t.skinIndices.length, 4);

        this.setAttribute("skinIndex", _e37.copyVector4sArray(t.skinIndices));
      }

      if (t.skinWeights.length > 0) {
        var _e38 = new ie(4 * t.skinWeights.length, 4);

        this.setAttribute("skinWeight", _e38.copyVector4sArray(t.skinWeights));
      }

      return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this;
    },
    computeBoundingBox: function computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new lt());
      var t = this.attributes.position,
          e = this.morphAttributes.position;

      if (void 0 !== t) {
        if (this.boundingBox.setFromBufferAttribute(t), e) for (var _t46 = 0, _n39 = e.length; _t46 < _n39; _t46++) {
          var _n40 = e[_t46];
          ue.setFromBufferAttribute(_n40), this.morphTargetsRelative ? (fe.addVectors(this.boundingBox.min, ue.min), this.boundingBox.expandByPoint(fe), fe.addVectors(this.boundingBox.max, ue.max), this.boundingBox.expandByPoint(fe)) : (this.boundingBox.expandByPoint(ue.min), this.boundingBox.expandByPoint(ue.max));
        }
      } else this.boundingBox.makeEmpty();

      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    },
    computeBoundingSphere: function computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new dt());
      var t = this.attributes.position,
          e = this.morphAttributes.position;

      if (t) {
        var _n41 = this.boundingSphere.center;
        if (ue.setFromBufferAttribute(t), e) for (var _t47 = 0, _n42 = e.length; _t47 < _n42; _t47++) {
          var _n43 = e[_t47];
          de.setFromBufferAttribute(_n43), this.morphTargetsRelative ? (fe.addVectors(ue.min, de.min), ue.expandByPoint(fe), fe.addVectors(ue.max, de.max), ue.expandByPoint(fe)) : (ue.expandByPoint(de.min), ue.expandByPoint(de.max));
        }
        ue.getCenter(_n41);
        var _i36 = 0;

        for (var _e39 = 0, _r26 = t.count; _e39 < _r26; _e39++) {
          fe.fromBufferAttribute(t, _e39), _i36 = Math.max(_i36, _n41.distanceToSquared(fe));
        }

        if (e) for (var _r27 = 0, _a4 = e.length; _r27 < _a4; _r27++) {
          var _a5 = e[_r27],
              _o4 = this.morphTargetsRelative;

          for (var _e40 = 0, _r28 = _a5.count; _e40 < _r28; _e40++) {
            fe.fromBufferAttribute(_a5, _e40), _o4 && (he.fromBufferAttribute(t, _e40), fe.add(he)), _i36 = Math.max(_i36, _n41.distanceToSquared(fe));
          }
        }
        this.boundingSphere.radius = Math.sqrt(_i36), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    },
    computeFaceNormals: function computeFaceNormals() {},
    computeVertexNormals: function computeVertexNormals() {
      var t = this.index,
          e = this.getAttribute("position");

      if (void 0 !== e) {
        var _n44 = this.getAttribute("normal");

        if (void 0 === _n44) _n44 = new Zt(new Float32Array(3 * e.count), 3), this.setAttribute("normal", _n44);else for (var _t48 = 0, _e41 = _n44.count; _t48 < _e41; _t48++) {
          _n44.setXYZ(_t48, 0, 0, 0);
        }

        var _i37 = new b(),
            _r29 = new b(),
            _a6 = new b(),
            _o5 = new b(),
            _s5 = new b(),
            _c6 = new b(),
            _l4 = new b(),
            _h3 = new b();

        if (t) for (var _u = 0, _d = t.count; _u < _d; _u += 3) {
          var _d2 = t.getX(_u + 0),
              _f = t.getX(_u + 1),
              _p = t.getX(_u + 2);

          _i37.fromBufferAttribute(e, _d2), _r29.fromBufferAttribute(e, _f), _a6.fromBufferAttribute(e, _p), _l4.subVectors(_a6, _r29), _h3.subVectors(_i37, _r29), _l4.cross(_h3), _o5.fromBufferAttribute(_n44, _d2), _s5.fromBufferAttribute(_n44, _f), _c6.fromBufferAttribute(_n44, _p), _o5.add(_l4), _s5.add(_l4), _c6.add(_l4), _n44.setXYZ(_d2, _o5.x, _o5.y, _o5.z), _n44.setXYZ(_f, _s5.x, _s5.y, _s5.z), _n44.setXYZ(_p, _c6.x, _c6.y, _c6.z);
        } else for (var _t49 = 0, _o6 = e.count; _t49 < _o6; _t49 += 3) {
          _i37.fromBufferAttribute(e, _t49 + 0), _r29.fromBufferAttribute(e, _t49 + 1), _a6.fromBufferAttribute(e, _t49 + 2), _l4.subVectors(_a6, _r29), _h3.subVectors(_i37, _r29), _l4.cross(_h3), _n44.setXYZ(_t49 + 0, _l4.x, _l4.y, _l4.z), _n44.setXYZ(_t49 + 1, _l4.x, _l4.y, _l4.z), _n44.setXYZ(_t49 + 2, _l4.x, _l4.y, _l4.z);
        }
        this.normalizeNormals(), _n44.needsUpdate = !0;
      }
    },
    merge: function merge(t, e) {
      if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
      void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
      var n = this.attributes;

      for (var _i38 in n) {
        if (void 0 === t.attributes[_i38]) continue;

        var _r30 = n[_i38].array,
            _a7 = t.attributes[_i38],
            _o7 = _a7.array,
            _s6 = _a7.itemSize * e,
            _c7 = Math.min(_o7.length, _r30.length - _s6);

        for (var _t50 = 0, _e42 = _s6; _t50 < _c7; _t50++, _e42++) {
          _r30[_e42] = _o7[_t50];
        }
      }

      return this;
    },
    normalizeNormals: function normalizeNormals() {
      var t = this.attributes.normal;

      for (var _e43 = 0, _n45 = t.count; _e43 < _n45; _e43++) {
        fe.fromBufferAttribute(t, _e43), fe.normalize(), t.setXYZ(_e43, fe.x, fe.y, fe.z);
      }
    },
    toNonIndexed: function toNonIndexed() {
      function t(t, e) {
        var n = t.array,
            i = t.itemSize,
            r = t.normalized,
            a = new n.constructor(e.length * i);
        var o = 0,
            s = 0;

        for (var _t51 = 0, _r31 = e.length; _t51 < _r31; _t51++) {
          o = e[_t51] * i;

          for (var _t52 = 0; _t52 < i; _t52++) {
            a[s++] = n[o++];
          }
        }

        return new Zt(a, i, r);
      }

      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
      var e = new pe(),
          n = this.index.array,
          i = this.attributes;

      for (var _r32 in i) {
        var _a8 = t(i[_r32], n);

        e.setAttribute(_r32, _a8);
      }

      var r = this.morphAttributes;

      for (var _i39 in r) {
        var _a9 = [],
            _o8 = r[_i39];

        for (var _e44 = 0, _i40 = _o8.length; _e44 < _i40; _e44++) {
          var _i41 = t(_o8[_e44], n);

          _a9.push(_i41);
        }

        e.morphAttributes[_i39] = _a9;
      }

      e.morphTargetsRelative = this.morphTargetsRelative;
      var a = this.groups;

      for (var _t53 = 0, _n46 = a.length; _t53 < _n46; _t53++) {
        var _n47 = a[_t53];
        e.addGroup(_n47.start, _n47.count, _n47.materialIndex);
      }

      return e;
    },
    toJSON: function toJSON() {
      var t = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };

      if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
        var _e45 = this.parameters;

        for (var _n48 in _e45) {
          void 0 !== _e45[_n48] && (t[_n48] = _e45[_n48]);
        }

        return t;
      }

      t.data = {
        attributes: {}
      };
      var e = this.index;
      null !== e && (t.data.index = {
        type: e.array.constructor.name,
        array: Array.prototype.slice.call(e.array)
      });
      var n = this.attributes;

      for (var _e46 in n) {
        var _i42 = n[_e46],
            _r33 = _i42.toJSON(t.data);

        "" !== _i42.name && (_r33.name = _i42.name), t.data.attributes[_e46] = _r33;
      }

      var i = {};
      var r = !1;

      for (var _e47 in this.morphAttributes) {
        var _n49 = this.morphAttributes[_e47],
            _a10 = [];

        for (var _e48 = 0, _i43 = _n49.length; _e48 < _i43; _e48++) {
          var _i44 = _n49[_e48],
              _r34 = _i44.toJSON(t.data);

          "" !== _i44.name && (_r34.name = _i44.name), _a10.push(_r34);
        }

        _a10.length > 0 && (i[_e47] = _a10, r = !0);
      }

      r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
      var a = this.groups;
      a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
      var o = this.boundingSphere;
      return null !== o && (t.data.boundingSphere = {
        center: o.center.toArray(),
        radius: o.radius
      }), t;
    },
    clone: function clone() {
      return new pe().copy(this);
    },
    copy: function copy(t) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      var e = {};
      this.name = t.name;
      var n = t.index;
      null !== n && this.setIndex(n.clone(e));
      var i = t.attributes;

      for (var _t54 in i) {
        var _n50 = i[_t54];
        this.setAttribute(_t54, _n50.clone(e));
      }

      var r = t.morphAttributes;

      for (var _t55 in r) {
        var _n51 = [],
            _i45 = r[_t55];

        for (var _t56 = 0, _r35 = _i45.length; _t56 < _r35; _t56++) {
          _n51.push(_i45[_t56].clone(e));
        }

        this.morphAttributes[_t55] = _n51;
      }

      this.morphTargetsRelative = t.morphTargetsRelative;
      var a = t.groups;

      for (var _t57 = 0, _e49 = a.length; _t57 < _e49; _t57++) {
        var _e50 = a[_t57];
        this.addGroup(_e50.start, _e50.count, _e50.materialIndex);
      }

      var o = t.boundingBox;
      null !== o && (this.boundingBox = o.clone());
      var s = t.boundingSphere;
      return null !== s && (this.boundingSphere = s.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });

  var me = new C(),
      ge = new yt(),
      ve = new dt(),
      xe = new b(),
      _e = new b(),
      ye = new b(),
      Me = new b(),
      be = new b(),
      we = new b(),
      Se = new b(),
      Ee = new b(),
      Te = new b(),
      Le = new u(),
      Ae = new u(),
      Pe = new u(),
      Ce = new b(),
      De = new b();

  function Ne(t, e) {
    q.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new pe(), this.material = void 0 !== e ? e : new Xt(), this.updateMorphTargets();
  }

  function Re(t, e, n, i, r, a, o, s) {
    var c;
    if (c = 1 === e.side ? i.intersectTriangle(o, a, r, !0, s) : i.intersectTriangle(r, a, o, 2 !== e.side, s), null === c) return null;
    De.copy(s), De.applyMatrix4(t.matrixWorld);
    var l = n.ray.origin.distanceTo(De);
    return l < n.near || l > n.far ? null : {
      distance: l,
      point: De.clone(),
      object: t
    };
  }

  function Ie(t, e, n, i, r, a, o, s, c, l, h, d) {
    xe.fromBufferAttribute(r, l), _e.fromBufferAttribute(r, h), ye.fromBufferAttribute(r, d);
    var f = t.morphTargetInfluences;

    if (e.morphTargets && a && f) {
      Se.set(0, 0, 0), Ee.set(0, 0, 0), Te.set(0, 0, 0);

      for (var _t58 = 0, _e51 = a.length; _t58 < _e51; _t58++) {
        var _e52 = f[_t58],
            _n52 = a[_t58];
        0 !== _e52 && (Me.fromBufferAttribute(_n52, l), be.fromBufferAttribute(_n52, h), we.fromBufferAttribute(_n52, d), o ? (Se.addScaledVector(Me, _e52), Ee.addScaledVector(be, _e52), Te.addScaledVector(we, _e52)) : (Se.addScaledVector(Me.sub(xe), _e52), Ee.addScaledVector(be.sub(_e), _e52), Te.addScaledVector(we.sub(ye), _e52)));
      }

      xe.add(Se), _e.add(Ee), ye.add(Te);
    }

    t.isSkinnedMesh && (t.boneTransform(l, xe), t.boneTransform(h, _e), t.boneTransform(d, ye));
    var p = Re(t, e, n, i, xe, _e, ye, Ce);

    if (p) {
      s && (Le.fromBufferAttribute(s, l), Ae.fromBufferAttribute(s, h), Pe.fromBufferAttribute(s, d), p.uv = Ot.getUV(Ce, xe, _e, ye, Le, Ae, Pe, new u())), c && (Le.fromBufferAttribute(c, l), Ae.fromBufferAttribute(c, h), Pe.fromBufferAttribute(c, d), p.uv2 = Ot.getUV(Ce, xe, _e, ye, Le, Ae, Pe, new u()));

      var _t59 = new Ht(l, h, d);

      Ot.getNormal(xe, _e, ye, _t59.normal), p.face = _t59;
    }

    return p;
  }

  Ne.prototype = Object.assign(Object.create(q.prototype), {
    constructor: Ne,
    isMesh: !0,
    copy: function copy(t) {
      return q.prototype.copy.call(this, t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this;
    },
    updateMorphTargets: function updateMorphTargets() {
      var t = this.geometry;

      if (t.isBufferGeometry) {
        var _e53 = t.morphAttributes,
            _n53 = Object.keys(_e53);

        if (_n53.length > 0) {
          var _t60 = _e53[_n53[0]];

          if (void 0 !== _t60) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};

            for (var _e54 = 0, _n54 = _t60.length; _e54 < _n54; _e54++) {
              var _n55 = _t60[_e54].name || String(_e54);

              this.morphTargetInfluences.push(0), this.morphTargetDictionary[_n55] = _e54;
            }
          }
        }
      } else {
        var _e55 = t.morphTargets;
        void 0 !== _e55 && _e55.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    },
    raycast: function raycast(t, e) {
      var n = this.geometry,
          i = this.material,
          r = this.matrixWorld;
      if (void 0 === i) return;
      if (null === n.boundingSphere && n.computeBoundingSphere(), ve.copy(n.boundingSphere), ve.applyMatrix4(r), !1 === t.ray.intersectsSphere(ve)) return;
      if (me.getInverse(r), ge.copy(t.ray).applyMatrix4(me), null !== n.boundingBox && !1 === ge.intersectsBox(n.boundingBox)) return;
      var a;

      if (n.isBufferGeometry) {
        var _r36 = n.index,
            _o9 = n.attributes.position,
            _s7 = n.morphAttributes.position,
            _c8 = n.morphTargetsRelative,
            _l5 = n.attributes.uv,
            _h4 = n.attributes.uv2,
            _u2 = n.groups,
            _d3 = n.drawRange;
        if (null !== _r36) {
          if (Array.isArray(i)) for (var _n56 = 0, _f2 = _u2.length; _n56 < _f2; _n56++) {
            var _f3 = _u2[_n56],
                _p2 = i[_f3.materialIndex];

            for (var _n57 = Math.max(_f3.start, _d3.start), _i46 = Math.min(_f3.start + _f3.count, _d3.start + _d3.count); _n57 < _i46; _n57 += 3) {
              var _i47 = _r36.getX(_n57),
                  _u3 = _r36.getX(_n57 + 1),
                  _d4 = _r36.getX(_n57 + 2);

              a = Ie(this, _p2, t, ge, _o9, _s7, _c8, _l5, _h4, _i47, _u3, _d4), a && (a.faceIndex = Math.floor(_n57 / 3), a.face.materialIndex = _f3.materialIndex, e.push(a));
            }
          } else {
            for (var _n58 = Math.max(0, _d3.start), _u4 = Math.min(_r36.count, _d3.start + _d3.count); _n58 < _u4; _n58 += 3) {
              var _u5 = _r36.getX(_n58),
                  _d5 = _r36.getX(_n58 + 1),
                  _f4 = _r36.getX(_n58 + 2);

              a = Ie(this, i, t, ge, _o9, _s7, _c8, _l5, _h4, _u5, _d5, _f4), a && (a.faceIndex = Math.floor(_n58 / 3), e.push(a));
            }
          }
        } else if (void 0 !== _o9) if (Array.isArray(i)) for (var _n59 = 0, _r37 = _u2.length; _n59 < _r37; _n59++) {
          var _r38 = _u2[_n59],
              _f5 = i[_r38.materialIndex];

          for (var _n60 = Math.max(_r38.start, _d3.start), _i48 = Math.min(_r38.start + _r38.count, _d3.start + _d3.count); _n60 < _i48; _n60 += 3) {
            a = Ie(this, _f5, t, ge, _o9, _s7, _c8, _l5, _h4, _n60, _n60 + 1, _n60 + 2), a && (a.faceIndex = Math.floor(_n60 / 3), a.face.materialIndex = _r38.materialIndex, e.push(a));
          }
        } else {
          for (var _n61 = Math.max(0, _d3.start), _r39 = Math.min(_o9.count, _d3.start + _d3.count); _n61 < _r39; _n61 += 3) {
            a = Ie(this, i, t, ge, _o9, _s7, _c8, _l5, _h4, _n61, _n61 + 1, _n61 + 2), a && (a.faceIndex = Math.floor(_n61 / 3), e.push(a));
          }
        }
      } else if (n.isGeometry) {
        var _r40 = Array.isArray(i),
            _o10 = n.vertices,
            _s8 = n.faces;

        var _c9;

        var _l6 = n.faceVertexUvs[0];
        _l6.length > 0 && (_c9 = _l6);

        for (var _n62 = 0, _l7 = _s8.length; _n62 < _l7; _n62++) {
          var _l8 = _s8[_n62],
              _h5 = _r40 ? i[_l8.materialIndex] : i;

          if (void 0 === _h5) continue;
          var _d6 = _o10[_l8.a],
              _f6 = _o10[_l8.b],
              _p3 = _o10[_l8.c];

          if (a = Re(this, _h5, t, ge, _d6, _f6, _p3, Ce), a) {
            if (_c9 && _c9[_n62]) {
              var _t61 = _c9[_n62];
              Le.copy(_t61[0]), Ae.copy(_t61[1]), Pe.copy(_t61[2]), a.uv = Ot.getUV(Ce, _d6, _f6, _p3, Le, Ae, Pe, new u());
            }

            a.face = _l8, a.faceIndex = _n62, e.push(a);
          }
        }
      }
    }
  });
  var Oe = 0;
  var ze = new C(),
      Ue = new q(),
      Fe = new b();

  function Be() {
    Object.defineProperty(this, "id", {
      value: Oe += 2
    }), this.uuid = h.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1;
  }

  Be.prototype = Object.assign(Object.create(c.prototype), {
    constructor: Be,
    isGeometry: !0,
    applyMatrix4: function applyMatrix4(t) {
      var e = new d().getNormalMatrix(t);

      for (var _e56 = 0, _n63 = this.vertices.length; _e56 < _n63; _e56++) {
        this.vertices[_e56].applyMatrix4(t);
      }

      for (var _t62 = 0, _n64 = this.faces.length; _t62 < _n64; _t62++) {
        var _n65 = this.faces[_t62];

        _n65.normal.applyMatrix3(e).normalize();

        for (var _t63 = 0, _i49 = _n65.vertexNormals.length; _t63 < _i49; _t63++) {
          _n65.vertexNormals[_t63].applyMatrix3(e).normalize();
        }
      }

      return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this;
    },
    rotateX: function rotateX(t) {
      return ze.makeRotationX(t), this.applyMatrix4(ze), this;
    },
    rotateY: function rotateY(t) {
      return ze.makeRotationY(t), this.applyMatrix4(ze), this;
    },
    rotateZ: function rotateZ(t) {
      return ze.makeRotationZ(t), this.applyMatrix4(ze), this;
    },
    translate: function translate(t, e, n) {
      return ze.makeTranslation(t, e, n), this.applyMatrix4(ze), this;
    },
    scale: function scale(t, e, n) {
      return ze.makeScale(t, e, n), this.applyMatrix4(ze), this;
    },
    lookAt: function lookAt(t) {
      return Ue.lookAt(t), Ue.updateMatrix(), this.applyMatrix4(Ue.matrix), this;
    },
    fromBufferGeometry: function fromBufferGeometry(t) {
      var e = this,
          n = null !== t.index ? t.index : void 0,
          i = t.attributes;
      if (void 0 === i.position) return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
      var r = i.position,
          a = i.normal,
          o = i.color,
          s = i.uv,
          c = i.uv2;
      void 0 !== c && (this.faceVertexUvs[1] = []);

      for (var _t64 = 0; _t64 < r.count; _t64++) {
        e.vertices.push(new b().fromBufferAttribute(r, _t64)), void 0 !== o && e.colors.push(new Bt().fromBufferAttribute(o, _t64));
      }

      function l(t, n, i, r) {
        var l = void 0 === o ? [] : [e.colors[t].clone(), e.colors[n].clone(), e.colors[i].clone()],
            h = new Ht(t, n, i, void 0 === a ? [] : [new b().fromBufferAttribute(a, t), new b().fromBufferAttribute(a, n), new b().fromBufferAttribute(a, i)], l, r);
        e.faces.push(h), void 0 !== s && e.faceVertexUvs[0].push([new u().fromBufferAttribute(s, t), new u().fromBufferAttribute(s, n), new u().fromBufferAttribute(s, i)]), void 0 !== c && e.faceVertexUvs[1].push([new u().fromBufferAttribute(c, t), new u().fromBufferAttribute(c, n), new u().fromBufferAttribute(c, i)]);
      }

      var h = t.groups;
      if (h.length > 0) for (var _t65 = 0; _t65 < h.length; _t65++) {
        var _e57 = h[_t65],
            _i50 = _e57.start;

        for (var _t66 = _i50, _r41 = _i50 + _e57.count; _t66 < _r41; _t66 += 3) {
          void 0 !== n ? l(n.getX(_t66), n.getX(_t66 + 1), n.getX(_t66 + 2), _e57.materialIndex) : l(_t66, _t66 + 1, _t66 + 2, _e57.materialIndex);
        }
      } else if (void 0 !== n) for (var _t67 = 0; _t67 < n.count; _t67 += 3) {
        l(n.getX(_t67), n.getX(_t67 + 1), n.getX(_t67 + 2));
      } else for (var _t68 = 0; _t68 < r.count; _t68 += 3) {
        l(_t68, _t68 + 1, _t68 + 2);
      }
      return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this;
    },
    center: function center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Fe).negate(), this.translate(Fe.x, Fe.y, Fe.z), this;
    },
    normalize: function normalize() {
      this.computeBoundingSphere();
      var t = this.boundingSphere.center,
          e = this.boundingSphere.radius,
          n = 0 === e ? 1 : 1 / e,
          i = new C();
      return i.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1), this.applyMatrix4(i), this;
    },
    computeFaceNormals: function computeFaceNormals() {
      var t = new b(),
          e = new b();

      for (var _n66 = 0, _i51 = this.faces.length; _n66 < _i51; _n66++) {
        var _i52 = this.faces[_n66],
            _r42 = this.vertices[_i52.a],
            _a11 = this.vertices[_i52.b],
            _o11 = this.vertices[_i52.c];
        t.subVectors(_o11, _a11), e.subVectors(_r42, _a11), t.cross(e), t.normalize(), _i52.normal.copy(t);
      }
    },
    computeVertexNormals: function computeVertexNormals(t) {
      void 0 === t && (t = !0);
      var e = new Array(this.vertices.length);

      for (var _t69 = 0, _n67 = this.vertices.length; _t69 < _n67; _t69++) {
        e[_t69] = new b();
      }

      if (t) {
        var _t70 = new b(),
            _n68 = new b();

        for (var _i53 = 0, _r43 = this.faces.length; _i53 < _r43; _i53++) {
          var _r44 = this.faces[_i53],
              _a12 = this.vertices[_r44.a],
              _o12 = this.vertices[_r44.b],
              _s9 = this.vertices[_r44.c];
          _t70.subVectors(_s9, _o12), _n68.subVectors(_a12, _o12), _t70.cross(_n68), e[_r44.a].add(_t70), e[_r44.b].add(_t70), e[_r44.c].add(_t70);
        }
      } else {
        this.computeFaceNormals();

        for (var _t71 = 0, _n69 = this.faces.length; _t71 < _n69; _t71++) {
          var _n70 = this.faces[_t71];
          e[_n70.a].add(_n70.normal), e[_n70.b].add(_n70.normal), e[_n70.c].add(_n70.normal);
        }
      }

      for (var _t72 = 0, _n71 = this.vertices.length; _t72 < _n71; _t72++) {
        e[_t72].normalize();
      }

      for (var _t73 = 0, _n72 = this.faces.length; _t73 < _n72; _t73++) {
        var _n73 = this.faces[_t73],
            _i54 = _n73.vertexNormals;
        3 === _i54.length ? (_i54[0].copy(e[_n73.a]), _i54[1].copy(e[_n73.b]), _i54[2].copy(e[_n73.c])) : (_i54[0] = e[_n73.a].clone(), _i54[1] = e[_n73.b].clone(), _i54[2] = e[_n73.c].clone());
      }

      this.faces.length > 0 && (this.normalsNeedUpdate = !0);
    },
    computeFlatVertexNormals: function computeFlatVertexNormals() {
      this.computeFaceNormals();

      for (var _t74 = 0, _e58 = this.faces.length; _t74 < _e58; _t74++) {
        var _e59 = this.faces[_t74],
            _n74 = _e59.vertexNormals;
        3 === _n74.length ? (_n74[0].copy(_e59.normal), _n74[1].copy(_e59.normal), _n74[2].copy(_e59.normal)) : (_n74[0] = _e59.normal.clone(), _n74[1] = _e59.normal.clone(), _n74[2] = _e59.normal.clone());
      }

      this.faces.length > 0 && (this.normalsNeedUpdate = !0);
    },
    computeMorphNormals: function computeMorphNormals() {
      for (var _t75 = 0, _e60 = this.faces.length; _t75 < _e60; _t75++) {
        var _e61 = this.faces[_t75];
        _e61.__originalFaceNormal ? _e61.__originalFaceNormal.copy(_e61.normal) : _e61.__originalFaceNormal = _e61.normal.clone(), _e61.__originalVertexNormals || (_e61.__originalVertexNormals = []);

        for (var _t76 = 0, _n75 = _e61.vertexNormals.length; _t76 < _n75; _t76++) {
          _e61.__originalVertexNormals[_t76] ? _e61.__originalVertexNormals[_t76].copy(_e61.vertexNormals[_t76]) : _e61.__originalVertexNormals[_t76] = _e61.vertexNormals[_t76].clone();
        }
      }

      var t = new Be();
      t.faces = this.faces;

      for (var _e62 = 0, _n76 = this.morphTargets.length; _e62 < _n76; _e62++) {
        if (!this.morphNormals[_e62]) {
          this.morphNormals[_e62] = {}, this.morphNormals[_e62].faceNormals = [], this.morphNormals[_e62].vertexNormals = [];
          var _t77 = this.morphNormals[_e62].faceNormals,
              _n78 = this.morphNormals[_e62].vertexNormals;

          for (var _e63 = 0, _i55 = this.faces.length; _e63 < _i55; _e63++) {
            var _e64 = new b(),
                _i56 = {
              a: new b(),
              b: new b(),
              c: new b()
            };

            _t77.push(_e64), _n78.push(_i56);
          }
        }

        var _n77 = this.morphNormals[_e62];
        t.vertices = this.morphTargets[_e62].vertices, t.computeFaceNormals(), t.computeVertexNormals();

        for (var _t78 = 0, _e65 = this.faces.length; _t78 < _e65; _t78++) {
          var _e66 = this.faces[_t78],
              _i57 = _n77.faceNormals[_t78],
              _r45 = _n77.vertexNormals[_t78];
          _i57.copy(_e66.normal), _r45.a.copy(_e66.vertexNormals[0]), _r45.b.copy(_e66.vertexNormals[1]), _r45.c.copy(_e66.vertexNormals[2]);
        }
      }

      for (var _t79 = 0, _e67 = this.faces.length; _t79 < _e67; _t79++) {
        var _e68 = this.faces[_t79];
        _e68.normal = _e68.__originalFaceNormal, _e68.vertexNormals = _e68.__originalVertexNormals;
      }
    },
    computeBoundingBox: function computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new lt()), this.boundingBox.setFromPoints(this.vertices);
    },
    computeBoundingSphere: function computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new dt()), this.boundingSphere.setFromPoints(this.vertices);
    },
    merge: function merge(t, e, n) {
      if (!t || !t.isGeometry) return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
      var i,
          r = this.vertices.length,
          a = this.vertices,
          o = t.vertices,
          s = this.faces,
          c = t.faces,
          l = this.colors,
          h = t.colors;
      void 0 === n && (n = 0), void 0 !== e && (i = new d().getNormalMatrix(e));

      for (var _t80 = 0, _n79 = o.length; _t80 < _n79; _t80++) {
        var _n80 = o[_t80].clone();

        void 0 !== e && _n80.applyMatrix4(e), a.push(_n80);
      }

      for (var _t81 = 0, _e69 = h.length; _t81 < _e69; _t81++) {
        l.push(h[_t81].clone());
      }

      for (var _t82 = 0, _e70 = c.length; _t82 < _e70; _t82++) {
        var _e71 = void 0,
            _a13 = void 0,
            _o13 = void 0,
            _l9 = c[_t82],
            _h6 = _l9.vertexNormals,
            _u6 = _l9.vertexColors;

        _e71 = new Ht(_l9.a + r, _l9.b + r, _l9.c + r), _e71.normal.copy(_l9.normal), void 0 !== i && _e71.normal.applyMatrix3(i).normalize();

        for (var _t83 = 0, _n81 = _h6.length; _t83 < _n81; _t83++) {
          _a13 = _h6[_t83].clone(), void 0 !== i && _a13.applyMatrix3(i).normalize(), _e71.vertexNormals.push(_a13);
        }

        _e71.color.copy(_l9.color);

        for (var _t84 = 0, _n82 = _u6.length; _t84 < _n82; _t84++) {
          _o13 = _u6[_t84], _e71.vertexColors.push(_o13.clone());
        }

        _e71.materialIndex = _l9.materialIndex + n, s.push(_e71);
      }

      for (var _e72 = 0, _n83 = t.faceVertexUvs.length; _e72 < _n83; _e72++) {
        var _n84 = t.faceVertexUvs[_e72];
        void 0 === this.faceVertexUvs[_e72] && (this.faceVertexUvs[_e72] = []);

        for (var _t85 = 0, _i58 = _n84.length; _t85 < _i58; _t85++) {
          var _i59 = _n84[_t85],
              _r46 = [];

          for (var _t86 = 0, _e73 = _i59.length; _t86 < _e73; _t86++) {
            _r46.push(_i59[_t86].clone());
          }

          this.faceVertexUvs[_e72].push(_r46);
        }
      }
    },
    mergeMesh: function mergeMesh(t) {
      t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t);
    },
    mergeVertices: function mergeVertices() {
      var t = {},
          e = [],
          n = [],
          i = Math.pow(10, 4);

      for (var _r47 = 0, _a14 = this.vertices.length; _r47 < _a14; _r47++) {
        var _a15 = this.vertices[_r47],
            _o14 = Math.round(_a15.x * i) + "_" + Math.round(_a15.y * i) + "_" + Math.round(_a15.z * i);

        void 0 === t[_o14] ? (t[_o14] = _r47, e.push(this.vertices[_r47]), n[_r47] = e.length - 1) : n[_r47] = n[t[_o14]];
      }

      var r = [];

      for (var _t87 = 0, _e74 = this.faces.length; _t87 < _e74; _t87++) {
        var _e75 = this.faces[_t87];
        _e75.a = n[_e75.a], _e75.b = n[_e75.b], _e75.c = n[_e75.c];
        var _i60 = [_e75.a, _e75.b, _e75.c];

        for (var _e76 = 0; _e76 < 3; _e76++) {
          if (_i60[_e76] === _i60[(_e76 + 1) % 3]) {
            r.push(_t87);
            break;
          }
        }
      }

      for (var _t88 = r.length - 1; _t88 >= 0; _t88--) {
        var _e77 = r[_t88];
        this.faces.splice(_e77, 1);

        for (var _t89 = 0, _n85 = this.faceVertexUvs.length; _t89 < _n85; _t89++) {
          this.faceVertexUvs[_t89].splice(_e77, 1);
        }
      }

      var a = this.vertices.length - e.length;
      return this.vertices = e, a;
    },
    setFromPoints: function setFromPoints(t) {
      this.vertices = [];

      for (var _e78 = 0, _n86 = t.length; _e78 < _n86; _e78++) {
        var _n87 = t[_e78];
        this.vertices.push(new b(_n87.x, _n87.y, _n87.z || 0));
      }

      return this;
    },
    sortFacesByMaterialIndex: function sortFacesByMaterialIndex() {
      var t = this.faces,
          e = t.length;

      for (var _n88 = 0; _n88 < e; _n88++) {
        t[_n88]._id = _n88;
      }

      t.sort(function (t, e) {
        return t.materialIndex - e.materialIndex;
      });
      var n = this.faceVertexUvs[0],
          i = this.faceVertexUvs[1];
      var r, a;
      n && n.length === e && (r = []), i && i.length === e && (a = []);

      for (var _o15 = 0; _o15 < e; _o15++) {
        var _e79 = t[_o15]._id;
        r && r.push(n[_e79]), a && a.push(i[_e79]);
      }

      r && (this.faceVertexUvs[0] = r), a && (this.faceVertexUvs[1] = a);
    },
    toJSON: function toJSON() {
      var t = {
        metadata: {
          version: 4.5,
          type: "Geometry",
          generator: "Geometry.toJSON"
        }
      };

      if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
        var _e80 = this.parameters;

        for (var _n89 in _e80) {
          void 0 !== _e80[_n89] && (t[_n89] = _e80[_n89]);
        }

        return t;
      }

      var e = [];

      for (var _t90 = 0; _t90 < this.vertices.length; _t90++) {
        var _n90 = this.vertices[_t90];
        e.push(_n90.x, _n90.y, _n90.z);
      }

      var n = [],
          i = [],
          r = {},
          a = [],
          o = {},
          s = [],
          c = {};

      for (var _t91 = 0; _t91 < this.faces.length; _t91++) {
        var _e81 = this.faces[_t91],
            _i61 = !0,
            _r48 = !1,
            _a16 = void 0 !== this.faceVertexUvs[0][_t91],
            _o16 = _e81.normal.length() > 0,
            _s10 = _e81.vertexNormals.length > 0,
            _c10 = 1 !== _e81.color.r || 1 !== _e81.color.g || 1 !== _e81.color.b,
            _f7 = _e81.vertexColors.length > 0;

        var _p4 = 0;

        if (_p4 = l(_p4, 0, 0), _p4 = l(_p4, 1, _i61), _p4 = l(_p4, 2, _r48), _p4 = l(_p4, 3, _a16), _p4 = l(_p4, 4, _o16), _p4 = l(_p4, 5, _s10), _p4 = l(_p4, 6, _c10), _p4 = l(_p4, 7, _f7), n.push(_p4), n.push(_e81.a, _e81.b, _e81.c), n.push(_e81.materialIndex), _a16) {
          var _e82 = this.faceVertexUvs[0][_t91];
          n.push(d(_e82[0]), d(_e82[1]), d(_e82[2]));
        }

        if (_o16 && n.push(h(_e81.normal)), _s10) {
          var _t92 = _e81.vertexNormals;
          n.push(h(_t92[0]), h(_t92[1]), h(_t92[2]));
        }

        if (_c10 && n.push(u(_e81.color)), _f7) {
          var _t93 = _e81.vertexColors;
          n.push(u(_t93[0]), u(_t93[1]), u(_t93[2]));
        }
      }

      function l(t, e, n) {
        return n ? t | 1 << e : t & ~(1 << e);
      }

      function h(t) {
        var e = t.x.toString() + t.y.toString() + t.z.toString();
        return void 0 !== r[e] || (r[e] = i.length / 3, i.push(t.x, t.y, t.z)), r[e];
      }

      function u(t) {
        var e = t.r.toString() + t.g.toString() + t.b.toString();
        return void 0 !== o[e] || (o[e] = a.length, a.push(t.getHex())), o[e];
      }

      function d(t) {
        var e = t.x.toString() + t.y.toString();
        return void 0 !== c[e] || (c[e] = s.length / 2, s.push(t.x, t.y)), c[e];
      }

      return t.data = {}, t.data.vertices = e, t.data.normals = i, a.length > 0 && (t.data.colors = a), s.length > 0 && (t.data.uvs = [s]), t.data.faces = n, t;
    },
    clone: function clone() {
      return new Be().copy(this);
    },
    copy: function copy(t) {
      this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
      var e = t.vertices;

      for (var _t94 = 0, _n91 = e.length; _t94 < _n91; _t94++) {
        this.vertices.push(e[_t94].clone());
      }

      var n = t.colors;

      for (var _t95 = 0, _e83 = n.length; _t95 < _e83; _t95++) {
        this.colors.push(n[_t95].clone());
      }

      var i = t.faces;

      for (var _t96 = 0, _e84 = i.length; _t96 < _e84; _t96++) {
        this.faces.push(i[_t96].clone());
      }

      for (var _e85 = 0, _n92 = t.faceVertexUvs.length; _e85 < _n92; _e85++) {
        var _n93 = t.faceVertexUvs[_e85];
        void 0 === this.faceVertexUvs[_e85] && (this.faceVertexUvs[_e85] = []);

        for (var _t97 = 0, _i62 = _n93.length; _t97 < _i62; _t97++) {
          var _i63 = _n93[_t97],
              _r49 = [];

          for (var _t98 = 0, _e86 = _i63.length; _t98 < _e86; _t98++) {
            var _e87 = _i63[_t98];

            _r49.push(_e87.clone());
          }

          this.faceVertexUvs[_e85].push(_r49);
        }
      }

      var r = t.morphTargets;

      for (var _t99 = 0, _e88 = r.length; _t99 < _e88; _t99++) {
        var _e89 = {};

        if (_e89.name = r[_t99].name, void 0 !== r[_t99].vertices) {
          _e89.vertices = [];

          for (var _n94 = 0, _i64 = r[_t99].vertices.length; _n94 < _i64; _n94++) {
            _e89.vertices.push(r[_t99].vertices[_n94].clone());
          }
        }

        if (void 0 !== r[_t99].normals) {
          _e89.normals = [];

          for (var _n95 = 0, _i65 = r[_t99].normals.length; _n95 < _i65; _n95++) {
            _e89.normals.push(r[_t99].normals[_n95].clone());
          }
        }

        this.morphTargets.push(_e89);
      }

      var a = t.morphNormals;

      for (var _t100 = 0, _e90 = a.length; _t100 < _e90; _t100++) {
        var _e91 = {};

        if (void 0 !== a[_t100].vertexNormals) {
          _e91.vertexNormals = [];

          for (var _n96 = 0, _i66 = a[_t100].vertexNormals.length; _n96 < _i66; _n96++) {
            var _i67 = a[_t100].vertexNormals[_n96],
                _r50 = {};
            _r50.a = _i67.a.clone(), _r50.b = _i67.b.clone(), _r50.c = _i67.c.clone(), _e91.vertexNormals.push(_r50);
          }
        }

        if (void 0 !== a[_t100].faceNormals) {
          _e91.faceNormals = [];

          for (var _n97 = 0, _i68 = a[_t100].faceNormals.length; _n97 < _i68; _n97++) {
            _e91.faceNormals.push(a[_t100].faceNormals[_n97].clone());
          }
        }

        this.morphNormals.push(_e91);
      }

      var o = t.skinWeights;

      for (var _t101 = 0, _e92 = o.length; _t101 < _e92; _t101++) {
        this.skinWeights.push(o[_t101].clone());
      }

      var s = t.skinIndices;

      for (var _t102 = 0, _e93 = s.length; _t102 < _e93; _t102++) {
        this.skinIndices.push(s[_t102].clone());
      }

      var c = t.lineDistances;

      for (var _t103 = 0, _e94 = c.length; _t103 < _e94; _t103++) {
        this.lineDistances.push(c[_t103]);
      }

      var l = t.boundingBox;
      null !== l && (this.boundingBox = l.clone());
      var h = t.boundingSphere;
      return null !== h && (this.boundingSphere = h.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });

  var Ge = /*#__PURE__*/function (_Be) {
    _inherits(Ge, _Be);

    var _super = _createSuper(Ge);

    function Ge(t, e, n, i, r, a) {
      var _this;

      _classCallCheck(this, Ge);

      _this = _super.call(this), _this.type = "BoxGeometry", _this.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a
      }, _this.fromBufferGeometry(new ke(t, e, n, i, r, a)), _this.mergeVertices();
      return _this;
    }

    return Ge;
  }(Be);

  var ke = /*#__PURE__*/function (_pe) {
    _inherits(ke, _pe);

    var _super2 = _createSuper(ke);

    function ke(t, e, n, i, r, a) {
      var _this2;

      _classCallCheck(this, ke);

      _this2 = _super2.call(this), _this2.type = "BoxBufferGeometry", _this2.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a
      };

      var o = _assertThisInitialized(_this2);

      t = t || 1, e = e || 1, n = n || 1, i = Math.floor(i) || 1, r = Math.floor(r) || 1, a = Math.floor(a) || 1;
      var s = [],
          c = [],
          l = [],
          h = [];
      var u = 0,
          d = 0;

      function f(t, e, n, i, r, a, f, p, m, g, v) {
        var x = a / m,
            _ = f / g,
            y = a / 2,
            M = f / 2,
            w = p / 2,
            S = m + 1,
            E = g + 1;

        var T = 0,
            L = 0;
        var A = new b();

        for (var _a17 = 0; _a17 < E; _a17++) {
          var _o17 = _a17 * _ - M;

          for (var _s11 = 0; _s11 < S; _s11++) {
            var _u7 = _s11 * x - y;

            A[t] = _u7 * i, A[e] = _o17 * r, A[n] = w, c.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = p > 0 ? 1 : -1, l.push(A.x, A.y, A.z), h.push(_s11 / m), h.push(1 - _a17 / g), T += 1;
          }
        }

        for (var _t104 = 0; _t104 < g; _t104++) {
          for (var _e95 = 0; _e95 < m; _e95++) {
            var _n98 = u + _e95 + S * _t104,
                _i69 = u + _e95 + S * (_t104 + 1),
                _r51 = u + (_e95 + 1) + S * (_t104 + 1),
                _a18 = u + (_e95 + 1) + S * _t104;

            s.push(_n98, _i69, _a18), s.push(_i69, _r51, _a18), L += 6;
          }
        }

        o.addGroup(d, L, v), d += L, u += T;
      }

      f("z", "y", "x", -1, -1, n, e, t, a, r, 0), f("z", "y", "x", 1, -1, n, e, -t, a, r, 1), f("x", "z", "y", 1, 1, t, n, e, i, a, 2), f("x", "z", "y", 1, -1, t, n, -e, i, a, 3), f("x", "y", "z", 1, -1, t, e, n, i, r, 4), f("x", "y", "z", -1, -1, t, e, -n, i, r, 5), _this2.setIndex(s), _this2.setAttribute("position", new ie(c, 3)), _this2.setAttribute("normal", new ie(l, 3)), _this2.setAttribute("uv", new ie(h, 2));
      return _this2;
    }

    return ke;
  }(pe);

  function Ve(t) {
    var e = {};

    for (var _n99 in t) {
      e[_n99] = {};

      for (var _i70 in t[_n99]) {
        var _r52 = t[_n99][_i70];
        _r52 && (_r52.isColor || _r52.isMatrix3 || _r52.isMatrix4 || _r52.isVector2 || _r52.isVector3 || _r52.isVector4 || _r52.isTexture) ? e[_n99][_i70] = _r52.clone() : Array.isArray(_r52) ? e[_n99][_i70] = _r52.slice() : e[_n99][_i70] = _r52;
      }
    }

    return e;
  }

  function He(t) {
    var e = {};

    for (var _n100 = 0; _n100 < t.length; _n100++) {
      var _i71 = Ve(t[_n100]);

      for (var _t105 in _i71) {
        e[_t105] = _i71[_t105];
      }
    }

    return e;
  }

  var We = {
    clone: Ve,
    merge: He
  };

  function je(t) {
    jt.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t));
  }

  function Xe() {
    q.call(this), this.type = "Camera", this.matrixWorldInverse = new C(), this.projectionMatrix = new C(), this.projectionMatrixInverse = new C();
  }

  function Ye(t, e, n, i) {
    Xe.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== i ? i : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }

  function qe(t, e, n, i, r, a, o, s, c, l, h, u) {
    g.call(this, null, a, o, s, c, l, i, r, h, u), this.image = {
      data: t || null,
      width: e || 1,
      height: n || 1
    }, this.magFilter = void 0 !== c ? c : 1003, this.minFilter = void 0 !== l ? l : 1003, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
  }

  je.prototype = Object.create(jt.prototype), je.prototype.constructor = je, je.prototype.isShaderMaterial = !0, je.prototype.copy = function (t) {
    return jt.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Ve(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = Object.assign({}, t.extensions), this;
  }, je.prototype.toJSON = function (t) {
    var e = jt.prototype.toJSON.call(this, t);
    e.uniforms = {};

    for (var _n101 in this.uniforms) {
      var _i72 = this.uniforms[_n101].value;
      _i72 && _i72.isTexture ? e.uniforms[_n101] = {
        type: "t",
        value: _i72.toJSON(t).uuid
      } : _i72 && _i72.isColor ? e.uniforms[_n101] = {
        type: "c",
        value: _i72.getHex()
      } : _i72 && _i72.isVector2 ? e.uniforms[_n101] = {
        type: "v2",
        value: _i72.toArray()
      } : _i72 && _i72.isVector3 ? e.uniforms[_n101] = {
        type: "v3",
        value: _i72.toArray()
      } : _i72 && _i72.isVector4 ? e.uniforms[_n101] = {
        type: "v4",
        value: _i72.toArray()
      } : _i72 && _i72.isMatrix3 ? e.uniforms[_n101] = {
        type: "m3",
        value: _i72.toArray()
      } : _i72 && _i72.isMatrix4 ? e.uniforms[_n101] = {
        type: "m4",
        value: _i72.toArray()
      } : e.uniforms[_n101] = {
        value: _i72
      };
    }

    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
    var n = {};

    for (var _t106 in this.extensions) {
      !0 === this.extensions[_t106] && (n[_t106] = !0);
    }

    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }, Xe.prototype = Object.assign(Object.create(q.prototype), {
    constructor: Xe,
    isCamera: !0,
    copy: function copy(t, e) {
      return q.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this;
    },
    getWorldDirection: function getWorldDirection(t) {
      void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new b()), this.updateMatrixWorld(!0);
      var e = this.matrixWorld.elements;
      return t.set(-e[8], -e[9], -e[10]).normalize();
    },
    updateMatrixWorld: function updateMatrixWorld(t) {
      q.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld);
    },
    updateWorldMatrix: function updateWorldMatrix(t, e) {
      q.prototype.updateWorldMatrix.call(this, t, e), this.matrixWorldInverse.getInverse(this.matrixWorld);
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    }
  }), Ye.prototype = Object.assign(Object.create(Xe.prototype), {
    constructor: Ye,
    isPerspectiveCamera: !0,
    copy: function copy(t, e) {
      return Xe.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
    },
    setFocalLength: function setFocalLength(t) {
      var e = .5 * this.getFilmHeight() / t;
      this.fov = 2 * h.RAD2DEG * Math.atan(e), this.updateProjectionMatrix();
    },
    getFocalLength: function getFocalLength() {
      var t = Math.tan(.5 * h.DEG2RAD * this.fov);
      return .5 * this.getFilmHeight() / t;
    },
    getEffectiveFOV: function getEffectiveFOV() {
      return 2 * h.RAD2DEG * Math.atan(Math.tan(.5 * h.DEG2RAD * this.fov) / this.zoom);
    },
    getFilmWidth: function getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    },
    getFilmHeight: function getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    },
    setViewOffset: function setViewOffset(t, e, n, i, r, a) {
      this.aspect = t / e, null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
    },
    clearViewOffset: function clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function updateProjectionMatrix() {
      var t = this.near,
          e = t * Math.tan(.5 * h.DEG2RAD * this.fov) / this.zoom,
          n = 2 * e,
          i = this.aspect * n,
          r = -.5 * i,
          a = this.view;

      if (null !== this.view && this.view.enabled) {
        var _t107 = a.fullWidth,
            _o18 = a.fullHeight;
        r += a.offsetX * i / _t107, e -= a.offsetY * n / _o18, i *= a.width / _t107, n *= a.height / _o18;
      }

      var o = this.filmOffset;
      0 !== o && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix);
    },
    toJSON: function toJSON(t) {
      var e = q.prototype.toJSON.call(this, t);
      return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
    }
  }), qe.prototype = Object.create(g.prototype), qe.prototype.constructor = qe, qe.prototype.isDataTexture = !0;
  var Ze = new dt(),
      Je = new b();

  function Ke(t, e, n, i, r, a) {
    this.planes = [void 0 !== t ? t : new St(), void 0 !== e ? e : new St(), void 0 !== n ? n : new St(), void 0 !== i ? i : new St(), void 0 !== r ? r : new St(), void 0 !== a ? a : new St()];
  }

  Object.assign(Ke.prototype, {
    set: function set(t, e, n, i, r, a) {
      var o = this.planes;
      return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      var e = this.planes;

      for (var _n102 = 0; _n102 < 6; _n102++) {
        e[_n102].copy(t.planes[_n102]);
      }

      return this;
    },
    setFromProjectionMatrix: function setFromProjectionMatrix(t) {
      var e = this.planes,
          n = t.elements,
          i = n[0],
          r = n[1],
          a = n[2],
          o = n[3],
          s = n[4],
          c = n[5],
          l = n[6],
          h = n[7],
          u = n[8],
          d = n[9],
          f = n[10],
          p = n[11],
          m = n[12],
          g = n[13],
          v = n[14],
          x = n[15];
      return e[0].setComponents(o - i, h - s, p - u, x - m).normalize(), e[1].setComponents(o + i, h + s, p + u, x + m).normalize(), e[2].setComponents(o + r, h + c, p + d, x + g).normalize(), e[3].setComponents(o - r, h - c, p - d, x - g).normalize(), e[4].setComponents(o - a, h - l, p - f, x - v).normalize(), e[5].setComponents(o + a, h + l, p + f, x + v).normalize(), this;
    },
    intersectsObject: function intersectsObject(t) {
      var e = t.geometry;
      return null === e.boundingSphere && e.computeBoundingSphere(), Ze.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Ze);
    },
    intersectsSprite: function intersectsSprite(t) {
      return Ze.center.set(0, 0, 0), Ze.radius = .7071067811865476, Ze.applyMatrix4(t.matrixWorld), this.intersectsSphere(Ze);
    },
    intersectsSphere: function intersectsSphere(t) {
      var e = this.planes,
          n = t.center,
          i = -t.radius;

      for (var _t108 = 0; _t108 < 6; _t108++) {
        if (e[_t108].distanceToPoint(n) < i) return !1;
      }

      return !0;
    },
    intersectsBox: function intersectsBox(t) {
      var e = this.planes;

      for (var _n103 = 0; _n103 < 6; _n103++) {
        var _i73 = e[_n103];
        if (Je.x = _i73.normal.x > 0 ? t.max.x : t.min.x, Je.y = _i73.normal.y > 0 ? t.max.y : t.min.y, Je.z = _i73.normal.z > 0 ? t.max.z : t.min.z, _i73.distanceToPoint(Je) < 0) return !1;
      }

      return !0;
    },
    containsPoint: function containsPoint(t) {
      var e = this.planes;

      for (var _n104 = 0; _n104 < 6; _n104++) {
        if (e[_n104].distanceToPoint(t) < 0) return !1;
      }

      return !0;
    }
  });
  var Qe = {
    common: {
      diffuse: {
        value: new Bt(15658734)
      },
      opacity: {
        value: 1
      },
      map: {
        value: null
      },
      uvTransform: {
        value: new d()
      },
      uv2Transform: {
        value: new d()
      },
      alphaMap: {
        value: null
      }
    },
    specularmap: {
      specularMap: {
        value: null
      }
    },
    envmap: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      reflectivity: {
        value: 1
      },
      refractionRatio: {
        value: .98
      },
      maxMipLevel: {
        value: 0
      }
    },
    aomap: {
      aoMap: {
        value: null
      },
      aoMapIntensity: {
        value: 1
      }
    },
    lightmap: {
      lightMap: {
        value: null
      },
      lightMapIntensity: {
        value: 1
      }
    },
    emissivemap: {
      emissiveMap: {
        value: null
      }
    },
    bumpmap: {
      bumpMap: {
        value: null
      },
      bumpScale: {
        value: 1
      }
    },
    normalmap: {
      normalMap: {
        value: null
      },
      normalScale: {
        value: new u(1, 1)
      }
    },
    displacementmap: {
      displacementMap: {
        value: null
      },
      displacementScale: {
        value: 1
      },
      displacementBias: {
        value: 0
      }
    },
    roughnessmap: {
      roughnessMap: {
        value: null
      }
    },
    metalnessmap: {
      metalnessMap: {
        value: null
      }
    },
    gradientmap: {
      gradientMap: {
        value: null
      }
    },
    fog: {
      fogDensity: {
        value: 25e-5
      },
      fogNear: {
        value: 1
      },
      fogFar: {
        value: 2e3
      },
      fogColor: {
        value: new Bt(16777215)
      }
    },
    lights: {
      ambientLightColor: {
        value: []
      },
      lightProbe: {
        value: []
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {}
        }
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      directionalShadowMap: {
        value: []
      },
      directionalShadowMatrix: {
        value: []
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {}
        }
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      spotShadowMap: {
        value: []
      },
      spotShadowMatrix: {
        value: []
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {}
        }
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: {
        value: []
      },
      pointShadowMatrix: {
        value: []
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {}
        }
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {}
        }
      }
    },
    points: {
      diffuse: {
        value: new Bt(15658734)
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      scale: {
        value: 1
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new d()
      }
    },
    sprite: {
      diffuse: {
        value: new Bt(15658734)
      },
      opacity: {
        value: 1
      },
      center: {
        value: new u(.5, .5)
      },
      rotation: {
        value: 0
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new d()
      }
    }
  };

  function $e() {
    var t = null,
        e = !1,
        n = null,
        i = null;

    function r(e, a) {
      n(e, a), i = t.requestAnimationFrame(r);
    }

    return {
      start: function start() {
        !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0);
      },
      stop: function stop() {
        t.cancelAnimationFrame(i), e = !1;
      },
      setAnimationLoop: function setAnimationLoop(t) {
        n = t;
      },
      setContext: function setContext(e) {
        t = e;
      }
    };
  }

  function tn(t, e) {
    var n = e.isWebGL2,
        i = new WeakMap();
    return {
      get: function get(t) {
        return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
      },
      remove: function remove(e) {
        e.isInterleavedBufferAttribute && (e = e.data);
        var n = i.get(e);
        n && (t.deleteBuffer(n.buffer), i.delete(e));
      },
      update: function update(e, r) {
        e.isInterleavedBufferAttribute && (e = e.data);
        var a = i.get(e);
        void 0 === a ? i.set(e, function (e, n) {
          var i = e.array,
              r = e.usage,
              a = t.createBuffer();
          t.bindBuffer(n, a), t.bufferData(n, i, r), e.onUploadCallback();
          var o = 5126;
          return _instanceof(i, Float32Array) ? o = 5126 : _instanceof(i, Float64Array) ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : _instanceof(i, Uint16Array) ? o = 5123 : _instanceof(i, Int16Array) ? o = 5122 : _instanceof(i, Uint32Array) ? o = 5125 : _instanceof(i, Int32Array) ? o = 5124 : _instanceof(i, Int8Array) ? o = 5120 : _instanceof(i, Uint8Array) && (o = 5121), {
            buffer: a,
            type: o,
            bytesPerElement: i.BYTES_PER_ELEMENT,
            version: e.version
          };
        }(e, r)) : a.version < e.version && (!function (e, i, r) {
          var a = i.array,
              o = i.updateRange;
          t.bindBuffer(r, e), -1 === o.count ? t.bufferSubData(r, 0, a) : (n ? t.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count) : t.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)), o.count = -1);
        }(a.buffer, e, r), a.version = e.version);
      }
    };
  }

  function en(t, e, n, i) {
    Be.call(this), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: i
    }, this.fromBufferGeometry(new nn(t, e, n, i)), this.mergeVertices();
  }

  function nn(t, e, n, i) {
    pe.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: i
    };
    var r = (t = t || 1) / 2,
        a = (e = e || 1) / 2,
        o = Math.floor(n) || 1,
        s = Math.floor(i) || 1,
        c = o + 1,
        l = s + 1,
        h = t / o,
        u = e / s,
        d = [],
        f = [],
        p = [],
        m = [];

    for (var _t109 = 0; _t109 < l; _t109++) {
      var _e96 = _t109 * u - a;

      for (var _n105 = 0; _n105 < c; _n105++) {
        var _i74 = _n105 * h - r;

        f.push(_i74, -_e96, 0), p.push(0, 0, 1), m.push(_n105 / o), m.push(1 - _t109 / s);
      }
    }

    for (var _t110 = 0; _t110 < s; _t110++) {
      for (var _e97 = 0; _e97 < o; _e97++) {
        var _n106 = _e97 + c * _t110,
            _i75 = _e97 + c * (_t110 + 1),
            _r53 = _e97 + 1 + c * (_t110 + 1),
            _a19 = _e97 + 1 + c * _t110;

        d.push(_n106, _i75, _a19), d.push(_i75, _r53, _a19);
      }
    }

                        this.setIndex(d), this.setAttribute("position", new ie(f, 3)), this.setAttribute("normal", new ie(p, 3)), this.setAttribute("uv", new ie(m, 2));
  }

  en.prototype = Object.create(Be.prototype), en.prototype.constructor = en, nn.prototype = Object.create(pe.prototype), nn.prototype.constructor = nn;
  var rn = {
    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed = vec3( position );",
    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
    color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
    common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);    } else if (face == 1.0) {\n      uv = vec2(-direction.x, -direction.z) / abs(direction.y);    } else if (face == 2.0) {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);    } else if (face == 3.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);    } else if (face == 4.0) {\n      uv = vec2(-direction.x, direction.z) / abs(direction.y);    } else {\n      uv = vec2(direction.x, direction.y) / abs(direction.z);    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",
    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
    envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec2 sampleUV = equirectUv( reflectVec );\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV = equirectUv( reflectVec );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3\tdiffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
    map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
    normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
    clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
    clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
    uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
    normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
  },
      an = {
    basic: {
      uniforms: He([Qe.common, Qe.specularmap, Qe.envmap, Qe.aomap, Qe.lightmap, Qe.fog]),
      vertexShader: rn.meshbasic_vert,
      fragmentShader: rn.meshbasic_frag
    },
    lambert: {
      uniforms: He([Qe.common, Qe.specularmap, Qe.envmap, Qe.aomap, Qe.lightmap, Qe.emissivemap, Qe.fog, Qe.lights, {
        emissive: {
          value: new Bt(0)
        }
      }]),
      vertexShader: rn.meshlambert_vert,
      fragmentShader: rn.meshlambert_frag
    },
    phong: {
      uniforms: He([Qe.common, Qe.specularmap, Qe.envmap, Qe.aomap, Qe.lightmap, Qe.emissivemap, Qe.bumpmap, Qe.normalmap, Qe.displacementmap, Qe.fog, Qe.lights, {
        emissive: {
          value: new Bt(0)
        },
        specular: {
          value: new Bt(1118481)
        },
        shininess: {
          value: 30
        }
      }]),
      vertexShader: rn.meshphong_vert,
      fragmentShader: rn.meshphong_frag
    },
    standard: {
      uniforms: He([Qe.common, Qe.envmap, Qe.aomap, Qe.lightmap, Qe.emissivemap, Qe.bumpmap, Qe.normalmap, Qe.displacementmap, Qe.roughnessmap, Qe.metalnessmap, Qe.fog, Qe.lights, {
        emissive: {
          value: new Bt(0)
        },
        roughness: {
          value: 1
        },
        metalness: {
          value: 0
        },
        envMapIntensity: {
          value: 1
        }
      }]),
      vertexShader: rn.meshphysical_vert,
      fragmentShader: rn.meshphysical_frag
    },
    toon: {
      uniforms: He([Qe.common, Qe.aomap, Qe.lightmap, Qe.emissivemap, Qe.bumpmap, Qe.normalmap, Qe.displacementmap, Qe.gradientmap, Qe.fog, Qe.lights, {
        emissive: {
          value: new Bt(0)
        }
      }]),
      vertexShader: rn.meshtoon_vert,
      fragmentShader: rn.meshtoon_frag
    },
    matcap: {
      uniforms: He([Qe.common, Qe.bumpmap, Qe.normalmap, Qe.displacementmap, Qe.fog, {
        matcap: {
          value: null
        }
      }]),
      vertexShader: rn.meshmatcap_vert,
      fragmentShader: rn.meshmatcap_frag
    },
    points: {
      uniforms: He([Qe.points, Qe.fog]),
      vertexShader: rn.points_vert,
      fragmentShader: rn.points_frag
    },
    dashed: {
      uniforms: He([Qe.common, Qe.fog, {
        scale: {
          value: 1
        },
        dashSize: {
          value: 1
        },
        totalSize: {
          value: 2
        }
      }]),
      vertexShader: rn.linedashed_vert,
      fragmentShader: rn.linedashed_frag
    },
    depth: {
      uniforms: He([Qe.common, Qe.displacementmap]),
      vertexShader: rn.depth_vert,
      fragmentShader: rn.depth_frag
    },
    normal: {
      uniforms: He([Qe.common, Qe.bumpmap, Qe.normalmap, Qe.displacementmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: rn.normal_vert,
      fragmentShader: rn.normal_frag
    },
    sprite: {
      uniforms: He([Qe.sprite, Qe.fog]),
      vertexShader: rn.sprite_vert,
      fragmentShader: rn.sprite_frag
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new d()
        },
        t2D: {
          value: null
        }
      },
      vertexShader: rn.background_vert,
      fragmentShader: rn.background_frag
    },
    cube: {
      uniforms: He([Qe.envmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: rn.cube_vert,
      fragmentShader: rn.cube_frag
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: rn.equirect_vert,
      fragmentShader: rn.equirect_frag
    },
    distanceRGBA: {
      uniforms: He([Qe.common, Qe.displacementmap, {
        referencePosition: {
          value: new b()
        },
        nearDistance: {
          value: 1
        },
        farDistance: {
          value: 1e3
        }
      }]),
      vertexShader: rn.distanceRGBA_vert,
      fragmentShader: rn.distanceRGBA_frag
    },
    shadow: {
      uniforms: He([Qe.lights, Qe.fog, {
        color: {
          value: new Bt(0)
        },
        opacity: {
          value: 1
        }
      }]),
      vertexShader: rn.shadow_vert,
      fragmentShader: rn.shadow_frag
    }
  };

  function on(t, e, n, i) {
    var r = new Bt(0);
    var a,
        o,
        s = 0,
        c = null,
        l = 0,
        h = null;

    function u(t, n) {
      e.buffers.color.setClear(t.r, t.g, t.b, n, i);
    }

    return {
      getClearColor: function getClearColor() {
        return r;
      },
      setClearColor: function setClearColor(t, e) {
        r.set(t), s = void 0 !== e ? e : 1, u(r, s);
      },
      getClearAlpha: function getClearAlpha() {
        return s;
      },
      setClearAlpha: function setClearAlpha(t) {
        s = t, u(r, s);
      },
      render: function render(e, i, d, f) {
        var p = !0 === i.isScene ? i.background : null;
        var m = t.xr,
            g = m.getSession && m.getSession();

        if (g && "additive" === g.environmentBlendMode && (p = null), null === p ? u(r, s) : p && p.isColor && (u(p, 1), f = !0), (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), p && (p.isCubeTexture || p.isWebGLCubeRenderTarget || 306 === p.mapping)) {
          void 0 === o && (o = new Ne(new ke(1, 1, 1), new je({
            name: "BackgroundCubeMaterial",
            uniforms: Ve(an.cube.uniforms),
            vertexShader: an.cube.vertexShader,
            fragmentShader: an.cube.fragmentShader,
            side: 1,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
          })), o.geometry.deleteAttribute("normal"), o.geometry.deleteAttribute("uv"), o.onBeforeRender = function (t, e, n) {
            this.matrixWorld.copyPosition(n.matrixWorld);
          }, Object.defineProperty(o.material, "envMap", {
            get: function get() {
              return this.uniforms.envMap.value;
            }
          }), n.update(o));

          var _i76 = p.isWebGLCubeRenderTarget ? p.texture : p;

          o.material.uniforms.envMap.value = _i76, o.material.uniforms.flipEnvMap.value = _i76.isCubeTexture ? -1 : 1, c === p && l === _i76.version && h === t.toneMapping || (o.material.needsUpdate = !0, c = p, l = _i76.version, h = t.toneMapping), e.unshift(o, o.geometry, o.material, 0, 0, null);
        } else p && p.isTexture && (void 0 === a && (a = new Ne(new nn(2, 2), new je({
          name: "BackgroundMaterial",
          uniforms: Ve(an.background.uniforms),
          vertexShader: an.background.vertexShader,
          fragmentShader: an.background.fragmentShader,
          side: 0,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), a.geometry.deleteAttribute("normal"), Object.defineProperty(a.material, "map", {
          get: function get() {
            return this.uniforms.t2D.value;
          }
        }), n.update(a)), a.material.uniforms.t2D.value = p, !0 === p.matrixAutoUpdate && p.updateMatrix(), a.material.uniforms.uvTransform.value.copy(p.matrix), c === p && l === p.version && h === t.toneMapping || (a.material.needsUpdate = !0, c = p, l = p.version, h = t.toneMapping), e.unshift(a, a.geometry, a.material, 0, 0, null));
      }
    };
  }

  function sn(t, e, n, i) {
    var r = t.getParameter(34921),
        a = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
        o = i.isWebGL2 || null !== a,
        s = {},
        c = d(null);
    var l = c;

    function h(e) {
      return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e);
    }

    function u(e) {
      return i.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e);
    }

    function d(t) {
      var e = [],
          n = [],
          i = [];

      for (var _t111 = 0; _t111 < r; _t111++) {
        e[_t111] = 0, n[_t111] = 0, i[_t111] = 0;
      }

      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: e,
        enabledAttributes: n,
        attributeDivisors: i,
        object: t,
        attributes: {}
      };
    }

    function f() {
      var t = l.newAttributes;

      for (var _e98 = 0, _n107 = t.length; _e98 < _n107; _e98++) {
        t[_e98] = 0;
      }
    }

    function p(t) {
      m(t, 0);
    }

    function m(n, r) {
      var a = l.newAttributes,
          o = l.enabledAttributes,
          s = l.attributeDivisors;

      if (a[n] = 1, 0 === o[n] && (t.enableVertexAttribArray(n), o[n] = 1), s[n] !== r) {
        (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), s[n] = r;
      }
    }

    function g() {
      var e = l.newAttributes,
          n = l.enabledAttributes;

      for (var _i77 = 0, _r54 = n.length; _i77 < _r54; _i77++) {
        n[_i77] !== e[_i77] && (t.disableVertexAttribArray(_i77), n[_i77] = 0);
      }
    }

                    function v(e, n, r, a, o, s) {
      !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, a, o, s) : t.vertexAttribIPointer(e, n, r, a, o, s);
    }

    function x() {
      _(), l !== c && (l = c, h(l.object));
    }

    function _() {
      c.geometry = null, c.program = null, c.wireframe = !1;
    }

    return {
      setup: function setup(r, c, u, x, _) {
        var y = !1;

        if (o) {
          var _e99 = function (e, n, r) {
            var o = !0 === r.wireframe;
            var c = s[e.id];
            void 0 === c && (c = {}, s[e.id] = c);
            var l = c[n.id];
            void 0 === l && (l = {}, c[n.id] = l);
            var h = l[o];
            void 0 === h && (h = d(i.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()), l[o] = h);
            return h;
          }(x, u, c);

          l !== _e99 && (l = _e99, h(l.object)), y = function (t) {
            var e = l.attributes,
                n = t.attributes;
            if (Object.keys(e).length !== Object.keys(n).length) return !0;

            for (var _t112 in n) {
              var _i78 = e[_t112],
                  _r55 = n[_t112];
              if (_i78.attribute !== _r55) return !0;
              if (_i78.data !== _r55.data) return !0;
            }

            return !1;
          }(x), y && function (t) {
            var e = {},
                n = t.attributes;

            for (var _t113 in n) {
              var _i79 = n[_t113],
                  _r56 = {};
              _r56.attribute = _i79, _i79.data && (_r56.data = _i79.data), e[_t113] = _r56;
            }

            l.attributes = e;
          }(x);
        } else {
          var _t114 = !0 === c.wireframe;

          l.geometry === x.id && l.program === u.id && l.wireframe === _t114 || (l.geometry = x.id, l.program = u.id, l.wireframe = _t114, y = !0);
        }

        !0 === r.isInstancedMesh && (y = !0), null !== _ && n.update(_, 34963), y && (!function (r, a, o, s) {
          if (!1 === i.isWebGL2 && (r.isInstancedMesh || s.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
          f();
          var c = s.attributes,
              l = o.getAttributes(),
              h = a.defaultAttributeValues;

          for (var _e100 in l) {
            var _i80 = l[_e100];

            if (_i80 >= 0) {
              var _a20 = c[_e100];

              if (void 0 !== _a20) {
                var _e101 = _a20.normalized,
                    _r57 = _a20.itemSize,
                    _o19 = n.get(_a20);

                if (void 0 === _o19) continue;
                var _c11 = _o19.buffer,
                    _l10 = _o19.type,
                    _h7 = _o19.bytesPerElement;

                if (_a20.isInterleavedBufferAttribute) {
                  var _n108 = _a20.data,
                      _o20 = _n108.stride,
                      _u8 = _a20.offset;
                  _n108 && _n108.isInstancedInterleavedBuffer ? (m(_i80, _n108.meshPerAttribute), void 0 === s._maxInstanceCount && (s._maxInstanceCount = _n108.meshPerAttribute * _n108.count)) : p(_i80), t.bindBuffer(34962, _c11), v(_i80, _r57, _l10, _e101, _o20 * _h7, _u8 * _h7);
                } else _a20.isInstancedBufferAttribute ? (m(_i80, _a20.meshPerAttribute), void 0 === s._maxInstanceCount && (s._maxInstanceCount = _a20.meshPerAttribute * _a20.count)) : p(_i80), t.bindBuffer(34962, _c11), v(_i80, _r57, _l10, _e101, 0, 0);
              } else if ("instanceMatrix" === _e100) {
                var _e102 = n.get(r.instanceMatrix);

                if (void 0 === _e102) continue;
                var _a21 = _e102.buffer,
                    _o21 = _e102.type;
                m(_i80 + 0, 1), m(_i80 + 1, 1), m(_i80 + 2, 1), m(_i80 + 3, 1), t.bindBuffer(34962, _a21), t.vertexAttribPointer(_i80 + 0, 4, _o21, !1, 64, 0), t.vertexAttribPointer(_i80 + 1, 4, _o21, !1, 64, 16), t.vertexAttribPointer(_i80 + 2, 4, _o21, !1, 64, 32), t.vertexAttribPointer(_i80 + 3, 4, _o21, !1, 64, 48);
              } else if (void 0 !== h) {
                var _n109 = h[_e100];
                if (void 0 !== _n109) switch (_n109.length) {
                  case 2:
                    t.vertexAttrib2fv(_i80, _n109);
                    break;

                  case 3:
                    t.vertexAttrib3fv(_i80, _n109);
                    break;

                  case 4:
                    t.vertexAttrib4fv(_i80, _n109);
                    break;

                  default:
                    t.vertexAttrib1fv(_i80, _n109);
                }
              }
            }
          }

          g();
        }(r, c, u, x), null !== _ && t.bindBuffer(34963, n.get(_).buffer));
      },
      reset: x,
      resetDefaultState: _,
      dispose: function dispose() {
        x();

        for (var _t115 in s) {
          var _e103 = s[_t115];

          for (var _t116 in _e103) {
            var _n110 = _e103[_t116];

            for (var _t117 in _n110) {
              u(_n110[_t117].object), delete _n110[_t117];
            }

            delete _e103[_t116];
          }

          delete s[_t115];
        }
      },
      releaseStatesOfGeometry: function releaseStatesOfGeometry(t) {
        if (void 0 === s[t.id]) return;
        var e = s[t.id];

        for (var _t118 in e) {
          var _n111 = e[_t118];

          for (var _t119 in _n111) {
            u(_n111[_t119].object), delete _n111[_t119];
          }

          delete e[_t118];
        }

        delete s[t.id];
      },
      releaseStatesOfProgram: function releaseStatesOfProgram(t) {
        for (var _e104 in s) {
          var _n112 = s[_e104];
          if (void 0 === _n112[t.id]) continue;
          var _i81 = _n112[t.id];

          for (var _t120 in _i81) {
            u(_i81[_t120].object), delete _i81[_t120];
          }

          delete _n112[t.id];
        }
      },
      initAttributes: f,
      enableAttribute: p,
      disableUnusedAttributes: g
    };
  }

  function cn(t, e, n, i) {
    var r = i.isWebGL2;
    var a;
    this.setMode = function (t) {
      a = t;
    }, this.render = function (e, i) {
      t.drawArrays(a, e, i), n.update(i, a);
    }, this.renderInstances = function (i, o, s, c) {
      if (0 === c) return;
      var l, h;
      if (r) l = t, h = "drawArraysInstanced";else if (l = e.get("ANGLE_instanced_arrays"), h = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      l[h](a, o, s, c), n.update(s, a, c);
    };
  }

  function ln(t, e, n) {
    var i;

    function r(e) {
      if ("highp" === e) {
        if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
        e = "mediump";
      }

      return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
    }

    var a = "undefined" != typeof WebGL2RenderingContext && _instanceof(t, WebGL2RenderingContext) || "undefined" != typeof WebGL2ComputeRenderingContext && _instanceof(t, WebGL2ComputeRenderingContext);

    var o = void 0 !== n.precision ? n.precision : "highp";
    var s = r(o);
    s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
    var c = !0 === n.logarithmicDepthBuffer,
        l = t.getParameter(34930),
        h = t.getParameter(35660),
        u = t.getParameter(3379),
        d = t.getParameter(34076),
        f = t.getParameter(34921),
        p = t.getParameter(36347),
        m = t.getParameter(36348),
        g = t.getParameter(36349),
        v = h > 0,
        x = a || !!e.get("OES_texture_float");
    return {
      isWebGL2: a,
      getMaxAnisotropy: function getMaxAnisotropy() {
        if (void 0 !== i) return i;
        var n = e.get("EXT_texture_filter_anisotropic");
        return i = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, i;
      },
      getMaxPrecision: r,
      precision: o,
      logarithmicDepthBuffer: c,
      maxTextures: l,
      maxVertexTextures: h,
      maxTextureSize: u,
      maxCubemapSize: d,
      maxAttributes: f,
      maxVertexUniforms: p,
      maxVaryings: m,
      maxFragmentUniforms: g,
      vertexTextures: v,
      floatFragmentTextures: x,
      floatVertexTextures: v && x,
      maxSamples: a ? t.getParameter(36183) : 0
    };
  }

  function hn() {
    var t = this;
    var e = null,
        n = 0,
        i = !1,
        r = !1;
    var a = new St(),
        o = new d(),
        s = {
      value: null,
      needsUpdate: !1
    };

    function c() {
      s.value !== e && (s.value = e, s.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
    }

    function l(e, n, i, r) {
      var c = null !== e ? e.length : 0,
          l = null;

      if (0 !== c) {
        if (l = s.value, !0 !== r || null === l) {
          var _t121 = i + 4 * c,
              _r58 = n.matrixWorldInverse;

          o.getNormalMatrix(_r58), (null === l || l.length < _t121) && (l = new Float32Array(_t121));

          for (var _t122 = 0, _n113 = i; _t122 !== c; ++_t122, _n113 += 4) {
            a.copy(e[_t122]).applyMatrix4(_r58, o), a.normal.toArray(l, _n113), l[_n113 + 3] = a.constant;
          }
        }

        s.value = l, s.needsUpdate = !0;
      }

      return t.numPlanes = c, t.numIntersection = 0, l;
    }

    this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, r, a) {
      var o = 0 !== t.length || r || 0 !== n || i;
      return i = r, e = l(t, a, 0), n = t.length, o;
    }, this.beginShadows = function () {
      r = !0, l(null);
    }, this.endShadows = function () {
      r = !1, c();
    }, this.setState = function (t, a, o, h, u, d) {
      if (!i || null === t || 0 === t.length || r && !o) r ? l(null) : c();else {
        var _i82 = r ? 0 : n,
            _o22 = 4 * _i82;

        var _c12 = u.clippingState || null;

        s.value = _c12, _c12 = l(t, h, _o22, d);

        for (var _t123 = 0; _t123 !== _o22; ++_t123) {
          _c12[_t123] = e[_t123];
        }

        u.clippingState = _c12, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += _i82;
      }
    };
  }

  function un(t) {
    var e = {};
    return {
      get: function get(n) {
        if (void 0 !== e[n]) return e[n];
        var i;

        switch (n) {
          case "WEBGL_depth_texture":
            i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
            break;

          case "EXT_texture_filter_anisotropic":
            i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;

          case "WEBGL_compressed_texture_s3tc":
            i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;

          case "WEBGL_compressed_texture_pvrtc":
            i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;

          default:
            i = t.getExtension(n);
        }

        return null === i && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), e[n] = i, i;
      }
    };
  }

  function dn(t, e, n, i) {
    var r = new WeakMap(),
        a = new WeakMap();

    function o(t) {
      var s = t.target,
          c = r.get(s);
      null !== c.index && e.remove(c.index);

      for (var _t124 in c.attributes) {
        e.remove(c.attributes[_t124]);
      }

      s.removeEventListener("dispose", o), r.delete(s);
      var l = a.get(c);
      l && (e.remove(l), a.delete(c)), i.releaseStatesOfGeometry(s), !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount, n.memory.geometries--;
    }

    function s(t) {
      var n = [],
          i = t.index,
          r = t.attributes.position;
      var o = 0;

      if (null !== i) {
        var _t125 = i.array;
        o = i.version;

        for (var _e105 = 0, _i83 = _t125.length; _e105 < _i83; _e105 += 3) {
          var _i84 = _t125[_e105 + 0],
              _r59 = _t125[_e105 + 1],
              _a22 = _t125[_e105 + 2];
          n.push(_i84, _r59, _r59, _a22, _a22, _i84);
        }
      } else {
        var _t126 = r.array;
        o = r.version;

        for (var _e106 = 0, _i85 = _t126.length / 3 - 1; _e106 < _i85; _e106 += 3) {
          var _t127 = _e106 + 0,
              _i86 = _e106 + 1,
              _r60 = _e106 + 2;

          n.push(_t127, _i86, _i86, _r60, _r60, _t127);
        }
      }

      var s = new (oe(n) > 65535 ? ne : te)(n, 1);
      s.version = o;
      var c = a.get(t);
      c && e.remove(c), a.set(t, s);
    }

    return {
      get: function get(t, e) {
        var i = r.get(e);
        return i || (e.addEventListener("dispose", o), e.isBufferGeometry ? i = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = new pe().setFromObject(t)), i = e._bufferGeometry), r.set(e, i), n.memory.geometries++, i);
      },
      update: function update(t) {
        var n = t.attributes;

        for (var _t128 in n) {
          e.update(n[_t128], 34962);
        }

        var i = t.morphAttributes;

        for (var _t129 in i) {
          var _n114 = i[_t129];

          for (var _t130 = 0, _i87 = _n114.length; _t130 < _i87; _t130++) {
            e.update(_n114[_t130], 34962);
          }
        }
      },
      getWireframeAttribute: function getWireframeAttribute(t) {
        var e = a.get(t);

        if (e) {
          var _n115 = t.index;
          null !== _n115 && e.version < _n115.version && s(t);
        } else s(t);

        return a.get(t);
      }
    };
  }

  function fn(t, e, n, i) {
    var r = i.isWebGL2;
    var a, o, s;
    this.setMode = function (t) {
      a = t;
    }, this.setIndex = function (t) {
      o = t.type, s = t.bytesPerElement;
    }, this.render = function (e, i) {
      t.drawElements(a, i, o, e * s), n.update(i, a);
    }, this.renderInstances = function (i, c, l, h) {
      if (0 === h) return;
      var u, d;
      if (r) u = t, d = "drawElementsInstanced";else if (u = e.get("ANGLE_instanced_arrays"), d = "drawElementsInstancedANGLE", null === u) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      u[d](a, l, o, c * s, h), n.update(l, a, h);
    };
  }

  function pn(t) {
    var e = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function reset() {
        e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
      },
      update: function update(t, n, i) {
        switch (i = i || 1, e.calls++, n) {
          case 4:
            e.triangles += i * (t / 3);
            break;

          case 1:
            e.lines += i * (t / 2);
            break;

          case 3:
            e.lines += i * (t - 1);
            break;

          case 2:
            e.lines += i * t;
            break;

          case 0:
            e.points += i * t;
            break;

          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n);
        }
      }
    };
  }

  function mn(t, e) {
    return t[0] - e[0];
  }

  function gn(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1]);
  }

  function vn(t) {
    var e = {},
        n = new Float32Array(8),
        i = [];

    for (var _t131 = 0; _t131 < 8; _t131++) {
      i[_t131] = [_t131, 0];
    }

    return {
      update: function update(r, a, o, s) {
        var c = r.morphTargetInfluences,
            l = void 0 === c ? 0 : c.length;
        var h = e[a.id];

        if (void 0 === h) {
          h = [];

          for (var _t132 = 0; _t132 < l; _t132++) {
            h[_t132] = [_t132, 0];
          }

          e[a.id] = h;
        }

        for (var _t133 = 0; _t133 < l; _t133++) {
          var _e107 = h[_t133];
          _e107[0] = _t133, _e107[1] = c[_t133];
        }

        h.sort(gn);

        for (var _t134 = 0; _t134 < 8; _t134++) {
          _t134 < l && h[_t134][1] ? (i[_t134][0] = h[_t134][0], i[_t134][1] = h[_t134][1]) : (i[_t134][0] = Number.MAX_SAFE_INTEGER, i[_t134][1] = 0);
        }

        i.sort(mn);
        var u = o.morphTargets && a.morphAttributes.position,
            d = o.morphNormals && a.morphAttributes.normal;
        var f = 0;

        for (var _t135 = 0; _t135 < 8; _t135++) {
          var _e108 = i[_t135],
              _r61 = _e108[0],
              _o23 = _e108[1];
          _r61 !== Number.MAX_SAFE_INTEGER && _o23 ? (u && a.getAttribute("morphTarget" + _t135) !== u[_r61] && a.setAttribute("morphTarget" + _t135, u[_r61]), d && a.getAttribute("morphNormal" + _t135) !== d[_r61] && a.setAttribute("morphNormal" + _t135, d[_r61]), n[_t135] = _o23, f += _o23) : (u && void 0 !== a.getAttribute("morphTarget" + _t135) && a.deleteAttribute("morphTarget" + _t135), d && void 0 !== a.getAttribute("morphNormal" + _t135) && a.deleteAttribute("morphNormal" + _t135), n[_t135] = 0);
        }

        var p = a.morphTargetsRelative ? 1 : 1 - f;
        s.getUniforms().setValue(t, "morphTargetBaseInfluence", p), s.getUniforms().setValue(t, "morphTargetInfluences", n);
      }
    };
  }

  function xn(t, e, n, i) {
    var r = new WeakMap();
    return {
      update: function update(t) {
        var a = i.render.frame,
            o = t.geometry,
            s = e.get(t, o);
        return r.get(s) !== a && (o.isGeometry && s.updateFromObject(t), e.update(s), r.set(s, a)), t.isInstancedMesh && n.update(t.instanceMatrix, 34962), s;
      },
      dispose: function dispose() {
        r = new WeakMap();
      }
    };
  }

  function _n(t, e, n, i, r, a, o, s, c, l) {
    t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, o = void 0 !== o ? o : 1022, g.call(this, t, e, n, i, r, a, o, s, c, l), this.flipY = !1;
  }

  function yn(t, e, n, i) {
    g.call(this, null), this.image = {
      data: t || null,
      width: e || 1,
      height: n || 1,
      depth: i || 1
    }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
  }

  function Mn(t, e, n, i) {
    g.call(this, null), this.image = {
      data: t || null,
      width: e || 1,
      height: n || 1,
      depth: i || 1
    }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
  }

  an.physical = {
    uniforms: He([an.standard.uniforms, {
      clearcoat: {
        value: 0
      },
      clearcoatMap: {
        value: null
      },
      clearcoatRoughness: {
        value: 0
      },
      clearcoatRoughnessMap: {
        value: null
      },
      clearcoatNormalScale: {
        value: new u(1, 1)
      },
      clearcoatNormalMap: {
        value: null
      },
      sheen: {
        value: new Bt(0)
      },
      transparency: {
        value: 0
      }
    }]),
    vertexShader: rn.meshphysical_vert,
    fragmentShader: rn.meshphysical_frag
  }, _n.prototype = Object.create(g.prototype), _n.prototype.constructor = _n, _n.prototype.isCubeTexture = !0, Object.defineProperty(_n.prototype, "images", {
    get: function get() {
      return this.image;
    },
    set: function set(t) {
      this.image = t;
    }
  }), yn.prototype = Object.create(g.prototype), yn.prototype.constructor = yn, yn.prototype.isDataTexture2DArray = !0, Mn.prototype = Object.create(g.prototype), Mn.prototype.constructor = Mn, Mn.prototype.isDataTexture3D = !0;
  var bn = new g(),
      wn = new yn(),
      Sn = new Mn(),
      En = new _n(),
      Tn = [],
      Ln = [],
      An = new Float32Array(16),
      Pn = new Float32Array(9),
      Cn = new Float32Array(4);

  function Dn(t, e, n) {
    var i = t[0];
    if (i <= 0 || i > 0) return t;
    var r = e * n,
        a = Tn[r];

    if (void 0 === a && (a = new Float32Array(r), Tn[r] = a), 0 !== e) {
      i.toArray(a, 0);

      for (var _i88 = 1, _r62 = 0; _i88 !== e; ++_i88) {
        _r62 += n, t[_i88].toArray(a, _r62);
      }
    }

    return a;
  }

  function Nn(t, e) {
    if (t.length !== e.length) return !1;

    for (var _n116 = 0, _i89 = t.length; _n116 < _i89; _n116++) {
      if (t[_n116] !== e[_n116]) return !1;
    }

    return !0;
  }

  function Rn(t, e) {
    for (var _n117 = 0, _i90 = e.length; _n117 < _i90; _n117++) {
      t[_n117] = e[_n117];
    }
  }

  function In(t, e) {
    var n = Ln[e];
    void 0 === n && (n = new Int32Array(e), Ln[e] = n);

    for (var _i91 = 0; _i91 !== e; ++_i91) {
      n[_i91] = t.allocateTextureUnit();
    }

    return n;
  }

  function On(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e);
  }

  function zn(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);else {
      if (Nn(n, e)) return;
      t.uniform2fv(this.addr, e), Rn(n, e);
    }
  }

  function Un(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);else {
      if (Nn(n, e)) return;
      t.uniform3fv(this.addr, e), Rn(n, e);
    }
  }

  function Fn(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);else {
      if (Nn(n, e)) return;
      t.uniform4fv(this.addr, e), Rn(n, e);
    }
  }

  function Bn(t, e) {
    var n = this.cache,
        i = e.elements;

    if (void 0 === i) {
      if (Nn(n, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), Rn(n, e);
    } else {
      if (Nn(n, i)) return;
      Cn.set(i), t.uniformMatrix2fv(this.addr, !1, Cn), Rn(n, i);
    }
  }

  function Gn(t, e) {
    var n = this.cache,
        i = e.elements;

    if (void 0 === i) {
      if (Nn(n, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), Rn(n, e);
    } else {
      if (Nn(n, i)) return;
      Pn.set(i), t.uniformMatrix3fv(this.addr, !1, Pn), Rn(n, i);
    }
  }

  function kn(t, e) {
    var n = this.cache,
        i = e.elements;

    if (void 0 === i) {
      if (Nn(n, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), Rn(n, e);
    } else {
      if (Nn(n, i)) return;
      An.set(i), t.uniformMatrix4fv(this.addr, !1, An), Rn(n, i);
    }
  }

  function Vn(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(e || bn, r);
  }

  function Hn(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || wn, r);
  }

  function Wn(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || Sn, r);
  }

  function jn(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(e || En, r);
  }

  function Xn(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e);
  }

  function Yn(t, e) {
    var n = this.cache;
    Nn(n, e) || (t.uniform2iv(this.addr, e), Rn(n, e));
  }

  function qn(t, e) {
    var n = this.cache;
    Nn(n, e) || (t.uniform3iv(this.addr, e), Rn(n, e));
  }

  function Zn(t, e) {
    var n = this.cache;
    Nn(n, e) || (t.uniform4iv(this.addr, e), Rn(n, e));
  }

  function Jn(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e);
  }

  function Kn(t, e) {
    t.uniform1fv(this.addr, e);
  }

  function Qn(t, e) {
    t.uniform1iv(this.addr, e);
  }

  function $n(t, e) {
    t.uniform2iv(this.addr, e);
  }

  function ti(t, e) {
    t.uniform3iv(this.addr, e);
  }

  function ei(t, e) {
    t.uniform4iv(this.addr, e);
  }

  function ni(t, e) {
    var n = Dn(e, this.size, 2);
    t.uniform2fv(this.addr, n);
  }

  function ii(t, e) {
    var n = Dn(e, this.size, 3);
    t.uniform3fv(this.addr, n);
  }

  function ri(t, e) {
    var n = Dn(e, this.size, 4);
    t.uniform4fv(this.addr, n);
  }

  function ai(t, e) {
    var n = Dn(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n);
  }

  function oi(t, e) {
    var n = Dn(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n);
  }

  function si(t, e) {
    var n = Dn(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n);
  }

  function ci(t, e, n) {
    var i = e.length,
        r = In(n, i);
    t.uniform1iv(this.addr, r);

    for (var _t136 = 0; _t136 !== i; ++_t136) {
      n.safeSetTexture2D(e[_t136] || bn, r[_t136]);
    }
  }

  function li(t, e, n) {
    var i = e.length,
        r = In(n, i);
    t.uniform1iv(this.addr, r);

    for (var _t137 = 0; _t137 !== i; ++_t137) {
      n.safeSetTextureCube(e[_t137] || En, r[_t137]);
    }
  }

  function hi(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.setValue = function (t) {
      switch (t) {
        case 5126:
          return On;

        case 35664:
          return zn;

        case 35665:
          return Un;

        case 35666:
          return Fn;

        case 35674:
          return Bn;

        case 35675:
          return Gn;

        case 35676:
          return kn;

        case 5124:
        case 35670:
          return Xn;

        case 35667:
        case 35671:
          return Yn;

        case 35668:
        case 35672:
          return qn;

        case 35669:
        case 35673:
          return Zn;

        case 5125:
          return Jn;

        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return Vn;

        case 35679:
        case 36299:
        case 36307:
          return Wn;

        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return jn;

        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return Hn;
      }
    }(e.type);
  }

  function ui(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function (t) {
      switch (t) {
        case 5126:
          return Kn;

        case 35664:
          return ni;

        case 35665:
          return ii;

        case 35666:
          return ri;

        case 35674:
          return ai;

        case 35675:
          return oi;

        case 35676:
          return si;

        case 5124:
        case 35670:
          return Qn;

        case 35667:
        case 35671:
          return $n;

        case 35668:
        case 35672:
          return ti;

        case 35669:
        case 35673:
          return ei;

        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return ci;

        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return li;
      }
    }(e.type);
  }

  function di(t) {
    this.id = t, this.seq = [], this.map = {};
  }

  ui.prototype.updateCache = function (t) {
    var e = this.cache;
    _instanceof(t, Float32Array) && e.length !== t.length && (this.cache = new Float32Array(t.length)), Rn(e, t);
  }, di.prototype.setValue = function (t, e, n) {
    var i = this.seq;

    for (var _r63 = 0, _a23 = i.length; _r63 !== _a23; ++_r63) {
      var _a24 = i[_r63];

      _a24.setValue(t, e[_a24.id], n);
    }
  };
  var fi = /([\w\d_]+)(\])?(\[|\.)?/g;

  function pi(t, e) {
    t.seq.push(e), t.map[e.id] = e;
  }

  function mi(t, e, n) {
    var i = t.name,
        r = i.length;

    for (fi.lastIndex = 0;;) {
      var _a25 = fi.exec(i),
          _o24 = fi.lastIndex;

      var _s12 = _a25[1],
          _c13 = "]" === _a25[2],
          _l11 = _a25[3];

      if (_c13 && (_s12 |= 0), void 0 === _l11 || "[" === _l11 && _o24 + 2 === r) {
        pi(n, void 0 === _l11 ? new hi(_s12, t, e) : new ui(_s12, t, e));
        break;
      }

      {
        var _t138 = n.map[_s12];
        void 0 === _t138 && (_t138 = new di(_s12), pi(n, _t138)), n = _t138;
      }
    }
  }

  function gi(t, e) {
    this.seq = [], this.map = {};
    var n = t.getProgramParameter(e, 35718);

    for (var _i92 = 0; _i92 < n; ++_i92) {
      var _n118 = t.getActiveUniform(e, _i92);

      mi(_n118, t.getUniformLocation(e, _n118.name), this);
    }
  }

  function vi(t, e, n) {
    var i = t.createShader(e);
    return t.shaderSource(i, n), t.compileShader(i), i;
  }

  gi.prototype.setValue = function (t, e, n, i) {
    var r = this.map[e];
    void 0 !== r && r.setValue(t, n, i);
  }, gi.prototype.setOptional = function (t, e, n) {
    var i = e[n];
    void 0 !== i && this.setValue(t, n, i);
  }, gi.upload = function (t, e, n, i) {
    for (var _r64 = 0, _a26 = e.length; _r64 !== _a26; ++_r64) {
      var _a27 = e[_r64],
          _o25 = n[_a27.id];
      !1 !== _o25.needsUpdate && _a27.setValue(t, _o25.value, i);
    }
  }, gi.seqWithValue = function (t, e) {
    var n = [];

    for (var _i93 = 0, _r65 = t.length; _i93 !== _r65; ++_i93) {
      var _r66 = t[_i93];
      _r66.id in e && n.push(_r66);
    }

    return n;
  };
  var xi = 0;

  function _i(t) {
    switch (t) {
      case 3e3:
        return ["Linear", "( value )"];

      case 3001:
        return ["sRGB", "( value )"];

      case 3002:
        return ["RGBE", "( value )"];

      case 3004:
        return ["RGBM", "( value, 7.0 )"];

      case 3005:
        return ["RGBM", "( value, 16.0 )"];

      case 3006:
        return ["RGBD", "( value, 256.0 )"];

      case 3007:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];

      case 3003:
        return ["LogLuv", "( value )"];

      default:
        return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"];
    }
  }

  function yi(t, e, n) {
    var i = t.getShaderParameter(e, 35713),
        r = t.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function (t) {
      var e = t.split("\n");

      for (var _t139 = 0; _t139 < e.length; _t139++) {
        e[_t139] = _t139 + 1 + ": " + e[_t139];
      }

      return e.join("\n");
    }(t.getShaderSource(e));
  }

  function Mi(t, e) {
    var n = _i(e);

    return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
  }

  function bi(t, e) {
    var n = _i(e);

    return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
  }

  function wi(t, e) {
    var n;

    switch (e) {
      case 1:
        n = "Linear";
        break;

      case 2:
        n = "Reinhard";
        break;

      case 3:
        n = "OptimizedCineon";
        break;

      case 4:
        n = "ACESFilmic";
        break;

      case 5:
        n = "Custom";
        break;

      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
    }

    return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
  }

  function Si(t) {
    return "" !== t;
  }

  function Ei(t, e) {
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }

  function Ti(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }

  var Li = /^[ \t]*#include +<([\w\d./]+)>/gm;

  function Ai(t) {
    return t.replace(Li, Pi);
  }

  function Pi(t, e) {
    var n = rn[e];
    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
    return Ai(n);
  }

  var Ci = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
      Di = /#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;

  function Ni(t) {
    return t.replace(Di, Ii).replace(Ci, Ri);
  }

  function Ri(t, e, n, i) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Ii(t, e, n, i);
  }

  function Ii(t, e, n, i) {
    var r = "";

    for (var _t140 = parseInt(e); _t140 < parseInt(n); _t140++) {
      r += i.replace(/\[ i \]/g, "[ " + _t140 + " ]").replace(/UNROLLED_LOOP_INDEX/g, _t140);
    }

    return r;
  }

  function Oi(t) {
    var e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
    return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e;
  }

  function zi(t, e, n, i) {
    var r = t.getContext(),
        a = n.defines;
    var o = n.vertexShader,
        s = n.fragmentShader;

    var c = function (t) {
      var e = "SHADOWMAP_TYPE_BASIC";
      return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e;
    }(n),
        l = function (t) {
      var e = "ENVMAP_TYPE_CUBE";
      if (t.envMap) switch (t.envMapMode) {
        case 301:
        case 302:
          e = "ENVMAP_TYPE_CUBE";
          break;

        case 306:
        case 307:
          e = "ENVMAP_TYPE_CUBE_UV";
          break;

        case 303:
        case 304:
          e = "ENVMAP_TYPE_EQUIREC";
      }
      return e;
    }(n),
        h = function (t) {
      var e = "ENVMAP_MODE_REFLECTION";
      if (t.envMap) switch (t.envMapMode) {
        case 302:
        case 304:
          e = "ENVMAP_MODE_REFRACTION";
      }
      return e;
    }(n),
        u = function (t) {
      var e = "ENVMAP_BLENDING_NONE";
      if (t.envMap) switch (t.combine) {
        case 0:
          e = "ENVMAP_BLENDING_MULTIPLY";
          break;

        case 1:
          e = "ENVMAP_BLENDING_MIX";
          break;

        case 2:
          e = "ENVMAP_BLENDING_ADD";
      }
      return e;
    }(n),
        d = t.gammaFactor > 0 ? t.gammaFactor : 1,
        f = n.isWebGL2 ? "" : function (t) {
      return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Si).join("\n");
    }(n),
        p = function (t) {
      var e = [];

      for (var _n119 in t) {
        var _i94 = t[_n119];
        !1 !== _i94 && e.push("#define " + _n119 + " " + _i94);
      }

      return e.join("\n");
    }(a),
        m = r.createProgram();

    var g, v;

    if (n.isRawShaderMaterial ? (g = [p].filter(Si).join("\n"), g.length > 0 && (g += "\n"), v = [f, p].filter(Si).join("\n"), v.length > 0 && (v += "\n")) : (g = [Oi(n), "#define SHADER_NAME " + n.shaderName, p, n.instancing ? "#define USE_INSTANCING" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + d, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + c : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", " attribute mat4 instanceMatrix;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Si).join("\n"), v = [f, Oi(n), "#define SHADER_NAME " + n.shaderName, p, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + d, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + l : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + c : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? rn.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? wi("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", rn.encodings_pars_fragment, n.map ? Mi("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? Mi("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? Mi("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? Mi("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? Mi("lightMapTexelToLinear", n.lightMapEncoding) : "", bi("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Si).join("\n")), o = Ai(o), o = Ei(o, n), o = Ti(o, n), s = Ai(s), s = Ei(s, n), s = Ti(s, n), o = Ni(o), s = Ni(s), n.isWebGL2 && !n.isRawShaderMaterial) {
      var _t141 = !1;

      var _e109 = /^\s*#version\s+300\s+es\s*\n/;
      n.isShaderMaterial && null !== o.match(_e109) && null !== s.match(_e109) && (_t141 = !0, o = o.replace(_e109, ""), s = s.replace(_e109, "")), g = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, v = ["#version 300 es\n", "#define varying in", _t141 ? "" : "out highp vec4 pc_fragColor;", _t141 ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v;
    }

    var x = v + s,
        _ = vi(r, 35633, g + o),
        y = vi(r, 35632, x);

    if (r.attachShader(m, _), r.attachShader(m, y), void 0 !== n.index0AttributeName ? r.bindAttribLocation(m, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"), r.linkProgram(m), t.debug.checkShaderErrors) {
      var _t142 = r.getProgramInfoLog(m).trim(),
          _e110 = r.getShaderInfoLog(_).trim(),
          _n120 = r.getShaderInfoLog(y).trim();

      var _i95 = !0,
          _a28 = !0;

      if (!1 === r.getProgramParameter(m, 35714)) {
        _i95 = !1;

        var _e111 = yi(r, _, "vertex"),
            _n121 = yi(r, y, "fragment");

        console.error("THREE.WebGLProgram: shader error: ", r.getError(), "35715", r.getProgramParameter(m, 35715), "gl.getProgramInfoLog", _t142, _e111, _n121);
      } else "" !== _t142 ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", _t142) : "" !== _e110 && "" !== _n120 || (_a28 = !1);

      _a28 && (this.diagnostics = {
        runnable: _i95,
        programLog: _t142,
        vertexShader: {
          log: _e110,
          prefix: g
        },
        fragmentShader: {
          log: _n120,
          prefix: v
        }
      });
    }

    var M, b;
    return r.deleteShader(_), r.deleteShader(y), this.getUniforms = function () {
      return void 0 === M && (M = new gi(r, m)), M;
    }, this.getAttributes = function () {
      return void 0 === b && (b = function (t, e) {
        var n = {},
            i = t.getProgramParameter(e, 35721);

        for (var _r67 = 0; _r67 < i; _r67++) {
          var _i96 = t.getActiveAttrib(e, _r67).name;
          n[_i96] = t.getAttribLocation(e, _i96);
        }

        return n;
      }(r, m)), b;
    }, this.destroy = function () {
      i.releaseStatesOfProgram(this), r.deleteProgram(m), this.program = void 0;
    }, this.name = n.shaderName, this.id = xi++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = _, this.fragmentShader = y, this;
  }

  function Ui(t, e, n, i) {
    var r = [],
        a = n.isWebGL2,
        o = n.logarithmicDepthBuffer,
        s = n.floatVertexTextures,
        c = n.maxVertexUniforms,
        l = n.vertexTextures;
    var h = n.precision;
    var u = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    },
        d = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen"];
                function f(t) {
      var e;
      return t ? t.isTexture ? e = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), e = t.texture.encoding) : e = 3e3, e;
    }

    return {
      getParameters: function getParameters(i, r, d, p, m, g, v) {
        var x = p.fog,
            _ = i.isMeshStandardMaterial ? p.environment : null,
            y = i.envMap || _,
            M = u[i.type],
            b = v.isSkinnedMesh ? function (t) {
          var e = t.skeleton.bones;
          if (s) return 1024;
          {
            var _t143 = c,
                _n122 = Math.floor((_t143 - 20) / 4),
                _i97 = Math.min(_n122, e.length);

            return _i97 < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + _i97 + "."), 0) : _i97;
          }
        }(v) : 0;

        null !== i.precision && (h = n.getMaxPrecision(i.precision), h !== i.precision && console.warn("THREE.WebGLProgram.getParameters:", i.precision, "not supported, using", h, "instead."));

        var w = function (t, e) {
          var n;

          if (e) {
            var _i98 = an[e];
            n = {
              name: t.name || t.type,
              uniforms: We.clone(_i98.uniforms),
              vertexShader: _i98.vertexShader,
              fragmentShader: _i98.fragmentShader
            };
          } else n = {
            name: t.name || t.type,
            uniforms: t.uniforms,
            vertexShader: t.vertexShader,
            fragmentShader: t.fragmentShader
          };

          return n;
        }(i, M);

        i.onBeforeCompile(w, t);
        var S = t.getRenderTarget();
        return {
          isWebGL2: a,
          shaderID: M,
          shaderName: w.name,
          uniforms: w.uniforms,
          vertexShader: w.vertexShader,
          fragmentShader: w.fragmentShader,
          defines: i.defines,
          isRawShaderMaterial: i.isRawShaderMaterial,
          isShaderMaterial: i.isShaderMaterial,
          precision: h,
          instancing: !0 === v.isInstancedMesh,
          supportsVertexTextures: l,
          outputEncoding: null !== S ? f(S.texture) : t.outputEncoding,
          map: !!i.map,
          mapEncoding: f(i.map),
          matcap: !!i.matcap,
          matcapEncoding: f(i.matcap),
          envMap: !!y,
          envMapMode: y && y.mapping,
          envMapEncoding: f(y),
          envMapCubeUV: !!y && (306 === y.mapping || 307 === y.mapping),
          lightMap: !!i.lightMap,
          lightMapEncoding: f(i.lightMap),
          aoMap: !!i.aoMap,
          emissiveMap: !!i.emissiveMap,
          emissiveMapEncoding: f(i.emissiveMap),
          bumpMap: !!i.bumpMap,
          normalMap: !!i.normalMap,
          objectSpaceNormalMap: 1 === i.normalMapType,
          tangentSpaceNormalMap: 0 === i.normalMapType,
          clearcoatMap: !!i.clearcoatMap,
          clearcoatRoughnessMap: !!i.clearcoatRoughnessMap,
          clearcoatNormalMap: !!i.clearcoatNormalMap,
          displacementMap: !!i.displacementMap,
          roughnessMap: !!i.roughnessMap,
          metalnessMap: !!i.metalnessMap,
          specularMap: !!i.specularMap,
          alphaMap: !!i.alphaMap,
          gradientMap: !!i.gradientMap,
          sheen: !!i.sheen,
          combine: i.combine,
          vertexTangents: i.normalMap && i.vertexTangents,
          vertexColors: i.vertexColors,
          vertexUvs: !!(i.map || i.bumpMap || i.normalMap || i.specularMap || i.alphaMap || i.emissiveMap || i.roughnessMap || i.metalnessMap || i.clearcoatMap || i.clearcoatRoughnessMap || i.clearcoatNormalMap || i.displacementMap),
          uvsVertexOnly: !(i.map || i.bumpMap || i.normalMap || i.specularMap || i.alphaMap || i.emissiveMap || i.roughnessMap || i.metalnessMap || i.clearcoatNormalMap || !i.displacementMap),
          fog: !!x,
          useFog: i.fog,
          fogExp2: x && x.isFogExp2,
          flatShading: i.flatShading,
          sizeAttenuation: i.sizeAttenuation,
          logarithmicDepthBuffer: o,
          skinning: i.skinning && b > 0,
          maxBones: b,
          useVertexTexture: s,
          morphTargets: i.morphTargets,
          morphNormals: i.morphNormals,
          maxMorphTargets: t.maxMorphTargets,
          maxMorphNormals: t.maxMorphNormals,
          numDirLights: r.directional.length,
          numPointLights: r.point.length,
          numSpotLights: r.spot.length,
          numRectAreaLights: r.rectArea.length,
          numHemiLights: r.hemi.length,
          numDirLightShadows: r.directionalShadowMap.length,
          numPointLightShadows: r.pointShadowMap.length,
          numSpotLightShadows: r.spotShadowMap.length,
          numClippingPlanes: m,
          numClipIntersection: g,
          dithering: i.dithering,
          shadowMapEnabled: t.shadowMap.enabled && d.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: i.toneMapped ? t.toneMapping : 0,
          physicallyCorrectLights: t.physicallyCorrectLights,
          premultipliedAlpha: i.premultipliedAlpha,
          alphaTest: i.alphaTest,
          doubleSided: 2 === i.side,
          flipSided: 1 === i.side,
          depthPacking: void 0 !== i.depthPacking && i.depthPacking,
          index0AttributeName: i.index0AttributeName,
          extensionDerivatives: i.extensions && i.extensions.derivatives,
          extensionFragDepth: i.extensions && i.extensions.fragDepth,
          extensionDrawBuffers: i.extensions && i.extensions.drawBuffers,
          extensionShaderTextureLOD: i.extensions && i.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: a || null !== e.get("EXT_frag_depth"),
          rendererExtensionDrawBuffers: a || null !== e.get("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod: a || null !== e.get("EXT_shader_texture_lod"),
          customProgramCacheKey: i.customProgramCacheKey()
        };
      },
      getProgramCacheKey: function getProgramCacheKey(e) {
        var n = [];
        if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines) for (var _t144 in e.defines) {
          n.push(_t144), n.push(e.defines[_t144]);
        }

        if (void 0 === e.isRawShaderMaterial) {
          for (var _t145 = 0; _t145 < d.length; _t145++) {
            n.push(e[d[_t145]]);
          }

          n.push(t.outputEncoding), n.push(t.gammaFactor);
        }

        return n.push(e.customProgramCacheKey), n.join();
      },
      acquireProgram: function acquireProgram(e, n) {
        var a;

        for (var _t146 = 0, _e112 = r.length; _t146 < _e112; _t146++) {
          var _e113 = r[_t146];

          if (_e113.cacheKey === n) {
            a = _e113, ++a.usedTimes;
            break;
          }
        }

        return void 0 === a && (a = new zi(t, n, e, i), r.push(a)), a;
      },
      releaseProgram: function releaseProgram(t) {
        if (0 == --t.usedTimes) {
          var _e114 = r.indexOf(t);

          r[_e114] = r[r.length - 1], r.pop(), t.destroy();
        }
      },
      programs: r
    };
  }

  function Fi() {
    var t = new WeakMap();
    return {
      get: function get(e) {
        var n = t.get(e);
        return void 0 === n && (n = {}, t.set(e, n)), n;
      },
      remove: function remove(e) {
        t.delete(e);
      },
      update: function update(e, n, i) {
        t.get(e)[n] = i;
      },
      dispose: function dispose() {
        t = new WeakMap();
      }
    };
  }

  function Bi(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id;
  }

  function Gi(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
  }

  function ki() {
    var t = [];
    var e = 0;
    var n = [],
        i = [],
        r = {
      id: -1
    };

    function a(n, i, a, o, s, c) {
      var l = t[e];
      return void 0 === l ? (l = {
        id: n.id,
        object: n,
        geometry: i,
        material: a,
        program: a.program || r,
        groupOrder: o,
        renderOrder: n.renderOrder,
        z: s,
        group: c
      }, t[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = a, l.program = a.program || r, l.groupOrder = o, l.renderOrder = n.renderOrder, l.z = s, l.group = c), e++, l;
    }

    return {
      opaque: n,
      transparent: i,
      init: function init() {
        e = 0, n.length = 0, i.length = 0;
      },
      push: function push(t, e, r, o, s, c) {
        var l = a(t, e, r, o, s, c);
        (!0 === r.transparent ? i : n).push(l);
      },
      unshift: function unshift(t, e, r, o, s, c) {
        var l = a(t, e, r, o, s, c);
        (!0 === r.transparent ? i : n).unshift(l);
      },
      finish: function finish() {
        for (var _n123 = e, _i99 = t.length; _n123 < _i99; _n123++) {
          var _e115 = t[_n123];
          if (null === _e115.id) break;
          _e115.id = null, _e115.object = null, _e115.geometry = null, _e115.material = null, _e115.program = null, _e115.group = null;
        }
      },
      sort: function sort(t, e) {
        n.length > 1 && n.sort(t || Bi), i.length > 1 && i.sort(e || Gi);
      }
    };
  }

  function Vi() {
    var t = new WeakMap();

    function e(n) {
      var i = n.target;
      i.removeEventListener("dispose", e), t.delete(i);
    }

    return {
      get: function get(n, i) {
        var r = t.get(n);
        var a;
        return void 0 === r ? (a = new ki(), t.set(n, new WeakMap()), t.get(n).set(i, a), n.addEventListener("dispose", e)) : (a = r.get(i), void 0 === a && (a = new ki(), r.set(i, a))), a;
      },
      dispose: function dispose() {
        t = new WeakMap();
      }
    };
  }

  function Hi() {
    var t = {};
    return {
      get: function get(e) {
        if (void 0 !== t[e.id]) return t[e.id];
        var n;

        switch (e.type) {
          case "DirectionalLight":
            n = {
              direction: new b(),
              color: new Bt()
            };
            break;

          case "SpotLight":
            n = {
              position: new b(),
              direction: new b(),
              color: new Bt(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;

          case "PointLight":
            n = {
              position: new b(),
              color: new Bt(),
              distance: 0,
              decay: 0
            };
            break;

          case "HemisphereLight":
            n = {
              direction: new b(),
              skyColor: new Bt(),
              groundColor: new Bt()
            };
            break;

          case "RectAreaLight":
            n = {
              color: new Bt(),
              position: new b(),
              halfWidth: new b(),
              halfHeight: new b()
            };
        }

        return t[e.id] = n, n;
      }
    };
  }

  var Wi = 0;

  function ji(t, e) {
    return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
  }

  function Xi() {
    var t = new Hi(),
        e = function () {
      var t = {};
      return {
        get: function get(e) {
          if (void 0 !== t[e.id]) return t[e.id];
          var n;

          switch (e.type) {
            case "DirectionalLight":
            case "SpotLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new u()
              };
              break;

            case "PointLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new u(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3
              };
          }

          return t[e.id] = n, n;
        }
      };
    }(),
        n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: []
    };

    for (var _t147 = 0; _t147 < 9; _t147++) {
      n.probe.push(new b());
    }

    var i = new b(),
        r = new C(),
        a = new C();
    return {
      setup: function setup(o, s, c) {
        var l = 0,
            h = 0,
            u = 0;

        for (var _t148 = 0; _t148 < 9; _t148++) {
          n.probe[_t148].set(0, 0, 0);
        }

        var d = 0,
            f = 0,
            p = 0,
            m = 0,
            g = 0,
            v = 0,
            x = 0,
            _ = 0;
        var y = c.matrixWorldInverse;
        o.sort(ji);

        for (var _s13 = 0, _c14 = o.length; _s13 < _c14; _s13++) {
          var _c15 = o[_s13],
              _M = _c15.color,
              _b = _c15.intensity,
              _w = _c15.distance,
              _S = _c15.shadow && _c15.shadow.map ? _c15.shadow.map.texture : null;

          if (_c15.isAmbientLight) l += _M.r * _b, h += _M.g * _b, u += _M.b * _b;else if (_c15.isLightProbe) for (var _t149 = 0; _t149 < 9; _t149++) {
            n.probe[_t149].addScaledVector(_c15.sh.coefficients[_t149], _b);
          } else if (_c15.isDirectionalLight) {
            var _r68 = t.get(_c15);

            if (_r68.color.copy(_c15.color).multiplyScalar(_c15.intensity), _r68.direction.setFromMatrixPosition(_c15.matrixWorld), i.setFromMatrixPosition(_c15.target.matrixWorld), _r68.direction.sub(i), _r68.direction.transformDirection(y), _c15.castShadow) {
              var _t150 = _c15.shadow,
                  _i100 = e.get(_c15);

              _i100.shadowBias = _t150.bias, _i100.shadowNormalBias = _t150.normalBias, _i100.shadowRadius = _t150.radius, _i100.shadowMapSize = _t150.mapSize, n.directionalShadow[d] = _i100, n.directionalShadowMap[d] = _S, n.directionalShadowMatrix[d] = _c15.shadow.matrix, v++;
            }

            n.directional[d] = _r68, d++;
          } else if (_c15.isSpotLight) {
            var _r69 = t.get(_c15);

            if (_r69.position.setFromMatrixPosition(_c15.matrixWorld), _r69.position.applyMatrix4(y), _r69.color.copy(_M).multiplyScalar(_b), _r69.distance = _w, _r69.direction.setFromMatrixPosition(_c15.matrixWorld), i.setFromMatrixPosition(_c15.target.matrixWorld), _r69.direction.sub(i), _r69.direction.transformDirection(y), _r69.coneCos = Math.cos(_c15.angle), _r69.penumbraCos = Math.cos(_c15.angle * (1 - _c15.penumbra)), _r69.decay = _c15.decay, _c15.castShadow) {
              var _t151 = _c15.shadow,
                  _i101 = e.get(_c15);

              _i101.shadowBias = _t151.bias, _i101.shadowNormalBias = _t151.normalBias, _i101.shadowRadius = _t151.radius, _i101.shadowMapSize = _t151.mapSize, n.spotShadow[p] = _i101, n.spotShadowMap[p] = _S, n.spotShadowMatrix[p] = _c15.shadow.matrix, _++;
            }

            n.spot[p] = _r69, p++;
          } else if (_c15.isRectAreaLight) {
            var _e116 = t.get(_c15);

            _e116.color.copy(_M).multiplyScalar(_b), _e116.position.setFromMatrixPosition(_c15.matrixWorld), _e116.position.applyMatrix4(y), a.identity(), r.copy(_c15.matrixWorld), r.premultiply(y), a.extractRotation(r), _e116.halfWidth.set(.5 * _c15.width, 0, 0), _e116.halfHeight.set(0, .5 * _c15.height, 0), _e116.halfWidth.applyMatrix4(a), _e116.halfHeight.applyMatrix4(a), n.rectArea[m] = _e116, m++;
          } else if (_c15.isPointLight) {
            var _i102 = t.get(_c15);

            if (_i102.position.setFromMatrixPosition(_c15.matrixWorld), _i102.position.applyMatrix4(y), _i102.color.copy(_c15.color).multiplyScalar(_c15.intensity), _i102.distance = _c15.distance, _i102.decay = _c15.decay, _c15.castShadow) {
              var _t152 = _c15.shadow,
                  _i103 = e.get(_c15);

              _i103.shadowBias = _t152.bias, _i103.shadowNormalBias = _t152.normalBias, _i103.shadowRadius = _t152.radius, _i103.shadowMapSize = _t152.mapSize, _i103.shadowCameraNear = _t152.camera.near, _i103.shadowCameraFar = _t152.camera.far, n.pointShadow[f] = _i103, n.pointShadowMap[f] = _S, n.pointShadowMatrix[f] = _c15.shadow.matrix, x++;
            }

            n.point[f] = _i102, f++;
          } else if (_c15.isHemisphereLight) {
            var _e117 = t.get(_c15);

            _e117.direction.setFromMatrixPosition(_c15.matrixWorld), _e117.direction.transformDirection(y), _e117.direction.normalize(), _e117.skyColor.copy(_c15.color).multiplyScalar(_b), _e117.groundColor.copy(_c15.groundColor).multiplyScalar(_b), n.hemi[g] = _e117, g++;
          }
        }

        n.ambient[0] = l, n.ambient[1] = h, n.ambient[2] = u;
        var M = n.hash;
        M.directionalLength === d && M.pointLength === f && M.spotLength === p && M.rectAreaLength === m && M.hemiLength === g && M.numDirectionalShadows === v && M.numPointShadows === x && M.numSpotShadows === _ || (n.directional.length = d, n.spot.length = p, n.rectArea.length = m, n.point.length = f, n.hemi.length = g, n.directionalShadow.length = v, n.directionalShadowMap.length = v, n.pointShadow.length = x, n.pointShadowMap.length = x, n.spotShadow.length = _, n.spotShadowMap.length = _, n.directionalShadowMatrix.length = v, n.pointShadowMatrix.length = x, n.spotShadowMatrix.length = _, M.directionalLength = d, M.pointLength = f, M.spotLength = p, M.rectAreaLength = m, M.hemiLength = g, M.numDirectionalShadows = v, M.numPointShadows = x, M.numSpotShadows = _, n.version = Wi++);
      },
      state: n
    };
  }

  function Yi() {
    var t = new Xi(),
        e = [],
        n = [];
    return {
      init: function init() {
        e.length = 0, n.length = 0;
      },
      state: {
        lightsArray: e,
        shadowsArray: n,
        lights: t
      },
      setupLights: function setupLights(i) {
        t.setup(e, n, i);
      },
      pushLight: function pushLight(t) {
        e.push(t);
      },
      pushShadow: function pushShadow(t) {
        n.push(t);
      }
    };
  }

  function qi() {
    var t = new WeakMap();

    function e(n) {
      var i = n.target;
      i.removeEventListener("dispose", e), t.delete(i);
    }

    return {
      get: function get(n, i) {
        var r;
        return !1 === t.has(n) ? (r = new Yi(), t.set(n, new WeakMap()), t.get(n).set(i, r), n.addEventListener("dispose", e)) : !1 === t.get(n).has(i) ? (r = new Yi(), t.get(n).set(i, r)) : r = t.get(n).get(i), r;
      },
      dispose: function dispose() {
        t = new WeakMap();
      }
    };
  }

  function Zi(t) {
    jt.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t);
  }

  function Ji(t) {
    jt.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new b(), this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t);
  }

  Zi.prototype = Object.create(jt.prototype), Zi.prototype.constructor = Zi, Zi.prototype.isMeshDepthMaterial = !0, Zi.prototype.copy = function (t) {
    return jt.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }, Ji.prototype = Object.create(jt.prototype), Ji.prototype.constructor = Ji, Ji.prototype.isMeshDistanceMaterial = !0, Ji.prototype.copy = function (t) {
    return jt.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  };

  function Ki(t, e, n) {
    var i = new Ke();
    var r = new u(),
        a = new u(),
        o = new v(),
        s = [],
        c = [],
        l = {},
        h = {
      0: 1,
      1: 0,
      2: 2
    },
        d = new je({
      defines: {
        SAMPLE_RATE: 2 / 8,
        HALF_SAMPLE_RATE: 1 / 8
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new u()
        },
        radius: {
          value: 4
        }
      },
      vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
      fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
    }),
        f = d.clone();
    f.defines.HORIZONAL_PASS = 1;
    var p = new pe();
    p.setAttribute("position", new Zt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    var m = new Ne(p, d),
        g = this;

    function _(n, i) {
      var r = e.update(m);
      d.uniforms.shadow_pass.value = n.map.texture, d.uniforms.resolution.value = n.mapSize, d.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, d, m, null), f.uniforms.shadow_pass.value = n.mapPass.texture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, f, m, null);
    }

    function y(t, e, n) {
      var i = t << 0 | e << 1 | n << 2;
      var r = s[i];
      return void 0 === r && (r = new Zi({
        depthPacking: 3201,
        morphTargets: t,
        skinning: e
      }), s[i] = r), r;
    }

    function M(t, e, n) {
      var i = t << 0 | e << 1 | n << 2;
      var r = c[i];
      return void 0 === r && (r = new Ji({
        morphTargets: t,
        skinning: e
      }), c[i] = r), r;
    }

    function b(e, n, i, r, a, o, s) {
      var c = null,
          u = y,
          d = e.customDepthMaterial;

      if (!0 === r.isPointLight && (u = M, d = e.customDistanceMaterial), void 0 === d) {
        var _t153 = !1;

        !0 === i.morphTargets && (_t153 = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);

        var _r70 = !1;

        !0 === e.isSkinnedMesh && (!0 === i.skinning ? _r70 = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e));
        c = u(_t153, _r70, !0 === e.isInstancedMesh);
      } else c = d;

      if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
        var _t154 = c.uuid,
            _e118 = i.uuid;
        var _n124 = l[_t154];
        void 0 === _n124 && (_n124 = {}, l[_t154] = _n124);
        var _r71 = _n124[_e118];
        void 0 === _r71 && (_r71 = c.clone(), _n124[_e118] = _r71), c = _r71;
      }

      return c.visible = i.visible, c.wireframe = i.wireframe, c.side = 3 === s ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : h[i.side], c.clipShadows = i.clipShadows, c.clippingPlanes = i.clippingPlanes, c.clipIntersection = i.clipIntersection, c.wireframeLinewidth = i.wireframeLinewidth, c.linewidth = i.linewidth, !0 === r.isPointLight && !0 === c.isMeshDistanceMaterial && (c.referencePosition.setFromMatrixPosition(r.matrixWorld), c.nearDistance = a, c.farDistance = o), c;
    }

    function w(n, r, a, o, s) {
      if (!1 === n.visible) return;

      if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === s) && (!n.frustumCulled || i.intersectsObject(n))) {
        n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);

        var _i104 = e.update(n),
            _r72 = n.material;

        if (Array.isArray(_r72)) {
          var _e119 = _i104.groups;

          for (var _c16 = 0, _l12 = _e119.length; _c16 < _l12; _c16++) {
            var _l13 = _e119[_c16],
                _h8 = _r72[_l13.materialIndex];

            if (_h8 && _h8.visible) {
              var _e120 = b(n, _i104, _h8, o, a.near, a.far, s);

              t.renderBufferDirect(a, null, _i104, _e120, n, _l13);
            }
          }
        } else if (_r72.visible) {
          var _e121 = b(n, _i104, _r72, o, a.near, a.far, s);

          t.renderBufferDirect(a, null, _i104, _e121, n, null);
        }
      }

      var c = n.children;

      for (var _t155 = 0, _e122 = c.length; _t155 < _e122; _t155++) {
        w(c[_t155], r, a, o, s);
      }
    }

    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function (e, s, c) {
      if (!1 === g.enabled) return;
      if (!1 === g.autoUpdate && !1 === g.needsUpdate) return;
      if (0 === e.length) return;
      var l = t.getRenderTarget(),
          h = t.getActiveCubeFace(),
          u = t.getActiveMipmapLevel(),
          d = t.state;
      d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);

      for (var _l14 = 0, _h9 = e.length; _l14 < _h9; _l14++) {
        var _h10 = e[_l14],
            _u9 = _h10.shadow;
        if (!1 === _u9.autoUpdate && !1 === _u9.needsUpdate) continue;

        if (void 0 === _u9) {
          console.warn("THREE.WebGLShadowMap:", _h10, "has no shadow.");
          continue;
        }

        r.copy(_u9.mapSize);

        var _f8 = _u9.getFrameExtents();

        if (r.multiply(_f8), a.copy(_u9.mapSize), (r.x > n || r.y > n) && (r.x > n && (a.x = Math.floor(n / _f8.x), r.x = a.x * _f8.x, _u9.mapSize.x = a.x), r.y > n && (a.y = Math.floor(n / _f8.y), r.y = a.y * _f8.y, _u9.mapSize.y = a.y)), null === _u9.map && !_u9.isPointLightShadow && 3 === this.type) {
          var _t156 = {
            minFilter: 1006,
            magFilter: 1006,
            format: 1023
          };
          _u9.map = new x(r.x, r.y, _t156), _u9.map.texture.name = _h10.name + ".shadowMap", _u9.mapPass = new x(r.x, r.y, _t156), _u9.camera.updateProjectionMatrix();
        }

        if (null === _u9.map) {
          var _t157 = {
            minFilter: 1003,
            magFilter: 1003,
            format: 1023
          };
          _u9.map = new x(r.x, r.y, _t157), _u9.map.texture.name = _h10.name + ".shadowMap", _u9.camera.updateProjectionMatrix();
        }

        t.setRenderTarget(_u9.map), t.clear();

        var _p5 = _u9.getViewportCount();

        for (var _t158 = 0; _t158 < _p5; _t158++) {
          var _e123 = _u9.getViewport(_t158);

          o.set(a.x * _e123.x, a.y * _e123.y, a.x * _e123.z, a.y * _e123.w), d.viewport(o), _u9.updateMatrices(_h10, _t158), i = _u9.getFrustum(), w(s, c, _u9.camera, _h10, this.type);
        }

        _u9.isPointLightShadow || 3 !== this.type || _(_u9, c), _u9.needsUpdate = !1;
      }

      g.needsUpdate = !1, t.setRenderTarget(l, h, u);
    };
  }

  function Qi(t, e, n) {
    var i = n.isWebGL2;
    var r = new function () {
      var e = !1;
      var n = new v();
      var i = null;
      var r = new v(0, 0, 0, 0);
      return {
        setMask: function setMask(n) {
          i === n || e || (t.colorMask(n, n, n, n), i = n);
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e, i, a, o, s) {
          !0 === s && (e *= o, i *= o, a *= o), n.set(e, i, a, o), !1 === r.equals(n) && (t.clearColor(e, i, a, o), r.copy(n));
        },
        reset: function reset() {
          e = !1, i = null, r.set(-1, 0, 0, 0);
        }
      };
    }(),
        a = new function () {
      var e = !1,
          n = null,
          i = null,
          r = null;
      return {
        setTest: function setTest(t) {
          t ? I(2929) : O(2929);
        },
        setMask: function setMask(i) {
          n === i || e || (t.depthMask(i), n = i);
        },
        setFunc: function setFunc(e) {
          if (i !== e) {
            if (e) switch (e) {
              case 0:
                t.depthFunc(512);
                break;

              case 1:
                t.depthFunc(519);
                break;

              case 2:
                t.depthFunc(513);
                break;

              case 3:
                t.depthFunc(515);
                break;

              case 4:
                t.depthFunc(514);
                break;

              case 5:
                t.depthFunc(518);
                break;

              case 6:
                t.depthFunc(516);
                break;

              case 7:
                t.depthFunc(517);
                break;

              default:
                t.depthFunc(515);
            } else t.depthFunc(515);
            i = e;
          }
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e) {
          r !== e && (t.clearDepth(e), r = e);
        },
        reset: function reset() {
          e = !1, n = null, i = null, r = null;
        }
      };
    }(),
        o = new function () {
      var e = !1,
          n = null,
          i = null,
          r = null,
          a = null,
          o = null,
          s = null,
          c = null,
          l = null;
      return {
        setTest: function setTest(t) {
          e || (t ? I(2960) : O(2960));
        },
        setMask: function setMask(i) {
          n === i || e || (t.stencilMask(i), n = i);
        },
        setFunc: function setFunc(e, n, o) {
          i === e && r === n && a === o || (t.stencilFunc(e, n, o), i = e, r = n, a = o);
        },
        setOp: function setOp(e, n, i) {
          o === e && s === n && c === i || (t.stencilOp(e, n, i), o = e, s = n, c = i);
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e) {
          l !== e && (t.clearStencil(e), l = e);
        },
        reset: function reset() {
          e = !1, n = null, i = null, r = null, a = null, o = null, s = null, c = null, l = null;
        }
      };
    }();
    var s = {},
        c = null,
        l = null,
        h = null,
        u = null,
        d = null,
        f = null,
        p = null,
        m = null,
        g = null,
        x = !1,
        _ = null,
        y = null,
        M = null,
        b = null,
        w = null;
    var S = t.getParameter(35661);
    var E = !1,
        T = 0;
    var L = t.getParameter(7938);
    -1 !== L.indexOf("WebGL") ? (T = parseFloat(/^WebGL\ ([0-9])/.exec(L)[1]), E = T >= 1) : -1 !== L.indexOf("OpenGL ES") && (T = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(L)[1]), E = T >= 2);
    var A = null,
        P = {};
    var C = new v(),
        D = new v();

    function N(e, n, i) {
      var r = new Uint8Array(4),
          a = t.createTexture();
      t.bindTexture(e, a), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);

      for (var _e124 = 0; _e124 < i; _e124++) {
        t.texImage2D(n + _e124, 0, 6408, 1, 1, 0, 6408, 5121, r);
      }

      return a;
    }

    var R = {};

    function I(e) {
      !0 !== s[e] && (t.enable(e), s[e] = !0);
    }

    function O(e) {
      !1 !== s[e] && (t.disable(e), s[e] = !1);
    }

    R[3553] = N(3553, 3553, 1), R[34067] = N(34067, 34069, 6), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), I(2929), a.setFunc(3), B(!1), G(1), I(2884), F(0);
    var z = {
      100: 32774,
      101: 32778,
      102: 32779
    };
    if (i) z[103] = 32775, z[104] = 32776;else {
      var _t159 = e.get("EXT_blend_minmax");

      null !== _t159 && (z[103] = _t159.MIN_EXT, z[104] = _t159.MAX_EXT);
    }
    var U = {
      200: 0,
      201: 1,
      202: 768,
      204: 770,
      210: 776,
      208: 774,
      206: 772,
      203: 769,
      205: 771,
      209: 775,
      207: 773
    };

    function F(e, n, i, r, a, o, s, c) {
      if (0 !== e) {
        if (l || (I(3042), l = !0), 5 === e) a = a || n, o = o || i, s = s || r, n === u && a === p || (t.blendEquationSeparate(z[n], z[a]), u = n, p = a), i === d && r === f && o === m && s === g || (t.blendFuncSeparate(U[i], U[r], U[o], U[s]), d = i, f = r, m = o, g = s), h = e, x = null;else if (e !== h || c !== x) {
          if (100 === u && 100 === p || (t.blendEquation(32774), u = 100, p = 100), c) switch (e) {
            case 1:
              t.blendFuncSeparate(1, 771, 1, 771);
              break;

            case 2:
              t.blendFunc(1, 1);
              break;

            case 3:
              t.blendFuncSeparate(0, 0, 769, 771);
              break;

            case 4:
              t.blendFuncSeparate(0, 768, 0, 770);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", e);
          } else switch (e) {
            case 1:
              t.blendFuncSeparate(770, 771, 1, 771);
              break;

            case 2:
              t.blendFunc(770, 1);
              break;

            case 3:
              t.blendFunc(0, 769);
              break;

            case 4:
              t.blendFunc(0, 768);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", e);
          }
          d = null, f = null, m = null, g = null, h = e, x = c;
        }
      } else l && (O(3042), l = !1);
    }

    function B(e) {
      _ !== e && (e ? t.frontFace(2304) : t.frontFace(2305), _ = e);
    }

    function G(e) {
      0 !== e ? (I(2884), e !== y && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : O(2884), y = e;
    }

    function k(e, n, i) {
      e ? (I(32823), b === n && w === i || (t.polygonOffset(n, i), b = n, w = i)) : O(32823);
    }

    function V(e) {
      void 0 === e && (e = 33984 + S - 1), A !== e && (t.activeTexture(e), A = e);
    }

    return {
      buffers: {
        color: r,
        depth: a,
        stencil: o
      },
      enable: I,
      disable: O,
      useProgram: function useProgram(e) {
        return c !== e && (t.useProgram(e), c = e, !0);
      },
      setBlending: F,
      setMaterial: function setMaterial(t, e) {
        2 === t.side ? O(2884) : I(2884);
        var n = 1 === t.side;
        e && (n = !n), B(n), 1 === t.blending && !1 === t.transparent ? F(0) : F(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a.setFunc(t.depthFunc), a.setTest(t.depthTest), a.setMask(t.depthWrite), r.setMask(t.colorWrite);
        var i = t.stencilWrite;
        o.setTest(i), i && (o.setMask(t.stencilWriteMask), o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), k(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits);
      },
      setFlipSided: B,
      setCullFace: G,
      setLineWidth: function setLineWidth(e) {
        e !== M && (E && t.lineWidth(e), M = e);
      },
      setPolygonOffset: k,
      setScissorTest: function setScissorTest(t) {
        t ? I(3089) : O(3089);
      },
      activeTexture: V,
      bindTexture: function bindTexture(e, n) {
        null === A && V();
        var i = P[A];
        void 0 === i && (i = {
          type: void 0,
          texture: void 0
        }, P[A] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || R[e]), i.type = e, i.texture = n);
      },
      unbindTexture: function unbindTexture() {
        var e = P[A];
        void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0);
      },
      compressedTexImage2D: function compressedTexImage2D() {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage2D: function texImage2D() {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage3D: function texImage3D() {
        try {
          t.texImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      scissor: function scissor(e) {
        !1 === C.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), C.copy(e));
      },
      viewport: function viewport(e) {
        !1 === D.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), D.copy(e));
      },
      reset: function reset() {
        s = {}, A = null, P = {}, c = null, h = null, _ = null, y = null, r.reset(), a.reset(), o.reset();
      }
    };
  }

  function $i(t, e, n, i, r, a, o) {
    var s = r.isWebGL2,
        c = r.maxTextures,
        l = r.maxCubemapSize,
        u = r.maxTextureSize,
        d = r.maxSamples,
        f = new WeakMap();
    var p,
        m = !1;

    try {
      m = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t) {}
            function g(t, e) {
      return m ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }

    function v(t, e, n, i) {
      var r = 1;

      if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
        if ("undefined" != typeof HTMLImageElement && _instanceof(t, HTMLImageElement) || "undefined" != typeof HTMLCanvasElement && _instanceof(t, HTMLCanvasElement) || "undefined" != typeof ImageBitmap && _instanceof(t, ImageBitmap)) {
          var _i105 = e ? h.floorPowerOfTwo : Math.floor,
              _a29 = _i105(r * t.width),
              _o26 = _i105(r * t.height);

          void 0 === p && (p = g(_a29, _o26));

          var _s14 = n ? g(_a29, _o26) : p;

          _s14.width = _a29, _s14.height = _o26;
          return _s14.getContext("2d").drawImage(t, 0, 0, _a29, _o26), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + _a29 + "x" + _o26 + ")."), _s14;
        }

        return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t;
      }

      return t;
    }

    function x(t) {
      return h.isPowerOfTwo(t.width) && h.isPowerOfTwo(t.height);
    }

    function _(t, e) {
      return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter;
    }

    function y(e, n, r, a) {
      t.generateMipmap(e);
      i.get(n).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E;
    }

    function M(n, i, r) {
      if (!1 === s) return i;

      if (null !== n) {
        if (void 0 !== t[n]) return t[n];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
      }

      var a = i;
      return 6403 === i && (5126 === r && (a = 33326), 5131 === r && (a = 33325), 5121 === r && (a = 33321)), 6407 === i && (5126 === r && (a = 34837), 5131 === r && (a = 34843), 5121 === r && (a = 32849)), 6408 === i && (5126 === r && (a = 34836), 5131 === r && (a = 34842), 5121 === r && (a = 32856)), 33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a || e.get("EXT_color_buffer_float"), a;
    }

    function b(t) {
      return 1003 === t || 1004 === t || 1005 === t ? 9728 : 9729;
    }

    function w(e) {
      var n = e.target;
      n.removeEventListener("dispose", w), function (e) {
        var n = i.get(e);
        if (void 0 === n.__webglInit) return;
        t.deleteTexture(n.__webglTexture), i.remove(e);
      }(n), n.isVideoTexture && f.delete(n), o.memory.textures--;
    }

    function S(e) {
      var n = e.target;
      n.removeEventListener("dispose", S), function (e) {
        var n = i.get(e),
            r = i.get(e.texture);
        if (!e) return;
        void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture);
        e.depthTexture && e.depthTexture.dispose();
        if (e.isWebGLCubeRenderTarget) for (var _e125 = 0; _e125 < 6; _e125++) {
          t.deleteFramebuffer(n.__webglFramebuffer[_e125]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[_e125]);
        } else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && t.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer && t.deleteRenderbuffer(n.__webglColorRenderbuffer), n.__webglDepthRenderbuffer && t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
        i.remove(e.texture), i.remove(e);
      }(n), o.memory.textures--;
    }

    var E = 0;

    function T(t, e) {
      var r = i.get(t);

      if (t.isVideoTexture && function (t) {
        var e = o.render.frame;
        f.get(t) !== e && (f.set(t, e), t.update());
      }(t), t.version > 0 && r.__version !== t.version) {
        var _n125 = t.image;
        if (void 0 === _n125) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else {
          if (!1 !== _n125.complete) return void R(r, t, e);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      }

      n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
    }

    function L(e, r) {
      if (6 !== e.image.length) return;
      var o = i.get(e);

      if (e.version > 0 && o.__version !== e.version) {
        N(o, e), n.activeTexture(33984 + r), n.bindTexture(34067, o.__webglTexture), t.pixelStorei(37440, e.flipY);

        var _i106 = e && (e.isCompressedTexture || e.image[0].isCompressedTexture),
            _c17 = e.image[0] && e.image[0].isDataTexture,
            _h11 = [];

        for (var _t160 = 0; _t160 < 6; _t160++) {
          _h11[_t160] = _i106 || _c17 ? _c17 ? e.image[_t160].image : e.image[_t160] : v(e.image[_t160], !1, !0, l);
        }

        var _u10 = _h11[0],
            _d7 = x(_u10) || s,
            _f9 = a.convert(e.format),
            _p6 = a.convert(e.type),
            _m2 = M(e.internalFormat, _f9, _p6);

        var _g2;

        if (D(34067, e, _d7), _i106) {
          for (var _t161 = 0; _t161 < 6; _t161++) {
            _g2 = _h11[_t161].mipmaps;

            for (var _i107 = 0; _i107 < _g2.length; _i107++) {
              var _r73 = _g2[_i107];
              1023 !== e.format && 1022 !== e.format ? null !== _f9 ? n.compressedTexImage2D(34069 + _t161, _i107, _m2, _r73.width, _r73.height, 0, _r73.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + _t161, _i107, _m2, _r73.width, _r73.height, 0, _f9, _p6, _r73.data);
            }
          }

          o.__maxMipLevel = _g2.length - 1;
        } else {
          _g2 = e.mipmaps;

          for (var _t162 = 0; _t162 < 6; _t162++) {
            if (_c17) {
              n.texImage2D(34069 + _t162, 0, _m2, _h11[_t162].width, _h11[_t162].height, 0, _f9, _p6, _h11[_t162].data);

              for (var _e126 = 0; _e126 < _g2.length; _e126++) {
                var _i108 = _g2[_e126].image[_t162].image;
                n.texImage2D(34069 + _t162, _e126 + 1, _m2, _i108.width, _i108.height, 0, _f9, _p6, _i108.data);
              }
            } else {
              n.texImage2D(34069 + _t162, 0, _m2, _f9, _p6, _h11[_t162]);

              for (var _e127 = 0; _e127 < _g2.length; _e127++) {
                var _i109 = _g2[_e127];
                n.texImage2D(34069 + _t162, _e127 + 1, _m2, _f9, _p6, _i109.image[_t162]);
              }
            }
          }

          o.__maxMipLevel = _g2.length;
        }

        _(e, _d7) && y(34067, e, _u10.width, _u10.height), o.__version = e.version, e.onUpdate && e.onUpdate(e);
      } else n.activeTexture(33984 + r), n.bindTexture(34067, o.__webglTexture);
    }

    function A(t, e) {
      n.activeTexture(33984 + e), n.bindTexture(34067, i.get(t).__webglTexture);
    }

    var P = {
      1e3: 10497,
      1001: 33071,
      1002: 33648
    },
        C = {
      1003: 9728,
      1004: 9984,
      1005: 9986,
      1006: 9729,
      1007: 9985,
      1008: 9987
    };

    function D(n, a, o) {
      o ? (t.texParameteri(n, 10242, P[a.wrapS]), t.texParameteri(n, 10243, P[a.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, P[a.wrapR]), t.texParameteri(n, 10240, C[a.magFilter]), t.texParameteri(n, 10241, C[a.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), 1001 === a.wrapS && 1001 === a.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, b(a.magFilter)), t.texParameteri(n, 10241, b(a.minFilter)), 1003 !== a.minFilter && 1006 !== a.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
      var c = e.get("EXT_texture_filter_anisotropic");

      if (c) {
        if (1015 === a.type && null === e.get("OES_texture_float_linear")) return;
        if (1016 === a.type && null === (s || e.get("OES_texture_half_float_linear"))) return;
        (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (t.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy);
      }
    }

    function N(e, n) {
      void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", w), e.__webglTexture = t.createTexture(), o.memory.textures++);
    }

    function R(e, i, r) {
      var o = 3553;
      i.isDataTexture2DArray && (o = 35866), i.isDataTexture3D && (o = 32879), N(e, i), n.activeTexture(33984 + r), n.bindTexture(o, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment);

      var c = function (t) {
        return !s && (1001 !== t.wrapS || 1001 !== t.wrapT || 1003 !== t.minFilter && 1006 !== t.minFilter);
      }(i) && !1 === x(i.image),
          l = v(i.image, c, !1, u),
          h = x(l) || s,
          d = a.convert(i.format);

      var f,
          p = a.convert(i.type),
          m = M(i.internalFormat, d, p);
      D(o, i, h);
      var g = i.mipmaps;
      if (i.isDepthTexture) m = 6402, s ? m = 1015 === i.type ? 36012 : 1014 === i.type ? 33190 : 1020 === i.type ? 35056 : 33189 : 1015 === i.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), 1026 === i.format && 6402 === m && 1012 !== i.type && 1014 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = 1012, p = a.convert(i.type)), 1027 === i.format && 6402 === m && (m = 34041, 1020 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = 1020, p = a.convert(i.type))), n.texImage2D(3553, 0, m, l.width, l.height, 0, d, p, null);else if (i.isDataTexture) {
        if (g.length > 0 && h) {
          for (var _t163 = 0, _e128 = g.length; _t163 < _e128; _t163++) {
            f = g[_t163], n.texImage2D(3553, _t163, m, f.width, f.height, 0, d, p, f.data);
          }

          i.generateMipmaps = !1, e.__maxMipLevel = g.length - 1;
        } else n.texImage2D(3553, 0, m, l.width, l.height, 0, d, p, l.data), e.__maxMipLevel = 0;
      } else if (i.isCompressedTexture) {
        for (var _t164 = 0, _e129 = g.length; _t164 < _e129; _t164++) {
          f = g[_t164], 1023 !== i.format && 1022 !== i.format ? null !== d ? n.compressedTexImage2D(3553, _t164, m, f.width, f.height, 0, f.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, _t164, m, f.width, f.height, 0, d, p, f.data);
        }

        e.__maxMipLevel = g.length - 1;
      } else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, m, l.width, l.height, l.depth, 0, d, p, l.data), e.__maxMipLevel = 0;else if (i.isDataTexture3D) n.texImage3D(32879, 0, m, l.width, l.height, l.depth, 0, d, p, l.data), e.__maxMipLevel = 0;else if (g.length > 0 && h) {
        for (var _t165 = 0, _e130 = g.length; _t165 < _e130; _t165++) {
          f = g[_t165], n.texImage2D(3553, _t165, m, d, p, f);
        }

        i.generateMipmaps = !1, e.__maxMipLevel = g.length - 1;
      } else n.texImage2D(3553, 0, m, d, p, l), e.__maxMipLevel = 0;
      _(i, h) && y(o, i, l.width, l.height), e.__version = i.version, i.onUpdate && i.onUpdate(i);
    }

    function I(e, r, o, s) {
      var c = a.convert(r.texture.format),
          l = a.convert(r.texture.type),
          h = M(r.texture.internalFormat, c, l);
      n.texImage2D(s, 0, h, r.width, r.height, 0, c, l, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, s, i.get(r.texture).__webglTexture, 0), t.bindFramebuffer(36160, null);
    }

    function O(e, n, i) {
      if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
        var _r74 = 33189;

        if (i) {
          var _e131 = n.depthTexture;
          _e131 && _e131.isDepthTexture && (1015 === _e131.type ? _r74 = 36012 : 1014 === _e131.type && (_r74 = 33190));

          var _i110 = U(n);

          t.renderbufferStorageMultisample(36161, _i110, _r74, n.width, n.height);
        } else t.renderbufferStorage(36161, _r74, n.width, n.height);

        t.framebufferRenderbuffer(36160, 36096, 36161, e);
      } else if (n.depthBuffer && n.stencilBuffer) {
        if (i) {
          var _e132 = U(n);

          t.renderbufferStorageMultisample(36161, _e132, 35056, n.width, n.height);
        } else t.renderbufferStorage(36161, 34041, n.width, n.height);

        t.framebufferRenderbuffer(36160, 33306, 36161, e);
      } else {
        var _e133 = a.convert(n.texture.format),
            _r75 = a.convert(n.texture.type),
            _o27 = M(n.texture.internalFormat, _e133, _r75);

        if (i) {
          var _e134 = U(n);

          t.renderbufferStorageMultisample(36161, _e134, _o27, n.width, n.height);
        } else t.renderbufferStorage(36161, _o27, n.width, n.height);
      }

      t.bindRenderbuffer(36161, null);
    }

    function z(e) {
      var n = i.get(e),
          r = !0 === e.isWebGLCubeRenderTarget;

      if (e.depthTexture) {
        if (r) throw new Error("target.depthTexture not supported in Cube render targets");
        !function (e, n) {
          if (n && n.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          if (t.bindFramebuffer(36160, e), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), T(n.depthTexture, 0);

          var r = i.get(n.depthTexture).__webglTexture;

          if (1026 === n.depthTexture.format) t.framebufferTexture2D(36160, 36096, 3553, r, 0);else {
            if (1027 !== n.depthTexture.format) throw new Error("Unknown depthTexture format");
            t.framebufferTexture2D(36160, 33306, 3553, r, 0);
          }
        }(n.__webglFramebuffer, e);
      } else if (r) {
        n.__webglDepthbuffer = [];

        for (var _i111 = 0; _i111 < 6; _i111++) {
          t.bindFramebuffer(36160, n.__webglFramebuffer[_i111]), n.__webglDepthbuffer[_i111] = t.createRenderbuffer(), O(n.__webglDepthbuffer[_i111], e, !1);
        }
      } else t.bindFramebuffer(36160, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), O(n.__webglDepthbuffer, e, !1);

      t.bindFramebuffer(36160, null);
    }

    function U(t) {
      return s && t.isWebGLMultisampleRenderTarget ? Math.min(d, t.samples) : 0;
    }

    var F = !1,
        B = !1;
    this.allocateTextureUnit = function () {
      var t = E;
      return t >= c && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + c), E += 1, t;
    }, this.resetTextureUnits = function () {
      E = 0;
    }, this.setTexture2D = T, this.setTexture2DArray = function (t, e) {
      var r = i.get(t);
      t.version > 0 && r.__version !== t.version ? R(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture));
    }, this.setTexture3D = function (t, e) {
      var r = i.get(t);
      t.version > 0 && r.__version !== t.version ? R(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture));
    }, this.setTextureCube = L, this.setTextureCubeDynamic = A, this.setupRenderTarget = function (e) {
      var r = i.get(e),
          c = i.get(e.texture);
      e.addEventListener("dispose", S), c.__webglTexture = t.createTexture(), o.memory.textures++;
      var l = !0 === e.isWebGLCubeRenderTarget,
          h = !0 === e.isWebGLMultisampleRenderTarget,
          u = x(e) || s;

      if (!s || 1022 !== e.texture.format || 1015 !== e.texture.type && 1016 !== e.texture.type || (e.texture.format = 1023, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), l) {
        r.__webglFramebuffer = [];

        for (var _e135 = 0; _e135 < 6; _e135++) {
          r.__webglFramebuffer[_e135] = t.createFramebuffer();
        }
      } else if (r.__webglFramebuffer = t.createFramebuffer(), h) if (s) {
        r.__webglMultisampledFramebuffer = t.createFramebuffer(), r.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, r.__webglColorRenderbuffer);

        var _n126 = a.convert(e.texture.format),
            _i112 = a.convert(e.texture.type),
            _o28 = M(e.texture.internalFormat, _n126, _i112),
            _s15 = U(e);

        t.renderbufferStorageMultisample(36161, _s15, _o28, e.width, e.height), t.bindFramebuffer(36160, r.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, r.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (r.__webglDepthRenderbuffer = t.createRenderbuffer(), O(r.__webglDepthRenderbuffer, e, !0)), t.bindFramebuffer(36160, null);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");

      if (l) {
        n.bindTexture(34067, c.__webglTexture), D(34067, e.texture, u);

        for (var _t166 = 0; _t166 < 6; _t166++) {
          I(r.__webglFramebuffer[_t166], e, 36064, 34069 + _t166);
        }

        _(e.texture, u) && y(34067, e.texture, e.width, e.height), n.bindTexture(34067, null);
      } else n.bindTexture(3553, c.__webglTexture), D(3553, e.texture, u), I(r.__webglFramebuffer, e, 36064, 3553), _(e.texture, u) && y(3553, e.texture, e.width, e.height), n.bindTexture(3553, null);

      e.depthBuffer && z(e);
    }, this.updateRenderTargetMipmap = function (t) {
      var e = t.texture;

      if (_(e, x(t) || s)) {
        var _r76 = t.isWebGLCubeRenderTarget ? 34067 : 3553,
            _a30 = i.get(e).__webglTexture;

        n.bindTexture(_r76, _a30), y(_r76, e, t.width, t.height), n.bindTexture(_r76, null);
      }
    }, this.updateMultisampleRenderTarget = function (e) {
      if (e.isWebGLMultisampleRenderTarget) if (s) {
        var _n127 = i.get(e);

        t.bindFramebuffer(36008, _n127.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, _n127.__webglFramebuffer);
        var _r77 = e.width,
            _a31 = e.height;
        var _o29 = 16384;
        e.depthBuffer && (_o29 |= 256), e.stencilBuffer && (_o29 |= 1024), t.blitFramebuffer(0, 0, _r77, _a31, 0, 0, _r77, _a31, _o29, 9728), t.bindFramebuffer(36160, _n127.__webglMultisampledFramebuffer);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    }, this.safeSetTexture2D = function (t, e) {
      t && t.isWebGLRenderTarget && (!1 === F && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), F = !0), t = t.texture), T(t, e);
    }, this.safeSetTextureCube = function (t, e) {
      t && t.isWebGLCubeRenderTarget && (!1 === B && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), B = !0), t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? L(t, e) : A(t, e);
    };
  }

  function tr(t, e, n) {
    var i = n.isWebGL2;
    return {
      convert: function convert(t) {
        var n;
        if (1009 === t) return 5121;
        if (1017 === t) return 32819;
        if (1018 === t) return 32820;
        if (1019 === t) return 33635;
        if (1010 === t) return 5120;
        if (1011 === t) return 5122;
        if (1012 === t) return 5123;
        if (1013 === t) return 5124;
        if (1014 === t) return 5125;
        if (1015 === t) return 5126;
        if (1016 === t) return i ? 5131 : (n = e.get("OES_texture_half_float"), null !== n ? n.HALF_FLOAT_OES : null);
        if (1021 === t) return 6406;
        if (1022 === t) return 6407;
        if (1023 === t) return 6408;
        if (1024 === t) return 6409;
        if (1025 === t) return 6410;
        if (1026 === t) return 6402;
        if (1027 === t) return 34041;
        if (1028 === t) return 6403;
        if (1029 === t) return 36244;
        if (1030 === t) return 33319;
        if (1031 === t) return 33320;
        if (1032 === t) return 36248;
        if (1033 === t) return 36249;

        if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
          if (n = e.get("WEBGL_compressed_texture_s3tc"), null === n) return null;
          if (33776 === t) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (33777 === t) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (33778 === t) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (33779 === t) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }

        if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
          if (n = e.get("WEBGL_compressed_texture_pvrtc"), null === n) return null;
          if (35840 === t) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (35841 === t) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (35842 === t) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (35843 === t) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }

        if (36196 === t) return n = e.get("WEBGL_compressed_texture_etc1"), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;

        if ((37492 === t || 37496 === t) && (n = e.get("WEBGL_compressed_texture_etc"), null !== n)) {
          if (37492 === t) return n.COMPRESSED_RGB8_ETC2;
          if (37496 === t) return n.COMPRESSED_RGBA8_ETC2_EAC;
        }

        return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (n = e.get("WEBGL_compressed_texture_astc"), null !== n ? t : null) : 36492 === t ? (n = e.get("EXT_texture_compression_bptc"), null !== n ? t : null) : 1020 === t ? i ? 34042 : (n = e.get("WEBGL_depth_texture"), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0;
      }
    };
  }

  function er(t) {
    Ye.call(this), this.cameras = t || [];
  }

  function nr() {
    q.call(this), this.type = "Group";
  }

  function ir() {
    this._targetRay = null, this._grip = null;
  }

  function rr(t, e) {
    var n = this;
    var i = null,
        r = 1,
        a = null,
        o = "local-floor",
        s = null;
    var c = [],
        l = new Map(),
        h = new Ye();
    h.layers.enable(1), h.viewport = new v();
    var u = new Ye();
    u.layers.enable(2), u.viewport = new v();
    var d = [h, u],
        f = new er();
    f.layers.enable(1), f.layers.enable(2);
    var p = null,
        m = null;

    function g(t) {
      var e = l.get(t.inputSource);
      e && e.dispatchEvent({
        type: t.type
      });
    }

    function x() {
      l.forEach(function (t, e) {
        t.disconnect(e);
      }), l.clear(), t.setFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), T.stop(), n.isPresenting = !1, n.dispatchEvent({
        type: "sessionend"
      });
    }

    function _(t) {
      a = t, T.setContext(i), T.start(), n.isPresenting = !0, n.dispatchEvent({
        type: "sessionstart"
      });
    }

    function y(t) {
      var e = i.inputSources;

      for (var _t167 = 0; _t167 < c.length; _t167++) {
        l.set(e[_t167], c[_t167]);
      }

      for (var _e136 = 0; _e136 < t.removed.length; _e136++) {
        var _n128 = t.removed[_e136],
            _i113 = l.get(_n128);

        _i113 && (_i113.dispatchEvent({
          type: "disconnected",
          data: _n128
        }), l.delete(_n128));
      }

      for (var _e137 = 0; _e137 < t.added.length; _e137++) {
        var _n129 = t.added[_e137],
            _i114 = l.get(_n129);

        _i114 && _i114.dispatchEvent({
          type: "connected",
          data: _n129
        });
      }
    }

    this.enabled = !1, this.isPresenting = !1, this.getController = function (t) {
      var e = c[t];
      return void 0 === e && (e = new ir(), c[t] = e), e.getTargetRaySpace();
    }, this.getControllerGrip = function (t) {
      var e = c[t];
      return void 0 === e && (e = new ir(), c[t] = e), e.getGripSpace();
    }, this.setFramebufferScaleFactor = function (t) {
      r = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function (t) {
      o = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function () {
      return a;
    }, this.getSession = function () {
      return i;
    }, this.setSession = function (t) {
      if (i = t, null !== i) {
        i.addEventListener("select", g), i.addEventListener("selectstart", g), i.addEventListener("selectend", g), i.addEventListener("squeeze", g), i.addEventListener("squeezestart", g), i.addEventListener("squeezeend", g), i.addEventListener("end", x);

        var _t168 = e.getContextAttributes();

        !0 !== _t168.xrCompatible && e.makeXRCompatible();

        var _n130 = {
          antialias: _t168.antialias,
          alpha: _t168.alpha,
          depth: _t168.depth,
          stencil: _t168.stencil,
          framebufferScaleFactor: r
        },
            _a32 = new XRWebGLLayer(i, e, _n130);

        i.updateRenderState({
          baseLayer: _a32
        }), i.requestReferenceSpace(o).then(_), i.addEventListener("inputsourceschange", y);
      }
    };
    var M = new b(),
        w = new b();

    function S(t, e) {
      null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld);
    }

    this.getCamera = function (t) {
      f.near = u.near = h.near = t.near, f.far = u.far = h.far = t.far, p === f.near && m === f.far || (i.updateRenderState({
        depthNear: f.near,
        depthFar: f.far
      }), p = f.near, m = f.far);
      var e = t.parent,
          n = f.cameras;
      S(f, e);

      for (var _t169 = 0; _t169 < n.length; _t169++) {
        S(n[_t169], e);
      }

      t.matrixWorld.copy(f.matrixWorld);
      var r = t.children;

      for (var _t170 = 0, _e138 = r.length; _t170 < _e138; _t170++) {
        r[_t170].updateMatrixWorld(!0);
      }

      return 2 === n.length ? function (t, e, n) {
        M.setFromMatrixPosition(e.matrixWorld), w.setFromMatrixPosition(n.matrixWorld);
        var i = M.distanceTo(w),
            r = e.projectionMatrix.elements,
            a = n.projectionMatrix.elements,
            o = r[14] / (r[10] - 1),
            s = r[14] / (r[10] + 1),
            c = (r[9] + 1) / r[5],
            l = (r[9] - 1) / r[5],
            h = (r[8] - 1) / r[0],
            u = (a[8] + 1) / a[0],
            d = o * h,
            f = o * u,
            p = i / (-h + u),
            m = p * -h;
        e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(p), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.getInverse(t.matrixWorld);

        var g = o + p,
            v = s + p,
            x = d - m,
            _ = f + (i - m),
            y = c * s / v * g,
            b = l * s / v * g;

        t.projectionMatrix.makePerspective(x, _, y, b, g, v);
      }(f, h, u) : f.projectionMatrix.copy(h.projectionMatrix), f;
    };

    var E = null;
    var T = new $e();
    T.setAnimationLoop(function (e, n) {
      if (s = n.getViewerPose(a), null !== s) {
        var _e139 = s.views,
            _n131 = i.renderState.baseLayer;
        t.setFramebuffer(_n131.framebuffer);

        var _r78 = !1;

        _e139.length !== f.cameras.length && (f.cameras.length = 0, _r78 = !0);

        for (var _t171 = 0; _t171 < _e139.length; _t171++) {
          var _i115 = _e139[_t171],
              _a33 = _n131.getViewport(_i115),
              _o30 = d[_t171];

          _o30.matrix.fromArray(_i115.transform.matrix), _o30.projectionMatrix.fromArray(_i115.projectionMatrix), _o30.viewport.set(_a33.x, _a33.y, _a33.width, _a33.height), 0 === _t171 && f.matrix.copy(_o30.matrix), !0 === _r78 && f.cameras.push(_o30);
        }
      }

      var r = i.inputSources;

      for (var _t172 = 0; _t172 < c.length; _t172++) {
        var _e140 = c[_t172],
            _i116 = r[_t172];

        _e140.update(_i116, n, a);
      }

      E && E(e, n);
    }), this.setAnimationLoop = function (t) {
      E = t;
    }, this.dispose = function () {};
  }

  function ar(t) {
    function e(e, n, i) {
      e.opacity.value = n.opacity, n.color && e.diffuse.value.copy(n.color), n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (e.map.value = n.map), n.alphaMap && (e.alphaMap.value = n.alphaMap), n.specularMap && (e.specularMap.value = n.specularMap);
      var r = n.envMap || i;
      var a, o;
      r && (e.envMap.value = r, e.flipEnvMap.value = r.isCubeTexture ? -1 : 1, e.reflectivity.value = n.reflectivity, e.refractionRatio.value = n.refractionRatio, e.maxMipLevel.value = t.get(r).__maxMipLevel), n.lightMap && (e.lightMap.value = n.lightMap, e.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (e.aoMap.value = n.aoMap, e.aoMapIntensity.value = n.aoMapIntensity), n.map ? a = n.map : n.specularMap ? a = n.specularMap : n.displacementMap ? a = n.displacementMap : n.normalMap ? a = n.normalMap : n.bumpMap ? a = n.bumpMap : n.roughnessMap ? a = n.roughnessMap : n.metalnessMap ? a = n.metalnessMap : n.alphaMap ? a = n.alphaMap : n.emissiveMap && (a = n.emissiveMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), e.uvTransform.value.copy(a.matrix)), n.aoMap ? o = n.aoMap : n.lightMap && (o = n.lightMap), void 0 !== o && (o.isWebGLRenderTarget && (o = o.texture), !0 === o.matrixAutoUpdate && o.updateMatrix(), e.uv2Transform.value.copy(o.matrix));
    }

    function n(t, e, n) {
      t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), (e.envMap || n) && (t.envMapIntensity.value = e.envMapIntensity);
    }

    return {
      refreshFogUniforms: function refreshFogUniforms(t, e) {
        t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density);
      },
      refreshMaterialUniforms: function refreshMaterialUniforms(t, i, r, a, o) {
        i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i), function (t, e) {
          e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
        }(t, i)) : i.isMeshToonMaterial ? (e(t, i), function (t, e) {
          e.gradientMap && (t.gradientMap.value = e.gradientMap);
          e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshPhongMaterial ? (e(t, i), function (t, e) {
          t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshStandardMaterial ? (e(t, i, r), i.isMeshPhysicalMaterial ? function (t, e, i) {
          n(t, e, i), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen);
          e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
          e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
          e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate());
          t.transparency.value = e.transparency;
        }(t, i, r) : n(t, i, r)) : i.isMeshMatcapMaterial ? (e(t, i), function (t, e) {
          e.matcap && (t.matcap.value = e.matcap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshDepthMaterial ? (e(t, i), function (t, e) {
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshDistanceMaterial ? (e(t, i), function (t, e) {
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
          t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance;
        }(t, i)) : i.isMeshNormalMaterial ? (e(t, i), function (t, e) {
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isLineBasicMaterial ? (function (t, e) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity;
        }(t, i), i.isLineDashedMaterial && function (t, e) {
          t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale;
        }(t, i)) : i.isPointsMaterial ? function (t, e, n, i) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map);
          e.alphaMap && (t.alphaMap.value = e.alphaMap);
          var r;
          e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
          void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix));
        }(t, i, a, o) : i.isSpriteMaterial ? function (t, e) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
          e.alphaMap && (t.alphaMap.value = e.alphaMap);
          var n;
          e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
          void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix));
        }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
      }
    };
  }

  function or(t) {
    var e = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
        n = void 0 !== t.context ? t.context : null,
        i = void 0 !== t.alpha && t.alpha,
        r = void 0 === t.depth || t.depth,
        a = void 0 === t.stencil || t.stencil,
        o = void 0 !== t.antialias && t.antialias,
        s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
        c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
        l = void 0 !== t.powerPreference ? t.powerPreference : "default",
        d = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
    var f = null,
        p = null;
    this.domElement = e, this.debug = {
      checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
    var m = this;
    var g = !1,
        x = null,
        _ = 0,
        y = 0,
        M = null,
        w = null,
        S = -1,
        E = null,
        T = null;
    var L = new v(),
        A = new v();
    var P = null,
        D = e.width,
        N = e.height,
        R = 1,
        I = null,
        O = null;
    var z = new v(0, 0, D, N),
        U = new v(0, 0, D, N);
    var F = !1;
    var B = new Ke(),
        G = new hn();
    var k = !1,
        V = !1;
    var H = new C(),
        W = new b(),
        j = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0
    };

    function X() {
      return null === M ? R : 1;
    }

    var Y,
        q,
        Z,
        J,
        K,
        Q,
        $,
        tt,
        et,
        nt,
        it,
        rt,
        at,
        ot,
        st,
        ct,
        lt,
        ht,
        ut,
        dt = n;

    function ft(t, n) {
      for (var _i117 = 0; _i117 < t.length; _i117++) {
        var _r79 = t[_i117],
            _a34 = e.getContext(_r79, n);

        if (null !== _a34) return _a34;
      }

      return null;
    }

    try {
      var _t173 = {
        alpha: i,
        depth: r,
        stencil: a,
        antialias: o,
        premultipliedAlpha: s,
        preserveDrawingBuffer: c,
        powerPreference: l,
        failIfMajorPerformanceCaveat: d
      };

      if (e.addEventListener("webglcontextlost", vt, !1), e.addEventListener("webglcontextrestored", xt, !1), null === dt) {
        var _e141 = ["webgl2", "webgl", "experimental-webgl"];
        if (!0 === m.isWebGL1Renderer && _e141.shift(), dt = ft(_e141, _t173), null === dt) throw ft(_e141) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }

      void 0 === dt.getShaderPrecisionFormat && (dt.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        };
      });
    } catch (t) {
      throw console.error("THREE.WebGLRenderer: " + t.message), t;
    }

    function pt() {
      Y = new un(dt), q = new ln(dt, Y, t), !1 === q.isWebGL2 && (Y.get("WEBGL_depth_texture"), Y.get("OES_texture_float"), Y.get("OES_texture_half_float"), Y.get("OES_texture_half_float_linear"), Y.get("OES_standard_derivatives"), Y.get("OES_element_index_uint"), Y.get("OES_vertex_array_object"), Y.get("ANGLE_instanced_arrays")), Y.get("OES_texture_float_linear"), ht = new tr(dt, Y, q), Z = new Qi(dt, Y, q), Z.scissor(A.copy(U).multiplyScalar(R).floor()), Z.viewport(L.copy(z).multiplyScalar(R).floor()), J = new pn(dt), K = new Fi(), Q = new $i(dt, Y, Z, K, q, ht, J), $ = new tn(dt, q), ut = new sn(dt, Y, $, q), tt = new dn(dt, $, J, ut), et = new xn(dt, tt, $, J), st = new vn(dt), nt = new Ui(m, Y, q, ut), it = new ar(K), rt = new Vi(), at = new qi(), ot = new on(m, Z, et, s), ct = new cn(dt, Y, J, q), lt = new fn(dt, Y, J, q), J.programs = nt.programs, m.capabilities = q, m.extensions = Y, m.properties = K, m.renderLists = rt, m.state = Z, m.info = J;
    }

    pt();
    var mt = new rr(m, dt);
    this.xr = mt;
    var gt = new Ki(m, et, q.maxTextureSize);

    function vt(t) {
      t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g = !0;
    }

    function xt() {
      console.log("THREE.WebGLRenderer: Context Restored."), g = !1, pt();
    }

    function _t(t) {
      var e = t.target;
      e.removeEventListener("dispose", _t), function (t) {
        yt(t), K.remove(t);
      }(e);
    }

    function yt(t) {
      var e = K.get(t).program;
      t.program = void 0, void 0 !== e && nt.releaseProgram(e);
    }

    this.shadowMap = gt, this.getContext = function () {
      return dt;
    }, this.getContextAttributes = function () {
      return dt.getContextAttributes();
    }, this.forceContextLoss = function () {
      var t = Y.get("WEBGL_lose_context");
      t && t.loseContext();
    }, this.forceContextRestore = function () {
      var t = Y.get("WEBGL_lose_context");
      t && t.restoreContext();
    }, this.getPixelRatio = function () {
      return R;
    }, this.setPixelRatio = function (t) {
      void 0 !== t && (R = t, this.setSize(D, N, !1));
    }, this.getSize = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), t = new u()), t.set(D, N);
    }, this.setSize = function (t, n, i) {
      mt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (D = t, N = n, e.width = Math.floor(t * R), e.height = Math.floor(n * R), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n));
    }, this.getDrawingBufferSize = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), t = new u()), t.set(D * R, N * R).floor();
    }, this.setDrawingBufferSize = function (t, n, i) {
      D = t, N = n, R = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n);
    }, this.getCurrentViewport = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), t = new v()), t.copy(L);
    }, this.getViewport = function (t) {
      return t.copy(z);
    }, this.setViewport = function (t, e, n, i) {
      t.isVector4 ? z.set(t.x, t.y, t.z, t.w) : z.set(t, e, n, i), Z.viewport(L.copy(z).multiplyScalar(R).floor());
    }, this.getScissor = function (t) {
      return t.copy(U);
    }, this.setScissor = function (t, e, n, i) {
      t.isVector4 ? U.set(t.x, t.y, t.z, t.w) : U.set(t, e, n, i), Z.scissor(A.copy(U).multiplyScalar(R).floor());
    }, this.getScissorTest = function () {
      return F;
    }, this.setScissorTest = function (t) {
      Z.setScissorTest(F = t);
    }, this.setOpaqueSort = function (t) {
      I = t;
    }, this.setTransparentSort = function (t) {
      O = t;
    }, this.getClearColor = function () {
      return ot.getClearColor();
    }, this.setClearColor = function () {
      ot.setClearColor.apply(ot, arguments);
    }, this.getClearAlpha = function () {
      return ot.getClearAlpha();
    }, this.setClearAlpha = function () {
      ot.setClearAlpha.apply(ot, arguments);
    }, this.clear = function (t, e, n) {
      var i = 0;
      (void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), dt.clear(i);
    }, this.clearColor = function () {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }, this.dispose = function () {
      e.removeEventListener("webglcontextlost", vt, !1), e.removeEventListener("webglcontextrestored", xt, !1), rt.dispose(), at.dispose(), K.dispose(), et.dispose(), ut.dispose(), mt.dispose(), bt.stop();
    }, this.renderBufferImmediate = function (t, e) {
      ut.initAttributes();
      var n = K.get(t);
      t.hasPositions && !n.position && (n.position = dt.createBuffer()), t.hasNormals && !n.normal && (n.normal = dt.createBuffer()), t.hasUvs && !n.uv && (n.uv = dt.createBuffer()), t.hasColors && !n.color && (n.color = dt.createBuffer());
      var i = e.getAttributes();
      t.hasPositions && (dt.bindBuffer(34962, n.position), dt.bufferData(34962, t.positionArray, 35048), ut.enableAttribute(i.position), dt.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), t.hasNormals && (dt.bindBuffer(34962, n.normal), dt.bufferData(34962, t.normalArray, 35048), ut.enableAttribute(i.normal), dt.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (dt.bindBuffer(34962, n.uv), dt.bufferData(34962, t.uvArray, 35048), ut.enableAttribute(i.uv), dt.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), t.hasColors && (dt.bindBuffer(34962, n.color), dt.bufferData(34962, t.colorArray, 35048), ut.enableAttribute(i.color), dt.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), ut.disableUnusedAttributes(), dt.drawArrays(4, 0, t.count), t.count = 0;
    }, this.renderBufferDirect = function (t, e, n, i, r, a) {
      null === e && (e = j);
      var o = r.isMesh && r.matrixWorld.determinant() < 0,
          s = Lt(t, e, i, r);
      Z.setMaterial(i, o);
      var c = n.index;
      var l = n.attributes.position;

      if (null === c) {
        if (void 0 === l || 0 === l.count) return;
      } else if (0 === c.count) return;

      var h,
          u = 1;
      !0 === i.wireframe && (c = tt.getWireframeAttribute(n), u = 2), (i.morphTargets || i.morphNormals) && st.update(r, n, i, s), ut.setup(r, i, s, n, c);
      var d = ct;
      null !== c && (h = $.get(c), d = lt, d.setIndex(h));

      var f = null !== c ? c.count : l.count,
          p = n.drawRange.start * u,
          m = n.drawRange.count * u,
          g = null !== a ? a.start * u : 0,
          v = null !== a ? a.count * u : 1 / 0,
          x = Math.max(p, g),
          _ = Math.min(f, p + m, g + v) - 1,
          y = Math.max(0, _ - x + 1);

      if (0 !== y) {
        if (r.isMesh) !0 === i.wireframe ? (Z.setLineWidth(i.wireframeLinewidth * X()), d.setMode(1)) : d.setMode(4);else if (r.isLine) {
          var _t174 = i.linewidth;
          void 0 === _t174 && (_t174 = 1), Z.setLineWidth(_t174 * X()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3);
        } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
        if (r.isInstancedMesh) d.renderInstances(n, x, y, r.count);else if (n.isInstancedBufferGeometry) {
          var _t175 = Math.min(n.instanceCount, n._maxInstanceCount);

          d.renderInstances(n, x, y, _t175);
        } else d.render(x, y);
      }
    }, this.compile = function (t, e) {
      p = at.get(t, e), p.init(), t.traverse(function (t) {
        t.isLight && (p.pushLight(t), t.castShadow && p.pushShadow(t));
      }), p.setupLights(e);
      var n = new WeakMap();
      t.traverse(function (e) {
        var i = e.material;
        if (i) if (Array.isArray(i)) for (var _r80 = 0; _r80 < i.length; _r80++) {
          var _a35 = i[_r80];
          !1 === n.has(_a35) && (Tt(_a35, t, e), n.set(_a35));
        } else !1 === n.has(i) && (Tt(i, t, e), n.set(i));
      });
    };
    var Mt = null;
    var bt = new $e();

    function wt(t, e, n, i) {
      if (!1 === t.visible) return;
      if (t.layers.test(e.layers)) if (t.isGroup) n = t.renderOrder;else if (t.isLOD) !0 === t.autoUpdate && t.update(e);else if (t.isLight) p.pushLight(t), t.castShadow && p.pushShadow(t);else if (t.isSprite) {
        if (!t.frustumCulled || B.intersectsSprite(t)) {
          i && W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H);

          var _e142 = et.update(t),
              _r81 = t.material;

          _r81.visible && f.push(t, _e142, _r81, n, W.z, null);
        }
      } else if (t.isImmediateRenderObject) i && W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H), f.push(t, null, t.material, n, W.z, null);else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== J.render.frame && (t.skeleton.update(), t.skeleton.frame = J.render.frame), !t.frustumCulled || B.intersectsObject(t))) {
        i && W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H);

        var _e143 = et.update(t),
            _r82 = t.material;

        if (Array.isArray(_r82)) {
          var _i118 = _e143.groups;

          for (var _a36 = 0, _o31 = _i118.length; _a36 < _o31; _a36++) {
            var _o32 = _i118[_a36],
                _s16 = _r82[_o32.materialIndex];
            _s16 && _s16.visible && f.push(t, _e143, _s16, n, W.z, _o32);
          }
        } else _r82.visible && f.push(t, _e143, _r82, n, W.z, null);
      }
      var r = t.children;

      for (var _t176 = 0, _a37 = r.length; _t176 < _a37; _t176++) {
        wt(r[_t176], e, n, i);
      }
    }

    function St(t, e, n) {
      var i = !0 === e.isScene ? e.overrideMaterial : null;

      for (var _r83 = 0, _a38 = t.length; _r83 < _a38; _r83++) {
        var _a39 = t[_r83],
            _o33 = _a39.object,
            _s17 = _a39.geometry,
            _c18 = null === i ? _a39.material : i,
            _l15 = _a39.group;

        if (n.isArrayCamera) {
          T = n;
          var _t177 = n.cameras;

          for (var _n132 = 0, _i119 = _t177.length; _n132 < _i119; _n132++) {
            var _i120 = _t177[_n132];
            _o33.layers.test(_i120.layers) && (Z.viewport(L.copy(_i120.viewport)), p.setupLights(_i120), Et(_o33, e, _i120, _s17, _c18, _l15));
          }
        } else T = null, Et(_o33, e, n, _s17, _c18, _l15);
      }
    }

    function Et(t, e, n, i, r, a) {
      if (t.onBeforeRender(m, e, n, i, r, a), p = at.get(e, T || n), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
        var _i121 = Lt(n, e, r, t);

        Z.setMaterial(r), ut.reset(), function (t, e) {
          t.render(function (t) {
            m.renderBufferImmediate(t, e);
          });
        }(t, _i121);
      } else m.renderBufferDirect(n, e, i, r, t, a);

      t.onAfterRender(m, e, n, i, r, a), p = at.get(e, T || n);
    }

    function Tt(t, e, n) {
      !0 !== e.isScene && (e = j);
      var i = K.get(t),
          r = p.state.lights,
          a = p.state.shadowsArray,
          o = r.state.version,
          s = nt.getParameters(t, r.state, a, e, G.numPlanes, G.numIntersection, n),
          c = nt.getProgramCacheKey(s);
      var l = i.program,
          h = !0;
      if (void 0 === l) t.addEventListener("dispose", _t);else if (l.cacheKey !== c) yt(t);else if (i.lightsStateVersion !== o) i.lightsStateVersion = o, h = !1;else {
        if (void 0 !== s.shaderID) return;
        h = !1;
      }
      h && (l = nt.acquireProgram(s, c), i.program = l, i.uniforms = s.uniforms, i.outputEncoding = s.outputEncoding, t.program = l);
      var u = l.getAttributes();

      if (t.morphTargets) {
        t.numSupportedMorphTargets = 0;

        for (var _e144 = 0; _e144 < m.maxMorphTargets; _e144++) {
          u["morphTarget" + _e144] >= 0 && t.numSupportedMorphTargets++;
        }
      }

      if (t.morphNormals) {
        t.numSupportedMorphNormals = 0;

        for (var _e145 = 0; _e145 < m.maxMorphNormals; _e145++) {
          u["morphNormal" + _e145] >= 0 && t.numSupportedMorphNormals++;
        }
      }

      var d = i.uniforms;
      (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (i.numClippingPlanes = G.numPlanes, i.numIntersection = G.numIntersection, d.clippingPlanes = G.uniform), i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.needsLights = function (t) {
        return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights;
      }(t), i.lightsStateVersion = o, i.needsLights && (d.ambientLightColor.value = r.state.ambient, d.lightProbe.value = r.state.probe, d.directionalLights.value = r.state.directional, d.directionalLightShadows.value = r.state.directionalShadow, d.spotLights.value = r.state.spot, d.spotLightShadows.value = r.state.spotShadow, d.rectAreaLights.value = r.state.rectArea, d.pointLights.value = r.state.point, d.pointLightShadows.value = r.state.pointShadow, d.hemisphereLights.value = r.state.hemi, d.directionalShadowMap.value = r.state.directionalShadowMap, d.directionalShadowMatrix.value = r.state.directionalShadowMatrix, d.spotShadowMap.value = r.state.spotShadowMap, d.spotShadowMatrix.value = r.state.spotShadowMatrix, d.pointShadowMap.value = r.state.pointShadowMap, d.pointShadowMatrix.value = r.state.pointShadowMatrix);
      var f = i.program.getUniforms(),
          g = gi.seqWithValue(f.seq, d);
      i.uniformsList = g;
    }

    function Lt(t, e, n, i) {
      !0 !== e.isScene && (e = j), Q.resetTextureUnits();
      var r = e.fog,
          a = n.isMeshStandardMaterial ? e.environment : null,
          o = null === M ? m.outputEncoding : M.texture.encoding,
          s = K.get(n),
          c = p.state.lights;

      if (!0 === k && (!0 === V || t !== E)) {
        var _e146 = t === E && n.id === S;

        G.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, t, s, _e146);
      }

      n.version === s.__version ? void 0 === s.program || n.fog && s.fog !== r || s.environment !== a || s.needsLights && s.lightsStateVersion !== c.state.version ? Tt(n, e, i) : void 0 === s.numClippingPlanes || s.numClippingPlanes === G.numPlanes && s.numIntersection === G.numIntersection ? s.outputEncoding !== o && Tt(n, e, i) : Tt(n, e, i) : (Tt(n, e, i), s.__version = n.version);
      var l = !1,
          u = !1,
          d = !1;
      var f = s.program,
          g = f.getUniforms(),
          v = s.uniforms;

      if (Z.useProgram(f.program) && (l = !0, u = !0, d = !0), n.id !== S && (S = n.id, u = !0), l || E !== t) {
        if (g.setValue(dt, "projectionMatrix", t.projectionMatrix), q.logarithmicDepthBuffer && g.setValue(dt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), E !== t && (E = t, u = !0, d = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
          var _e147 = g.map.cameraPosition;
          void 0 !== _e147 && _e147.setValue(dt, W.setFromMatrixPosition(t.matrixWorld));
        }
        (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && g.setValue(dt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && g.setValue(dt, "viewMatrix", t.matrixWorldInverse);
      }

      if (n.skinning) {
        g.setOptional(dt, i, "bindMatrix"), g.setOptional(dt, i, "bindMatrixInverse");
        var _t178 = i.skeleton;

        if (_t178) {
          var _e148 = _t178.bones;

          if (q.floatVertexTextures) {
            if (void 0 === _t178.boneTexture) {
              var _n133 = Math.sqrt(4 * _e148.length);

              _n133 = h.ceilPowerOfTwo(_n133), _n133 = Math.max(_n133, 4);

              var _i122 = new Float32Array(_n133 * _n133 * 4);

              _i122.set(_t178.boneMatrices);

              var _r84 = new qe(_i122, _n133, _n133, 1023, 1015);

              _t178.boneMatrices = _i122, _t178.boneTexture = _r84, _t178.boneTextureSize = _n133;
            }

            g.setValue(dt, "boneTexture", _t178.boneTexture, Q), g.setValue(dt, "boneTextureSize", _t178.boneTextureSize);
          } else g.setOptional(dt, _t178, "boneMatrices");
        }
      }

      var x, _;

      return (u || s.receiveShadow !== i.receiveShadow) && (s.receiveShadow = i.receiveShadow, g.setValue(dt, "receiveShadow", i.receiveShadow)), u && (g.setValue(dt, "toneMappingExposure", m.toneMappingExposure), s.needsLights && (_ = d, (x = v).ambientLightColor.needsUpdate = _, x.lightProbe.needsUpdate = _, x.directionalLights.needsUpdate = _, x.directionalLightShadows.needsUpdate = _, x.pointLights.needsUpdate = _, x.pointLightShadows.needsUpdate = _, x.spotLights.needsUpdate = _, x.spotLightShadows.needsUpdate = _, x.rectAreaLights.needsUpdate = _, x.hemisphereLights.needsUpdate = _), r && n.fog && it.refreshFogUniforms(v, r), it.refreshMaterialUniforms(v, n, a, R, N), void 0 !== v.ltc_1 && (v.ltc_1.value = Qe.LTC_1), void 0 !== v.ltc_2 && (v.ltc_2.value = Qe.LTC_2), gi.upload(dt, s.uniformsList, v, Q)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (gi.upload(dt, s.uniformsList, v, Q), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && g.setValue(dt, "center", i.center), g.setValue(dt, "modelViewMatrix", i.modelViewMatrix), g.setValue(dt, "normalMatrix", i.normalMatrix), g.setValue(dt, "modelMatrix", i.matrixWorld), f;
    }

    bt.setAnimationLoop(function (t) {
      mt.isPresenting || Mt && Mt(t);
    }), "undefined" != typeof window && bt.setContext(window), this.setAnimationLoop = function (t) {
      Mt = t, mt.setAnimationLoop(t), null === t ? bt.stop() : bt.start();
    }, this.render = function (t, e) {
      var n, i;
      if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), n = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), i = arguments[3]), void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      if (!0 === g) return;
      ut.resetDefaultState(), S = -1, E = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === mt.enabled && !0 === mt.isPresenting && (e = mt.getCamera(e)), !0 === t.isScene && t.onBeforeRender(m, t, e, n || M), p = at.get(t, e), p.init(), H.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), B.setFromProjectionMatrix(H), V = this.localClippingEnabled, k = G.init(this.clippingPlanes, V, e), f = rt.get(t, e), f.init(), wt(t, e, 0, m.sortObjects), f.finish(), !0 === m.sortObjects && f.sort(I, O), !0 === k && G.beginShadows();
      var r = p.state.shadowsArray;
      gt.render(r, t, e), p.setupLights(e), !0 === k && G.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), ot.render(f, t, e, i);
      var a = f.opaque,
          o = f.transparent;
      a.length > 0 && St(a, t, e), o.length > 0 && St(o, t, e), !0 === t.isScene && t.onAfterRender(m, t, e), null !== M && (Q.updateRenderTargetMipmap(M), Q.updateMultisampleRenderTarget(M)), Z.buffers.depth.setTest(!0), Z.buffers.depth.setMask(!0), Z.buffers.color.setMask(!0), Z.setPolygonOffset(!1), f = null, p = null;
    }, this.setFramebuffer = function (t) {
      x !== t && null === M && dt.bindFramebuffer(36160, t), x = t;
    }, this.getActiveCubeFace = function () {
      return _;
    }, this.getActiveMipmapLevel = function () {
      return y;
    }, this.getRenderTarget = function () {
      return M;
    }, this.setRenderTarget = function (t, e, n) {
      M = t, _ = e, y = n, t && void 0 === K.get(t).__webglFramebuffer && Q.setupRenderTarget(t);
      var i = x,
          r = !1;

      if (t) {
        var _n134 = K.get(t).__webglFramebuffer;

        t.isWebGLCubeRenderTarget ? (i = _n134[e || 0], r = !0) : i = t.isWebGLMultisampleRenderTarget ? K.get(t).__webglMultisampledFramebuffer : _n134, L.copy(t.viewport), A.copy(t.scissor), P = t.scissorTest;
      } else L.copy(z).multiplyScalar(R).floor(), A.copy(U).multiplyScalar(R).floor(), P = F;

      if (w !== i && (dt.bindFramebuffer(36160, i), w = i), Z.viewport(L), Z.scissor(A), Z.setScissorTest(P), r) {
        var _i123 = K.get(t.texture);

        dt.framebufferTexture2D(36160, 36064, 34069 + (e || 0), _i123.__webglTexture, n || 0);
      }
    }, this.readRenderTargetPixels = function (t, e, n, i, r, a, o) {
      if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");

      var s = K.get(t).__webglFramebuffer;

      if (t.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s) {
        var _o34 = !1;

        s !== w && (dt.bindFramebuffer(36160, s), _o34 = !0);

        try {
          var _s18 = t.texture,
              _c19 = _s18.format,
              _l16 = _s18.type;
          if (1023 !== _c19 && ht.convert(_c19) !== dt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          if (!(1009 === _l16 || ht.convert(_l16) === dt.getParameter(35738) || 1015 === _l16 && (q.isWebGL2 || Y.get("OES_texture_float") || Y.get("WEBGL_color_buffer_float")) || 1016 === _l16 && (q.isWebGL2 ? Y.get("EXT_color_buffer_float") : Y.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          36053 === dt.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && dt.readPixels(e, n, i, r, ht.convert(_c19), ht.convert(_l16), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
        } finally {
          _o34 && dt.bindFramebuffer(36160, w);
        }
      }
    }, this.copyFramebufferToTexture = function (t, e, n) {
      void 0 === n && (n = 0);
      var i = Math.pow(2, -n),
          r = Math.floor(e.image.width * i),
          a = Math.floor(e.image.height * i),
          o = ht.convert(e.format);
      Q.setTexture2D(e, 0), dt.copyTexImage2D(3553, n, o, t.x, t.y, r, a, 0), Z.unbindTexture();
    }, this.copyTextureToTexture = function (t, e, n, i) {
      void 0 === i && (i = 0);
      var r = e.image.width,
          a = e.image.height,
          o = ht.convert(n.format),
          s = ht.convert(n.type);
      Q.setTexture2D(n, 0), dt.pixelStorei(37440, n.flipY), dt.pixelStorei(37441, n.premultiplyAlpha), dt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? dt.texSubImage2D(3553, i, t.x, t.y, r, a, o, s, e.image.data) : e.isCompressedTexture ? dt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, o, e.mipmaps[0].data) : dt.texSubImage2D(3553, i, t.x, t.y, o, s, e.image), 0 === i && n.generateMipmaps && dt.generateMipmap(3553), Z.unbindTexture();
    }, this.initTexture = function (t) {
      Q.setTexture2D(t, 0), Z.unbindTexture();
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }

  function sr(t) {
    this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }

  function cr(t, e, n) {
    return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== n ? n : 0, this;
  }

  function lr(t, e, n, i, r, a) {
    return [new u(t / r, 1 - i / a), new u(n / r, 1 - i / a), new u(n / r, 1 - e / a), new u(t / r, 1 - e / a)];
  }

  function hr(t, e, n, i) {
    return lr(t, e, n, i, 64, 64);
  }

  function ur(t, e, n, i) {
    return lr(t, e, n, i, 64, 32);
  }

  function dr(t, e, n, i, r, a, o) {
    t.faceVertexUvs[0] = [], t.faceVertexUvs[0][0] = [a[3], a[0], a[2]], t.faceVertexUvs[0][1] = [a[0], a[1], a[2]], t.faceVertexUvs[0][2] = [i[3], i[0], i[2]], t.faceVertexUvs[0][3] = [i[0], i[1], i[2]], t.faceVertexUvs[0][4] = [e[3], e[0], e[2]], t.faceVertexUvs[0][5] = [e[0], e[1], e[2]], t.faceVertexUvs[0][6] = [n[0], n[3], n[1]], t.faceVertexUvs[0][7] = [n[3], n[2], n[1]], t.faceVertexUvs[0][8] = [r[3], r[0], r[2]], t.faceVertexUvs[0][9] = [r[0], r[1], r[2]], t.faceVertexUvs[0][10] = [o[3], o[0], o[2]], t.faceVertexUvs[0][11] = [o[0], o[1], o[2]];
  }

  er.prototype = Object.assign(Object.create(Ye.prototype), {
    constructor: er,
    isArrayCamera: !0
  }), nr.prototype = Object.assign(Object.create(q.prototype), {
    constructor: nr,
    isGroup: !0
  }), Object.assign(ir.prototype, {
    constructor: ir,
    getTargetRaySpace: function getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new nr(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay;
    },
    getGripSpace: function getGripSpace() {
      return null === this._grip && (this._grip = new nr(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip;
    },
    dispatchEvent: function dispatchEvent(t) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), this;
    },
    disconnect: function disconnect(t) {
      return this.dispatchEvent({
        type: "disconnected",
        data: t
      }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), this;
    },
    update: function update(t, e, n) {
      var i = null,
          r = null;
      var a = this._targetRay,
          o = this._grip;
      return t && (null !== a && (i = e.getPose(t.targetRaySpace, n), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale))), null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale)))), null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), this;
    }
  }), Object.assign(rr.prototype, c.prototype), Object.assign(sr.prototype, {
    start: function start() {
      this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
    },
    stop: function stop() {
      this.getElapsedTime(), this.running = !1, this.autoStart = !1;
    },
    getElapsedTime: function getElapsedTime() {
      return this.getDelta(), this.elapsedTime;
    },
    getDelta: function getDelta() {
      var t = 0;
      if (this.autoStart && !this.running) return this.start(), 0;

      if (this.running) {
        var _e149 = ("undefined" == typeof performance ? Date : performance).now();

        t = (_e149 - this.oldTime) / 1e3, this.oldTime = _e149, this.elapsedTime += t;
      }

      return t;
    }
  }), Object.assign(cr.prototype, {
    set: function set(t, e, n) {
      return this.radius = t, this.phi = e, this.theta = n, this;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
    },
    makeSafe: function makeSafe() {
      return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
    },
    setFromVector3: function setFromVector3(t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z);
    },
    setFromCartesianCoords: function setFromCartesianCoords(t, e, n) {
      return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(h.clamp(e / this.radius, -1, 1))), this;
    }
  });

  var fr = /*#__PURE__*/function (_nr) {
    _inherits(fr, _nr);

    var _super3 = _createSuper(fr);

    function fr(t, e) {
      var _this3;

      _classCallCheck(this, fr);

      _this3 = _super3.call(this), _this3.innerLayer = t, _this3.outerLayer = e, t.name = "inner", e.name = "outer";
      return _this3;
    }

    return fr;
  }(nr);

  var pr = /*#__PURE__*/function (_nr2) {
    _inherits(pr, _nr2);

    var _super4 = _createSuper(pr);

    function pr(t) {
      var _this4;

      _classCallCheck(this, pr);

      _this4 = _super4.call(this), _this4.modelListeners = [], _this4.slim = !1;
      var e = {
        map: t,
        side: 0
      },
          n = {
        map: t,
        side: 2,
        transparent: !0,
        opacity: 1,
        alphaTest: .5
      },
          i = new Xt(e),
          r = new Xt(n),
          a = new Ge(8, 8, 8, 0, 0, 0);
      dr(a, hr(8, 0, 16, 8), hr(16, 0, 24, 8), hr(0, 8, 8, 16), hr(8, 8, 16, 16), hr(16, 8, 24, 16), hr(24, 8, 32, 16));
      var o = new Ne(a, i),
          s = new Ge(9, 9, 9, 0, 0, 0);
      dr(s, hr(40, 0, 48, 8), hr(48, 0, 56, 8), hr(32, 8, 40, 16), hr(40, 8, 48, 16), hr(48, 8, 56, 16), hr(56, 8, 64, 16));
      var c = new Ne(s, r);
      c.renderOrder = -1, _this4.head = new fr(o, c), _this4.head.name = "head", _this4.head.add(o, c), _this4.add(_this4.head);
      var l = new Ge(8, 12, 4, 0, 0, 0);
      dr(l, hr(20, 16, 28, 20), hr(28, 16, 36, 20), hr(16, 20, 20, 32), hr(20, 20, 28, 32), hr(28, 20, 32, 32), hr(32, 20, 40, 32));
      var h = new Ne(l, new Xt(Object.assign(Object.assign({}, e), {
        polygonOffset: !0,
        polygonOffsetUnits: -1
      }))),
          u = new Ge(9, 13.5, 4.5, 0, 0, 0);
      dr(u, hr(20, 32, 28, 36), hr(28, 32, 36, 36), hr(16, 36, 20, 48), hr(20, 36, 28, 48), hr(28, 36, 32, 48), hr(32, 36, 40, 48));
      var d = new Ne(u, new Xt(Object.assign(Object.assign({}, n), {
        polygonOffset: !0,
        polygonOffsetUnits: -1
      })));
      _this4.body = new fr(h, d), _this4.body.name = "body", _this4.body.add(h, d), _this4.body.position.y = -10, _this4.add(_this4.body);
      var f = new Ge(1, 1, 1, 0, 0, 0),
          p = new Ne(f, i);

      _this4.modelListeners.push(function () {
        p.scale.x = _this4.slim ? 3 : 4, p.scale.y = 12, p.scale.z = 4, _this4.slim ? dr(f, hr(44, 16, 47, 20), hr(47, 16, 50, 20), hr(40, 20, 44, 32), hr(44, 20, 47, 32), hr(47, 20, 51, 32), hr(51, 20, 54, 32)) : dr(f, hr(44, 16, 48, 20), hr(48, 16, 52, 20), hr(40, 20, 44, 32), hr(44, 20, 48, 32), hr(48, 20, 52, 32), hr(52, 20, 56, 32)), f.uvsNeedUpdate = !0, f.elementsNeedUpdate = !0;
      });

      var m = new Ge(1, 1, 1, 0, 0, 0),
          g = new Ne(m, r);
      g.renderOrder = 1, _this4.modelListeners.push(function () {
        g.scale.x = _this4.slim ? 3.375 : 4.5, g.scale.y = 13.5, g.scale.z = 4.5, _this4.slim ? dr(m, hr(44, 32, 47, 36), hr(47, 32, 50, 36), hr(40, 36, 44, 48), hr(44, 36, 47, 48), hr(47, 36, 51, 48), hr(51, 36, 54, 48)) : dr(m, hr(44, 32, 48, 36), hr(48, 32, 52, 36), hr(40, 36, 44, 48), hr(44, 36, 48, 48), hr(48, 36, 52, 48), hr(52, 36, 56, 48)), m.uvsNeedUpdate = !0, m.elementsNeedUpdate = !0;
      });
      var v = new nr();
      v.add(p, g), v.position.y = -4, _this4.rightArm = new fr(p, g), _this4.rightArm.name = "rightArm", _this4.rightArm.add(v), _this4.rightArm.position.y = -6, _this4.modelListeners.push(function () {
        _this4.rightArm.position.x = _this4.slim ? -5.5 : -6;
      }), _this4.add(_this4.rightArm);

      var x = new Ge(1, 1, 1, 0, 0, 0),
          _ = new Ne(x, i);

      _this4.modelListeners.push(function () {
        _.scale.x = _this4.slim ? 3 : 4, _.scale.y = 12, _.scale.z = 4, _this4.slim ? dr(x, hr(36, 48, 39, 52), hr(39, 48, 42, 52), hr(32, 52, 36, 64), hr(36, 52, 39, 64), hr(39, 52, 43, 64), hr(43, 52, 46, 64)) : dr(x, hr(36, 48, 40, 52), hr(40, 48, 44, 52), hr(32, 52, 36, 64), hr(36, 52, 40, 64), hr(40, 52, 44, 64), hr(44, 52, 48, 64)), x.uvsNeedUpdate = !0, x.elementsNeedUpdate = !0;
      });

      var y = new Ge(1, 1, 1, 0, 0, 0),
          M = new Ne(y, r);
      M.renderOrder = 1, _this4.modelListeners.push(function () {
        M.scale.x = _this4.slim ? 3.375 : 4.5, M.scale.y = 13.5, M.scale.z = 4.5, _this4.slim ? dr(y, hr(52, 48, 55, 52), hr(55, 48, 58, 52), hr(48, 52, 52, 64), hr(52, 52, 55, 64), hr(55, 52, 59, 64), hr(59, 52, 62, 64)) : dr(y, hr(52, 48, 56, 52), hr(56, 48, 60, 52), hr(48, 52, 52, 64), hr(52, 52, 56, 64), hr(56, 52, 60, 64), hr(60, 52, 64, 64)), y.uvsNeedUpdate = !0, y.elementsNeedUpdate = !0;
      });
      var b = new nr();
      b.add(_, M), b.position.y = -4, _this4.leftArm = new fr(_, M), _this4.leftArm.name = "leftArm", _this4.leftArm.add(b), _this4.leftArm.position.y = -6, _this4.modelListeners.push(function () {
        _this4.leftArm.position.x = _this4.slim ? 5.5 : 6;
      }), _this4.add(_this4.leftArm);
      var w = new Ge(4, 12, 4, 0, 0, 0);
      dr(w, hr(4, 16, 8, 20), hr(8, 16, 12, 20), hr(0, 20, 4, 32), hr(4, 20, 8, 32), hr(8, 20, 12, 32), hr(12, 20, 16, 32));
      var S = new Ne(w, i),
          E = new Ge(4.5, 13.5, 4.5, 0, 0, 0);
      dr(E, hr(4, 32, 8, 36), hr(8, 32, 12, 36), hr(0, 36, 4, 48), hr(4, 36, 8, 48), hr(8, 36, 12, 48), hr(12, 36, 16, 48));
      var T = new Ne(E, r);
      T.renderOrder = 1;
      var L = new nr();
      L.add(S, T), L.position.y = -6, _this4.rightLeg = new fr(S, T), _this4.rightLeg.name = "rightLeg", _this4.rightLeg.add(L), _this4.rightLeg.position.y = -16, _this4.rightLeg.position.x = -2, _this4.add(_this4.rightLeg);
      var A = new Ge(4, 12, 4, 0, 0, 0);
      dr(A, hr(20, 48, 24, 52), hr(24, 48, 28, 52), hr(16, 52, 20, 64), hr(20, 52, 24, 64), hr(24, 52, 28, 64), hr(28, 52, 32, 64));
      var P = new Ne(A, i),
          C = new Ge(4.5, 13.5, 4.5, 0, 0, 0);
      dr(C, hr(4, 48, 8, 52), hr(8, 48, 12, 52), hr(0, 52, 4, 64), hr(4, 52, 8, 64), hr(8, 52, 12, 64), hr(12, 52, 16, 64));
      var D = new Ne(C, r);
      D.renderOrder = 1;
      var N = new nr();
      N.add(P, D), N.position.y = -6, _this4.leftLeg = new fr(P, D), _this4.leftLeg.name = "leftLeg", _this4.leftLeg.add(N), _this4.leftLeg.position.y = -16, _this4.leftLeg.position.x = 2, _this4.add(_this4.leftLeg), _this4.modelType = "default";
      return _this4;
    }

    _createClass(pr, [{
      key: "getBodyParts",
      value: function getBodyParts() {
        return this.children.filter(function (t) {
          return _instanceof(t, fr);
        });
      }
    }, {
      key: "setInnerLayerVisible",
      value: function setInnerLayerVisible(t) {
        this.getBodyParts().forEach(function (e) {
          return e.innerLayer.visible = t;
        });
      }
    }, {
      key: "setOuterLayerVisible",
      value: function setOuterLayerVisible(t) {
        this.getBodyParts().forEach(function (e) {
          return e.outerLayer.visible = t;
        });
      }
    }, {
      key: "modelType",
      get: function get() {
        return this.slim ? "slim" : "default";
      },
      set: function set(t) {
        this.slim = "slim" === t, this.modelListeners.forEach(function (t) {
          return t();
        });
      }
    }]);

    return pr;
  }(nr);

  var mr = /*#__PURE__*/function (_nr3) {
    _inherits(mr, _nr3);

    var _super5 = _createSuper(mr);

    function mr(t) {
      var _this5;

      _classCallCheck(this, mr);

      _this5 = _super5.call(this);
      var e = new Xt({
        map: t,
        transparent: !0,
        opacity: 1,
        side: 2,
        alphaTest: .5
      }),
          n = new Ge(10, 16, 1, 0, 0, 0);
      dr(n, ur(1, 0, 11, 1), ur(11, 0, 21, 1), ur(11, 1, 12, 17), ur(12, 1, 22, 17), ur(0, 1, 1, 17), ur(1, 1, 11, 17)), _this5.cape = new Ne(n, e), _this5.cape.position.y = -8, _this5.cape.position.z = -.5, _this5.add(_this5.cape);
      return _this5;
    }

    return mr;
  }(nr);

  var gr = /*#__PURE__*/function (_nr4) {
    _inherits(gr, _nr4);

    var _super6 = _createSuper(gr);

    function gr(t, e) {
      var _this6;

      _classCallCheck(this, gr);

      _this6 = _super6.call(this), _this6.skin = new pr(t), _this6.skin.name = "skin", _this6.add(_this6.skin), _this6.cape = new mr(e), _this6.cape.name = "cape", _this6.cape.position.z = -2, _this6.cape.position.y = -4, _this6.cape.rotation.x = 25 * Math.PI / 180, _this6.add(_this6.cape);
      return _this6;
    }

    return gr;
  }(nr);

  function vr(t, e, n, i, r) {
    var a = t.getImageData(e, n, i, r);

    for (var _t179 = 0; _t179 < i; _t179++) {
      for (var _e150 = 0; _e150 < r; _e150++) {
        var _n135 = 4 * (_t179 + _e150 * i);

        if (255 !== a.data[_n135 + 3]) return !0;
      }
    }

    return !1;
  }

  function xr(t) {
    return t / 64;
  }

  function _r(t, e) {
    var n = xr(e),
        i = function i(e, _i124, r, a, o, s, c) {
      return function (t, e, n, i, r, a, o, s) {
        var c = t.getImageData(e, n, i, r);
        if (s) for (var _t180 = 0; _t180 < r; _t180++) {
          for (var _e151 = 0; _e151 < i / 2; _e151++) {
            var _n136 = 4 * (_e151 + _t180 * i),
                _r85 = 4 * (i - _e151 - 1 + _t180 * i),
                _a40 = c.data[_n136],
                _o35 = c.data[_n136 + 1],
                _s19 = c.data[_n136 + 2],
                _l17 = c.data[_n136 + 3],
                _h12 = c.data[_r85],
                _u11 = c.data[_r85 + 1],
                _d8 = c.data[_r85 + 2],
                _f10 = c.data[_r85 + 3];

            c.data[_n136] = _h12, c.data[_n136 + 1] = _u11, c.data[_n136 + 2] = _d8, c.data[_n136 + 3] = _f10, c.data[_r85] = _a40, c.data[_r85 + 1] = _o35, c.data[_r85 + 2] = _s19, c.data[_r85 + 3] = _l17;
          }
        }
        t.putImageData(c, a, o);
      }(t, e * n, _i124 * n, r * n, a * n, o * n, s * n, c);
    };

    !function (t, e) {
      if (!vr(t, 0, 0, e, e / 2)) {
        var _n137 = xr(e),
            _i125 = function _i125(e, i, r, a) {
          return t.clearRect(e * _n137, i * _n137, r * _n137, a * _n137);
        };

        _i125(40, 0, 8, 8), _i125(48, 0, 8, 8), _i125(32, 8, 8, 8), _i125(40, 8, 8, 8), _i125(48, 8, 8, 8), _i125(56, 8, 8, 8);
      }
    }(t, e), i(4, 16, 4, 4, 20, 48, !0), i(8, 16, 4, 4, 24, 48, !0), i(0, 20, 4, 12, 24, 52, !0), i(4, 20, 4, 12, 20, 52, !0), i(8, 20, 4, 12, 16, 52, !0), i(12, 20, 4, 12, 28, 52, !0), i(44, 16, 4, 4, 36, 48, !0), i(48, 16, 4, 4, 40, 48, !0), i(40, 20, 4, 12, 40, 52, !0), i(44, 20, 4, 12, 36, 52, !0), i(48, 20, 4, 12, 32, 52, !0), i(52, 20, 4, 12, 44, 52, !0);
  }

  function yr(t, e) {
    var n = function (t) {
      if (t.width === 2 * t.height) return t.width / 64;
      if (17 * t.width == 22 * t.height) return t.width / 22;
      if (11 * t.width == 23 * t.height) return t.width / 46;
      throw new Error("Bad cape size: ".concat(t.width, "x").concat(t.height));
    }(e);

    t.width = 64 * n, t.height = 32 * n;
    var i = t.getContext("2d");
    i.clearRect(0, 0, t.width, t.height), i.drawImage(e, 0, 0, e.width, e.height);
  }

  function Mr(t) {
    var e = document.createElement("img");
    return new Promise(function (n, i) {
      e.onload = function () {
        return n(e);
      }, e.onerror = i, e.crossOrigin = "anonymous", "string" == typeof t ? e.src = t : (void 0 !== t.crossOrigin && (e.crossOrigin = t.crossOrigin), void 0 !== t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), e.src = t.src);
    });
  }

  function br(t) {
    return _instanceof(t, EventTarget) || _instanceof(t, ImageBitmap);
  }

  function wr(t, e, n) {
    _instanceof(t, Function) ? t(e, n) : t.play(e, n);
  }

  var Sr = /*#__PURE__*/function () {
    function Sr(t) {
      _classCallCheck(this, Sr);

      this.speed = 1, this.paused = !1, this.progress = 0, this.lastTime = 0, this.started = !1, this.toResetAndRemove = !1, this.animation = t;
    }

    _createClass(Sr, [{
      key: "play",
      value: function play(t, e) {
        if (this.toResetAndRemove) return wr(this.animation, t, 0), void this.remove();
        var n;
        this.started ? n = e - this.lastTime : (n = 0, this.started = !0), this.lastTime = e, this.paused || (this.progress += n * this.speed), wr(this.animation, t, this.progress);
      }
    }, {
      key: "reset",
      value: function reset() {
        this.progress = 0;
      }
    }, {
      key: "remove",
      value: function remove() {}
    }, {
      key: "resetAndRemove",
      value: function resetAndRemove() {
        this.toResetAndRemove = !0;
      }
    }]);

    return Sr;
  }();

  var Er = /*#__PURE__*/function () {
    function Er() {
      _classCallCheck(this, Er);

      this.handles = new Set();
    }

    _createClass(Er, [{
      key: "add",
      value: function add(t) {
        var _this7 = this;

        var e = new Sr(t);
        return e.remove = function () {
          _this7.handles.delete(e);
        }, this.handles.add(e), e;
      }
    }, {
      key: "play",
      value: function play(t, e) {
        this.handles.forEach(function (n) {
          return n.play(t, e);
        });
      }
    }]);

    return Er;
  }();

  var Tr = /*#__PURE__*/function (_Er) {
    _inherits(Tr, _Er);

    var _super7 = _createSuper(Tr);

    function Tr() {
      var _this8;

      _classCallCheck(this, Tr);

      _this8 = _super7.apply(this, arguments), _this8.speed = 1, _this8.progress = 0, _this8.clock = new sr(!0);
      return _this8;
    }

    _createClass(Tr, [{
      key: "runAnimationLoop",
      value: function runAnimationLoop(t) {
        0 !== this.handles.size && (this.progress += this.clock.getDelta() * this.speed, this.play(t, this.progress));
      }
    }, {
      key: "reset",
      value: function reset() {
        this.progress = 0;
      }
    }, {
      key: "animation",
      get: function get() {
        return this;
      }
    }, {
      key: "paused",
      get: function get() {
        return !this.clock.running;
      },
      set: function set(t) {
        t ? this.clock.stop() : this.clock.start();
      }
    }]);

    return Tr;
  }(Er);

  function Lr(t) {
    return !t || !1 !== t.makeVisible;
  }

  var Ar = /*#__PURE__*/function () {
    function Ar(t) {
      var _this9 = this;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Ar);

      this.animations = new Tr(), this._disposed = !1, this._renderPaused = !1, this.domElement = t, this.skinCanvas = document.createElement("canvas"), this.skinTexture = new g(this.skinCanvas), this.skinTexture.magFilter = 1003, this.skinTexture.minFilter = 1003, this.capeCanvas = document.createElement("canvas"), this.capeTexture = new g(this.capeCanvas), this.capeTexture.magFilter = 1003, this.capeTexture.minFilter = 1003, this.scene = new Z(), this.camera = new Ye(40), this.camera.position.y = -12, this.camera.position.z = 60, this.renderer = new or({
        alpha: !0
      }), this.domElement.appendChild(this.renderer.domElement), this.playerObject = new gr(this.skinTexture, this.capeTexture), this.playerObject.name = "player", this.playerObject.skin.visible = !1, this.playerObject.cape.visible = !1, this.scene.add(this.playerObject), window.requestAnimationFrame(function () {
        return _this9.draw();
      }), void 0 !== e.skin && this.loadSkin(e.skin), void 0 !== e.cape && this.loadCape(e.cape), void 0 !== e.width && (this.width = e.width), void 0 !== e.height && (this.height = e.height);
    }

    _createClass(Ar, [{
      key: "skinLoaded",
      value: function skinLoaded(t, e) {
        this.skinTexture.needsUpdate = !0, this.playerObject.skin.modelType = t, Lr(e) && (this.playerObject.skin.visible = !0);
      }
    }, {
      key: "capeLoaded",
      value: function capeLoaded(t) {
        this.capeTexture.needsUpdate = !0, Lr(t) && (this.playerObject.cape.visible = !0);
      }
    }, {
      key: "resetSkin",
      value: function resetSkin() {
        this.playerObject.skin.visible = !1;
      }
    }, {
      key: "resetCape",
      value: function resetCape() {
        this.playerObject.cape.visible = !1;
      }
    }, {
      key: "draw",
      value: function draw() {
        var _this10 = this;

        this.disposed || this._renderPaused || (this.animations.runAnimationLoop(this.playerObject), this.doRender(), window.requestAnimationFrame(function () {
          return _this10.draw();
        }));
      }
    }, {
      key: "doRender",
      value: function doRender() {
        this.renderer.render(this.scene, this.camera);
      }
    }, {
      key: "setSize",
      value: function setSize(t, e) {
        this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this.renderer.setSize(t, e);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._disposed = !0, this.domElement.removeChild(this.renderer.domElement), this.renderer.dispose(), this.skinTexture.dispose(), this.capeTexture.dispose();
      }
    }, {
      key: "disposed",
      get: function get() {
        return this._disposed;
      }
    }, {
      key: "renderPaused",
      get: function get() {
        return this._renderPaused;
      },
      set: function set(t) {
        var _this11 = this;

        var e = !this.disposed && !t && this._renderPaused;
        this._renderPaused = t, e && window.requestAnimationFrame(function () {
          return _this11.draw();
        });
      }
    }, {
      key: "width",
      get: function get() {
        return this.renderer.getSize(new u()).width;
      },
      set: function set(t) {
        this.setSize(t, this.height);
      }
    }, {
      key: "height",
      get: function get() {
        return this.renderer.getSize(new u()).height;
      },
      set: function set(t) {
        this.setSize(this.width, t);
      }
    }]);

    return Ar;
  }();

  var Pr;
  Pr = Ar, [/*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, [{
      key: "loadSkin",
      value: function loadSkin(t) {
        var _this12 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "auto-detect";
        var n = arguments.length > 2 ? arguments[2] : undefined;
        if (null === t) this.resetSkin();else {
          if (!br(t)) return Mr(t).then(function (t) {
            return _this12.loadSkin(t, e, n);
          });
          {
            !function (t, e) {
              var n = !1;

              if (e.width !== e.height) {
                if (e.width !== 2 * e.height) throw new Error("Bad skin size: ".concat(e.width, "x").concat(e.height));
                n = !0;
              }

              var i = t.getContext("2d");

              if (n) {
                var _n138 = e.width;
                t.width = _n138, t.height = _n138, i.clearRect(0, 0, _n138, _n138), i.drawImage(e, 0, 0, _n138, _n138 / 2), _r(i, _n138);
              } else t.width = e.width, t.height = e.height, i.clearRect(0, 0, e.width, e.height), i.drawImage(e, 0, 0, t.width, t.height);
            }(this.skinCanvas, t);

            var _i126 = "auto-detect" === e ? function (t) {
              var e = xr(t.width),
                  n = t.getContext("2d"),
                  i = function i(t, _i127, r, a) {
                return vr(n, t * e, _i127 * e, r * e, a * e);
              };

              return i(50, 16, 2, 4) || i(54, 20, 2, 12) || i(42, 48, 2, 4) || i(46, 52, 2, 12) ? "slim" : "default";
            }(this.skinCanvas) : e;

            this.skinLoaded(_i126, n);
          }
        }
      }
    }]);

    return _class;
  }(), /*#__PURE__*/function () {
    function _class2() {
      _classCallCheck(this, _class2);
    }

    _createClass(_class2, [{
      key: "loadCape",
      value: function loadCape(t, e) {
        var _this13 = this;

        if (null === t) this.resetCape();else {
          if (!br(t)) return Mr(t).then(function (t) {
            return _this13.loadCape(t, e);
          });
          yr(this.capeCanvas, t), this.capeLoaded(e);
        }
      }
    }]);

    return _class2;
  }()].forEach(function (t) {
    Object.getOwnPropertyNames(t.prototype).forEach(function (e) {
      Object.defineProperty(Pr.prototype, e, Object.getOwnPropertyDescriptor(t.prototype, e));
    });
  });

  var Cr = function Cr(t, c) {
    var l, h, d, f, p, m;
    void 0 === c && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), c === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = t, this.domElement = c, this.enabled = !0, this.target = new b(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      BOTTOM: 40
    }, this.mouseButtons = {
      LEFT: e,
      MIDDLE: n,
      RIGHT: i
    }, this.touches = {
      ONE: r,
      TWO: o
    }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function () {
      return E.phi;
    }, this.getAzimuthalAngle = function () {
      return E.theta;
    }, this.saveState = function () {
      g.target0.copy(g.target), g.position0.copy(g.object.position), g.zoom0 = g.object.zoom;
    }, this.reset = function () {
      g.target.copy(g.target0), g.object.position.copy(g.position0), g.object.zoom = g.zoom0, g.object.updateProjectionMatrix(), g.dispatchEvent(v), g.update(), w = M.NONE;
    }, this.update = (l = new b(), h = new _().setFromUnitVectors(t.up, new b(0, 1, 0)), d = h.clone().inverse(), f = new b(), p = new _(), m = 2 * Math.PI, function () {
      var t = g.object.position;
      l.copy(t).sub(g.target), l.applyQuaternion(h), E.setFromVector3(l), g.autoRotate && w === M.NONE && G(2 * Math.PI / 60 / 60 * g.autoRotateSpeed), g.enableDamping ? (E.theta += T.theta * g.dampingFactor, E.phi += T.phi * g.dampingFactor) : (E.theta += T.theta, E.phi += T.phi);
      var e = g.minAzimuthAngle,
          n = g.maxAzimuthAngle;
      return isFinite(e) && isFinite(n) && (e < -Math.PI ? e += m : e > Math.PI && (e -= m), n < -Math.PI ? n += m : n > Math.PI && (n -= m), E.theta = e < n ? Math.max(e, Math.min(n, E.theta)) : E.theta > (e + n) / 2 ? Math.max(e, E.theta) : Math.min(n, E.theta)), E.phi = Math.max(g.minPolarAngle, Math.min(g.maxPolarAngle, E.phi)), E.makeSafe(), E.radius *= L, E.radius = Math.max(g.minDistance, Math.min(g.maxDistance, E.radius)), !0 === g.enableDamping ? g.target.addScaledVector(A, g.dampingFactor) : g.target.add(A), l.setFromSpherical(E), l.applyQuaternion(d), t.copy(g.target).add(l), g.object.lookAt(g.target), !0 === g.enableDamping ? (T.theta *= 1 - g.dampingFactor, T.phi *= 1 - g.dampingFactor, A.multiplyScalar(1 - g.dampingFactor)) : (T.set(0, 0, 0), A.set(0, 0, 0)), L = 1, !!(P || f.distanceToSquared(g.object.position) > S || 8 * (1 - p.dot(g.object.quaternion)) > S) && (g.dispatchEvent(v), f.copy(g.object.position), p.copy(g.object.quaternion), P = !1, !0);
    }), this.dispose = function () {
      g.domElement.removeEventListener("contextmenu", ht, !1), g.domElement.removeEventListener("mousedown", nt, !1), g.domElement.removeEventListener("wheel", at, !1), g.domElement.removeEventListener("touchstart", st, !1), g.domElement.removeEventListener("touchend", lt, !1), g.domElement.removeEventListener("touchmove", ct, !1), g.domElement.ownerDocument.removeEventListener("mousemove", it, !1), g.domElement.ownerDocument.removeEventListener("mouseup", rt, !1), g.domElement.removeEventListener("keydown", ot, !1);
    };
    var g = this,
        v = {
      type: "change"
    },
        x = {
      type: "start"
    },
        y = {
      type: "end"
    },
        M = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    },
        w = M.NONE,
        S = 1e-6,
        E = new cr(),
        T = new cr(),
        L = 1,
        A = new b(),
        P = !1,
        C = new u(),
        D = new u(),
        N = new u(),
        R = new u(),
        I = new u(),
        O = new u(),
        z = new u(),
        U = new u(),
        F = new u();
    function B() {
      return Math.pow(.95, g.zoomSpeed);
    }

    function G(t) {
      T.theta -= t;
    }

    function k(t) {
      T.phi -= t;
    }

    var V,
        H = (V = new b(), function (t, e) {
      V.setFromMatrixColumn(e, 0), V.multiplyScalar(-t), A.add(V);
    }),
        W = function () {
      var t = new b();
      return function (e, n) {
        !0 === g.screenSpacePanning ? t.setFromMatrixColumn(n, 1) : (t.setFromMatrixColumn(n, 0), t.crossVectors(g.object.up, t)), t.multiplyScalar(e), A.add(t);
      };
    }(),
        j = function () {
      var t = new b();
      return function (e, n) {
        var i = g.domElement;

        if (g.object.isPerspectiveCamera) {
          var r = g.object.position;
          t.copy(r).sub(g.target);
          var a = t.length();
          a *= Math.tan(g.object.fov / 2 * Math.PI / 180), H(2 * e * a / i.clientHeight, g.object.matrix), W(2 * n * a / i.clientHeight, g.object.matrix);
        } else g.object.isOrthographicCamera ? (H(e * (g.object.right - g.object.left) / g.object.zoom / i.clientWidth, g.object.matrix), W(n * (g.object.top - g.object.bottom) / g.object.zoom / i.clientHeight, g.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), g.enablePan = !1);
      };
    }();

    function X(t) {
      g.object.isPerspectiveCamera ? L /= t : g.object.isOrthographicCamera ? (g.object.zoom = Math.max(g.minZoom, Math.min(g.maxZoom, g.object.zoom * t)), g.object.updateProjectionMatrix(), P = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), g.enableZoom = !1);
    }

    function Y(t) {
      g.object.isPerspectiveCamera ? L *= t : g.object.isOrthographicCamera ? (g.object.zoom = Math.max(g.minZoom, Math.min(g.maxZoom, g.object.zoom / t)), g.object.updateProjectionMatrix(), P = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), g.enableZoom = !1);
    }

    function q(t) {
      C.set(t.clientX, t.clientY);
    }

    function Z(t) {
      R.set(t.clientX, t.clientY);
    }

    function J(t) {
      if (1 == t.touches.length) C.set(t.touches[0].pageX, t.touches[0].pageY);else {
        var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
            n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
        C.set(e, n);
      }
    }

    function K(t) {
      if (1 == t.touches.length) R.set(t.touches[0].pageX, t.touches[0].pageY);else {
        var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
            n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
        R.set(e, n);
      }
    }

    function Q(t) {
      var e = t.touches[0].pageX - t.touches[1].pageX,
          n = t.touches[0].pageY - t.touches[1].pageY,
          i = Math.sqrt(e * e + n * n);
      z.set(0, i);
    }

    function $(t) {
      if (1 == t.touches.length) D.set(t.touches[0].pageX, t.touches[0].pageY);else {
        var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
            n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
        D.set(e, n);
      }
      N.subVectors(D, C).multiplyScalar(g.rotateSpeed);
      var i = g.domElement;
      G(2 * Math.PI * N.x / i.clientHeight), k(2 * Math.PI * N.y / i.clientHeight), C.copy(D);
    }

    function tt(t) {
      if (1 == t.touches.length) I.set(t.touches[0].pageX, t.touches[0].pageY);else {
        var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
            n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
        I.set(e, n);
      }
      O.subVectors(I, R).multiplyScalar(g.panSpeed), j(O.x, O.y), R.copy(I);
    }

    function et(t) {
      var e = t.touches[0].pageX - t.touches[1].pageX,
          n = t.touches[0].pageY - t.touches[1].pageY,
          i = Math.sqrt(e * e + n * n);
      U.set(0, i), F.set(0, Math.pow(U.y / z.y, g.zoomSpeed)), X(F.y), z.copy(U);
    }

    function nt(t) {
      if (!1 !== g.enabled) {
        var r;

        switch (t.preventDefault(), g.domElement.focus ? g.domElement.focus() : window.focus(), t.button) {
          case 0:
            r = g.mouseButtons.LEFT;
            break;

          case 1:
            r = g.mouseButtons.MIDDLE;
            break;

          case 2:
            r = g.mouseButtons.RIGHT;
            break;

          default:
            r = -1;
        }

        switch (r) {
          case n:
            if (!1 === g.enableZoom) return;
            !function (t) {
              z.set(t.clientX, t.clientY);
            }(t), w = M.DOLLY;
            break;

          case e:
            if (t.ctrlKey || t.metaKey || t.shiftKey) {
              if (!1 === g.enablePan) return;
              Z(t), w = M.PAN;
            } else {
              if (!1 === g.enableRotate) return;
              q(t), w = M.ROTATE;
            }

            break;

          case i:
            if (t.ctrlKey || t.metaKey || t.shiftKey) {
              if (!1 === g.enableRotate) return;
              q(t), w = M.ROTATE;
            } else {
              if (!1 === g.enablePan) return;
              Z(t), w = M.PAN;
            }

            break;

          default:
            w = M.NONE;
        }

        w !== M.NONE && (g.domElement.ownerDocument.addEventListener("mousemove", it, !1), g.domElement.ownerDocument.addEventListener("mouseup", rt, !1), g.dispatchEvent(x));
      }
    }

    function it(t) {
      if (!1 !== g.enabled) switch (t.preventDefault(), w) {
        case M.ROTATE:
          if (!1 === g.enableRotate) return;
          !function (t) {
            D.set(t.clientX, t.clientY), N.subVectors(D, C).multiplyScalar(g.rotateSpeed);
            var e = g.domElement;
            G(2 * Math.PI * N.x / e.clientHeight), k(2 * Math.PI * N.y / e.clientHeight), C.copy(D), g.update();
          }(t);
          break;

        case M.DOLLY:
          if (!1 === g.enableZoom) return;
          !function (t) {
            U.set(t.clientX, t.clientY), F.subVectors(U, z), F.y > 0 ? X(B()) : F.y < 0 && Y(B()), z.copy(U), g.update();
          }(t);
          break;

        case M.PAN:
          if (!1 === g.enablePan) return;
          !function (t) {
            I.set(t.clientX, t.clientY), O.subVectors(I, R).multiplyScalar(g.panSpeed), j(O.x, O.y), R.copy(I), g.update();
          }(t);
      }
    }

    function rt(t) {
      !1 !== g.enabled && (g.domElement.ownerDocument.removeEventListener("mousemove", it, !1), g.domElement.ownerDocument.removeEventListener("mouseup", rt, !1), g.dispatchEvent(y), w = M.NONE);
    }

    function at(t) {
      !1 === g.enabled || !1 === g.enableZoom || w !== M.NONE && w !== M.ROTATE || (t.preventDefault(), t.stopPropagation(), g.dispatchEvent(x), function (t) {
        t.deltaY < 0 ? Y(B()) : t.deltaY > 0 && X(B()), g.update();
      }(t), g.dispatchEvent(y));
    }

    function ot(t) {
      !1 !== g.enabled && !1 !== g.enableKeys && !1 !== g.enablePan && function (t) {
        var e = !1;

        switch (t.keyCode) {
          case g.keys.UP:
            j(0, g.keyPanSpeed), e = !0;
            break;

          case g.keys.BOTTOM:
            j(0, -g.keyPanSpeed), e = !0;
            break;

          case g.keys.LEFT:
            j(g.keyPanSpeed, 0), e = !0;
            break;

          case g.keys.RIGHT:
            j(-g.keyPanSpeed, 0), e = !0;
        }

        e && (t.preventDefault(), g.update());
      }(t);
    }

    function st(t) {
      if (!1 !== g.enabled) {
        switch (t.preventDefault(), t.touches.length) {
          case 1:
            switch (g.touches.ONE) {
              case r:
                if (!1 === g.enableRotate) return;
                J(t), w = M.TOUCH_ROTATE;
                break;

              case a:
                if (!1 === g.enablePan) return;
                K(t), w = M.TOUCH_PAN;
                break;

              default:
                w = M.NONE;
            }

            break;

          case 2:
            switch (g.touches.TWO) {
              case o:
                if (!1 === g.enableZoom && !1 === g.enablePan) return;
                !function (t) {
                  g.enableZoom && Q(t), g.enablePan && K(t);
                }(t), w = M.TOUCH_DOLLY_PAN;
                break;

              case s:
                if (!1 === g.enableZoom && !1 === g.enableRotate) return;
                !function (t) {
                  g.enableZoom && Q(t), g.enableRotate && J(t);
                }(t), w = M.TOUCH_DOLLY_ROTATE;
                break;

              default:
                w = M.NONE;
            }

            break;

          default:
            w = M.NONE;
        }

        w !== M.NONE && g.dispatchEvent(x);
      }
    }

    function ct(t) {
      if (!1 !== g.enabled) switch (t.preventDefault(), t.stopPropagation(), w) {
        case M.TOUCH_ROTATE:
          if (!1 === g.enableRotate) return;
          $(t), g.update();
          break;

        case M.TOUCH_PAN:
          if (!1 === g.enablePan) return;
          tt(t), g.update();
          break;

        case M.TOUCH_DOLLY_PAN:
          if (!1 === g.enableZoom && !1 === g.enablePan) return;
          !function (t) {
            g.enableZoom && et(t), g.enablePan && tt(t);
          }(t), g.update();
          break;

        case M.TOUCH_DOLLY_ROTATE:
          if (!1 === g.enableZoom && !1 === g.enableRotate) return;
          !function (t) {
            g.enableZoom && et(t), g.enableRotate && $(t);
          }(t), g.update();
          break;

        default:
          w = M.NONE;
      }
    }

    function lt(t) {
      !1 !== g.enabled && (g.dispatchEvent(y), w = M.NONE);
    }

    function ht(t) {
      !1 !== g.enabled && t.preventDefault();
    }

    g.domElement.addEventListener("contextmenu", ht, !1), g.domElement.addEventListener("mousedown", nt, !1), g.domElement.addEventListener("wheel", at, !1), g.domElement.addEventListener("touchstart", st, !1), g.domElement.addEventListener("touchend", lt, !1), g.domElement.addEventListener("touchmove", ct, !1), g.domElement.addEventListener("keydown", ot, !1), -1 === g.domElement.tabIndex && (g.domElement.tabIndex = 0), this.update();
  };

  (Cr.prototype = Object.create(c.prototype)).constructor = Cr;

  var Dr = function Dr(t, n) {
    Cr.call(this, t, n), this.screenSpacePanning = !1, this.mouseButtons.LEFT = i, this.mouseButtons.RIGHT = e, this.touches.ONE = a, this.touches.TWO = s;
  };

  (Dr.prototype = Object.create(c.prototype)).constructor = Dr, t.BodyPart = fr, t.CapeObject = mr, t.CompositeAnimation = Er, t.PlayerObject = gr, t.RootAnimation = Tr, t.RotatingAnimation = function (t, e) {
    t.rotation.y = e;
  }, t.RunningAnimation = function (t, e) {
    var n = t.skin;
    e *= 15, n.leftLeg.rotation.x = 1.3 * Math.cos(e + Math.PI), n.rightLeg.rotation.x = 1.3 * Math.cos(e), n.leftArm.rotation.x = 1.5 * Math.cos(e), n.rightArm.rotation.x = 1.5 * Math.cos(e + Math.PI);
    var i = .1 * Math.PI;
    n.leftArm.rotation.z = .1 * Math.cos(e) + i, n.rightArm.rotation.z = .1 * Math.cos(e + Math.PI) - i, t.position.y = Math.cos(2 * e), t.position.x = .15 * Math.cos(e), t.rotation.z = .01 * Math.cos(e + Math.PI);
    var r = .3 * Math.PI;
    t.cape.rotation.x = .1 * Math.sin(2 * e) + r;
  }, t.SkinObject = pr, t.SkinViewer = Ar, t.WalkingAnimation = function (t, e) {
    var n = t.skin;
    e *= 8, n.leftLeg.rotation.x = .5 * Math.sin(e), n.rightLeg.rotation.x = .5 * Math.sin(e + Math.PI), n.leftArm.rotation.x = .5 * Math.sin(e + Math.PI), n.rightArm.rotation.x = .5 * Math.sin(e);
    var i = .02 * Math.PI;
    n.leftArm.rotation.z = .03 * Math.cos(e) + i, n.rightArm.rotation.z = .03 * Math.cos(e + Math.PI) - i, n.head.rotation.y = .2 * Math.sin(e / 4), n.head.rotation.x = .1 * Math.sin(e / 5);
    var r = .06 * Math.PI;
    t.cape.rotation.x = .06 * Math.sin(e / 1.5) + r;
  }, t.createOrbitControls = function (t) {
    var e = new Cr(t.camera, t.renderer.domElement);
    return e.enablePan = !1, e.target = new b(0, -12, 0), e.minDistance = 10, e.maxDistance = 256, e.update(), e;
  }, t.invokeAnimation = wr, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
