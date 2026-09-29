// Module ID: 14610
// Function ID: 14611
// Dependencies: [14611, 14613, 14620, 14643, 14631, 14645, 14641, 14646]

// Module 14610
import _mod14611 from "module_14611" /* 14611 */;
import _mod14613 from "module_14613" /* 14613 */;
import text from "text" /* 14620 */;
import _mod14643 from "module_14643" /* 14643 */;

if (!_mod14611) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14613(arg0);
    const tmp4 = text(arg1);
    if (!_mod14643) {
      if (tmp(14631)(tmp3, tmp4)) {
        const tmpResult = tmp(14645);
        return tmpResult(!tmp(14641)(tmp(14646).f, tmp3, tmp4), tmp3[tmp4]);
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
