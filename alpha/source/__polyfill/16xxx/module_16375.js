// Module ID: 16375
// Function ID: 16376
// Dependencies: [16376, 16378, 16385, 16408, 16396, 16410, 16406, 16411]

// Module 16375
import _mod16376 from "module_16376" /* 16376 */;
import _mod16378 from "module_16378" /* 16378 */;
import _mod16385 from "module_16385" /* 16385 */;
import _mod16396 from "module_16396" /* 16396 */;
import _mod16406 from "module_16406" /* 16406 */;
import _mod16408 from "module_16408" /* 16408 */;
import _mod16410 from "module_16410" /* 16410 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16411 */;

if (!_mod16376) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16378(arg0);
    const tmp4 = _mod16385(arg1);
    if (!_mod16408) {
      if (_mod16396(tmp3, tmp4)) {
        const tmpResult = _mod16410;
        const tmpResult2 = _mod16406;
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
