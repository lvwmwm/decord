// Module ID: 13768
// Function ID: 13769
// Name: getOwnPropertyDescriptor
// Dependencies: [13769, 13771, 13778, 13801, 13789, 13803, 13799, 13804]

// Module 13768 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 13769 */;
import _mod13771 from "module_13771" /* 13771 */;
import text from "text" /* 13778 */;
import _mod13801 from "module_13801" /* 13801 */;

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13771(arg0);
    const tmp4 = text(arg1);
    if (!_mod13801) {
      if (tmp(13789)(tmp3, tmp4)) {
        let tmpResult = tmp(13803);
        tmpResult = tmp(13799);
        return tmpResult(!tmpResult(tmp(13804).f, tmp3, tmp4), tmp3[tmp4]);
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
