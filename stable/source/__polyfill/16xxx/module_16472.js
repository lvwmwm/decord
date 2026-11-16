// Module ID: 16472
// Function ID: 16473
// Dependencies: [16473, 16475, 16482, 16505, 16493, 16507, 16503, 16508]

// Module 16472
import _mod16473 from "module_16473" /* 16473 */;
import _mod16475 from "module_16475" /* 16475 */;
import _mod16482 from "module_16482" /* 16482 */;
import _mod16493 from "module_16493" /* 16493 */;
import _mod16503 from "module_16503" /* 16503 */;
import _mod16505 from "module_16505" /* 16505 */;
import _mod16507 from "module_16507" /* 16507 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16508 */;

if (!_mod16473) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16475(arg0);
    const tmp4 = _mod16482(arg1);
    if (!_mod16505) {
      if (_mod16493(tmp3, tmp4)) {
        const tmpResult = _mod16507;
        const tmpResult2 = _mod16503;
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
