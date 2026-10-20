// Module ID: 15354
// Function ID: 15355
// Dependencies: [15355, 15357, 15364, 15387, 15375, 15389, 15385, 15390]

// Module 15354
import _mod15355 from "module_15355" /* 15355 */;
import _mod15357 from "module_15357" /* 15357 */;
import _mod15364 from "module_15364" /* 15364 */;
import _mod15375 from "module_15375" /* 15375 */;
import _mod15385 from "module_15385" /* 15385 */;
import _mod15387 from "module_15387" /* 15387 */;
import _mod15389 from "module_15389" /* 15389 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15390 */;

if (!_mod15355) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15357(arg0);
    const tmp4 = _mod15364(arg1);
    if (!_mod15387) {
      if (_mod15375(tmp3, tmp4)) {
        const tmpResult = _mod15389;
        const tmpResult2 = _mod15385;
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
