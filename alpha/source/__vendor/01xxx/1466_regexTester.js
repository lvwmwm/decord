// Module ID: 1466
// Function ID: 1467
// Name: regexTester
// Dependencies: [1339, 1467, 1306]

// Module 1466 (regexTester)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;

const require = globalThis.__r;
let _require;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  let closure_0;
  _require = arg0;
  const tmp = _require;
  if (require("module_1467")(arg0)) {
    return function test(arg0) {
      return null !== closure_2(closure_0, arg0);
    };
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new tmp(1306)("`regex` must be a RegExp");
    throw tmp3;
  }
};
