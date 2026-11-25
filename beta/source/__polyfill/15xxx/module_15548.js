// Module ID: 15548
// Function ID: 15549
// Dependencies: [15549, 15551, 15558, 15581, 15569, 15583, 15579, 15584]

// Module 15548
import _mod15549 from "module_15549" /* 15549 */;
import _mod15551 from "module_15551" /* 15551 */;
import _mod15558 from "module_15558" /* 15558 */;
import _mod15569 from "module_15569" /* 15569 */;
import _mod15579 from "module_15579" /* 15579 */;
import _mod15581 from "module_15581" /* 15581 */;
import _mod15583 from "module_15583" /* 15583 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15584 */;

if (!_mod15549) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15551(arg0);
    const tmp4 = _mod15558(arg1);
    if (!_mod15581) {
      if (_mod15569(tmp3, tmp4)) {
        const tmpResult = _mod15583;
        const tmpResult2 = _mod15579;
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
