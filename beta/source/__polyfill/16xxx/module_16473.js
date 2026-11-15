// Module ID: 16473
// Function ID: 16474
// Dependencies: [16474, 16476, 16483, 16506, 16494, 16508, 16504, 16509]

// Module 16473
import _mod16474 from "module_16474" /* 16474 */;
import _mod16476 from "module_16476" /* 16476 */;
import _mod16483 from "module_16483" /* 16483 */;
import _mod16494 from "module_16494" /* 16494 */;
import _mod16504 from "module_16504" /* 16504 */;
import _mod16506 from "module_16506" /* 16506 */;
import _mod16508 from "module_16508" /* 16508 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16509 */;

if (!_mod16474) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16476(arg0);
    const tmp4 = _mod16483(arg1);
    if (!_mod16506) {
      if (_mod16494(tmp3, tmp4)) {
        const tmpResult = _mod16508;
        const tmpResult2 = _mod16504;
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
