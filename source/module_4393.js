// Module ID: 4393
// Function ID: 38837
// Dependencies: [551, 521, 1371]

// Module 4393
let closure_0 = require("callBoundIntrinsic")("Object.prototype.toString");
if (require("hasNativeSymbols")()) {
  let closure_1 = require("callBoundIntrinsic")("Symbol.prototype.toString");
  let closure_2 = require("regexTester")(/^Symbol\(.*\)$/);
  module.exports = function isSymbol(arg0) {
    if ("symbol" === typeof arg0) {
      return true;
    } else {
      if (obj) {
        if ("object" === typeof obj) {
          if ("[object Symbol]" === callback(obj)) {
            let tmp6 = "symbol" === typeof obj.valueOf();
            if (tmp6) {
              tmp6 = callback3(callback2(obj));
            }
            return tmp6;
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
