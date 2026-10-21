// Module ID: 15444
// Function ID: 15445
// Dependencies: [15445, 15447, 15454, 15477, 15465, 15479, 15475, 15480]

// Module 15444
import _mod15445 from "module_15445" /* 15445 */;
import _mod15447 from "module_15447" /* 15447 */;
import _mod15454 from "module_15454" /* 15454 */;
import _mod15465 from "module_15465" /* 15465 */;
import _mod15475 from "module_15475" /* 15475 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15479 from "module_15479" /* 15479 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15480 */;

if (!_mod15445) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15447(arg0);
    const tmp4 = _mod15454(arg1);
    if (!_mod15477) {
      if (_mod15465(tmp3, tmp4)) {
        const tmpResult = _mod15479;
        const tmpResult2 = _mod15475;
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
