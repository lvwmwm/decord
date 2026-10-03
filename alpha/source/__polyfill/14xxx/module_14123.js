// Module ID: 14123
// Function ID: 14124
// Dependencies: [14066, 14063, 14062, 14124, 14083, 14112, 14097, 14065, 14092]

// Module 14123
import _mod14062 from "module_14062" /* 14062 */;
import _mod14063 from "module_14063" /* 14063 */;
import _mod14065 from "module_14065" /* 14065 */;
import _mod14066 from "module_14066" /* 14066 */;
import _mod14083 from "module_14083" /* 14083 */;
import _mod14112 from "module_14112" /* 14112 */;

let closure_4 = _mod14066([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod14083(arg0);
    const length = arguments.length;
    const f = _mod14112.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod14065(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14124)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14124)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14062;
        if (tmp12) {
          tmp12 = !tmp10(14092)(tmp2, tmp5, tmp9);
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
