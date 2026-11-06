// Module ID: 16447
// Function ID: 16448
// Dependencies: [16390, 16387, 16386, 16448, 16407, 16436, 16421, 16389, 16416]

// Module 16447
import _mod16386 from "module_16386" /* 16386 */;
import _mod16387 from "module_16387" /* 16387 */;
import _mod16389 from "module_16389" /* 16389 */;
import _mod16390 from "module_16390" /* 16390 */;
import _mod16407 from "module_16407" /* 16407 */;
import _mod16436 from "module_16436" /* 16436 */;

let closure_4 = _mod16390([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16407(arg0);
    const length = arguments.length;
    const f = _mod16436.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16389(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16448)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16448)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16386;
        if (tmp12) {
          tmp12 = !tmp10(16416)(tmp2, tmp5, tmp9);
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
