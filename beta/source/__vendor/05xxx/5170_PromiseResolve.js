// Module ID: 5170
// Function ID: 5171
// Name: PromiseResolve
// Dependencies: [1281, 1456, 1303]

// Module 5170 (PromiseResolve)
import GetIntrinsic from "GetIntrinsic" /* 1281 */;
import _mod1303 from "module_1303" /* 1303 */;
import callBind from "callBind" /* 1456 */;

const tmp = GetIntrinsic("%Promise.resolve%", true);
let closure_2 = tmp && callBind(tmp);
const tmp2 = tmp && callBind(tmp);

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const self = this;
    const self2 = this;
    const tmp4 = new _mod1303("This environment does not support Promises.");
    throw tmp4;
  }
};
