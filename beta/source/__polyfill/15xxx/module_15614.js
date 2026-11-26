// Module ID: 15614
// Function ID: 15615
// Dependencies: [15557, 15554, 15553, 15615, 15574, 15603, 15588, 15556, 15583]

// Module 15614
import _mod15553 from "module_15553" /* 15553 */;
import _mod15554 from "module_15554" /* 15554 */;
import _mod15556 from "module_15556" /* 15556 */;
import _mod15557 from "module_15557" /* 15557 */;
import _mod15574 from "module_15574" /* 15574 */;
import _mod15603 from "module_15603" /* 15603 */;

let closure_4 = _mod15557([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15574(arg0);
    const length = arguments.length;
    const f = _mod15603.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15556(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15615)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15615)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15553;
        if (tmp12) {
          tmp12 = !tmp10(15583)(tmp2, tmp5, tmp9);
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
