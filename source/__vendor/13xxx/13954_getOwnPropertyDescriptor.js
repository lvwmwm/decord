// Module ID: 13954
// Function ID: 13955
// Name: getOwnPropertyDescriptor
// Dependencies: [13955, 13957, 13964, 13987, 13975, 13989, 13985, 13990]

// Module 13954 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 13955 */;
import _mod13957 from "module_13957" /* 13957 */;
import text from "text" /* 13964 */;
import _mod13987 from "module_13987" /* 13987 */;

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13957(arg0);
    const tmp4 = text(arg1);
    if (!_mod13987) {
      if (tmp(13975)(tmp3, tmp4)) {
        let tmpResult = tmp(13989);
        tmpResult = tmp(13985);
        return tmpResult(!tmpResult(tmp(13990).f, tmp3, tmp4), tmp3[tmp4]);
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
