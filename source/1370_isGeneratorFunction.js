// Module ID: 1370
// Function ID: 16487
// Name: isGeneratorFunction
// Dependencies: []

// Module 1370 (isGeneratorFunction)
let closure_3 = require(dependencyMap[0])(/^\s*(?:function)?\*/);
let closure_4 = require(dependencyMap[1])();
let closure_5 = require(dependencyMap[2])("Object.prototype.toString");
let closure_6 = require(dependencyMap[2])("Function.prototype.toString");

export default function isGeneratorFunction(arg0) {
  let tmp9;
  if ("function" !== typeof arg0) {
    return false;
  } else if (callback(callback3(arg0))) {
    return true;
  } else if (closure_4) {
    if (require(dependencyMap[3])) {
      if (undefined === tmp9) {
        let flag2 = false;
        if (closure_4) {
          const _Function = Function;
          flag2 = Function("return function*() {}")();
        }
        while (true) {
          let tmp8 = !flag2;
          tmp9 = !tmp8;
          if (tmp8) {
            break;
          } else {
            let tmp10 = require;
            let tmp11 = dependencyMap;
            tmp9 = require(dependencyMap[3])(flag2);
            // break
          }
        }
      }
      return require(dependencyMap[3])(arg0) === tmp9;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === callback2(arg0);
  }
};
