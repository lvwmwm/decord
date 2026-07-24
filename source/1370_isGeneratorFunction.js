// Module ID: 1370
// Function ID: 16494
// Name: isGeneratorFunction
// Dependencies: [1371, 1369, 551, 523]

// Module 1370 (isGeneratorFunction)
let closure_3 = require("regexTester")(/^\s*(?:function)?\*/);
let closure_4 = require("hasToStringTagShams")();
let closure_5 = require("callBoundIntrinsic")("Object.prototype.toString");
let closure_6 = require("callBoundIntrinsic")("Function.prototype.toString");

export default function isGeneratorFunction(arg0) {
  let closure_2;
  if ("function" !== typeof arg0) {
    return false;
  } else if (callback(callback3(arg0))) {
    return true;
  } else if (closure_4) {
    if (require(523) /* getProto */) {
      if (undefined === closure_2) {
        let flag2 = false;
        if (closure_4) {
          const _Function = Function;
          flag2 = Function("return function*() {}")();
        }
        while (true) {
          let tmp8 = !flag2;
          let tmp9 = !tmp8;
          if (tmp8) {
            break;
          } else {
            let tmp10 = require;
            let tmp11 = dependencyMap;
            tmp9 = require(523) /* getProto */(flag2);
            break;
          }
          closure_2 = tmp9;
        }
      }
      return require(523) /* getProto */(arg0) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === callback2(arg0);
  }
};
