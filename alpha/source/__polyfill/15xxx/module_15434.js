// Module ID: 15434
// Function ID: 15435
// Dependencies: [15377, 15374, 15373, 15435, 15394, 15423, 15408, 15376, 15403]

// Module 15434
import _mod15373 from "module_15373" /* 15373 */;
import _mod15374 from "module_15374" /* 15374 */;
import _mod15376 from "module_15376" /* 15376 */;
import _mod15377 from "module_15377" /* 15377 */;
import _mod15394 from "module_15394" /* 15394 */;
import _mod15423 from "module_15423" /* 15423 */;

let closure_4 = _mod15377([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15394(arg0);
    const length = arguments.length;
    const f = _mod15423.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15376(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15435)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15435)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15373;
        if (tmp12) {
          tmp12 = !tmp10(15403)(tmp2, tmp5, tmp9);
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
