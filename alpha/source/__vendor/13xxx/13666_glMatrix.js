// Module ID: 13666
// Function ID: 13667
// Name: glMatrix
// Dependencies: [13667, 13668, 13669, 13670, 13671, 13672, 13675, 13676, 13673, 13674]

// Module 13666 (glMatrix)
import ANGLE_ORDER from "ANGLE_ORDER" /* 13667 */;
import LDU from "LDU" /* 13668 */;
import _mod13669 from "module_13669" /* 13669 */;
import _mod13670 from "module_13670" /* 13670 */;
import _mod13671 from "module_13671" /* 13671 */;
import _mod13672 from "module_13672" /* 13672 */;
import _mod13673 from "module_13673" /* 13673 */;
import _mod13674 from "module_13674" /* 13674 */;
import _mod13675 from "module_13675" /* 13675 */;
import _mod13676 from "module_13676" /* 13676 */;

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
export const mat2d = _interopRequireWildcard(_mod13669);
export const mat3 = _interopRequireWildcard(_mod13670);
export const mat4 = _interopRequireWildcard(_mod13671);
export const quat = _interopRequireWildcard(_mod13672);
export const quat2 = _interopRequireWildcard(_mod13675);
export const vec2 = _interopRequireWildcard(_mod13676);
export const vec3 = _interopRequireWildcard(_mod13673);
export const vec4 = _interopRequireWildcard(_mod13674);
