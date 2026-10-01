// Module ID: 13994
// Function ID: 13995
// Dependencies: [13995, 13997, 14004, 14027, 14015, 14029, 14025, 14030]

// Module 13994
import _mod13995 from "module_13995" /* 13995 */;
import _mod13997 from "module_13997" /* 13997 */;
import text from "text" /* 14004 */;
import _mod14027 from "module_14027" /* 14027 */;

if (!_mod13995) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13997(arg0);
    const tmp4 = text(arg1);
    if (!_mod14027) {
      if (tmp(14015)(tmp3, tmp4)) {
        const tmpResult = tmp(14029);
        return tmpResult(!tmp(14025)(tmp(14030).f, tmp3, tmp4), tmp3[tmp4]);
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
