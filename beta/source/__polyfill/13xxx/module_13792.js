// Module ID: 13792
// Function ID: 13793
// Dependencies: [13793, 13795, 13802, 13825, 13813, 13827, 13823, 13828]

// Module 13792
import _mod13793 from "module_13793" /* 13793 */;
import _mod13795 from "module_13795" /* 13795 */;
import _mod13802 from "module_13802" /* 13802 */;
import _mod13813 from "module_13813" /* 13813 */;
import _mod13823 from "module_13823" /* 13823 */;
import _mod13825 from "module_13825" /* 13825 */;
import _mod13827 from "module_13827" /* 13827 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 13828 */;

if (!_mod13793) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13795(arg0);
    const tmp4 = _mod13802(arg1);
    if (!_mod13825) {
      if (_mod13813(tmp3, tmp4)) {
        const tmpResult = _mod13827;
        const tmpResult2 = _mod13823;
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
