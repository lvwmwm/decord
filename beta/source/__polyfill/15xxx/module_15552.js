// Module ID: 15552
// Function ID: 15553
// Dependencies: [15553, 15555, 15562, 15585, 15573, 15587, 15583, 15588]

// Module 15552
import _mod15553 from "module_15553" /* 15553 */;
import _mod15555 from "module_15555" /* 15555 */;
import _mod15562 from "module_15562" /* 15562 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15583 from "module_15583" /* 15583 */;
import _mod15585 from "module_15585" /* 15585 */;
import _mod15587 from "module_15587" /* 15587 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15588 */;

if (!_mod15553) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15555(arg0);
    const tmp4 = _mod15562(arg1);
    if (!_mod15585) {
      if (_mod15573(tmp3, tmp4)) {
        const tmpResult = _mod15587;
        const tmpResult2 = _mod15583;
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
