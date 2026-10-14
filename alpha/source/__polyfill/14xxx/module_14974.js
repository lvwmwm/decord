// Module ID: 14974
// Function ID: 14975
// Dependencies: [14917, 14914, 14913, 14975, 14934, 14963, 14948, 14916, 14943]

// Module 14974
import _mod14913 from "module_14913" /* 14913 */;
import _mod14914 from "module_14914" /* 14914 */;
import _mod14916 from "module_14916" /* 14916 */;
import _mod14917 from "module_14917" /* 14917 */;
import _mod14934 from "module_14934" /* 14934 */;
import _mod14963 from "module_14963" /* 14963 */;

let closure_4 = _mod14917([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod14934(arg0);
    const length = arguments.length;
    const f = _mod14963.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod14916(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14975)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14975)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14913;
        if (tmp12) {
          tmp12 = !tmp10(14943)(tmp2, tmp5, tmp9);
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
