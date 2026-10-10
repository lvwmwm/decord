// Module ID: 14592
// Function ID: 14593
// Dependencies: [14535, 14532, 14531, 14593, 14552, 14581, 14566, 14534, 14561]

// Module 14592
import _mod14531 from "module_14531" /* 14531 */;
import _mod14532 from "module_14532" /* 14532 */;
import _mod14534 from "module_14534" /* 14534 */;
import _mod14535 from "module_14535" /* 14535 */;
import _mod14552 from "module_14552" /* 14552 */;
import _mod14581 from "module_14581" /* 14581 */;

let closure_4 = _mod14535([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod14552(arg0);
    const length = arguments.length;
    const f = _mod14581.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod14534(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14593)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14593)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14531;
        if (tmp12) {
          tmp12 = !tmp10(14561)(tmp2, tmp5, tmp9);
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
