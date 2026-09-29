// Module ID: 13959
// Function ID: 13960
// Dependencies: [13960, 13962, 13969, 13992, 13980, 13994, 13990, 13995]

// Module 13959
import _mod13960 from "module_13960" /* 13960 */;
import _mod13962 from "module_13962" /* 13962 */;
import text from "text" /* 13969 */;
import _mod13992 from "module_13992" /* 13992 */;

if (!_mod13960) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13962(arg0);
    const tmp4 = text(arg1);
    if (!_mod13992) {
      if (tmp(13980)(tmp3, tmp4)) {
        const tmpResult = tmp(13994);
        return tmpResult(!tmp(13990)(tmp(13995).f, tmp3, tmp4), tmp3[tmp4]);
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
