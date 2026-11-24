// Module ID: 15623
// Function ID: 15624
// Dependencies: [15566, 15563, 15562, 15624, 15583, 15612, 15597, 15565, 15592]

// Module 15623
import _mod15562 from "module_15562" /* 15562 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15565 from "module_15565" /* 15565 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15583 from "module_15583" /* 15583 */;
import _mod15612 from "module_15612" /* 15612 */;

let closure_4 = _mod15566([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15583(arg0);
    const length = arguments.length;
    const f = _mod15612.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15565(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15624)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15624)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15562;
        if (tmp12) {
          tmp12 = !tmp10(15592)(tmp2, tmp5, tmp9);
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
