// Module ID: 14125
// Function ID: 14126
// Dependencies: [14068, 14065, 14064, 14126, 14085, 14114, 14099, 14067, 14094]

// Module 14125
import _mod14064 from "module_14064" /* 14064 */;
import _mod14065 from "module_14065" /* 14065 */;
import _mod14067 from "module_14067" /* 14067 */;
import _mod14068 from "module_14068" /* 14068 */;
import _mod14085 from "module_14085" /* 14085 */;
import _mod14114 from "module_14114" /* 14114 */;

let closure_4 = _mod14068([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod14085(arg0);
    const length = arguments.length;
    const f = _mod14114.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod14067(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14126)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14126)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14064;
        if (tmp12) {
          tmp12 = !tmp10(14094)(tmp2, tmp5, tmp9);
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
