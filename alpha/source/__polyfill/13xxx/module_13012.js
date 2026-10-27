// Module ID: 13012
// Function ID: 13013
// Dependencies: [13003]
// Exports: add, angle, ceil, clone, copy, create, cross, dist, distance, div, divide, dot, equals, exactEquals, floor, forEach, fromValues, inverse, len, length, lerp, max, min, mul, multiply, negate, normalize, random, rotate, round, scale, scaleAndAdd, set, signedAngle, sqrDist, sqrLen, squaredDistance, squaredLength, str, sub, subtract, transformMat2, transformMat2d, transformMat3, transformMat4, zero

// Module 13012
import ANGLE_ORDER from "ANGLE_ORDER" /* 13003 */;

let tmp;
let value;
let weakMap;
let fn = function _typeof(ANGLE_ORDER) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      fn = (arg0) => typeof arg0;
    }
    let tmp = ANGLE_ORDER;
    return fn(ANGLE_ORDER);
  }
  fn = (ANGLE_ORDER) => {
    const tmp = ANGLE_ORDER;
    if (tmp) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        let str;
        const _Symbol3 = Symbol;
        if (ANGLE_ORDER.constructor === Symbol) {
          const _Symbol2 = Symbol;
          str = "symbol";
        }
        return str;
      }
    }
    str = typeof ANGLE_ORDER;
  };
};
function subtract(arg0, arg1, arg2) {
  arg0[0] = arg1[0] - arg2[0];
  arg0[1] = arg1[1] - arg2[1];
  return arg0;
}
function multiply(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2[0];
  arg0[1] = arg1[1] * arg2[1];
  return arg0;
}
function divide(arg0, arg1, arg2) {
  arg0[0] = arg1[0] / arg2[0];
  arg0[1] = arg1[1] / arg2[1];
  return arg0;
}
function distance(arg0, arg1) {
  const diff = arg1[0] - arg0[0];
  const diff1 = arg1[1] - arg0[1];
  return Math.sqrt(diff * diff + diff1 * diff1);
}
function squaredDistance(arg0, arg1) {
  const diff = arg1[0] - arg0[0];
  const diff1 = arg1[1] - arg0[1];
  return diff * diff + diff1 * diff1;
}
function length(arg0) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  return Math.sqrt(tmp * tmp + tmp2 * tmp2);
}
function squaredLength(arg0) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  return tmp * tmp + tmp2 * tmp2;
}
if (typeof WeakMap === "function") {
  const _WeakMap = WeakMap;
  const self = this;
  const self2 = this;
  weakMap = new WeakMap();
  const _WeakMap2 = WeakMap;
  const self3 = this;
  const weakMap1 = new WeakMap();
}
if (!ANGLE_ORDER) {
  let tmp5 = null;
  const merged = Object.assign({ default: null });
  merged[0] = ANGLE_ORDER;
  value = merged;
  if (null !== ANGLE_ORDER) {
    if ("object" == fn(ANGLE_ORDER)) {
      if (!weakMap) {
        let tmp8 = ANGLE_ORDER;
        let str = "default";
        value = merged;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = merged;
          while (keys[tmp] !== undefined) {
            let callResult = "default" !== tmp10;
            if (callResult) {
              let hasOwnProperty = {}.hasOwnProperty;
              callResult = hasOwnProperty.call(ANGLE_ORDER, tmp10);
            }
            if (!callResult) {
              continue;
            } else {
              let _Object = Object;
              let ownPropertyDescriptor = defineProperty;
              if (ownPropertyDescriptor) {
                let _Object2 = Object;
                ownPropertyDescriptor = Object.getOwnPropertyDescriptor(ANGLE_ORDER, tmp10);
              }
              if (!ownPropertyDescriptor) {
                merged[tmp10] = ANGLE_ORDER[tmp10];
                continue;
              } else {
                let definePropertyResult1 = defineProperty(merged, tmp10, ownPropertyDescriptor);
                continue;
              }
              continue;
            }
            continue;
          }
        }
      } else if (weakMap.has(ANGLE_ORDER)) {
        value = weakMap.get(ANGLE_ORDER);
      } else {
        let result = weakMap.set(ANGLE_ORDER, merged);
      }
    } else {
      value = merged;
    }
  }
} else {
  value = ANGLE_ORDER;
}
const map = value;
let aRRAY_TYPE = new value.ARRAY_TYPE(2);
if (value.ARRAY_TYPE != Float32Array) {
  let num = 0;
  aRRAY_TYPE[0] = 0;
  aRRAY_TYPE[1] = 0;
}
const str_export = function str(arg0) {
  return "vec2(" + arg0[0] + ", " + arg0[1] + ")";
};

