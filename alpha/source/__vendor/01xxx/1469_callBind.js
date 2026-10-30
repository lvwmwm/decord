// Module ID: 1469
// Function ID: 1470
// Name: callBind
// Dependencies: [1304, 1470, 1317, 1473]

// Module 1469 (callBind)
import callBindBasic from "callBindBasic" /* 1304 */;
import flag from "flag" /* 1317 */;
import setFunctionLength from "setFunctionLength" /* 1470 */;
import applyBind from "applyBind" /* 1473 */;

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
