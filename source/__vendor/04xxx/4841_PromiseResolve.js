// Module ID: 4841
// Function ID: 4842
// Name: PromiseResolve
// Dependencies: [537, 1418, 559]

// Module 4841 (PromiseResolve)
import getEvalledConstructor from "getEvalledConstructor" /* 537 */;
import _mod559 from "module_559" /* 559 */;
import callBind from "callBind" /* 1418 */;

const tmp = getEvalledConstructor("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = callBind(tmp);
}
let closure_2 = tmp2;

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const tmp6 = new _mod559("This environment does not support Promises.");
    throw tmp6;
  }
};
