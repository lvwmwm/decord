// Module ID: 13232
// Function ID: 13233
// Name: glMatrix
// Dependencies: [13233, 13234, 13235, 13236, 13237, 13238, 13241, 13242, 13239, 13240]

// Module 13232 (glMatrix)
import ANGLE_ORDER from "ANGLE_ORDER" /* 13233 */;
import LDU from "LDU" /* 13234 */;
import _mod13235 from "module_13235" /* 13235 */;
import _mod13236 from "module_13236" /* 13236 */;
import _mod13237 from "module_13237" /* 13237 */;
import _mod13238 from "module_13238" /* 13238 */;
import _mod13239 from "module_13239" /* 13239 */;
import _mod13240 from "module_13240" /* 13240 */;
import _mod13241 from "module_13241" /* 13241 */;
import _mod13242 from "module_13242" /* 13242 */;

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
export const mat2d = _interopRequireWildcard(_mod13235);
export const mat3 = _interopRequireWildcard(_mod13236);
export const mat4 = _interopRequireWildcard(_mod13237);
export const quat = _interopRequireWildcard(_mod13238);
export const quat2 = _interopRequireWildcard(_mod13241);
export const vec2 = _interopRequireWildcard(_mod13242);
export const vec3 = _interopRequireWildcard(_mod13239);
export const vec4 = _interopRequireWildcard(_mod13240);
