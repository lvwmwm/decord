// Module ID: 1453
// Function ID: 1454
// Name: isGeneratorFunction
// Dependencies: [1454, 1452, 1327, 1299]

// Module 1453 (isGeneratorFunction)
import _mod1299 from "module_1299" /* 1299 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;
import hasToStringTagShams from "hasToStringTagShams" /* 1452 */;
import regexTester from "regexTester" /* 1454 */;

let closure_2;

let closure_3 = regexTester(/^\s*(?:function)?\*/);
let closure_4 = hasToStringTagShams();
let closure_5 = callBoundIntrinsic("Object.prototype.toString");
let closure_6 = callBoundIntrinsic("Function.prototype.toString");

export default function isGeneratorFunction(fn) {
  if (typeof fn !== "function") {
    return false;
  } else if (closure_3(closure_6(fn))) {
    return true;
  } else {
    let tmp = closure_4;
    if (tmp) {
      if (_mod1299) {
        if (undefined === closure_2) {
          const tmp6 = (() => {
            const tmp = closure_1_4;
            if (tmp) {
              try {
                const _Function = Function;
                return Function("return function*() {}")();
              } catch (err) {
              }
            } else {
              return false;
            }
          })();
          closure_2 = tmp6 && _mod1299(tmp6);
          tmp6 && _mod1299(tmp6);
        }
        return _mod1299(fn) === closure_2;
      } else {
        return false;
      }
    } else {
      return "[object GeneratorFunction]" === closure_5(fn);
    }
  }
};
