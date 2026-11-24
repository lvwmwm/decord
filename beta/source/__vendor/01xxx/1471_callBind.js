// Module ID: 1471
// Function ID: 1472
// Name: callBind
// Dependencies: [1305, 1472, 1318, 1475]

// Module 1471 (callBind)
import callBindBasic from "callBindBasic" /* 1305 */;
import flag from "flag" /* 1318 */;
import setFunctionLength from "setFunctionLength" /* 1472 */;
import applyBind from "applyBind" /* 1475 */;

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
