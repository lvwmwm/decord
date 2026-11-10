// Module ID: 16532
// Function ID: 16533
// Dependencies: [16475, 16472, 16471, 16533, 16492, 16521, 16506, 16474, 16501]

// Module 16532
import _mod16471 from "module_16471" /* 16471 */;
import _mod16472 from "module_16472" /* 16472 */;
import _mod16474 from "module_16474" /* 16474 */;
import _mod16475 from "module_16475" /* 16475 */;
import _mod16492 from "module_16492" /* 16492 */;
import _mod16521 from "module_16521" /* 16521 */;

let closure_4 = _mod16475([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16492(arg0);
    const length = arguments.length;
    const f = _mod16521.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16474(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16533)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16533)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16471;
        if (tmp12) {
          tmp12 = !tmp10(16501)(tmp2, tmp5, tmp9);
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
