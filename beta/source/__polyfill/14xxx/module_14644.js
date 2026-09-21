// Module ID: 14644
// Function ID: 14645
// Dependencies: [14587, 14584, 14583, 14645, 14604, 14633, 14618, 14586, 14613]

// Module 14644
import _mod14583 from "module_14583" /* 14583 */;
import _mod14584 from "module_14584" /* 14584 */;
import _mod14586 from "module_14586" /* 14586 */;
import _mod14587 from "module_14587" /* 14587 */;
import _mod14604 from "module_14604" /* 14604 */;
import _mod14633 from "module_14633" /* 14633 */;

let closure_4 = _mod14587([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14604(arg0);
    const f = _mod14633.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14586(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14645)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14645)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14583;
        if (tmp12) {
          tmp12 = !tmp10(14613)(tmp2, tmp5, tmp9);
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
