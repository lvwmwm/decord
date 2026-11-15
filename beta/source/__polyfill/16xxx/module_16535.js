// Module ID: 16535
// Function ID: 16536
// Dependencies: [16478, 16475, 16474, 16536, 16495, 16524, 16509, 16477, 16504]

// Module 16535
import _mod16474 from "module_16474" /* 16474 */;
import _mod16475 from "module_16475" /* 16475 */;
import _mod16477 from "module_16477" /* 16477 */;
import _mod16478 from "module_16478" /* 16478 */;
import _mod16495 from "module_16495" /* 16495 */;
import _mod16524 from "module_16524" /* 16524 */;

let closure_4 = _mod16478([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16495(arg0);
    const length = arguments.length;
    const f = _mod16524.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16477(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16536)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16536)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16474;
        if (tmp12) {
          tmp12 = !tmp10(16504)(tmp2, tmp5, tmp9);
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
