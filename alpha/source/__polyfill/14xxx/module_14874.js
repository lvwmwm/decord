// Module ID: 14874
// Function ID: 14875
// Dependencies: [14875, 14877, 14884, 14907, 14895, 14909, 14905, 14910]

// Module 14874
import _mod14875 from "module_14875" /* 14875 */;
import _mod14877 from "module_14877" /* 14877 */;
import _mod14884 from "module_14884" /* 14884 */;
import _mod14895 from "module_14895" /* 14895 */;
import _mod14905 from "module_14905" /* 14905 */;
import _mod14907 from "module_14907" /* 14907 */;
import _mod14909 from "module_14909" /* 14909 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 14910 */;

if (!_mod14875) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14877(arg0);
    const tmp4 = _mod14884(arg1);
    if (!_mod14907) {
      if (_mod14895(tmp3, tmp4)) {
        const tmpResult = _mod14909;
        const tmpResult2 = _mod14905;
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
