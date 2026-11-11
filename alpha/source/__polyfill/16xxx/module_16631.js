// Module ID: 16631
// Function ID: 16632
// Dependencies: [16632, 16634, 16641, 16664, 16652, 16666, 16662, 16667]

// Module 16631
import _mod16632 from "module_16632" /* 16632 */;
import _mod16634 from "module_16634" /* 16634 */;
import _mod16641 from "module_16641" /* 16641 */;
import _mod16652 from "module_16652" /* 16652 */;
import _mod16662 from "module_16662" /* 16662 */;
import _mod16664 from "module_16664" /* 16664 */;
import _mod16666 from "module_16666" /* 16666 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16667 */;

if (!_mod16632) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16634(arg0);
    const tmp4 = _mod16641(arg1);
    if (!_mod16664) {
      if (_mod16652(tmp3, tmp4)) {
        const tmpResult = _mod16666;
        const tmpResult2 = _mod16662;
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
