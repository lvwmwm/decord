// Module ID: 16751
// Function ID: 16752
// Dependencies: [16752, 16754, 16761, 16784, 16772, 16786, 16782, 16787]

// Module 16751
import _mod16752 from "module_16752" /* 16752 */;
import _mod16754 from "module_16754" /* 16754 */;
import _mod16761 from "module_16761" /* 16761 */;
import _mod16772 from "module_16772" /* 16772 */;
import _mod16782 from "module_16782" /* 16782 */;
import _mod16784 from "module_16784" /* 16784 */;
import _mod16786 from "module_16786" /* 16786 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16787 */;

if (!_mod16752) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16754(arg0);
    const tmp4 = _mod16761(arg1);
    if (!_mod16784) {
      if (_mod16772(tmp3, tmp4)) {
        const tmpResult = _mod16786;
        const tmpResult2 = _mod16782;
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
