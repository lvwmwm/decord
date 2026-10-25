// Module ID: 15609
// Function ID: 15610
// Dependencies: [15552, 15549, 15548, 15610, 15569, 15598, 15583, 15551, 15578]

// Module 15609
import _mod15548 from "module_15548" /* 15548 */;
import _mod15549 from "module_15549" /* 15549 */;
import _mod15551 from "module_15551" /* 15551 */;
import _mod15552 from "module_15552" /* 15552 */;
import _mod15569 from "module_15569" /* 15569 */;
import _mod15598 from "module_15598" /* 15598 */;

let closure_4 = _mod15552([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15569(arg0);
    const length = arguments.length;
    const f = _mod15598.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15551(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15610)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15610)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15548;
        if (tmp12) {
          tmp12 = !tmp10(15578)(tmp2, tmp5, tmp9);
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
