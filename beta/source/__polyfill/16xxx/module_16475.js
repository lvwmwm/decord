// Module ID: 16475
// Function ID: 16476
// Dependencies: [16476, 16478, 16485, 16508, 16496, 16510, 16506, 16511]

// Module 16475
import _mod16476 from "module_16476" /* 16476 */;
import _mod16478 from "module_16478" /* 16478 */;
import _mod16485 from "module_16485" /* 16485 */;
import _mod16496 from "module_16496" /* 16496 */;
import _mod16506 from "module_16506" /* 16506 */;
import _mod16508 from "module_16508" /* 16508 */;
import _mod16510 from "module_16510" /* 16510 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16511 */;

if (!_mod16476) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16478(arg0);
    const tmp4 = _mod16485(arg1);
    if (!_mod16508) {
      if (_mod16496(tmp3, tmp4)) {
        const tmpResult = _mod16510;
        const tmpResult2 = _mod16506;
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
