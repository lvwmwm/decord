// Module ID: 1468
// Function ID: 1469
// Name: regexTester
// Dependencies: [1341, 1469, 1308]

// Module 1468 (regexTester)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;

const require = globalThis.__r;
let _require;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  let closure_0;
  _require = arg0;
  const tmp = _require;
  if (require("module_1469")(arg0)) {
    return function test(arg0) {
      return null !== closure_2(closure_0, arg0);
    };
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new tmp(1308)("`regex` must be a RegExp");
    throw tmp3;
  }
};
