// Module ID: 1472
// Function ID: 1473
// Name: callBind
// Dependencies: [1306, 1473, 1319, 1476]

// Module 1472 (callBind)
import callBindBasic from "callBindBasic" /* 1306 */;
import flag from "flag" /* 1319 */;
import setFunctionLength from "setFunctionLength" /* 1473 */;
import applyBind from "applyBind" /* 1476 */;

if (flag) {
  const obj = { value: applyBind };
  const _module = flag;
  const _exports = module.exports;
  _module(_exports, "apply", obj);
} else {
  module.exports.apply = applyBind;
}

export default function callBind(arg0) {
  const diff = arg0.length - (arguments.length - 1);
  let num = 0;
  const tmp = callBindBasic(arguments);
  const tmp3 = setFunctionLength;
  if (0 < diff) {
    num = diff;
  }
  return tmp3(tmp, 1 + num, true);
};
