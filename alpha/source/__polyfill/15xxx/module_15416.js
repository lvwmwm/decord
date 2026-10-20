// Module ID: 15416
// Function ID: 15417
// Dependencies: [15359, 15356, 15355, 15417, 15376, 15405, 15390, 15358, 15385]

// Module 15416
import _mod15355 from "module_15355" /* 15355 */;
import _mod15356 from "module_15356" /* 15356 */;
import _mod15358 from "module_15358" /* 15358 */;
import _mod15359 from "module_15359" /* 15359 */;
import _mod15376 from "module_15376" /* 15376 */;
import _mod15405 from "module_15405" /* 15405 */;

let closure_4 = _mod15359([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15376(arg0);
    const length = arguments.length;
    const f = _mod15405.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15358(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15417)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15417)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15355;
        if (tmp12) {
          tmp12 = !tmp10(15385)(tmp2, tmp5, tmp9);
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
