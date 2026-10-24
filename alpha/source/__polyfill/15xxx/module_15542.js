// Module ID: 15542
// Function ID: 15543
// Dependencies: [15543, 15545, 15552, 15575, 15563, 15577, 15573, 15578]

// Module 15542
import _mod15543 from "module_15543" /* 15543 */;
import _mod15545 from "module_15545" /* 15545 */;
import _mod15552 from "module_15552" /* 15552 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15575 from "module_15575" /* 15575 */;
import _mod15577 from "module_15577" /* 15577 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15578 */;

if (!_mod15543) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15545(arg0);
    const tmp4 = _mod15552(arg1);
    if (!_mod15575) {
      if (_mod15563(tmp3, tmp4)) {
        const tmpResult = _mod15577;
        const tmpResult2 = _mod15573;
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
