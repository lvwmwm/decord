// Module ID: 1319
// Function ID: 1320
// Name: callBoundIntrinsic
// Dependencies: [1296, 1285]

// Module 1319 (callBoundIntrinsic)
import _mod1285 from "module_1285" /* 1285 */;
import callBindBasic from "callBindBasic" /* 1296 */;

let items = [_mod1285("%String.prototype.indexOf%")];
let closure_2 = callBindBasic(items);

export default function callBoundIntrinsic(arg0, arg1) {
  const tmp3 = _mod1285(arg0, arg1);
  let tmp4 = tmp3;
  if (typeof tmp3 === "function") {
    tmp4 = tmp3;
    if (closure_2(arg0, ".prototype.") > -1) {
      const items = [tmp3];
      tmp4 = callBindBasic(items);
    }
  }
  return tmp4;
};
