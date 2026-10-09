// Module ID: 14476
// Function ID: 14477
// Dependencies: [14477, 14479, 14486, 14509, 14497, 14511, 14507, 14512]

// Module 14476
import _mod14477 from "module_14477" /* 14477 */;
import _mod14479 from "module_14479" /* 14479 */;
import _mod14486 from "module_14486" /* 14486 */;
import _mod14497 from "module_14497" /* 14497 */;
import _mod14507 from "module_14507" /* 14507 */;
import _mod14509 from "module_14509" /* 14509 */;
import _mod14511 from "module_14511" /* 14511 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 14512 */;

if (!_mod14477) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14479(arg0);
    const tmp4 = _mod14486(arg1);
    if (!_mod14509) {
      if (_mod14497(tmp3, tmp4)) {
        const tmpResult = _mod14511;
        const tmpResult2 = _mod14507;
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
