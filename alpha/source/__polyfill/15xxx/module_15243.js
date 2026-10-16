// Module ID: 15243
// Function ID: 15244
// Dependencies: [15244, 15246, 15253, 15276, 15264, 15278, 15274, 15279]

// Module 15243
import _mod15244 from "module_15244" /* 15244 */;
import _mod15246 from "module_15246" /* 15246 */;
import _mod15253 from "module_15253" /* 15253 */;
import _mod15264 from "module_15264" /* 15264 */;
import _mod15274 from "module_15274" /* 15274 */;
import _mod15276 from "module_15276" /* 15276 */;
import _mod15278 from "module_15278" /* 15278 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15279 */;

if (!_mod15244) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15246(arg0);
    const tmp4 = _mod15253(arg1);
    if (!_mod15276) {
      if (_mod15264(tmp3, tmp4)) {
        const tmpResult = _mod15278;
        const tmpResult2 = _mod15274;
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
