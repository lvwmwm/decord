// Module ID: 15600
// Function ID: 15601
// Dependencies: [15543, 15540, 15539, 15601, 15560, 15589, 15574, 15542, 15569]

// Module 15600
import _mod15539 from "module_15539" /* 15539 */;
import _mod15540 from "module_15540" /* 15540 */;
import _mod15542 from "module_15542" /* 15542 */;
import _mod15543 from "module_15543" /* 15543 */;
import _mod15560 from "module_15560" /* 15560 */;
import _mod15589 from "module_15589" /* 15589 */;

let closure_4 = _mod15543([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15560(arg0);
    const length = arguments.length;
    const f = _mod15589.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15542(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15601)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15601)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15539;
        if (tmp12) {
          tmp12 = !tmp10(15569)(tmp2, tmp5, tmp9);
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
