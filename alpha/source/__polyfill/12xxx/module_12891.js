// Module ID: 12891
// Function ID: 12892
// Dependencies: [12884]
// Exports: add, ceil, clone, copy, create, cross, dist, distance, div, divide, dot, equals, exactEquals, floor, forEach, fromValues, inverse, len, length, lerp, max, min, mul, multiply, negate, normalize, random, round, scale, scaleAndAdd, set, sqrDist, sqrLen, squaredDistance, squaredLength, str, sub, subtract, transformMat4, transformQuat, zero

// Module 12891
import ANGLE_ORDER from "ANGLE_ORDER" /* 12884 */;

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
  arg0[2] = arg1[2] - arg2[2];
  arg0[3] = arg1[3] - arg2[3];
  return arg0;
}
function multiply(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2[0];
  arg0[1] = arg1[1] * arg2[1];
  arg0[2] = arg1[2] * arg2[2];
  arg0[3] = arg1[3] * arg2[3];
  return arg0;
}
function divide(arg0, arg1, arg2) {
  arg0[0] = arg1[0] / arg2[0];
  arg0[1] = arg1[1] / arg2[1];
  arg0[2] = arg1[2] / arg2[2];
  arg0[3] = arg1[3] / arg2[3];
  return arg0;
}
function distance(arg0, arg1) {
  const diff = arg1[0] - arg0[0];
  const diff1 = arg1[1] - arg0[1];
  const diff2 = arg1[2] - arg0[2];
  const diff3 = arg1[3] - arg0[3];
  return Math.sqrt(diff * diff + diff1 * diff1 + diff2 * diff2 + diff3 * diff3);
}
function squaredDistance(arg0, arg1) {
  const diff = arg1[0] - arg0[0];
  const diff1 = arg1[1] - arg0[1];
  const diff2 = arg1[2] - arg0[2];
  const diff3 = arg1[3] - arg0[3];
  return diff * diff + diff1 * diff1 + diff2 * diff2 + diff3 * diff3;
}
function length(arg0) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2, tmp3, tmp4] = arg0;
  return Math.sqrt(tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3 + tmp4 * tmp4);
}
function squaredLength(arg0) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2, tmp3, tmp4] = arg0;
  return tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3 + tmp4 * tmp4;
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
        const tmp8 = ANGLE_ORDER;
        let str = "default";
        value = merged;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = merged;
          const tmp10 = keys[tmp];
          while (tmp10 !== undefined) {
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
let aRRAY_TYPE = new value.ARRAY_TYPE(4);
if (value.ARRAY_TYPE != Float32Array) {
  let num = 0;
  aRRAY_TYPE[0] = 0;
  aRRAY_TYPE[1] = 0;
  aRRAY_TYPE[2] = 0;
  aRRAY_TYPE[3] = 0;
}
const str_export = function str(arg0) {
  return "vec4(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ", " + arg0[3] + ")";
};

