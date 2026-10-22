// Module ID: 15550
// Function ID: 15551
// Dependencies: [15493, 15490, 15489, 15551, 15510, 15539, 15524, 15492, 15519]

// Module 15550
import _mod15489 from "module_15489" /* 15489 */;
import _mod15490 from "module_15490" /* 15490 */;
import _mod15492 from "module_15492" /* 15492 */;
import _mod15493 from "module_15493" /* 15493 */;
import _mod15510 from "module_15510" /* 15510 */;
import _mod15539 from "module_15539" /* 15539 */;

let closure_4 = _mod15493([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15510(arg0);
    const length = arguments.length;
    const f = _mod15539.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15492(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15551)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15551)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15489;
        if (tmp12) {
          tmp12 = !tmp10(15519)(tmp2, tmp5, tmp9);
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
