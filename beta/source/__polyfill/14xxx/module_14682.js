// Module ID: 14682
// Function ID: 14683
// Dependencies: [14625, 14622, 14621, 14683, 14642, 14671, 14656, 14624, 14651]

// Module 14682
import _mod14621 from "module_14621" /* 14621 */;
import _mod14622 from "module_14622" /* 14622 */;
import _mod14624 from "module_14624" /* 14624 */;
import _mod14625 from "module_14625" /* 14625 */;
import _mod14642 from "module_14642" /* 14642 */;
import _mod14671 from "module_14671" /* 14671 */;

let closure_4 = _mod14625([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14642(arg0);
    const f = _mod14671.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14624(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14683)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14683)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14621;
        if (tmp12) {
          tmp12 = !tmp10(14651)(tmp2, tmp5, tmp9);
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
