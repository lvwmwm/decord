// Module ID: 14287
// Function ID: 14288
// Name: assign
// Dependencies: [14230, 14227, 14226, 14288, 14247, 14276, 14261, 14229, 14256]

// Module 14287 (assign)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14226 */;
import _mod14227 from "module_14227" /* 14227 */;
import _mod14229 from "module_14229" /* 14229 */;
import call from "call" /* 14230 */;
import _mod14247 from "module_14247" /* 14247 */;
import _mod14276 from "module_14276" /* 14276 */;

let closure_4 = call([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14247(arg0);
    const f = _mod14276.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = _mod14229(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(14288)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(14288)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(14256)(tmp2, tmp5, tmp9);
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
