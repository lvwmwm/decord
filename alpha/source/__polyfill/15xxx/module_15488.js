// Module ID: 15488
// Function ID: 15489
// Dependencies: [15489, 15491, 15498, 15521, 15509, 15523, 15519, 15524]

// Module 15488
import _mod15489 from "module_15489" /* 15489 */;
import _mod15491 from "module_15491" /* 15491 */;
import _mod15498 from "module_15498" /* 15498 */;
import _mod15509 from "module_15509" /* 15509 */;
import _mod15519 from "module_15519" /* 15519 */;
import _mod15521 from "module_15521" /* 15521 */;
import _mod15523 from "module_15523" /* 15523 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15524 */;

if (!_mod15489) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15491(arg0);
    const tmp4 = _mod15498(arg1);
    if (!_mod15521) {
      if (_mod15509(tmp3, tmp4)) {
        const tmpResult = _mod15523;
        const tmpResult2 = _mod15519;
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
