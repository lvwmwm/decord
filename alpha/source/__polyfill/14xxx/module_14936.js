// Module ID: 14936
// Function ID: 14937
// Dependencies: [14879, 14876, 14875, 14937, 14896, 14925, 14910, 14878, 14905]

// Module 14936
import _mod14875 from "module_14875" /* 14875 */;
import _mod14876 from "module_14876" /* 14876 */;
import _mod14878 from "module_14878" /* 14878 */;
import _mod14879 from "module_14879" /* 14879 */;
import _mod14896 from "module_14896" /* 14896 */;
import _mod14925 from "module_14925" /* 14925 */;

let closure_4 = _mod14879([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod14896(arg0);
    const length = arguments.length;
    const f = _mod14925.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod14878(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14937)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14937)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14875;
        if (tmp12) {
          tmp12 = !tmp10(14905)(tmp2, tmp5, tmp9);
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
