// Module ID: 13002
// Function ID: 13003
// Name: glMatrix
// Dependencies: [13003, 13004, 13005, 13006, 13007, 13008, 13011, 13012, 13009, 13010]

// Module 13002 (glMatrix)
import ANGLE_ORDER from "ANGLE_ORDER" /* 13003 */;
import LDU from "LDU" /* 13004 */;
import _mod13005 from "module_13005" /* 13005 */;
import _mod13006 from "module_13006" /* 13006 */;
import _mod13007 from "module_13007" /* 13007 */;
import _mod13008 from "module_13008" /* 13008 */;
import _mod13009 from "module_13009" /* 13009 */;
import _mod13010 from "module_13010" /* 13010 */;
import _mod13011 from "module_13011" /* 13011 */;
import _mod13012 from "module_13012" /* 13012 */;

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
export const mat2d = _interopRequireWildcard(_mod13005);
export const mat3 = _interopRequireWildcard(_mod13006);
export const mat4 = _interopRequireWildcard(_mod13007);
export const quat = _interopRequireWildcard(_mod13008);
export const quat2 = _interopRequireWildcard(_mod13011);
export const vec2 = _interopRequireWildcard(_mod13012);
export const vec3 = _interopRequireWildcard(_mod13009);
export const vec4 = _interopRequireWildcard(_mod13010);
