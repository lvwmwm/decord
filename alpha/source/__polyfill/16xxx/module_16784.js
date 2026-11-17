// Module ID: 16784
// Function ID: 16785
// Dependencies: [16785, 16787, 16794, 16817, 16805, 16819, 16815, 16820]

// Module 16784
import _mod16785 from "module_16785" /* 16785 */;
import _mod16787 from "module_16787" /* 16787 */;
import _mod16794 from "module_16794" /* 16794 */;
import _mod16805 from "module_16805" /* 16805 */;
import _mod16815 from "module_16815" /* 16815 */;
import _mod16817 from "module_16817" /* 16817 */;
import _mod16819 from "module_16819" /* 16819 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16820 */;

if (!_mod16785) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16787(arg0);
    const tmp4 = _mod16794(arg1);
    if (!_mod16817) {
      if (_mod16805(tmp3, tmp4)) {
        const tmpResult = _mod16819;
        const tmpResult2 = _mod16815;
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
