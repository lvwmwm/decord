// Module ID: 13466
// Function ID: 13467
// Name: glMatrix
// Dependencies: [13467, 13468, 13469, 13470, 13471, 13472, 13475, 13476, 13473, 13474]

// Module 13466 (glMatrix)
import ANGLE_ORDER from "ANGLE_ORDER" /* 13467 */;
import LDU from "LDU" /* 13468 */;
import _mod13469 from "module_13469" /* 13469 */;
import _mod13470 from "module_13470" /* 13470 */;
import _mod13471 from "module_13471" /* 13471 */;
import _mod13472 from "module_13472" /* 13472 */;
import _mod13473 from "module_13473" /* 13473 */;
import _mod13474 from "module_13474" /* 13474 */;
import _mod13475 from "module_13475" /* 13475 */;
import _mod13476 from "module_13476" /* 13476 */;

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
export const mat2d = _interopRequireWildcard(_mod13469);
export const mat3 = _interopRequireWildcard(_mod13470);
export const mat4 = _interopRequireWildcard(_mod13471);
export const quat = _interopRequireWildcard(_mod13472);
export const quat2 = _interopRequireWildcard(_mod13475);
export const vec2 = _interopRequireWildcard(_mod13476);
export const vec3 = _interopRequireWildcard(_mod13473);
export const vec4 = _interopRequireWildcard(_mod13474);
