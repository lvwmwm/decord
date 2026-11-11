// Module ID: 16693
// Function ID: 16694
// Dependencies: [16636, 16633, 16632, 16694, 16653, 16682, 16667, 16635, 16662]

// Module 16693
import _mod16632 from "module_16632" /* 16632 */;
import _mod16633 from "module_16633" /* 16633 */;
import _mod16635 from "module_16635" /* 16635 */;
import _mod16636 from "module_16636" /* 16636 */;
import _mod16653 from "module_16653" /* 16653 */;
import _mod16682 from "module_16682" /* 16682 */;

let closure_4 = _mod16636([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16653(arg0);
    const length = arguments.length;
    const f = _mod16682.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16635(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16694)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16694)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16632;
        if (tmp12) {
          tmp12 = !tmp10(16662)(tmp2, tmp5, tmp9);
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
