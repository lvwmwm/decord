// Module ID: 15208
// Function ID: 15209
// Dependencies: [15209, 15211, 15218, 15241, 15229, 15243, 15239, 15244]

// Module 15208
import _mod15209 from "module_15209" /* 15209 */;
import _mod15211 from "module_15211" /* 15211 */;
import _mod15218 from "module_15218" /* 15218 */;
import _mod15229 from "module_15229" /* 15229 */;
import _mod15239 from "module_15239" /* 15239 */;
import _mod15241 from "module_15241" /* 15241 */;
import _mod15243 from "module_15243" /* 15243 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15244 */;

if (!_mod15209) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15211(arg0);
    const tmp4 = _mod15218(arg1);
    if (!_mod15241) {
      if (_mod15229(tmp3, tmp4)) {
        const tmpResult = _mod15243;
        const tmpResult2 = _mod15239;
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
