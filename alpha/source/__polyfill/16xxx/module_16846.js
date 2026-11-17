// Module ID: 16846
// Function ID: 16847
// Dependencies: [16789, 16786, 16785, 16847, 16806, 16835, 16820, 16788, 16815]

// Module 16846
import _mod16785 from "module_16785" /* 16785 */;
import _mod16786 from "module_16786" /* 16786 */;
import _mod16788 from "module_16788" /* 16788 */;
import _mod16789 from "module_16789" /* 16789 */;
import _mod16806 from "module_16806" /* 16806 */;
import _mod16835 from "module_16835" /* 16835 */;

let closure_4 = _mod16789([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16806(arg0);
    const length = arguments.length;
    const f = _mod16835.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16788(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16847)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16847)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16785;
        if (tmp12) {
          tmp12 = !tmp10(16815)(tmp2, tmp5, tmp9);
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
