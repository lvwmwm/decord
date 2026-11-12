// Module ID: 16537
// Function ID: 16538
// Dependencies: [16480, 16477, 16476, 16538, 16497, 16526, 16511, 16479, 16506]

// Module 16537
import _mod16476 from "module_16476" /* 16476 */;
import _mod16477 from "module_16477" /* 16477 */;
import _mod16479 from "module_16479" /* 16479 */;
import _mod16480 from "module_16480" /* 16480 */;
import _mod16497 from "module_16497" /* 16497 */;
import _mod16526 from "module_16526" /* 16526 */;

let closure_4 = _mod16480([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16497(arg0);
    const length = arguments.length;
    const f = _mod16526.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16479(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16538)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16538)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16476;
        if (tmp12) {
          tmp12 = !tmp10(16506)(tmp2, tmp5, tmp9);
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
