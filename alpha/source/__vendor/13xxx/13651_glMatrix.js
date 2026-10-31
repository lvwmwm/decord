// Module ID: 13651
// Function ID: 13652
// Name: glMatrix
// Dependencies: [13652, 13653, 13654, 13655, 13656, 13657, 13660, 13661, 13658, 13659]

// Module 13651 (glMatrix)
import ANGLE_ORDER from "ANGLE_ORDER" /* 13652 */;
import LDU from "LDU" /* 13653 */;
import _mod13654 from "module_13654" /* 13654 */;
import _mod13655 from "module_13655" /* 13655 */;
import _mod13656 from "module_13656" /* 13656 */;
import _mod13657 from "module_13657" /* 13657 */;
import _mod13658 from "module_13658" /* 13658 */;
import _mod13659 from "module_13659" /* 13659 */;
import _mod13660 from "module_13660" /* 13660 */;
import _mod13661 from "module_13661" /* 13661 */;

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
export const mat2d = _interopRequireWildcard(_mod13654);
export const mat3 = _interopRequireWildcard(_mod13655);
export const mat4 = _interopRequireWildcard(_mod13656);
export const quat = _interopRequireWildcard(_mod13657);
export const quat2 = _interopRequireWildcard(_mod13660);
export const vec2 = _interopRequireWildcard(_mod13661);
export const vec3 = _interopRequireWildcard(_mod13658);
export const vec4 = _interopRequireWildcard(_mod13659);
