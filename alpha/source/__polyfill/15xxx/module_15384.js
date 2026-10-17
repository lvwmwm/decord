// Module ID: 15384
// Function ID: 15385
// Dependencies: [15327, 15324, 15323, 15385, 15344, 15373, 15358, 15326, 15353]

// Module 15384
import _mod15323 from "module_15323" /* 15323 */;
import _mod15324 from "module_15324" /* 15324 */;
import _mod15326 from "module_15326" /* 15326 */;
import _mod15327 from "module_15327" /* 15327 */;
import _mod15344 from "module_15344" /* 15344 */;
import _mod15373 from "module_15373" /* 15373 */;

let closure_4 = _mod15327([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15344(arg0);
    const length = arguments.length;
    const f = _mod15373.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15326(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15385)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15385)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15323;
        if (tmp12) {
          tmp12 = !tmp10(15353)(tmp2, tmp5, tmp9);
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
