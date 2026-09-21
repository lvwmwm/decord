// Module ID: 1450
// Function ID: 1451
// Dependencies: [1451, 1449, 1319, 1291]

// Module 1450
import _mod1291 from "module_1291" /* 1291 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import _mod1449 from "module_1449" /* 1449 */;
import regexTester from "regexTester" /* 1451 */;

let closure_3 = regexTester(/^\s*(?:function)?\*/);
let closure_4 = _mod1449();
let closure_5 = callBoundIntrinsic("Object.prototype.toString");
let closure_6 = callBoundIntrinsic("Function.prototype.toString");

export default function isGeneratorFunction(fn) {
  if (typeof fn !== "function") {
    return false;
  } else if (closure_3(closure_6(fn))) {
    return true;
  } else if (closure_4) {
    if (_mod1291) {
      if (undefined === closure_2) {
        const tmp6 = (() => {
          if (closure_1_4) {
            try {
              const _Function = Function;
              return Function("return function*() {}")();
            } catch (err) {
            }
          } else {
            return false;
          }
        })();
        closure_2 = tmp6 && tmp3(1291)(tmp6);
        const tmp7 = tmp6 && tmp3(1291)(tmp6);
      }
      return tmp3(1291)(fn) === closure_2;
    } else {
      return false;
    }
  } else {
    return "[object GeneratorFunction]" === closure_5(fn);
  }
};
