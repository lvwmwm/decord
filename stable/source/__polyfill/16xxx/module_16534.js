// Module ID: 16534
// Function ID: 16535
// Dependencies: [16477, 16474, 16473, 16535, 16494, 16523, 16508, 16476, 16503]

// Module 16534
import _mod16473 from "module_16473" /* 16473 */;
import _mod16474 from "module_16474" /* 16474 */;
import _mod16476 from "module_16476" /* 16476 */;
import _mod16477 from "module_16477" /* 16477 */;
import _mod16494 from "module_16494" /* 16494 */;
import _mod16523 from "module_16523" /* 16523 */;

let closure_4 = _mod16477([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16494(arg0);
    const length = arguments.length;
    const f = _mod16523.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16476(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16535)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16535)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16473;
        if (tmp12) {
          tmp12 = !tmp10(16503)(tmp2, tmp5, tmp9);
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
