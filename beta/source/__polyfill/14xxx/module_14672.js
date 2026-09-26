// Module ID: 14672
// Function ID: 14673
// Dependencies: [14615, 14612, 14611, 14673, 14632, 14661, 14646, 14614, 14641]

// Module 14672
import _mod14611 from "module_14611" /* 14611 */;
import _mod14612 from "module_14612" /* 14612 */;
import _mod14614 from "module_14614" /* 14614 */;
import _mod14615 from "module_14615" /* 14615 */;
import _mod14632 from "module_14632" /* 14632 */;
import _mod14661 from "module_14661" /* 14661 */;

let closure_4 = _mod14615([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14632(arg0);
    const f = _mod14661.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14614(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14673)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14673)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14611;
        if (tmp12) {
          tmp12 = !tmp10(14641)(tmp2, tmp5, tmp9);
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
