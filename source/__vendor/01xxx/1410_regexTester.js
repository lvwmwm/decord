// Module ID: 1410
// Function ID: 1411
// Name: regexTester
// Dependencies: [571, 1411, 538]

// Module 1410 (regexTester)
import callBoundIntrinsic from "callBoundIntrinsic" /* 571 */;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  const _require = arg0;
  if (_require(1411)(arg0)) {
    return function test(arg0) {
      return null !== closure_1_2(closure_0, arg0);
    };
  } else {
    const tmp5 = new tmp(538)("`regex` must be a RegExp");
    throw tmp5;
  }
  tmp = _require;
};
