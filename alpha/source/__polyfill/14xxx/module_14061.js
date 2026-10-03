// Module ID: 14061
// Function ID: 14062
// Dependencies: [14062, 14064, 14071, 14094, 14082, 14096, 14092, 14097]

// Module 14061
import _mod14062 from "module_14062" /* 14062 */;
import _mod14064 from "module_14064" /* 14064 */;
import _mod14071 from "module_14071" /* 14071 */;
import _mod14082 from "module_14082" /* 14082 */;
import _mod14092 from "module_14092" /* 14092 */;
import _mod14094 from "module_14094" /* 14094 */;
import _mod14096 from "module_14096" /* 14096 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 14097 */;

if (!_mod14062) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14064(arg0);
    const tmp4 = _mod14071(arg1);
    if (!_mod14094) {
      if (_mod14082(tmp3, tmp4)) {
        const tmpResult = _mod14096;
        const tmpResult2 = _mod14092;
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
