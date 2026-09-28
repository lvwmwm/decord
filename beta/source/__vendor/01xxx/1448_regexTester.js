// Module ID: 1448
// Function ID: 1449
// Name: regexTester
// Dependencies: [1315, 1449, 1282]

// Module 1448 (regexTester)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;

const require = globalThis.__r;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  _require = arg0;
  if (require("module_1449")(arg0)) {
    return function test(arg0) {
      return null !== closure_2(closure_0, arg0);
    };
  } else {
    const tmp5 = new tmp(1282)("`regex` must be a RegExp");
    throw tmp5;
  }
  tmp = _require;
};
