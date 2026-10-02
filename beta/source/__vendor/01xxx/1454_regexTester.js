// Module ID: 1454
// Function ID: 1455
// Name: regexTester
// Dependencies: [1327, 1455, 1294]

// Module 1454 (regexTester)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;

const require = globalThis.__r;
let _require;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  let closure_0;
  _require = arg0;
  const tmp = _require;
  if (require("module_1455")(arg0)) {
    return function test(arg0) {
      return null !== closure_2(closure_0, arg0);
    };
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new tmp(1294)("`regex` must be a RegExp");
    throw tmp3;
  }
};
