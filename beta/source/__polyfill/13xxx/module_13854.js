// Module ID: 13854
// Function ID: 13855
// Dependencies: [13797, 13794, 13793, 13855, 13814, 13843, 13828, 13796, 13823]

// Module 13854
import _mod13793 from "module_13793" /* 13793 */;
import _mod13794 from "module_13794" /* 13794 */;
import _mod13796 from "module_13796" /* 13796 */;
import _mod13797 from "module_13797" /* 13797 */;
import _mod13814 from "module_13814" /* 13814 */;
import _mod13843 from "module_13843" /* 13843 */;

let closure_4 = _mod13797([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod13814(arg0);
    const length = arguments.length;
    const f = _mod13843.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod13796(arguments[num]);
      if (f) {
        let tmp8 = tmp3(13855)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(13855)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod13793;
        if (tmp12) {
          tmp12 = !tmp10(13823)(tmp2, tmp5, tmp9);
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
