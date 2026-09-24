// Module ID: 5055
// Function ID: 5056
// Dependencies: [1319, 1289, 1451]

// Module 5055
import _Symbol from "_Symbol" /* 1289 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import regexTester from "regexTester" /* 1451 */;

let closure_0 = callBoundIntrinsic("Object.prototype.toString");
if (_Symbol()) {
  let closure_1 = callBoundIntrinsic("Symbol.prototype.toString");
  let closure_2 = regexTester(/^Symbol\(.*\)$/);
  module.exports = function isSymbol(obj) {
    if (typeof obj === "symbol") {
      return true;
    } else {
      if (obj) {
        if (typeof obj === "object") {
          if ("[object Symbol]" === closure_0(obj)) {
            try {
              return (function isRealSymbolObject(arg0) {
                const valueOfResult = arg0.valueOf();
                let tmp2 = typeof valueOfResult === "symbol";
                if (typeof valueOfResult === "symbol") {
                  tmp2 = closure_1_2(closure_1_1(arg0));
                }
                return tmp2;
              })(obj);
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
