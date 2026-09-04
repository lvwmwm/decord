// Module ID: 14225
// Function ID: 14226
// Name: getOwnPropertyDescriptor
// Dependencies: [14226, 14228, 14235, 14258, 14246, 14260, 14256, 14261]

// Module 14225 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 14226 */;
import _mod14228 from "module_14228" /* 14228 */;
import text from "text" /* 14235 */;
import _mod14258 from "module_14258" /* 14258 */;

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14228(arg0);
    const tmp4 = text(arg1);
    if (!_mod14258) {
      if (tmp(14246)(tmp3, tmp4)) {
        let tmpResult = tmp(14260);
        tmpResult = tmp(14256);
        return tmpResult(!tmpResult(tmp(14261).f, tmp3, tmp4), tmp3[tmp4]);
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