export const add = function add(arg0, arg1, arg2) {
  arg0[0] = arg1[0] + arg2[0];
  arg0[1] = arg1[1] + arg2[1];
  arg0[2] = arg1[2] + arg2[2];
  arg0[3] = arg1[3] + arg2[3];
  return arg0;
};
export const ceil = function ceil(arg0, arg1) {
  arg0[0] = Math.ceil(arg1[0]);
  arg0[1] = Math.ceil(arg1[1]);
  arg0[2] = Math.ceil(arg1[2]);
  arg0[3] = Math.ceil(arg1[3]);
  return arg0;
};
export const clone = function clone(arg0) {
  aRRAY_TYPE = new map.ARRAY_TYPE(4);
  aRRAY_TYPE[0] = arg0[0];
  aRRAY_TYPE[1] = arg0[1];
  aRRAY_TYPE[2] = arg0[2];
  aRRAY_TYPE[3] = arg0[3];
  return aRRAY_TYPE;
};
export const copy = function copy(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = arg1[1];
  arg0[2] = arg1[2];
  arg0[3] = arg1[3];
  return arg0;
};
export const create = function create() {
  aRRAY_TYPE = new map.ARRAY_TYPE(4);
  if (map.ARRAY_TYPE != Float32Array) {
    aRRAY_TYPE[0] = 0;
    aRRAY_TYPE[1] = 0;
    aRRAY_TYPE[2] = 0;
    aRRAY_TYPE[3] = 0;
  }
  return aRRAY_TYPE;
};
export const cross = function cross(arg0, arg1, arg2, arg3) {
  let tmp10;
  let tmp7;
  let tmp8;
  let tmp9;
  const diff = arg2[0] * arg3[1] - arg2[1] * arg3[0];
  const diff1 = arg2[0] * arg3[2] - arg2[2] * arg3[0];
  const diff2 = arg2[0] * arg3[3] - arg2[3] * arg3[0];
  const diff3 = arg2[1] * arg3[2] - arg2[2] * arg3[1];
  const diff4 = arg2[1] * arg3[3] - arg2[3] * arg3[1];
  const diff5 = arg2[2] * arg3[3] - arg2[3] * arg3[2];
  [tmp7, tmp8, tmp9, tmp10] = arg1;
  arg0[0] = tmp8 * diff5 - tmp9 * diff4 + tmp10 * diff3;
  arg0[1] = -tmp7 * diff5 + tmp9 * diff2 - tmp10 * diff1;
  arg0[2] = tmp7 * diff4 - tmp8 * diff2 + tmp10 * diff;
  arg0[3] = -tmp7 * diff3 + tmp8 * diff1 - tmp9 * diff;
  return arg0;
};
export { distance };
export { divide };
export const dot = function dot(arg0, arg1) {
  return arg0[0] * arg1[0] + arg0[1] * arg1[1] + arg0[2] * arg1[2] + arg0[3] * arg1[3];
};
export const equals = function equals(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  [tmp, tmp2, tmp3, tmp4] = arg0;
  [tmp5, tmp6, tmp7, tmp8] = arg1;
  const absolute = Math.abs(tmp - tmp5);
  const EPSILON = map.EPSILON;
  const absolute1 = Math.abs(tmp);
  let tmp12 = absolute <= EPSILON * max(1, absolute1, Math.abs(tmp5));
  if (tmp12) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const absolute2 = Math.abs(tmp2 - tmp6);
    const EPSILON2 = tmp10.EPSILON;
    const max2 = Math.max;
    const _Math4 = Math;
    const absolute3 = Math.abs(tmp2);
    tmp12 = absolute2 <= EPSILON2 * max2(1, absolute3, Math.abs(tmp6));
  }
  if (tmp12) {
    const _Math5 = Math;
    const _Math6 = Math;
    const _Math7 = Math;
    const absolute4 = Math.abs(tmp3 - tmp7);
    const EPSILON3 = tmp10.EPSILON;
    const max3 = Math.max;
    const _Math8 = Math;
    const absolute5 = Math.abs(tmp3);
    tmp12 = absolute4 <= EPSILON3 * max3(1, absolute5, Math.abs(tmp7));
  }
  if (tmp12) {
    const _Math9 = Math;
    const _Math10 = Math;
    const _Math11 = Math;
    const absolute6 = Math.abs(tmp4 - tmp8);
    const EPSILON4 = tmp10.EPSILON;
    const max4 = Math.max;
    const _Math12 = Math;
    const absolute7 = Math.abs(tmp4);
    tmp12 = absolute6 <= EPSILON4 * max4(1, absolute7, Math.abs(tmp8));
  }
  return tmp12;
};
export const exactEquals = function exactEquals(arg0, arg1) {
  return arg0[0] === arg1[0] && arg0[1] === arg1[1] && arg0[2] === arg1[2] && arg0[3] === arg1[3];
};
export const floor = function floor(arg0, arg1) {
  arg0[0] = Math.floor(arg1[0]);
  arg0[1] = Math.floor(arg1[1]);
  arg0[2] = Math.floor(arg1[2]);
  arg0[3] = Math.floor(arg1[3]);
  return arg0;
};
export const fromValues = function fromValues(arg0, arg1, arg2, arg3) {
  aRRAY_TYPE = new map.ARRAY_TYPE(4);
  aRRAY_TYPE[0] = arg0;
  aRRAY_TYPE[1] = arg1;
  aRRAY_TYPE[2] = arg2;
  aRRAY_TYPE[3] = arg3;
  return aRRAY_TYPE;
};
export const inverse = function inverse(arg0, arg1) {
  arg0[0] = 1 / arg1[0];
  arg0[1] = 1 / arg1[1];
  arg0[2] = 1 / arg1[2];
  arg0[3] = 1 / arg1[3];
  return arg0;
};
export { length };
export const lerp = function lerp(arg0, arg1, arg2, arg3) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2, tmp3, tmp4] = arg1;
  arg0[0] = tmp + arg3 * (arg2[0] - tmp);
  arg0[1] = tmp2 + arg3 * (arg2[1] - tmp2);
  arg0[2] = tmp3 + arg3 * (arg2[2] - tmp3);
  arg0[3] = tmp4 + arg3 * (arg2[3] - tmp4);
  return arg0;
};
export const max = function max(arg0, arg1, arg2) {
  arg0[0] = Math.max(arg1[0], arg2[0]);
  arg0[1] = Math.max(arg1[1], arg2[1]);
  arg0[2] = Math.max(arg1[2], arg2[2]);
  arg0[3] = Math.max(arg1[3], arg2[3]);
  return arg0;
};
export const min = function min(arg0, arg1, arg2) {
  arg0[0] = Math.min(arg1[0], arg2[0]);
  arg0[1] = Math.min(arg1[1], arg2[1]);
  arg0[2] = Math.min(arg1[2], arg2[2]);
  arg0[3] = Math.min(arg1[3], arg2[3]);
  return arg0;
};
export { multiply };
export const negate = function negate(arg0, arg1) {
  arg0[0] = -arg1[0];
  arg0[1] = -arg1[1];
  arg0[2] = -arg1[2];
  arg0[3] = -arg1[3];
  return arg0;
};
export const normalize = function normalize(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2, tmp3, tmp4] = arg1;
  const sum = tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3 + tmp4 * tmp4;
  let result = sum;
  if (sum > 0) {
    const _Math = Math;
    result = 1 / Math.sqrt(sum);
  }
  arg0[0] = tmp * result;
  arg0[1] = tmp2 * result;
  arg0[2] = tmp3 * result;
  arg0[3] = tmp4 * result;
  return arg0;
};
export const random = function random(arg0, arg1) {
  let num = 1;
  if (undefined !== arg1) {
    num = arg1;
  }
  const RANDOMResult = map.RANDOM();
  const diff = 2 * RANDOMResult - 1;
  const result = 4 * map.RANDOM();
  const result1 = (result - 2) * Math.sqrt(RANDOMResult * -RANDOMResult + RANDOMResult);
  const RANDOMResult1 = map.RANDOM();
  const diff1 = 2 * RANDOMResult1 - 1;
  const result2 = 4 * map.RANDOM();
  const result3 = (result2 - 2) * Math.sqrt(RANDOMResult1 * -RANDOMResult1 + RANDOMResult1);
  const sqrtResult = Math.sqrt((1 - (diff * diff + result1 * result1)) / (diff1 * diff1 + result3 * result3));
  arg0[0] = num * diff;
  arg0[1] = num * result1;
  arg0[2] = num * diff1 * sqrtResult;
  arg0[3] = num * result3 * sqrtResult;
  return arg0;
};
export const round = function round(arg0, arg1) {
  arg0[0] = map.round(arg1[0]);
  arg0[1] = map.round(arg1[1]);
  arg0[2] = map.round(arg1[2]);
  arg0[3] = map.round(arg1[3]);
  return arg0;
};
export const scale = function scale(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2;
  arg0[1] = arg1[1] * arg2;
  arg0[2] = arg1[2] * arg2;
  arg0[3] = arg1[3] * arg2;
  return arg0;
};
export const scaleAndAdd = function scaleAndAdd(arg0, arg1, arg2, arg3) {
  arg0[0] = arg1[0] + arg2[0] * arg3;
  arg0[1] = arg1[1] + arg2[1] * arg3;
  arg0[2] = arg1[2] + arg2[2] * arg3;
  arg0[3] = arg1[3] + arg2[3] * arg3;
  return arg0;
};
export const set = function set(arg0, arg1, arg2, arg3, arg4) {
  arg0[0] = arg1;
  arg0[1] = arg2;
  arg0[2] = arg3;
  arg0[3] = arg4;
  return arg0;
};
export { squaredDistance };
export { squaredLength };
export { str_export as str };
export { subtract };
export const transformMat4 = function transformMat4(arg0, arg1, arg2) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2, tmp3, tmp4] = arg1;
  arg0[0] = arg2[0] * tmp + arg2[4] * tmp2 + arg2[8] * tmp3 + arg2[12] * tmp4;
  arg0[1] = arg2[1] * tmp + arg2[5] * tmp2 + arg2[9] * tmp3 + arg2[13] * tmp4;
  arg0[2] = arg2[2] * tmp + arg2[6] * tmp2 + arg2[10] * tmp3 + arg2[14] * tmp4;
  arg0[3] = arg2[3] * tmp + arg2[7] * tmp2 + arg2[11] * tmp3 + arg2[15] * tmp4;
  return arg0;
};
export const transformQuat = function transformQuat(arg0, arg1, arg2) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  [tmp, tmp2, tmp3, tmp4] = arg2;
  [tmp5, tmp6, tmp7] = arg1;
  const diff = tmp2 * tmp7 - tmp3 * tmp6;
  const diff1 = tmp3 * tmp5 - tmp * tmp7;
  const diff2 = tmp * tmp6 - tmp2 * tmp5;
  const sum = diff + diff;
  const sum1 = diff1 + diff1;
  const sum2 = diff2 + diff2;
  arg0[0] = tmp5 + tmp4 * sum + tmp2 * sum2 - tmp3 * sum1;
  arg0[1] = tmp6 + tmp4 * sum1 + tmp3 * sum - tmp * sum2;
  arg0[2] = tmp7 + tmp4 * sum2 + tmp * sum1 - tmp2 * sum;
  arg0[3] = arg1[3];
  return arg0;
};
export const zero = function zero(arg0) {
  arg0[0] = 0;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  return arg0;
};
export const sub = subtract;
export const mul = multiply;
export const div = divide;
export const dist = distance;
export const sqrDist = squaredDistance;
export const len = length;
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
      aRRAY_TYPE[2] = arg0[sum + 2];
      aRRAY_TYPE[3] = arg0[sum + 3];
      let tmp5 = fn(aRRAY_TYPE, aRRAY_TYPE, arg5);
      arg0[sum] = aRRAY_TYPE[0];
      arg0[sum + 1] = aRRAY_TYPE[1];
      arg0[sum + 2] = aRRAY_TYPE[2];
      arg0[sum + 3] = aRRAY_TYPE[3];
      sum = sum + num;
    } while (sum < length);
  }
  return arg0;
};
