// Module ID: 16187
// Function ID: 16188
// Dependencies: [16130, 16127, 16126, 16188, 16147, 16176, 16161, 16129, 16156]

// Module 16187
import _mod16126 from "module_16126" /* 16126 */;
import _mod16127 from "module_16127" /* 16127 */;
import _mod16129 from "module_16129" /* 16129 */;
import _mod16130 from "module_16130" /* 16130 */;
import _mod16147 from "module_16147" /* 16147 */;
import _mod16176 from "module_16176" /* 16176 */;

let closure_4 = _mod16130([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16147(arg0);
    const length = arguments.length;
    const f = _mod16176.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16129(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16188)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16188)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16126;
        if (tmp12) {
          tmp12 = !tmp10(16156)(tmp2, tmp5, tmp9);
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
