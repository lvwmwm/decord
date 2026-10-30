// Module ID: 16147
// Function ID: 16148
// Dependencies: [16090, 16087, 16086, 16148, 16107, 16136, 16121, 16089, 16116]

// Module 16147
import _mod16086 from "module_16086" /* 16086 */;
import _mod16087 from "module_16087" /* 16087 */;
import _mod16089 from "module_16089" /* 16089 */;
import _mod16090 from "module_16090" /* 16090 */;
import _mod16107 from "module_16107" /* 16107 */;
import _mod16136 from "module_16136" /* 16136 */;

let closure_4 = _mod16090([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16107(arg0);
    const length = arguments.length;
    const f = _mod16136.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16089(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16148)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16148)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16086;
        if (tmp12) {
          tmp12 = !tmp10(16116)(tmp2, tmp5, tmp9);
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
