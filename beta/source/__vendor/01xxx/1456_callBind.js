// Module ID: 1456
// Function ID: 1457
// Name: callBind
// Dependencies: [1292, 1457, 1305, 1460]

// Module 1456 (callBind)
import callBindBasic from "callBindBasic" /* 1292 */;
import flag from "flag" /* 1305 */;
import setFunctionLength from "setFunctionLength" /* 1457 */;
import applyBind from "applyBind" /* 1460 */;

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
