// Module ID: 1449
// Function ID: 1450
// Dependencies: [1446, 1315, 1283, 1314]

// Module 1449
import _mod1283 from "module_1283" /* 1283 */;
import hasToStringTagShams from "hasToStringTagShams" /* 1446 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;

let isRegex;
let tmp = hasToStringTagShams();
if (tmp) {
  let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");
  let closure_3 = {};
  function throwRegexMarker() {
    throw closure_3;
  }
  const obj = { toString: throwRegexMarker, valueOf: throwRegexMarker };
  let tmp3 = globalThis;
  const _Symbol = Symbol;
  if (typeof Symbol.toPrimitive === "symbol") {
    const _Symbol2 = Symbol;
    obj[Symbol.toPrimitive] = throwRegexMarker;
  }
  isRegex = function isRegex(obj) {
    const tmp = obj;
    if (tmp) {
      if (typeof obj === "object") {
        const tmp9 = _mod1283(obj, "lastIndex");
        const tmp7 = require;
        if (tmp9) {
          if (tmp7(1314)(tmp9, "value")) {
            try {
              closure_2(obj, obj);
            } catch (tmp5) {
              return tmp5 === closure_3;
            }
          }
        }
        return false;
      }
    }
    return false;
  };
} else {
  let closure_5 = callBoundIntrinsic("Object.prototype.toString");
  isRegex = function isRegex(obj) {
    let tmp = !obj;
    if (obj) {
      let tmp2 = typeof obj !== "object";
      if (typeof obj !== "object") {
        tmp2 = typeof obj !== "function";
      }
      tmp = tmp2;
    }
    const tmp3 = !tmp && "[object RegExp]" === closure_5(obj);
    return tmp3;
  };
}

export default isRegex;
