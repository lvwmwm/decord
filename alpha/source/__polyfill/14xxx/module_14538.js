// Module ID: 14538
// Function ID: 14539
// Dependencies: [14481, 14478, 14477, 14539, 14498, 14527, 14512, 14480, 14507]

// Module 14538
import _mod14477 from "module_14477" /* 14477 */;
import _mod14478 from "module_14478" /* 14478 */;
import _mod14480 from "module_14480" /* 14480 */;
import _mod14481 from "module_14481" /* 14481 */;
import _mod14498 from "module_14498" /* 14498 */;
import _mod14527 from "module_14527" /* 14527 */;

let closure_4 = _mod14481([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod14498(arg0);
    const length = arguments.length;
    const f = _mod14527.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod14480(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14539)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14539)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14477;
        if (tmp12) {
          tmp12 = !tmp10(14507)(tmp2, tmp5, tmp9);
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
