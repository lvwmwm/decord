// Module ID: 1454
// Function ID: 1455
// Name: callBind
// Dependencies: [1291, 1455, 1304, 1458]

// Module 1454 (callBind)
import callBindBasic from "callBindBasic" /* 1291 */;
import flag from "flag" /* 1304 */;
import _mod1455 from "module_1455" /* 1455 */;
import applyBind from "applyBind" /* 1458 */;

if (flag) {
  const obj = { value: null };
  const _module = flag;
  obj.value = applyBind;
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
  return _mod1455(tmp, 1 + num, true);
};
