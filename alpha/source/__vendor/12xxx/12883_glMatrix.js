// Module ID: 12883
// Function ID: 12884
// Name: glMatrix
// Dependencies: [12884, 12885, 12886, 12887, 12888, 12889, 12892, 12893, 12890, 12891]

// Module 12883 (glMatrix)
import ANGLE_ORDER from "ANGLE_ORDER" /* 12884 */;
import LDU from "LDU" /* 12885 */;
import _mod12886 from "module_12886" /* 12886 */;
import _mod12887 from "module_12887" /* 12887 */;
import _mod12888 from "module_12888" /* 12888 */;
import _mod12889 from "module_12889" /* 12889 */;
import _mod12890 from "module_12890" /* 12890 */;
import _mod12891 from "module_12891" /* 12891 */;
import _mod12892 from "module_12892" /* 12892 */;
import _mod12893 from "module_12893" /* 12893 */;

let fn = function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      fn = (arg0) => typeof arg0;
    }
    let tmp = arg0;
    return fn(arg0);
  }
  fn = (arg0) => {
    const tmp = arg0;
    if (tmp) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        let str;
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
};

export const glMatrix = _interopRequireWildcard(ANGLE_ORDER);
export const mat2 = _interopRequireWildcard(LDU);
export const mat2d = _interopRequireWildcard(_mod12886);
export const mat3 = _interopRequireWildcard(_mod12887);
export const mat4 = _interopRequireWildcard(_mod12888);
export const quat = _interopRequireWildcard(_mod12889);
export const quat2 = _interopRequireWildcard(_mod12892);
export const vec2 = _interopRequireWildcard(_mod12893);
export const vec3 = _interopRequireWildcard(_mod12890);
export const vec4 = _interopRequireWildcard(_mod12891);
