// Module ID: 15515
// Function ID: 15516
// Dependencies: [15458, 15455, 15454, 15516, 15475, 15504, 15489, 15457, 15484]

// Module 15515
import _mod15454 from "module_15454" /* 15454 */;
import _mod15455 from "module_15455" /* 15455 */;
import _mod15457 from "module_15457" /* 15457 */;
import _mod15458 from "module_15458" /* 15458 */;
import _mod15475 from "module_15475" /* 15475 */;
import _mod15504 from "module_15504" /* 15504 */;

let closure_4 = _mod15458([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15475(arg0);
    const length = arguments.length;
    const f = _mod15504.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15457(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15516)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15516)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15454;
        if (tmp12) {
          tmp12 = !tmp10(15484)(tmp2, tmp5, tmp9);
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
