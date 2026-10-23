// Module ID: 15522
// Function ID: 15523
// Dependencies: [15523, 15525, 15532, 15555, 15543, 15557, 15553, 15558]

// Module 15522
import _mod15523 from "module_15523" /* 15523 */;
import _mod15525 from "module_15525" /* 15525 */;
import _mod15532 from "module_15532" /* 15532 */;
import _mod15543 from "module_15543" /* 15543 */;
import _mod15553 from "module_15553" /* 15553 */;
import _mod15555 from "module_15555" /* 15555 */;
import _mod15557 from "module_15557" /* 15557 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15558 */;

if (!_mod15523) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15525(arg0);
    const tmp4 = _mod15532(arg1);
    if (!_mod15555) {
      if (_mod15543(tmp3, tmp4)) {
        const tmpResult = _mod15557;
        const tmpResult2 = _mod15553;
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
