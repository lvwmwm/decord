// Module ID: 13986
// Function ID: 13987
// Dependencies: [13987, 13989, 13996, 14019, 14007, 14021, 14017, 14022]

// Module 13986
import _mod13987 from "module_13987" /* 13987 */;
import _mod13989 from "module_13989" /* 13989 */;
import text from "text" /* 13996 */;
import _mod14019 from "module_14019" /* 14019 */;

if (!_mod13987) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13989(arg0);
    const tmp4 = text(arg1);
    if (!_mod14019) {
      if (tmp(14007)(tmp3, tmp4)) {
        const tmpResult = tmp(14021);
        return tmpResult(!tmp(14017)(tmp(14022).f, tmp3, tmp4), tmp3[tmp4]);
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
