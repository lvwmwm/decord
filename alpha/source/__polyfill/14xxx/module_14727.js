// Module ID: 14727
// Function ID: 14728
// Dependencies: [14670, 14667, 14666, 14728, 14687, 14716, 14701, 14669, 14696]

// Module 14727
import _mod14666 from "module_14666" /* 14666 */;
import _mod14667 from "module_14667" /* 14667 */;
import _mod14669 from "module_14669" /* 14669 */;
import _mod14670 from "module_14670" /* 14670 */;
import _mod14687 from "module_14687" /* 14687 */;
import _mod14716 from "module_14716" /* 14716 */;

let closure_4 = _mod14670([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14687(arg0);
    const f = _mod14716.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14669(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14728)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14728)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14666;
        if (tmp12) {
          tmp12 = !tmp10(14696)(tmp2, tmp5, tmp9);
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
