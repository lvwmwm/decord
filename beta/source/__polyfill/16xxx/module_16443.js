// Module ID: 16443
// Function ID: 16444
// Dependencies: [16444, 16446, 16453, 16476, 16464, 16478, 16474, 16479]

// Module 16443
import _mod16444 from "module_16444" /* 16444 */;
import _mod16446 from "module_16446" /* 16446 */;
import _mod16453 from "module_16453" /* 16453 */;
import _mod16464 from "module_16464" /* 16464 */;
import _mod16474 from "module_16474" /* 16474 */;
import _mod16476 from "module_16476" /* 16476 */;
import _mod16478 from "module_16478" /* 16478 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16479 */;

if (!_mod16444) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16446(arg0);
    const tmp4 = _mod16453(arg1);
    if (!_mod16476) {
      if (_mod16464(tmp3, tmp4)) {
        const tmpResult = _mod16478;
        const tmpResult2 = _mod16474;
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
