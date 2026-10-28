// Module ID: 15643
// Function ID: 15644
// Dependencies: [15586, 15583, 15582, 15644, 15603, 15632, 15617, 15585, 15612]

// Module 15643
import _mod15582 from "module_15582" /* 15582 */;
import _mod15583 from "module_15583" /* 15583 */;
import _mod15585 from "module_15585" /* 15585 */;
import _mod15586 from "module_15586" /* 15586 */;
import _mod15603 from "module_15603" /* 15603 */;
import _mod15632 from "module_15632" /* 15632 */;

let closure_4 = _mod15586([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15603(arg0);
    const length = arguments.length;
    const f = _mod15632.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15585(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15644)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15644)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15582;
        if (tmp12) {
          tmp12 = !tmp10(15612)(tmp2, tmp5, tmp9);
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
