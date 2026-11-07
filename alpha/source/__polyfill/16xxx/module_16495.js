// Module ID: 16495
// Function ID: 16496
// Dependencies: [16438, 16435, 16434, 16496, 16455, 16484, 16469, 16437, 16464]

// Module 16495
import _mod16434 from "module_16434" /* 16434 */;
import _mod16435 from "module_16435" /* 16435 */;
import _mod16437 from "module_16437" /* 16437 */;
import _mod16438 from "module_16438" /* 16438 */;
import _mod16455 from "module_16455" /* 16455 */;
import _mod16484 from "module_16484" /* 16484 */;

let closure_4 = _mod16438([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16455(arg0);
    const length = arguments.length;
    const f = _mod16484.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16437(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16496)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16496)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16434;
        if (tmp12) {
          tmp12 = !tmp10(16464)(tmp2, tmp5, tmp9);
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
