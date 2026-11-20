// Module ID: 15479
// Function ID: 15480
// Dependencies: [15422, 15419, 15418, 15480, 15439, 15468, 15453, 15421, 15448]

// Module 15479
import _mod15418 from "module_15418" /* 15418 */;
import _mod15419 from "module_15419" /* 15419 */;
import _mod15421 from "module_15421" /* 15421 */;
import _mod15422 from "module_15422" /* 15422 */;
import _mod15439 from "module_15439" /* 15439 */;
import _mod15468 from "module_15468" /* 15468 */;

let closure_4 = _mod15422([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15439(arg0);
    const length = arguments.length;
    const f = _mod15468.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15421(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15480)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15480)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15418;
        if (tmp12) {
          tmp12 = !tmp10(15448)(tmp2, tmp5, tmp9);
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
