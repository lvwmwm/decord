// Module ID: 1474
// Function ID: 1475
// Name: callBind
// Dependencies: [1315, 1475, 1328, 1478]

// Module 1474 (callBind)
import callBindBasic from "callBindBasic" /* 1315 */;
import flag from "flag" /* 1328 */;
import setFunctionLength from "setFunctionLength" /* 1475 */;
import applyBind from "applyBind" /* 1478 */;

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
