// Module ID: 1372
// Function ID: 16498
// Name: isRegex
// Dependencies: [1369, 551, 519, 550]

// Module 1372 (isRegex)
import callBoundIntrinsic from "callBoundIntrinsic";

if (tmp) {
  let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");
  let closure_3 = {};
  function throwRegexMarker() {
    throw closure_3;
  }
  const obj = { toString: throwRegexMarker, valueOf: throwRegexMarker };
  const _Symbol = Symbol;
  if ("symbol" === typeof Symbol.toPrimitive) {
    const _Symbol2 = Symbol;
    obj[Symbol.toPrimitive] = throwRegexMarker;
  }
  function isRegex(arg0) {
    if (arg0) {
      if ("object" === typeof tmp) {
        const tmp6 = require(519)(tmp, "lastIndex");
        if (tmp6) {
          if (require(550) /* bind */(tmp6, "value")) {
            callback(tmp, obj);
          }
        }
        return false;
      }
    }
    return false;
  }
} else {
  let closure_5 = callBoundIntrinsic("Object.prototype.toString");
  isRegex = function isRegex(arg0) {
    let tmp = !arg0;
    if (!tmp) {
      let tmp3 = "object" !== tmp2;
      if (tmp3) {
        tmp3 = "function" !== tmp2;
      }
      tmp = tmp3;
    }
    let tmp4 = !tmp;
    if (!tmp) {
      tmp4 = "[object RegExp]" === callback2(arg0);
    }
    return tmp4;
  };
}

export default isRegex;
