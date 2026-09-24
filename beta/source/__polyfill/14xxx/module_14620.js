// Module ID: 14620
// Function ID: 14621
// Dependencies: [14621, 14623, 14630, 14653, 14641, 14655, 14651, 14656]

// Module 14620
import _mod14621 from "module_14621" /* 14621 */;
import _mod14623 from "module_14623" /* 14623 */;
import text from "text" /* 14630 */;
import _mod14653 from "module_14653" /* 14653 */;

if (!_mod14621) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14623(arg0);
    const tmp4 = text(arg1);
    if (!_mod14653) {
      if (tmp(14641)(tmp3, tmp4)) {
        const tmpResult = tmp(14655);
        return tmpResult(!tmp(14651)(tmp(14656).f, tmp3, tmp4), tmp3[tmp4]);
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
