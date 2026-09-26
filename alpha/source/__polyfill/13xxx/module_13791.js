// Module ID: 13791
// Function ID: 13792
// Dependencies: [13792, 13794, 13801, 13824, 13812, 13826, 13822, 13827]

// Module 13791
import _mod13792 from "module_13792" /* 13792 */;
import _mod13794 from "module_13794" /* 13794 */;
import text from "text" /* 13801 */;
import _mod13824 from "module_13824" /* 13824 */;

if (!_mod13792) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13794(arg0);
    const tmp4 = text(arg1);
    if (!_mod13824) {
      if (tmp(13812)(tmp3, tmp4)) {
        const tmpResult = tmp(13826);
        return tmpResult(!tmp(13822)(tmp(13827).f, tmp3, tmp4), tmp3[tmp4]);
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
