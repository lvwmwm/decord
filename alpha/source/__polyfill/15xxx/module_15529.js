// Module ID: 15529
// Function ID: 15530
// Dependencies: [15472, 15469, 15468, 15530, 15489, 15518, 15503, 15471, 15498]

// Module 15529
import _mod15468 from "module_15468" /* 15468 */;
import _mod15469 from "module_15469" /* 15469 */;
import _mod15471 from "module_15471" /* 15471 */;
import _mod15472 from "module_15472" /* 15472 */;
import _mod15489 from "module_15489" /* 15489 */;
import _mod15518 from "module_15518" /* 15518 */;

let closure_4 = _mod15472([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15489(arg0);
    const length = arguments.length;
    const f = _mod15518.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15471(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15530)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15530)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15468;
        if (tmp12) {
          tmp12 = !tmp10(15498)(tmp2, tmp5, tmp9);
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
