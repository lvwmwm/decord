// Module ID: 1465
// Function ID: 1466
// Name: isGeneratorFunction
// Dependencies: [1466, 1464, 1339, 1311]

// Module 1465 (isGeneratorFunction)
import _mod1311 from "module_1311" /* 1311 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import hasToStringTagShams from "hasToStringTagShams" /* 1464 */;
import regexTester from "regexTester" /* 1466 */;

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
      if (_mod1311) {
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
          closure_2 = tmp6 && _mod1311(tmp6);
          tmp6 && _mod1311(tmp6);
        }
        return _mod1311(fn) === closure_2;
      } else {
        return false;
      }
    } else {
      return "[object GeneratorFunction]" === closure_5(fn);
    }
  }
};
