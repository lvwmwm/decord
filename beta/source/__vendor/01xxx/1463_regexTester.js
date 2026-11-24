// Module ID: 1463
// Function ID: 1464
// Name: regexTester
// Dependencies: [1328, 1464, 1295]

// Module 1463 (regexTester)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1328 */;

const require = globalThis.__r;
let _require;

let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");

export default function regexTester(arg0) {
  let closure_0;
  _require = arg0;
  const tmp = _require;
  if (require("module_1464")(arg0)) {
    return function test(arg0) {
      return null !== closure_2(closure_0, arg0);
    };
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new tmp(1295)("`regex` must be a RegExp");
    throw tmp3;
  }
};
