// Module ID: 15417
// Function ID: 15418
// Dependencies: [15418, 15420, 15427, 15450, 15438, 15452, 15448, 15453]

// Module 15417
import _mod15418 from "module_15418" /* 15418 */;
import _mod15420 from "module_15420" /* 15420 */;
import _mod15427 from "module_15427" /* 15427 */;
import _mod15438 from "module_15438" /* 15438 */;
import _mod15448 from "module_15448" /* 15448 */;
import _mod15450 from "module_15450" /* 15450 */;
import _mod15452 from "module_15452" /* 15452 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15453 */;

if (!_mod15418) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15420(arg0);
    const tmp4 = _mod15427(arg1);
    if (!_mod15450) {
      if (_mod15438(tmp3, tmp4)) {
        const tmpResult = _mod15452;
        const tmpResult2 = _mod15448;
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
