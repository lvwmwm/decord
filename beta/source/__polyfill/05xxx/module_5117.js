// Module ID: 5117
// Function ID: 5118
// Dependencies: [1327, 1297, 1454]

// Module 5117
import hasNativeSymbols from "hasNativeSymbols" /* 1297 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;
import regexTester from "regexTester" /* 1454 */;

let closure_0 = callBoundIntrinsic("Object.prototype.toString");
if (hasNativeSymbols()) {
  let closure_1 = callBoundIntrinsic("Symbol.prototype.toString");
  let closure_2 = regexTester(/^Symbol\(.*\)$/);
  module.exports = function isSymbol(obj) {
    function isRealSymbolObject(arg0) {
      const valueOfResult = arg0.valueOf();
      let tmp2 = typeof valueOfResult === "symbol";
      if (typeof valueOfResult === "symbol") {
        tmp2 = closure_1_2(closure_1_1(arg0));
      }
      return tmp2;
    }
    if (typeof obj === "symbol") {
      return true;
    } else {
      if (obj) {
        if (typeof obj === "object") {
          if ("[object Symbol]" === closure_0(obj)) {
            try {
              return isRealSymbolObject(obj);
            } catch (err) {
              return false;
            }
          }
        }
      }
      return false;
    }
  };
} else {
  module.exports = function isSymbol(arg0) {
    return false;
  };
}
