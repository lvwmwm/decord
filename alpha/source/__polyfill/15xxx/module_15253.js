// Module ID: 15253
// Function ID: 15254
// Dependencies: [15254, 15256, 15263, 15286, 15274, 15288, 15284, 15289]

// Module 15253
import _mod15254 from "module_15254" /* 15254 */;
import _mod15256 from "module_15256" /* 15256 */;
import _mod15263 from "module_15263" /* 15263 */;
import _mod15274 from "module_15274" /* 15274 */;
import _mod15284 from "module_15284" /* 15284 */;
import _mod15286 from "module_15286" /* 15286 */;
import _mod15288 from "module_15288" /* 15288 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15289 */;

if (!_mod15254) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15256(arg0);
    const tmp4 = _mod15263(arg1);
    if (!_mod15286) {
      if (_mod15274(tmp3, tmp4)) {
        const tmpResult = _mod15288;
        const tmpResult2 = _mod15284;
        return tmpResult(!tmpResult2(propertyIsEnumerable.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {
      }
    }
  };
}

export const f = getOwnPropertyDescriptor;
