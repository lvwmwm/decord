// Module ID: 16385
// Function ID: 16386
// Dependencies: [16386, 16388, 16395, 16418, 16406, 16420, 16416, 16421]

// Module 16385
import _mod16386 from "module_16386" /* 16386 */;
import _mod16388 from "module_16388" /* 16388 */;
import _mod16395 from "module_16395" /* 16395 */;
import _mod16406 from "module_16406" /* 16406 */;
import _mod16416 from "module_16416" /* 16416 */;
import _mod16418 from "module_16418" /* 16418 */;
import _mod16420 from "module_16420" /* 16420 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16421 */;

if (!_mod16386) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16388(arg0);
    const tmp4 = _mod16395(arg1);
    if (!_mod16418) {
      if (_mod16406(tmp3, tmp4)) {
        const tmpResult = _mod16420;
        const tmpResult2 = _mod16416;
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
