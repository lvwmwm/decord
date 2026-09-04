// Module ID: 1418
// Function ID: 1419
// Name: callBind
// Dependencies: [548, 1419, 561, 1422]

// Module 1418 (callBind)
import callBindBasic from "callBindBasic" /* 548 */;
import flag from "flag" /* 561 */;
import setFunctionLength from "setFunctionLength" /* 1419 */;
import applyBind from "applyBind" /* 1422 */;

if (flag) {
  const obj = { value: null };
  const _module = flag;
  obj[0] = applyBind;
  _module(module.exports, "apply", obj);
} else {
  module.exports.apply = applyBind;
}

export default function callBind(arg0) {
  const diff = arg0.length - (arguments.length - 1);
  let num = 0;
  const tmp = callBindBasic(arguments);
  if (0 < diff) {
    num = diff;
  }
  return setFunctionLength(tmp, 1 + num, true);
};
