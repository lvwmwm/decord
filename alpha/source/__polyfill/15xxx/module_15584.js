// Module ID: 15584
// Function ID: 15585
// Dependencies: [15527, 15524, 15523, 15585, 15544, 15573, 15558, 15526, 15553]

// Module 15584
import _mod15523 from "module_15523" /* 15523 */;
import _mod15524 from "module_15524" /* 15524 */;
import _mod15526 from "module_15526" /* 15526 */;
import _mod15527 from "module_15527" /* 15527 */;
import _mod15544 from "module_15544" /* 15544 */;
import _mod15573 from "module_15573" /* 15573 */;

let closure_4 = _mod15527([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15544(arg0);
    const length = arguments.length;
    const f = _mod15573.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15526(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15585)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15585)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15523;
        if (tmp12) {
          tmp12 = !tmp10(15553)(tmp2, tmp5, tmp9);
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
