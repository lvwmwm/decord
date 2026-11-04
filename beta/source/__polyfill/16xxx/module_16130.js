// Module ID: 16130
// Function ID: 16131
// Dependencies: [16131, 16133, 16140, 16163, 16151, 16165, 16161, 16166]

// Module 16130
import _mod16131 from "module_16131" /* 16131 */;
import _mod16133 from "module_16133" /* 16133 */;
import _mod16140 from "module_16140" /* 16140 */;
import _mod16151 from "module_16151" /* 16151 */;
import _mod16161 from "module_16161" /* 16161 */;
import _mod16163 from "module_16163" /* 16163 */;
import _mod16165 from "module_16165" /* 16165 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16166 */;

if (!_mod16131) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16133(arg0);
    const tmp4 = _mod16140(arg1);
    if (!_mod16163) {
      if (_mod16151(tmp3, tmp4)) {
        const tmpResult = _mod16165;
        const tmpResult2 = _mod16161;
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
