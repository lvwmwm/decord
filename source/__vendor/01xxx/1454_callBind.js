// Module ID: 1454
// Function ID: 1455
// Name: callBind
// Dependencies: [1293, 1455, 1306, 1458]

// Module 1454 (callBind)
import callBindBasic from "callBindBasic" /* 1293 */;
import flag from "flag" /* 1306 */;
import setFunctionLength from "setFunctionLength" /* 1455 */;
import applyBind from "applyBind" /* 1458 */;

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
