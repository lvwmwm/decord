// Module ID: 14579
// Function ID: 14580
// Dependencies: [14580, 14582, 14589, 14612, 14600, 14614, 14610, 14615]

// Module 14579
import _mod14580 from "module_14580" /* 14580 */;
import _mod14582 from "module_14582" /* 14582 */;
import text from "text" /* 14589 */;
import _mod14612 from "module_14612" /* 14612 */;

if (!_mod14580) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14582(arg0);
    const tmp4 = text(arg1);
    if (!_mod14612) {
      if (tmp(14600)(tmp3, tmp4)) {
        const tmpResult = tmp(14614);
        return tmpResult(!tmp(14610)(tmp(14615).f, tmp3, tmp4), tmp3[tmp4]);
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
