// Module ID: 14620
// Function ID: 14621
// Dependencies: [14563, 14560, 14559, 14621, 14580, 14609, 14594, 14562, 14589]

// Module 14620
import _mod14559 from "module_14559" /* 14559 */;
import _mod14560 from "module_14560" /* 14560 */;
import _mod14562 from "module_14562" /* 14562 */;
import _mod14563 from "module_14563" /* 14563 */;
import _mod14580 from "module_14580" /* 14580 */;
import _mod14609 from "module_14609" /* 14609 */;

let closure_4 = _mod14563([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod14580(arg0);
    const length = arguments.length;
    const f = _mod14609.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod14562(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14621)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14621)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14559;
        if (tmp12) {
          tmp12 = !tmp10(14589)(tmp2, tmp5, tmp9);
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
