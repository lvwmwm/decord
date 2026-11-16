// Module ID: 16811
// Function ID: 16812
// Dependencies: [16754, 16751, 16750, 16812, 16771, 16800, 16785, 16753, 16780]

// Module 16811
import _mod16750 from "module_16750" /* 16750 */;
import _mod16751 from "module_16751" /* 16751 */;
import _mod16753 from "module_16753" /* 16753 */;
import _mod16754 from "module_16754" /* 16754 */;
import _mod16771 from "module_16771" /* 16771 */;
import _mod16800 from "module_16800" /* 16800 */;

let closure_4 = _mod16754([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16771(arg0);
    const length = arguments.length;
    const f = _mod16800.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16753(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16812)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16812)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16750;
        if (tmp12) {
          tmp12 = !tmp10(16780)(tmp2, tmp5, tmp9);
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
