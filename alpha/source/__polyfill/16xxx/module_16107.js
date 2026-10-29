// Module ID: 16107
// Function ID: 16108
// Dependencies: [16050, 16047, 16046, 16108, 16067, 16096, 16081, 16049, 16076]

// Module 16107
import _mod16046 from "module_16046" /* 16046 */;
import _mod16047 from "module_16047" /* 16047 */;
import _mod16049 from "module_16049" /* 16049 */;
import _mod16050 from "module_16050" /* 16050 */;
import _mod16067 from "module_16067" /* 16067 */;
import _mod16096 from "module_16096" /* 16096 */;

let closure_4 = _mod16050([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16067(arg0);
    const length = arguments.length;
    const f = _mod16096.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16049(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16108)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16108)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16046;
        if (tmp12) {
          tmp12 = !tmp10(16076)(tmp2, tmp5, tmp9);
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
