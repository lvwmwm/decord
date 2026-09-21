// Module ID: 14582
// Function ID: 14583
// Dependencies: [14583, 14585, 14592, 14615, 14603, 14617, 14613, 14618]

// Module 14582
import _mod14583 from "module_14583" /* 14583 */;
import _mod14585 from "module_14585" /* 14585 */;
import text from "text" /* 14592 */;
import _mod14615 from "module_14615" /* 14615 */;

if (!_mod14583) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14585(arg0);
    const tmp4 = text(arg1);
    if (!_mod14615) {
      if (tmp(14603)(tmp3, tmp4)) {
        const tmpResult = tmp(14617);
        return tmpResult(!tmp(14613)(tmp(14618).f, tmp3, tmp4), tmp3[tmp4]);
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
