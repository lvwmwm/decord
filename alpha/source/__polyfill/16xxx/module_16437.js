// Module ID: 16437
// Function ID: 16438
// Dependencies: [16380, 16377, 16376, 16438, 16397, 16426, 16411, 16379, 16406]

// Module 16437
import _mod16376 from "module_16376" /* 16376 */;
import _mod16377 from "module_16377" /* 16377 */;
import _mod16379 from "module_16379" /* 16379 */;
import _mod16380 from "module_16380" /* 16380 */;
import _mod16397 from "module_16397" /* 16397 */;
import _mod16426 from "module_16426" /* 16426 */;

let closure_4 = _mod16380([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16397(arg0);
    const length = arguments.length;
    const f = _mod16426.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16379(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16438)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16438)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16376;
        if (tmp12) {
          tmp12 = !tmp10(16406)(tmp2, tmp5, tmp9);
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
