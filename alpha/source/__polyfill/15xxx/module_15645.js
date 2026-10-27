// Module ID: 15645
// Function ID: 15646
// Dependencies: [15588, 15585, 15584, 15646, 15605, 15634, 15619, 15587, 15614]

// Module 15645
import _mod15584 from "module_15584" /* 15584 */;
import _mod15585 from "module_15585" /* 15585 */;
import _mod15587 from "module_15587" /* 15587 */;
import _mod15588 from "module_15588" /* 15588 */;
import _mod15605 from "module_15605" /* 15605 */;
import _mod15634 from "module_15634" /* 15634 */;

let closure_4 = _mod15588([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15605(arg0);
    const length = arguments.length;
    const f = _mod15634.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15587(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15646)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15646)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15584;
        if (tmp12) {
          tmp12 = !tmp10(15614)(tmp2, tmp5, tmp9);
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
