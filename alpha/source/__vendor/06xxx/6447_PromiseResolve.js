// Module ID: 6447
// Function ID: 6448
// Name: PromiseResolve
// Dependencies: [1307, 1476, 1329]

// Module 6447 (PromiseResolve)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import _mod1329 from "module_1329" /* 1329 */;
import callBind from "callBind" /* 1476 */;

const tmp = GetIntrinsic("%Promise.resolve%", true);
let closure_2 = tmp && callBind(tmp);
const tmp2 = tmp && callBind(tmp);

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const self = this;
    const self2 = this;
    const tmp4 = new _mod1329("This environment does not support Promises.");
    throw tmp4;
  }
};
