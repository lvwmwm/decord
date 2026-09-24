// Module ID: 14674
// Function ID: 14675
// Dependencies: [14675, 14677, 14684, 14707, 14695, 14709, 14705, 14710]

// Module 14674
import _mod14675 from "module_14675" /* 14675 */;
import _mod14677 from "module_14677" /* 14677 */;
import text from "text" /* 14684 */;
import _mod14707 from "module_14707" /* 14707 */;

if (!_mod14675) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14677(arg0);
    const tmp4 = text(arg1);
    if (!_mod14707) {
      if (tmp(14695)(tmp3, tmp4)) {
        const tmpResult = tmp(14709);
        return tmpResult(!tmp(14705)(tmp(14710).f, tmp3, tmp4), tmp3[tmp4]);
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
