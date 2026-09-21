// Module ID: 14641
// Function ID: 14642
// Dependencies: [14584, 14581, 14580, 14642, 14601, 14630, 14615, 14583, 14610]

// Module 14641
import _mod14580 from "module_14580" /* 14580 */;
import _mod14581 from "module_14581" /* 14581 */;
import _mod14583 from "module_14583" /* 14583 */;
import _mod14584 from "module_14584" /* 14584 */;
import _mod14601 from "module_14601" /* 14601 */;
import _mod14630 from "module_14630" /* 14630 */;

let closure_4 = _mod14584([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14601(arg0);
    const f = _mod14630.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14583(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14642)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14642)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14580;
        if (tmp12) {
          tmp12 = !tmp10(14610)(tmp2, tmp5, tmp9);
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
