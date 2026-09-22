// Module ID: 14647
// Function ID: 14648
// Dependencies: [14590, 14587, 14586, 14648, 14607, 14636, 14621, 14589, 14616]

// Module 14647
import _mod14586 from "module_14586" /* 14586 */;
import _mod14587 from "module_14587" /* 14587 */;
import _mod14589 from "module_14589" /* 14589 */;
import _mod14590 from "module_14590" /* 14590 */;
import _mod14607 from "module_14607" /* 14607 */;
import _mod14636 from "module_14636" /* 14636 */;

let closure_4 = _mod14590([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14607(arg0);
    const f = _mod14636.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14589(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14648)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14648)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14586;
        if (tmp12) {
          tmp12 = !tmp10(14616)(tmp2, tmp5, tmp9);
        }
        if (!tmp12) {
          tmp[tmp9] = tmp5[tmp9];
        }
      }
    }
    return tmp;
  };
}

export default assign;
