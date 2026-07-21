// Module ID: 4389
// Function ID: 38797
// Dependencies: []

// Module 4389
let closure_0 = require(dependencyMap[0])("Object.prototype.toString");
if (require(dependencyMap[1])()) {
  let closure_1 = require(dependencyMap[0])("Symbol.prototype.toString");
  let closure_2 = require(dependencyMap[2])(/^Symbol\(.*\)$/);
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
