// Module ID: 14912
// Function ID: 14913
// Dependencies: [14913, 14915, 14922, 14945, 14933, 14947, 14943, 14948]

// Module 14912
import _mod14913 from "module_14913" /* 14913 */;
import _mod14915 from "module_14915" /* 14915 */;
import _mod14922 from "module_14922" /* 14922 */;
import _mod14933 from "module_14933" /* 14933 */;
import _mod14943 from "module_14943" /* 14943 */;
import _mod14945 from "module_14945" /* 14945 */;
import _mod14947 from "module_14947" /* 14947 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 14948 */;

if (!_mod14913) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14915(arg0);
    const tmp4 = _mod14922(arg1);
    if (!_mod14945) {
      if (_mod14933(tmp3, tmp4)) {
        const tmpResult = _mod14947;
        const tmpResult2 = _mod14943;
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
