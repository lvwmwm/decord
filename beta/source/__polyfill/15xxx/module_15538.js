// Module ID: 15538
// Function ID: 15539
// Dependencies: [15539, 15541, 15548, 15571, 15559, 15573, 15569, 15574]

// Module 15538
import _mod15539 from "module_15539" /* 15539 */;
import _mod15541 from "module_15541" /* 15541 */;
import _mod15548 from "module_15548" /* 15548 */;
import _mod15559 from "module_15559" /* 15559 */;
import _mod15569 from "module_15569" /* 15569 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15573 from "module_15573" /* 15573 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15574 */;

if (!_mod15539) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15541(arg0);
    const tmp4 = _mod15548(arg1);
    if (!_mod15571) {
      if (_mod15559(tmp3, tmp4)) {
        const tmpResult = _mod15573;
        const tmpResult2 = _mod15569;
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
