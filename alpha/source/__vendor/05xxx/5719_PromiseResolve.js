// Module ID: 5719
// Function ID: 5720
// Name: PromiseResolve
// Dependencies: [1305, 1474, 1327]

// Module 5719 (PromiseResolve)
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import _mod1327 from "module_1327" /* 1327 */;
import callBind from "callBind" /* 1474 */;

const tmp = GetIntrinsic("%Promise.resolve%", true);
let closure_2 = tmp && callBind(tmp);
const tmp2 = tmp && callBind(tmp);

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const self = this;
    const self2 = this;
    const tmp4 = new _mod1327("This environment does not support Promises.");
    throw tmp4;
  }
};
