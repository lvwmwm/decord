// Module ID: 15453
// Function ID: 15454
// Dependencies: [15454, 15456, 15463, 15486, 15474, 15488, 15484, 15489]

// Module 15453
import _mod15454 from "module_15454" /* 15454 */;
import _mod15456 from "module_15456" /* 15456 */;
import _mod15463 from "module_15463" /* 15463 */;
import _mod15474 from "module_15474" /* 15474 */;
import _mod15484 from "module_15484" /* 15484 */;
import _mod15486 from "module_15486" /* 15486 */;
import _mod15488 from "module_15488" /* 15488 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15489 */;

if (!_mod15454) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15456(arg0);
    const tmp4 = _mod15463(arg1);
    if (!_mod15486) {
      if (_mod15474(tmp3, tmp4)) {
        const tmpResult = _mod15488;
        const tmpResult2 = _mod15484;
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
