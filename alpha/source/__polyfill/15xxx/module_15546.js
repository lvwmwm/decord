// Module ID: 15546
// Function ID: 15547
// Dependencies: [15547, 15549, 15556, 15579, 15567, 15581, 15577, 15582]

// Module 15546
import _mod15547 from "module_15547" /* 15547 */;
import _mod15549 from "module_15549" /* 15549 */;
import _mod15556 from "module_15556" /* 15556 */;
import _mod15567 from "module_15567" /* 15567 */;
import _mod15577 from "module_15577" /* 15577 */;
import _mod15579 from "module_15579" /* 15579 */;
import _mod15581 from "module_15581" /* 15581 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15582 */;

if (!_mod15547) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15549(arg0);
    const tmp4 = _mod15556(arg1);
    if (!_mod15579) {
      if (_mod15567(tmp3, tmp4)) {
        const tmpResult = _mod15581;
        const tmpResult2 = _mod15577;
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
