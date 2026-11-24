// Module ID: 15561
// Function ID: 15562
// Dependencies: [15562, 15564, 15571, 15594, 15582, 15596, 15592, 15597]

// Module 15561
import _mod15562 from "module_15562" /* 15562 */;
import _mod15564 from "module_15564" /* 15564 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15582 from "module_15582" /* 15582 */;
import _mod15592 from "module_15592" /* 15592 */;
import _mod15594 from "module_15594" /* 15594 */;
import _mod15596 from "module_15596" /* 15596 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15597 */;

if (!_mod15562) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15564(arg0);
    const tmp4 = _mod15571(arg1);
    if (!_mod15594) {
      if (_mod15582(tmp3, tmp4)) {
        const tmpResult = _mod15596;
        const tmpResult2 = _mod15592;
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
