// Module ID: 15809
// Function ID: 15810
// Dependencies: [15810, 15812, 15819, 15842, 15830, 15844, 15840, 15845]

// Module 15809
import _mod15810 from "module_15810" /* 15810 */;
import _mod15812 from "module_15812" /* 15812 */;
import _mod15819 from "module_15819" /* 15819 */;
import _mod15830 from "module_15830" /* 15830 */;
import _mod15840 from "module_15840" /* 15840 */;
import _mod15842 from "module_15842" /* 15842 */;
import _mod15844 from "module_15844" /* 15844 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15845 */;

if (!_mod15810) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15812(arg0);
    const tmp4 = _mod15819(arg1);
    if (!_mod15842) {
      if (_mod15830(tmp3, tmp4)) {
        const tmpResult = _mod15844;
        const tmpResult2 = _mod15840;
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
