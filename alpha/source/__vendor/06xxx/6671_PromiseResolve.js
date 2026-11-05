// Module ID: 6671
// Function ID: 6672
// Name: PromiseResolve
// Dependencies: [1292, 1470, 1314]

// Module 6671 (PromiseResolve)
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import _mod1314 from "module_1314" /* 1314 */;
import callBind from "callBind" /* 1470 */;

const tmp = GetIntrinsic("%Promise.resolve%", true);
let closure_2 = tmp && callBind(tmp);
const tmp2 = tmp && callBind(tmp);

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const self = this;
    const self2 = this;
    const tmp4 = new _mod1314("This environment does not support Promises.");
    throw tmp4;
  }
};
