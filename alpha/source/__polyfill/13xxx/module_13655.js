// Module ID: 13655
// Function ID: 13656
// Dependencies: [13652]
// Exports: add, adjoint, clone, copy, create, determinant, equals, exactEquals, frob, fromMat2d, fromMat4, fromQuat, fromRotation, fromScaling, fromTranslation, fromValues, identity, invert, mul, multiply, multiplyScalar, multiplyScalarAndAdd, normalFromMat4, projection, rotate, scale, set, str, sub, subtract, translate, transpose

// Module 13655
import ANGLE_ORDER from "ANGLE_ORDER" /* 13652 */;

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
function multiply(arg0, arg1, arg2) {
  let tmp;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = arg1;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = arg2;
  arg0[0] = tmp10 * tmp + tmp11 * tmp4 + tmp12 * tmp7;
  arg0[1] = tmp10 * tmp2 + tmp11 * tmp5 + tmp12 * tmp8;
  arg0[2] = tmp10 * tmp3 + tmp11 * tmp6 + tmp12 * tmp9;
  arg0[3] = tmp13 * tmp + tmp14 * tmp4 + tmp15 * tmp7;
  arg0[4] = tmp13 * tmp2 + tmp14 * tmp5 + tmp15 * tmp8;
  arg0[5] = tmp13 * tmp3 + tmp14 * tmp6 + tmp15 * tmp9;
  arg0[6] = tmp16 * tmp + tmp17 * tmp4 + tmp18 * tmp7;
  arg0[7] = tmp16 * tmp2 + tmp17 * tmp5 + tmp18 * tmp8;
  arg0[8] = tmp16 * tmp3 + tmp17 * tmp6 + tmp18 * tmp9;
  return arg0;
}
function subtract(arg0, arg1, arg2) {
  arg0[0] = arg1[0] - arg2[0];
  arg0[1] = arg1[1] - arg2[1];
  arg0[2] = arg1[2] - arg2[2];
  arg0[3] = arg1[3] - arg2[3];
  arg0[4] = arg1[4] - arg2[4];
  arg0[5] = arg1[5] - arg2[5];
  arg0[6] = arg1[6] - arg2[6];
  arg0[7] = arg1[7] - arg2[7];
  arg0[8] = arg1[8] - arg2[8];
  return arg0;
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
  const tmp5 = null;
  const merged = Object.assign({ default: null });
  merged[0] = ANGLE_ORDER;
  value = merged;
  if (null !== ANGLE_ORDER) {
    const tmp15 = fn;
    if ("object" == fn(ANGLE_ORDER)) {
      if (!weakMap) {
        let tmp8 = ANGLE_ORDER;
        let str = "default";
        value = merged;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = merged;
          const tmp10 = keys[tmp];
          while (tmp10 !== undefined) {
            let tmp16 = tmp10;
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

export function add(arg0, arg1, arg2) {
  arg0[0] = arg1[0] + arg2[0];
  arg0[1] = arg1[1] + arg2[1];
  arg0[2] = arg1[2] + arg2[2];
  arg0[3] = arg1[3] + arg2[3];
  arg0[4] = arg1[4] + arg2[4];
  arg0[5] = arg1[5] + arg2[5];
  arg0[6] = arg1[6] + arg2[6];
  arg0[7] = arg1[7] + arg2[7];
  arg0[8] = arg1[8] + arg2[8];
  return arg0;
}
export function adjoint(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = arg1;
  arg0[0] = tmp5 * tmp9 - tmp6 * tmp8;
  arg0[1] = tmp3 * tmp8 - tmp2 * tmp9;
  arg0[2] = tmp2 * tmp6 - tmp3 * tmp5;
  arg0[3] = tmp6 * tmp7 - tmp4 * tmp9;
  arg0[4] = tmp * tmp9 - tmp3 * tmp7;
  arg0[5] = tmp3 * tmp4 - tmp * tmp6;
  arg0[6] = tmp4 * tmp8 - tmp5 * tmp7;
  arg0[7] = tmp2 * tmp7 - tmp * tmp8;
  arg0[8] = tmp * tmp5 - tmp2 * tmp4;
  return arg0;
}
export function clone(arg0) {
  const aRRAY_TYPE = new map.ARRAY_TYPE(9);
  aRRAY_TYPE[0] = arg0[0];
  aRRAY_TYPE[1] = arg0[1];
  aRRAY_TYPE[2] = arg0[2];
  aRRAY_TYPE[3] = arg0[3];
  aRRAY_TYPE[4] = arg0[4];
  aRRAY_TYPE[5] = arg0[5];
  aRRAY_TYPE[6] = arg0[6];
  aRRAY_TYPE[7] = arg0[7];
  aRRAY_TYPE[8] = arg0[8];
  return aRRAY_TYPE;
}
export function copy(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = arg1[1];
  arg0[2] = arg1[2];
  arg0[3] = arg1[3];
  arg0[4] = arg1[4];
  arg0[5] = arg1[5];
  arg0[6] = arg1[6];
  arg0[7] = arg1[7];
  arg0[8] = arg1[8];
  return arg0;
}
export function create() {
  const aRRAY_TYPE = new map.ARRAY_TYPE(9);
  if (map.ARRAY_TYPE != Float32Array) {
    aRRAY_TYPE[1] = 0;
    aRRAY_TYPE[2] = 0;
    aRRAY_TYPE[3] = 0;
    aRRAY_TYPE[5] = 0;
    aRRAY_TYPE[6] = 0;
    aRRAY_TYPE[7] = 0;
  }
  aRRAY_TYPE[0] = 1;
  aRRAY_TYPE[4] = 1;
  aRRAY_TYPE[8] = 1;
  return aRRAY_TYPE;
}
export function determinant(arg0) {
  return arg0[0] * (arg0[8] * arg0[4] - arg0[5] * arg0[7]) + arg0[1] * (-arg0[8] * arg0[3] + arg0[5] * arg0[6]) + arg0[2] * (arg0[7] * arg0[3] - arg0[4] * arg0[6]);
}
export function equals(arg0, arg1) {
  let tmp;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = arg0;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = arg1;
  const absolute = Math.abs(tmp - tmp10);
  const EPSILON = map.EPSILON;
  const absolute1 = Math.abs(tmp);
  let tmp22 = absolute <= EPSILON * max(1, absolute1, Math.abs(tmp10));
  if (tmp22) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const absolute2 = Math.abs(tmp2 - tmp11);
    const EPSILON2 = tmp20.EPSILON;
    const max2 = Math.max;
    const _Math4 = Math;
    const absolute3 = Math.abs(tmp2);
    tmp22 = absolute2 <= EPSILON2 * max2(1, absolute3, Math.abs(tmp11));
  }
  if (tmp22) {
    const _Math5 = Math;
    const _Math6 = Math;
    const _Math7 = Math;
    const absolute4 = Math.abs(tmp3 - tmp12);
    const EPSILON3 = tmp20.EPSILON;
    const max3 = Math.max;
    const _Math8 = Math;
    const absolute5 = Math.abs(tmp3);
    tmp22 = absolute4 <= EPSILON3 * max3(1, absolute5, Math.abs(tmp12));
  }
  if (tmp22) {
    const _Math9 = Math;
    const _Math10 = Math;
    const _Math11 = Math;
    const absolute6 = Math.abs(tmp4 - tmp13);
    const EPSILON4 = tmp20.EPSILON;
    const max4 = Math.max;
    const _Math12 = Math;
    const absolute7 = Math.abs(tmp4);
    tmp22 = absolute6 <= EPSILON4 * max4(1, absolute7, Math.abs(tmp13));
  }
  if (tmp22) {
    const _Math13 = Math;
    const _Math14 = Math;
    const _Math15 = Math;
    const absolute8 = Math.abs(tmp5 - tmp14);
    const EPSILON5 = tmp20.EPSILON;
    const max5 = Math.max;
    const _Math16 = Math;
    const absolute9 = Math.abs(tmp5);
    tmp22 = absolute8 <= EPSILON5 * max5(1, absolute9, Math.abs(tmp14));
  }
  if (tmp22) {
    const _Math17 = Math;
    const _Math18 = Math;
    const _Math19 = Math;
    const absolute10 = Math.abs(tmp6 - tmp15);
    const EPSILON6 = tmp20.EPSILON;
    const max6 = Math.max;
    const _Math20 = Math;
    const absolute11 = Math.abs(tmp6);
    tmp22 = absolute10 <= EPSILON6 * max6(1, absolute11, Math.abs(tmp15));
  }
  if (tmp22) {
    const _Math21 = Math;
    const _Math22 = Math;
    const _Math23 = Math;
    const absolute12 = Math.abs(tmp7 - tmp16);
    const EPSILON7 = tmp20.EPSILON;
    const max7 = Math.max;
    const _Math24 = Math;
    const absolute13 = Math.abs(tmp7);
    tmp22 = absolute12 <= EPSILON7 * max7(1, absolute13, Math.abs(tmp16));
  }
  if (tmp22) {
    const _Math25 = Math;
    const _Math26 = Math;
    const _Math27 = Math;
    const absolute14 = Math.abs(tmp8 - tmp17);
    const EPSILON8 = tmp20.EPSILON;
    const max8 = Math.max;
    const _Math28 = Math;
    const absolute15 = Math.abs(tmp8);
    tmp22 = absolute14 <= EPSILON8 * max8(1, absolute15, Math.abs(tmp17));
  }
  if (tmp22) {
    const _Math29 = Math;
    const _Math30 = Math;
    const _Math31 = Math;
    const absolute16 = Math.abs(tmp9 - tmp18);
    const EPSILON9 = tmp20.EPSILON;
    const max9 = Math.max;
    const _Math32 = Math;
    const absolute17 = Math.abs(tmp9);
    tmp22 = absolute16 <= EPSILON9 * max9(1, absolute17, Math.abs(tmp18));
  }
  return tmp22;
}
export function exactEquals(arg0, arg1) {
  return arg0[0] === arg1[0] && arg0[1] === arg1[1] && arg0[2] === arg1[2] && arg0[3] === arg1[3] && arg0[4] === arg1[4] && arg0[5] === arg1[5] && arg0[6] === arg1[6] && arg0[7] === arg1[7] && arg0[8] === arg1[8];
}
export function frob(arg0) {
  return Math.sqrt(arg0[0] * arg0[0] + arg0[1] * arg0[1] + arg0[2] * arg0[2] + arg0[3] * arg0[3] + arg0[4] * arg0[4] + arg0[5] * arg0[5] + arg0[6] * arg0[6] + arg0[7] * arg0[7] + arg0[8] * arg0[8]);
}
export function fromMat2d(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = arg1[1];
  arg0[2] = 0;
  arg0[3] = arg1[2];
  arg0[4] = arg1[3];
  arg0[5] = 0;
  arg0[6] = arg1[4];
  arg0[7] = arg1[5];
  arg0[8] = 1;
  return arg0;
}
export function fromMat4(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = arg1[1];
  arg0[2] = arg1[2];
  arg0[3] = arg1[4];
  arg0[4] = arg1[5];
  arg0[5] = arg1[6];
  arg0[6] = arg1[8];
  arg0[7] = arg1[9];
  arg0[8] = arg1[10];
  return arg0;
}
export function fromQuat(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2, tmp3, tmp4] = arg1;
  const sum = tmp + tmp;
  const sum1 = tmp2 + tmp2;
  const sum2 = tmp3 + tmp3;
  const result = tmp * sum;
  const result1 = tmp2 * sum;
  const result2 = tmp2 * sum1;
  const result3 = tmp3 * sum;
  const result4 = tmp3 * sum1;
  const result5 = tmp3 * sum2;
  const result6 = tmp4 * sum;
  const result7 = tmp4 * sum1;
  const result8 = tmp4 * sum2;
  arg0[0] = 1 - result2 - result5;
  arg0[3] = result1 - result8;
  arg0[6] = result3 + result7;
  arg0[1] = result1 + result8;
  arg0[4] = 1 - result - result5;
  arg0[7] = result4 - result6;
  arg0[2] = result3 - result7;
  arg0[5] = result4 + result6;
  arg0[8] = 1 - result - result2;
  return arg0;
}
export function fromRotation(arg0, result1) {
  const sinResult = Math.sin(result1);
  const cosResult = Math.cos(result1);
  arg0[0] = cosResult;
  arg0[1] = sinResult;
  arg0[2] = 0;
  arg0[3] = -sinResult;
  arg0[4] = cosResult;
  arg0[5] = 0;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = 1;
  return arg0;
}
export function fromScaling(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = arg1[1];
  arg0[5] = 0;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = 1;
  return arg0;
}
export function fromTranslation(arg0, arg1) {
  arg0[0] = 1;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 1;
  arg0[5] = 0;
  arg0[6] = arg1[0];
  arg0[7] = arg1[1];
  arg0[8] = 1;
  return arg0;
}
export function fromValues(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  const aRRAY_TYPE = new map.ARRAY_TYPE(9);
  aRRAY_TYPE[0] = arg0;
  aRRAY_TYPE[1] = arg1;
  aRRAY_TYPE[2] = arg2;
  aRRAY_TYPE[3] = arg3;
  aRRAY_TYPE[4] = arg4;
  aRRAY_TYPE[5] = arg5;
  aRRAY_TYPE[6] = arg6;
  aRRAY_TYPE[7] = arg7;
  aRRAY_TYPE[8] = arg8;
  return aRRAY_TYPE;
}
export function identity(arg0) {
  arg0[0] = 1;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 1;
  arg0[5] = 0;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = 1;
  return arg0;
}
export function invert(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = arg1;
  const diff = tmp9 * tmp5 - tmp6 * tmp8;
  const sum = -tmp9 * tmp4 + tmp6 * tmp7;
  const diff1 = tmp8 * tmp4 - tmp5 * tmp7;
  const sum1 = tmp * diff + tmp2 * sum + tmp3 * diff1;
  if (sum1) {
    const result = 1 / sum1;
    arg0[0] = diff * result;
    arg0[1] = (-tmp9 * tmp2 + tmp3 * tmp8) * result;
    arg0[2] = (tmp6 * tmp2 - tmp3 * tmp5) * result;
    arg0[3] = sum * result;
    arg0[4] = (tmp9 * tmp - tmp3 * tmp7) * result;
    arg0[5] = (-tmp6 * tmp + tmp3 * tmp4) * result;
    arg0[6] = diff1 * result;
    arg0[7] = (-tmp8 * tmp + tmp2 * tmp7) * result;
    arg0[8] = (tmp5 * tmp - tmp2 * tmp4) * result;
    return arg0;
  } else {
    return null;
  }
}
export { multiply };
export function multiplyScalar(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2;
  arg0[1] = arg1[1] * arg2;
  arg0[2] = arg1[2] * arg2;
  arg0[3] = arg1[3] * arg2;
  arg0[4] = arg1[4] * arg2;
  arg0[5] = arg1[5] * arg2;
  arg0[6] = arg1[6] * arg2;
  arg0[7] = arg1[7] * arg2;
  arg0[8] = arg1[8] * arg2;
  return arg0;
}
export function multiplyScalarAndAdd(arg0, arg1, arg2, arg3) {
  arg0[0] = arg1[0] + arg2[0] * arg3;
  arg0[1] = arg1[1] + arg2[1] * arg3;
  arg0[2] = arg1[2] + arg2[2] * arg3;
  arg0[3] = arg1[3] + arg2[3] * arg3;
  arg0[4] = arg1[4] + arg2[4] * arg3;
  arg0[5] = arg1[5] + arg2[5] * arg3;
  arg0[6] = arg1[6] + arg2[6] * arg3;
  arg0[7] = arg1[7] + arg2[7] * arg3;
  arg0[8] = arg1[8] + arg2[8] * arg3;
  return arg0;
}
export function normalFromMat4(arg0, arg1) {
  let tmp;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = arg1;
  const diff = tmp * tmp6 - tmp2 * tmp5;
  const diff1 = tmp * tmp7 - tmp3 * tmp5;
  const diff2 = tmp * tmp8 - tmp4 * tmp5;
  const diff3 = tmp2 * tmp7 - tmp3 * tmp6;
  const diff4 = tmp2 * tmp8 - tmp4 * tmp6;
  const diff5 = tmp3 * tmp8 - tmp4 * tmp7;
  const diff6 = tmp9 * tmp14 - tmp10 * tmp13;
  const diff7 = tmp9 * tmp15 - tmp11 * tmp13;
  const diff8 = tmp9 * tmp16 - tmp12 * tmp13;
  const diff9 = tmp10 * tmp15 - tmp11 * tmp14;
  const diff10 = tmp10 * tmp16 - tmp12 * tmp14;
  const diff11 = tmp11 * tmp16 - tmp12 * tmp15;
  const sum = diff * diff11 - diff1 * diff10 + diff2 * diff9 + diff3 * diff8 - diff4 * diff7 + diff5 * diff6;
  if (sum) {
    const result = 1 / sum;
    arg0[0] = (tmp6 * diff11 - tmp7 * diff10 + tmp8 * diff9) * result;
    arg0[1] = (tmp7 * diff8 - tmp5 * diff11 - tmp8 * diff7) * result;
    arg0[2] = (tmp5 * diff10 - tmp6 * diff8 + tmp8 * diff6) * result;
    arg0[3] = (tmp3 * diff10 - tmp2 * diff11 - tmp4 * diff9) * result;
    arg0[4] = (tmp * diff11 - tmp3 * diff8 + tmp4 * diff7) * result;
    arg0[5] = (tmp2 * diff8 - tmp * diff10 - tmp4 * diff6) * result;
    arg0[6] = (tmp14 * diff5 - tmp15 * diff4 + tmp16 * diff3) * result;
    arg0[7] = (tmp15 * diff2 - tmp13 * diff5 - tmp16 * diff1) * result;
    arg0[8] = (tmp13 * diff4 - tmp14 * diff2 + tmp16 * diff) * result;
    return arg0;
  } else {
    return null;
  }
}
export function projection(arg0, arg1, arg2) {
  arg0[0] = 2 / arg1;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = -2 / arg2;
  arg0[5] = 0;
  arg0[6] = -1;
  arg0[7] = 1;
  arg0[8] = 1;
  return arg0;
}
export function rotate(arg0, arg1, result1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = arg1;
  const tmp7 = arg1[6];
  const tmp8 = arg1[7];
  const tmp9 = arg1[8];
  const sinResult = Math.sin(result1);
  const cosResult = Math.cos(result1);
  arg0[0] = cosResult * tmp + sinResult * tmp4;
  arg0[1] = cosResult * tmp2 + sinResult * tmp5;
  arg0[2] = cosResult * tmp3 + sinResult * tmp6;
  arg0[3] = cosResult * tmp4 - sinResult * tmp;
  arg0[4] = cosResult * tmp5 - sinResult * tmp2;
  arg0[5] = cosResult * tmp6 - sinResult * tmp3;
  arg0[6] = tmp7;
  arg0[7] = tmp8;
  arg0[8] = tmp9;
  return arg0;
}
export function scale(arg0, arg1, arg2) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg2;
  arg0[0] = tmp * arg1[0];
  arg0[1] = tmp * arg1[1];
  arg0[2] = tmp * arg1[2];
  arg0[3] = tmp2 * arg1[3];
  arg0[4] = tmp2 * arg1[4];
  arg0[5] = tmp2 * arg1[5];
  arg0[6] = arg1[6];
  arg0[7] = arg1[7];
  arg0[8] = arg1[8];
  return arg0;
}
export function set(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  arg0[0] = arg1;
  arg0[1] = arg2;
  arg0[2] = arg3;
  arg0[3] = arg4;
  arg0[4] = arg5;
  arg0[5] = arg6;
  arg0[6] = arg7;
  arg0[7] = arg8;
  arg0[8] = arg9;
  return arg0;
}
export function str(arg0) {
  return "mat3(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ", " + arg0[3] + ", " + arg0[4] + ", " + arg0[5] + ", " + arg0[6] + ", " + arg0[7] + ", " + arg0[8] + ")";
}
export { subtract };
export function translate(arg0, arg1, arg2) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = arg1;
  [tmp7, tmp8] = arg2;
  arg0[0] = tmp;
  arg0[1] = tmp2;
  arg0[2] = tmp3;
  arg0[3] = tmp4;
  arg0[4] = tmp5;
  arg0[5] = tmp6;
  arg0[6] = tmp7 * tmp + tmp8 * tmp4 + arg1[6];
  arg0[7] = tmp7 * tmp2 + tmp8 * tmp5 + arg1[7];
  arg0[8] = tmp7 * tmp3 + tmp8 * tmp6 + arg1[8];
  return arg0;
}
export function transpose(arg0, arg1) {
  if (arg0 === arg1) {
    arg0[1] = arg1[3];
    arg0[2] = arg1[6];
    arg0[3] = arg1[1];
    arg0[5] = arg1[7];
    arg0[6] = arg1[2];
    arg0[7] = arg1[5];
  } else {
    arg0[0] = arg1[0];
    arg0[1] = arg1[3];
    arg0[2] = arg1[6];
    arg0[3] = arg1[1];
    arg0[4] = arg1[4];
    arg0[5] = arg1[7];
    arg0[6] = arg1[2];
    arg0[7] = arg1[5];
    arg0[8] = arg1[8];
  }
  return arg0;
}
export const mul = multiply;
export const sub = subtract;
