// Module ID: 12798
// Function ID: 12799
// Name: glMatrix
// Dependencies: [12799, 12800, 12801, 12802, 12803, 12804, 12807, 12808, 12805, 12806]

// Module 12798 (glMatrix)
import ANGLE_ORDER from "ANGLE_ORDER" /* 12799 */;
import LDU from "LDU" /* 12800 */;
import _mod12801 from "module_12801" /* 12801 */;
import _mod12802 from "module_12802" /* 12802 */;
import _mod12803 from "module_12803" /* 12803 */;
import _mod12804 from "module_12804" /* 12804 */;
import _mod12805 from "module_12805" /* 12805 */;
import _mod12806 from "module_12806" /* 12806 */;
import _mod12807 from "module_12807" /* 12807 */;
import _mod12808 from "module_12808" /* 12808 */;

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
export const mat2d = _interopRequireWildcard(_mod12801);
export const mat3 = _interopRequireWildcard(_mod12802);
export const mat4 = _interopRequireWildcard(_mod12803);
export const quat = _interopRequireWildcard(_mod12804);
export const quat2 = _interopRequireWildcard(_mod12807);
export const vec2 = _interopRequireWildcard(_mod12808);
export const vec3 = _interopRequireWildcard(_mod12805);
export const vec4 = _interopRequireWildcard(_mod12806);
