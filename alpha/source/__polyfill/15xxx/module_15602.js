// Module ID: 15602
// Function ID: 15603
// Dependencies: [15545, 15542, 15541, 15603, 15562, 15591, 15576, 15544, 15571]

// Module 15602
import _mod15541 from "module_15541" /* 15541 */;
import _mod15542 from "module_15542" /* 15542 */;
import _mod15544 from "module_15544" /* 15544 */;
import _mod15545 from "module_15545" /* 15545 */;
import _mod15562 from "module_15562" /* 15562 */;
import _mod15591 from "module_15591" /* 15591 */;

let closure_4 = _mod15545([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    let num;
    const tmp = _mod15562(arg0);
    const length = arguments.length;
    const f = _mod15591.f;
    for (let num = 1; length > num; num = num + 1) {
      let arr;
      let num2;
      let tmp3 = require;
      let tmp5 = _mod15544(arguments[num]);
      if (f) {
        let tmp8 = tmp3(15603)(tmp5);
        arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(15603)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod15541;
        if (tmp12) {
          tmp12 = !tmp10(15571)(tmp2, tmp5, tmp9);
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
