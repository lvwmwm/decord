// Module ID: 5171
// Function ID: 5172
// Name: PromiseResolve
// Dependencies: [1293, 1462, 1315]

// Module 5171 (PromiseResolve)
import GetIntrinsic from "GetIntrinsic" /* 1293 */;
import _mod1315 from "module_1315" /* 1315 */;
import callBind from "callBind" /* 1462 */;

const tmp = GetIntrinsic("%Promise.resolve%", true);
let closure_2 = tmp && callBind(tmp);
const tmp2 = tmp && callBind(tmp);

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const self = this;
    const self2 = this;
    const tmp4 = new _mod1315("This environment does not support Promises.");
    throw tmp4;
  }
};
