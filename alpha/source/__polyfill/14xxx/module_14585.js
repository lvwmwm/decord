// Module ID: 14585
// Function ID: 14586
// Dependencies: [14586, 14588, 14595, 14618, 14606, 14620, 14616, 14621]

// Module 14585
import _mod14586 from "module_14586" /* 14586 */;
import _mod14588 from "module_14588" /* 14588 */;
import text from "text" /* 14595 */;
import _mod14618 from "module_14618" /* 14618 */;

if (!_mod14586) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14588(arg0);
    const tmp4 = text(arg1);
    if (!_mod14618) {
      if (tmp(14606)(tmp3, tmp4)) {
        const tmpResult = tmp(14620);
        return tmpResult(!tmp(14616)(tmp(14621).f, tmp3, tmp4), tmp3[tmp4]);
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
