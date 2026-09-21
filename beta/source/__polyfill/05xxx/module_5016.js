// Module ID: 5016
// Function ID: 5017
// Dependencies: [1319, 1449]

// Module 5016
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import _mod1449 from "module_1449" /* 1449 */;

let closure_0 = callBoundIntrinsic("String.prototype.valueOf");
let closure_1 = callBoundIntrinsic("Object.prototype.toString");
let closure_2 = _mod1449();

export default function isString(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    let tmp2 = !str;
    if (str) {
      tmp2 = typeof str !== "object";
    }
    if (tmp2) {
      tmp = !tmp2;
    } else if (closure_2) {
      let tmp5 = (function tryStringObject(arg0) {
        try {
          closure_1_0(arg0);
          return true;
        } catch (err) {
          return false;
        }
      })(str);
    } else {
      tmp5 = "[object String]" === closure_1(str);
    }
  }
  return tmp;
};
