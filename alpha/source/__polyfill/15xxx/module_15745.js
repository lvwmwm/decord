// Module ID: 15745
// Function ID: 15746
// Dependencies: [15688, 15685, 15684, 15746, 15705, 15734, 15719, 15687, 15714]

// Module 15745
import _mod15684 from "module_15684" /* 15684 */;
import _mod15685 from "module_15685" /* 15685 */;
import _mod15687 from "module_15687" /* 15687 */;
import _mod15688 from "module_15688" /* 15688 */;
import _mod15705 from "module_15705" /* 15705 */;
import _mod15734 from "module_15734" /* 15734 */;

let closure_4 = _mod15688([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15705(arg0);
    const length = arguments.length;
    const f = _mod15734.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15687(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15746)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15746)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15684;
        if (tmp12) {
          tmp12 = !tmp10(15714)(tmp2, tmp5, tmp9);
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