export const add = function add(arg0, arg1, arg2) {
  arg0[0] = arg1[0] + arg2[0];
  arg0[1] = arg1[1] + arg2[1];
  return arg0;
};
export const angle = function angle(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  return Math.abs(Math.atan2(tmp2 * tmp3 - tmp * tmp4, tmp * tmp3 + tmp2 * tmp4));
};
export const ceil = function ceil(arg0, arg1) {
  arg0[0] = Math.ceil(arg1[0]);
  arg0[1] = Math.ceil(arg1[1]);
  return arg0;
};
export const clone = function clone(arg0) {
  aRRAY_TYPE = new map.ARRAY_TYPE(2);
  aRRAY_TYPE[0] = arg0[0];
  aRRAY_TYPE[1] = arg0[1];
  return aRRAY_TYPE;
};
export const copy = function copy(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = arg1[1];
  return arg0;
};
export const create = function create() {
  aRRAY_TYPE = new map.ARRAY_TYPE(2);
  if (map.ARRAY_TYPE != Float32Array) {
    aRRAY_TYPE[0] = 0;
    aRRAY_TYPE[1] = 0;
  }
  return aRRAY_TYPE;
};
export const cross = function cross(arg0, arg1, arg2) {
  arg0[1] = 0;
  arg0[0] = 0;
  arg0[2] = arg1[0] * arg2[1] - arg1[1] * arg2[0];
  return arg0;
};
export { distance };
export { divide };
export const dot = function dot(arg0, arg1) {
  return arg0[0] * arg1[0] + arg0[1] * arg1[1];
};
export const equals = function equals(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  const absolute = Math.abs(tmp - tmp3);
  const EPSILON = map.EPSILON;
  const absolute1 = Math.abs(tmp);
  let tmp8 = absolute <= EPSILON * max(1, absolute1, Math.abs(tmp3));
  const tmp6 = map;
  if (tmp8) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const absolute2 = Math.abs(tmp2 - tmp4);
    const EPSILON2 = tmp6.EPSILON;
    const max2 = Math.max;
    const _Math4 = Math;
    const absolute3 = Math.abs(tmp2);
    tmp8 = absolute2 <= EPSILON2 * max2(1, absolute3, Math.abs(tmp4));
  }
  return tmp8;
};
export const exactEquals = function exactEquals(arg0, arg1) {
  return arg0[0] === arg1[0] && arg0[1] === arg1[1];
};
export const floor = function floor(arg0, arg1) {
  arg0[0] = Math.floor(arg1[0]);
  arg0[1] = Math.floor(arg1[1]);
  return arg0;
};
export const fromValues = function fromValues(arg0, arg1) {
  aRRAY_TYPE = new map.ARRAY_TYPE(2);
  aRRAY_TYPE[0] = arg0;
  aRRAY_TYPE[1] = arg1;
  return aRRAY_TYPE;
};
export const inverse = function inverse(arg0, arg1) {
  arg0[0] = 1 / arg1[0];
  arg0[1] = 1 / arg1[1];
  return arg0;
};
export { length };
export const lerp = function lerp(arg0, arg1, arg2, arg3) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg1;
  arg0[0] = tmp + arg3 * (arg2[0] - tmp);
  arg0[1] = tmp2 + arg3 * (arg2[1] - tmp2);
  return arg0;
};
export const max = function max(arg0, arg1, arg2) {
  arg0[0] = Math.max(arg1[0], arg2[0]);
  arg0[1] = Math.max(arg1[1], arg2[1]);
  return arg0;
};
export const min = function min(arg0, arg1, arg2) {
  arg0[0] = Math.min(arg1[0], arg2[0]);
  arg0[1] = Math.min(arg1[1], arg2[1]);
  return arg0;
};
export { multiply };
export const negate = function negate(arg0, arg1) {
  arg0[0] = -arg1[0];
  arg0[1] = -arg1[1];
  return arg0;
};
export const normalize = function normalize(arg0, arg1) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg1;
  const sum = tmp * tmp + tmp2 * tmp2;
  let result = sum;
  if (sum > 0) {
    const _Math = Math;
    result = 1 / Math.sqrt(sum);
  }
  arg0[0] = arg1[0] * result;
  arg0[1] = arg1[1] * result;
  return arg0;
};
export const random = function random(arg0, arg1) {
  let num = 1;
  if (undefined !== arg1) {
    num = arg1;
  }
  const result = 2 * map.RANDOM() * Math.PI;
  arg0[0] = Math.cos(result) * num;
  arg0[1] = Math.sin(result) * num;
  return arg0;
};
export const rotate = function rotate(arg0, arg1, arg2, sharedValue) {
  const diff = arg1[0] - arg2[0];
  const diff1 = arg1[1] - arg2[1];
  const sinResult = Math.sin(sharedValue);
  const cosResult = Math.cos(sharedValue);
  arg0[0] = diff * cosResult - diff1 * sinResult + arg2[0];
  arg0[1] = diff * sinResult + diff1 * cosResult + arg2[1];
  return arg0;
};
export const round = function round(arg0, arg1) {
  arg0[0] = map.round(arg1[0]);
  arg0[1] = map.round(arg1[1]);
  return arg0;
};
export const scale = function scale(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2;
  arg0[1] = arg1[1] * arg2;
  return arg0;
};
export const scaleAndAdd = function scaleAndAdd(arg0, arg1, arg2, arg3) {
  arg0[0] = arg1[0] + arg2[0] * arg3;
  arg0[1] = arg1[1] + arg2[1] * arg3;
  return arg0;
};
export const set = function set(arg0, arg1, arg2) {
  arg0[0] = arg1;
  arg0[1] = arg2;
  return arg0;
};
export const signedAngle = function signedAngle(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  return Math.atan2(tmp * tmp4 - tmp2 * tmp3, tmp * tmp3 + tmp2 * tmp4);
};
export { squaredDistance };
export { squaredLength };
export { str_export as str };
export { subtract };
export const transformMat2 = function transformMat2(arg0, arg1, arg2) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg1;
  arg0[0] = arg2[0] * tmp + arg2[2] * tmp2;
  arg0[1] = arg2[1] * tmp + arg2[3] * tmp2;
  return arg0;
};
export const transformMat2d = function transformMat2d(arg0, arg1, arg2) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg1;
  arg0[0] = arg2[0] * tmp + arg2[2] * tmp2 + arg2[4];
  arg0[1] = arg2[1] * tmp + arg2[3] * tmp2 + arg2[5];
  return arg0;
};
export const transformMat3 = function transformMat3(arg0, arg1, arg2) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg1;
  arg0[0] = arg2[0] * tmp + arg2[3] * tmp2 + arg2[6];
  arg0[1] = arg2[1] * tmp + arg2[4] * tmp2 + arg2[7];
  return arg0;
};
export const transformMat4 = function transformMat4(arg0, arg1, arg2) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg1;
  arg0[0] = arg2[0] * tmp + arg2[4] * tmp2 + arg2[12];
  arg0[1] = arg2[1] * tmp + arg2[5] * tmp2 + arg2[13];
  return arg0;
};
export const zero = function zero(arg0) {
  arg0[0] = 0;
  arg0[1] = 0;
  return arg0;
};
export const len = length;
export const sub = subtract;
export const mul = multiply;
export const div = divide;
export const dist = distance;
export const sqrDist = squaredDistance;
export const sqrLen = squaredLength;
export const forEach = (arg0, arg1, arg2, arg3, fn, arg5) => {
  let length;
  let sum = arg2 || 0;
  const tmp2 = arg3;
  if (tmp2) {
    const _Math = Math;
    length = Math.min(arg3 * num + sum, arg0.length);
  } else {
    length = arg0.length;
  }
  if (sum < length) {
    do {
      aRRAY_TYPE[0] = arg0[sum];
      aRRAY_TYPE[1] = arg0[sum + 1];
      let tmp5 = fn(aRRAY_TYPE, aRRAY_TYPE, arg5);
      arg0[sum] = aRRAY_TYPE[0];
      arg0[sum + 1] = aRRAY_TYPE[1];
      sum = sum + num;
    } while (sum < length);
  }
  return arg0;
};
