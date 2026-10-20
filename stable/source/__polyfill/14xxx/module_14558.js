// Module ID: 14558
// Function ID: 14559
// Dependencies: [14559, 14561, 14568, 14591, 14579, 14593, 14589, 14594]

// Module 14558
import _mod14559 from "module_14559" /* 14559 */;
import _mod14561 from "module_14561" /* 14561 */;
import _mod14568 from "module_14568" /* 14568 */;
import _mod14579 from "module_14579" /* 14579 */;
import _mod14589 from "module_14589" /* 14589 */;
import _mod14591 from "module_14591" /* 14591 */;
import _mod14593 from "module_14593" /* 14593 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 14594 */;

if (!_mod14559) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14561(arg0);
    const tmp4 = _mod14568(arg1);
    if (!_mod14591) {
      if (_mod14579(tmp3, tmp4)) {
        const tmpResult = _mod14593;
        const tmpResult2 = _mod14589;
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
