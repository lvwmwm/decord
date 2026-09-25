// Module ID: 13835
// Function ID: 13836
// Dependencies: [13836, 13838, 13845, 13868, 13856, 13870, 13866, 13871]

// Module 13835
import _mod13836 from "module_13836" /* 13836 */;
import _mod13838 from "module_13838" /* 13838 */;
import text from "text" /* 13845 */;
import _mod13868 from "module_13868" /* 13868 */;

if (!_mod13836) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13838(arg0);
    const tmp4 = text(arg1);
    if (!_mod13868) {
      if (tmp(13856)(tmp3, tmp4)) {
        const tmpResult = tmp(13870);
        return tmpResult(!tmp(13866)(tmp(13871).f, tmp3, tmp4), tmp3[tmp4]);
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
