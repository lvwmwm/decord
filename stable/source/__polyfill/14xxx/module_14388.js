// Module ID: 14388
// Function ID: 14389
// Dependencies: [14389, 14391, 14398, 14421, 14409, 14423, 14419, 14424]

// Module 14388
import _mod14389 from "module_14389" /* 14389 */;
import _mod14391 from "module_14391" /* 14391 */;
import text from "text" /* 14398 */;
import _mod14421 from "module_14421" /* 14421 */;

if (!_mod14389) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14391(arg0);
    const tmp4 = text(arg1);
    if (!_mod14421) {
      if (tmp(14409)(tmp3, tmp4)) {
        const tmpResult = tmp(14423);
        return tmpResult(!tmp(14419)(tmp(14424).f, tmp3, tmp4), tmp3[tmp4]);
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
