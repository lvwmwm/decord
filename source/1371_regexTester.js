// Module ID: 1371
// Function ID: 16496
// Name: regexTester
// Dependencies: [551, 1372, 518]

// Module 1371 (regexTester)
let closure_2 = require("callBoundIntrinsic")("RegExp.prototype.exec");

export default function regexTester(arg0) {
  const _require = arg0;
  if (_require(1372)(arg0)) {
    return function test(arg0) {
      return null !== outer1_2(closure_0, arg0);
    };
  } else {
    let tmp3 = _require(518);
    const prototype = tmp3.prototype;
    tmp3 = new tmp3("`regex` must be a RegExp");
    throw tmp3;
  }
};
