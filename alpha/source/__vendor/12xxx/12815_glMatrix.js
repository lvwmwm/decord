// Module ID: 12815
// Function ID: 12816
// Name: glMatrix
// Dependencies: [12816, 12817, 12818, 12819, 12820, 12821, 12824, 12825, 12822, 12823]

// Module 12815 (glMatrix)
import ANGLE_ORDER from "ANGLE_ORDER" /* 12816 */;
import LDU from "LDU" /* 12817 */;
import _mod12818 from "module_12818" /* 12818 */;
import _mod12819 from "module_12819" /* 12819 */;
import _mod12820 from "module_12820" /* 12820 */;
import _mod12821 from "module_12821" /* 12821 */;
import _mod12822 from "module_12822" /* 12822 */;
import _mod12823 from "module_12823" /* 12823 */;
import _mod12824 from "module_12824" /* 12824 */;
import _mod12825 from "module_12825" /* 12825 */;

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
export const mat2d = _interopRequireWildcard(_mod12818);
export const mat3 = _interopRequireWildcard(_mod12819);
export const mat4 = _interopRequireWildcard(_mod12820);
export const quat = _interopRequireWildcard(_mod12821);
export const quat2 = _interopRequireWildcard(_mod12824);
export const vec2 = _interopRequireWildcard(_mod12825);
export const vec3 = _interopRequireWildcard(_mod12822);
export const vec4 = _interopRequireWildcard(_mod12823);
