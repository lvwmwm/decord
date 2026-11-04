// Module ID: 13032
// Function ID: 13033
// Name: glMatrix
// Dependencies: [13033, 13034, 13035, 13036, 13037, 13038, 13041, 13042, 13039, 13040]

// Module 13032 (glMatrix)
import ANGLE_ORDER from "ANGLE_ORDER" /* 13033 */;
import LDU from "LDU" /* 13034 */;
import _mod13035 from "module_13035" /* 13035 */;
import _mod13036 from "module_13036" /* 13036 */;
import _mod13037 from "module_13037" /* 13037 */;
import _mod13038 from "module_13038" /* 13038 */;
import _mod13039 from "module_13039" /* 13039 */;
import _mod13040 from "module_13040" /* 13040 */;
import _mod13041 from "module_13041" /* 13041 */;
import _mod13042 from "module_13042" /* 13042 */;

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
export const mat2d = _interopRequireWildcard(_mod13035);
export const mat3 = _interopRequireWildcard(_mod13036);
export const mat4 = _interopRequireWildcard(_mod13037);
export const quat = _interopRequireWildcard(_mod13038);
export const quat2 = _interopRequireWildcard(_mod13041);
export const vec2 = _interopRequireWildcard(_mod13042);
export const vec3 = _interopRequireWildcard(_mod13039);
export const vec4 = _interopRequireWildcard(_mod13040);
