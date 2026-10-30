// Module ID: 16085
// Function ID: 16086
// Dependencies: [16086, 16088, 16095, 16118, 16106, 16120, 16116, 16121]

// Module 16085
import _mod16086 from "module_16086" /* 16086 */;
import _mod16088 from "module_16088" /* 16088 */;
import _mod16095 from "module_16095" /* 16095 */;
import _mod16106 from "module_16106" /* 16106 */;
import _mod16116 from "module_16116" /* 16116 */;
import _mod16118 from "module_16118" /* 16118 */;
import _mod16120 from "module_16120" /* 16120 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16121 */;

if (!_mod16086) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16088(arg0);
    const tmp4 = _mod16095(arg1);
    if (!_mod16118) {
      if (_mod16106(tmp3, tmp4)) {
        const tmpResult = _mod16120;
        const tmpResult2 = _mod16116;
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
