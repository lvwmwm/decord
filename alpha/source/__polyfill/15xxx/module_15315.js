// Module ID: 15315
// Function ID: 15316
// Dependencies: [15258, 15255, 15254, 15316, 15275, 15304, 15289, 15257, 15284]

// Module 15315
import _mod15254 from "module_15254" /* 15254 */;
import _mod15255 from "module_15255" /* 15255 */;
import _mod15257 from "module_15257" /* 15257 */;
import _mod15258 from "module_15258" /* 15258 */;
import _mod15275 from "module_15275" /* 15275 */;
import _mod15304 from "module_15304" /* 15304 */;

let closure_4 = _mod15258([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15275(arg0);
    const length = arguments.length;
    const f = _mod15304.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15257(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15316)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15316)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15254;
        if (tmp12) {
          tmp12 = !tmp10(15284)(tmp2, tmp5, tmp9);
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
