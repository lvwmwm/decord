// Module ID: 1446
// Function ID: 1447
// Name: regexTester
// Dependencies: [1316, 1447, 1283]

// Module 1446 (regexTester)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  const _require = arg0;
  if (_require(1447)(arg0)) {
    return function test(arg0) {
      return null !== closure_1_2(closure_0, arg0);
    };
  } else {
    const tmp5 = new tmp(1283)("`regex` must be a RegExp");
    throw tmp5;
  }
  tmp = _require;
};
