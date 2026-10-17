// Module ID: 15322
// Function ID: 15323
// Dependencies: [15323, 15325, 15332, 15355, 15343, 15357, 15353, 15358]

// Module 15322
import _mod15323 from "module_15323" /* 15323 */;
import _mod15325 from "module_15325" /* 15325 */;
import _mod15332 from "module_15332" /* 15332 */;
import _mod15343 from "module_15343" /* 15343 */;
import _mod15353 from "module_15353" /* 15353 */;
import _mod15355 from "module_15355" /* 15355 */;
import _mod15357 from "module_15357" /* 15357 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15358 */;

if (!_mod15323) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15325(arg0);
    const tmp4 = _mod15332(arg1);
    if (!_mod15355) {
      if (_mod15343(tmp3, tmp4)) {
        const tmpResult = _mod15357;
        const tmpResult2 = _mod15353;
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
