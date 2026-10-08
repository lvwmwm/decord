// Module ID: 14442
// Function ID: 14443
// Dependencies: [14385, 14382, 14381, 14443, 14402, 14431, 14416, 14384, 14411]

// Module 14442
import _mod14381 from "module_14381" /* 14381 */;
import _mod14382 from "module_14382" /* 14382 */;
import _mod14384 from "module_14384" /* 14384 */;
import _mod14385 from "module_14385" /* 14385 */;
import _mod14402 from "module_14402" /* 14402 */;
import _mod14431 from "module_14431" /* 14431 */;

let closure_4 = _mod14385([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod14402(arg0);
    const length = arguments.length;
    const f = _mod14431.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod14384(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14443)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14443)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14381;
        if (tmp12) {
          tmp12 = !tmp10(14411)(tmp2, tmp5, tmp9);
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
