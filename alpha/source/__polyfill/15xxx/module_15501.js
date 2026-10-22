// Module ID: 15501
// Function ID: 15502
// Dependencies: [15502, 15504, 15511, 15534, 15522, 15536, 15532, 15537]

// Module 15501
import _mod15502 from "module_15502" /* 15502 */;
import _mod15504 from "module_15504" /* 15504 */;
import _mod15511 from "module_15511" /* 15511 */;
import _mod15522 from "module_15522" /* 15522 */;
import _mod15532 from "module_15532" /* 15532 */;
import _mod15534 from "module_15534" /* 15534 */;
import _mod15536 from "module_15536" /* 15536 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15537 */;

if (!_mod15502) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15504(arg0);
    const tmp4 = _mod15511(arg1);
    if (!_mod15534) {
      if (_mod15522(tmp3, tmp4)) {
        const tmpResult = _mod15536;
        const tmpResult2 = _mod15532;
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
