// Module ID: 15803
// Function ID: 15804
// Dependencies: [15746, 15743, 15742, 15804, 15763, 15792, 15777, 15745, 15772]

// Module 15803
import _mod15742 from "module_15742" /* 15742 */;
import _mod15743 from "module_15743" /* 15743 */;
import _mod15745 from "module_15745" /* 15745 */;
import _mod15746 from "module_15746" /* 15746 */;
import _mod15763 from "module_15763" /* 15763 */;
import _mod15792 from "module_15792" /* 15792 */;

let closure_4 = _mod15746([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15763(arg0);
    const length = arguments.length;
    const f = _mod15792.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15745(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15804)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15804)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15742;
        if (tmp12) {
          tmp12 = !tmp10(15772)(tmp2, tmp5, tmp9);
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
