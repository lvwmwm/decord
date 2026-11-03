// Module ID: 16273
// Function ID: 16274
// Dependencies: [16274, 16276, 16283, 16306, 16294, 16308, 16304, 16309]

// Module 16273
import _mod16274 from "module_16274" /* 16274 */;
import _mod16276 from "module_16276" /* 16276 */;
import _mod16283 from "module_16283" /* 16283 */;
import _mod16294 from "module_16294" /* 16294 */;
import _mod16304 from "module_16304" /* 16304 */;
import _mod16306 from "module_16306" /* 16306 */;
import _mod16308 from "module_16308" /* 16308 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16309 */;

if (!_mod16274) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16276(arg0);
    const tmp4 = _mod16283(arg1);
    if (!_mod16306) {
      if (_mod16294(tmp3, tmp4)) {
        const tmpResult = _mod16308;
        const tmpResult2 = _mod16304;
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
