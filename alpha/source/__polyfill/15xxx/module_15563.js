// Module ID: 15563
// Function ID: 15564
// Dependencies: [15506, 15503, 15502, 15564, 15523, 15552, 15537, 15505, 15532]

// Module 15563
import _mod15502 from "module_15502" /* 15502 */;
import _mod15503 from "module_15503" /* 15503 */;
import _mod15505 from "module_15505" /* 15505 */;
import _mod15506 from "module_15506" /* 15506 */;
import _mod15523 from "module_15523" /* 15523 */;
import _mod15552 from "module_15552" /* 15552 */;

let closure_4 = _mod15506([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15523(arg0);
    const length = arguments.length;
    const f = _mod15552.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15505(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15564)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15564)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15502;
        if (tmp12) {
          tmp12 = !tmp10(15532)(tmp2, tmp5, tmp9);
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
