// Module ID: 16424
// Function ID: 16425
// Dependencies: [16367, 16364, 16363, 16425, 16384, 16413, 16398, 16366, 16393]

// Module 16424
import _mod16363 from "module_16363" /* 16363 */;
import _mod16364 from "module_16364" /* 16364 */;
import _mod16366 from "module_16366" /* 16366 */;
import _mod16367 from "module_16367" /* 16367 */;
import _mod16384 from "module_16384" /* 16384 */;
import _mod16413 from "module_16413" /* 16413 */;

let closure_4 = _mod16367([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16384(arg0);
    const length = arguments.length;
    const f = _mod16413.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16366(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16425)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16425)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16363;
        if (tmp12) {
          tmp12 = !tmp10(16393)(tmp2, tmp5, tmp9);
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
