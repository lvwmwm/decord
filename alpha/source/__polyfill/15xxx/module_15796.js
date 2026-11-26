// Module ID: 15796
// Function ID: 15797
// Dependencies: [15739, 15736, 15735, 15797, 15756, 15785, 15770, 15738, 15765]

// Module 15796
import _mod15735 from "module_15735" /* 15735 */;
import _mod15736 from "module_15736" /* 15736 */;
import _mod15738 from "module_15738" /* 15738 */;
import _mod15739 from "module_15739" /* 15739 */;
import _mod15756 from "module_15756" /* 15756 */;
import _mod15785 from "module_15785" /* 15785 */;

let closure_4 = _mod15739([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15756(arg0);
    const length = arguments.length;
    const f = _mod15785.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15738(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15797)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15797)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15735;
        if (tmp12) {
          tmp12 = !tmp10(15765)(tmp2, tmp5, tmp9);
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
