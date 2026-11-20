// Module ID: 16813
// Function ID: 16814
// Dependencies: [16756, 16753, 16752, 16814, 16773, 16802, 16787, 16755, 16782]

// Module 16813
import _mod16752 from "module_16752" /* 16752 */;
import _mod16753 from "module_16753" /* 16753 */;
import _mod16755 from "module_16755" /* 16755 */;
import _mod16756 from "module_16756" /* 16756 */;
import _mod16773 from "module_16773" /* 16773 */;
import _mod16802 from "module_16802" /* 16802 */;

let closure_4 = _mod16756([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod16773(arg0);
    const length = arguments.length;
    const f = _mod16802.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod16755(arguments[num]);
      if (f) {
        let tmp8 = tmp3(16814)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(16814)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod16752;
        if (tmp12) {
          tmp12 = !tmp10(16782)(tmp2, tmp5, tmp9);
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
