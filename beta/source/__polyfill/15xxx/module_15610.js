// Module ID: 15610
// Function ID: 15611
// Dependencies: [15553, 15550, 15549, 15611, 15570, 15599, 15584, 15552, 15579]

// Module 15610
import _mod15549 from "module_15549" /* 15549 */;
import _mod15550 from "module_15550" /* 15550 */;
import _mod15552 from "module_15552" /* 15552 */;
import _mod15553 from "module_15553" /* 15553 */;
import _mod15570 from "module_15570" /* 15570 */;
import _mod15599 from "module_15599" /* 15599 */;

let closure_4 = _mod15553([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15570(arg0);
    const length = arguments.length;
    const f = _mod15599.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15552(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15611)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15611)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15549;
        if (tmp12) {
          tmp12 = !tmp10(15579)(tmp2, tmp5, tmp9);
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
