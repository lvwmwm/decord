// Module ID: 5718
// Function ID: 5719
// Name: PromiseResolve
// Dependencies: [1304, 1473, 1326]

// Module 5718 (PromiseResolve)
import GetIntrinsic from "GetIntrinsic" /* 1304 */;
import _mod1326 from "module_1326" /* 1326 */;
import callBind from "callBind" /* 1473 */;

const tmp = GetIntrinsic("%Promise.resolve%", true);
let closure_2 = tmp && callBind(tmp);
const tmp2 = tmp && callBind(tmp);

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const self = this;
    const self2 = this;
    const tmp4 = new _mod1326("This environment does not support Promises.");
    throw tmp4;
  }
};
