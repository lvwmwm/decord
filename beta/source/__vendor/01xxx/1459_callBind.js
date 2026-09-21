// Module ID: 1459
// Function ID: 1460
// Name: callBind
// Dependencies: [1296, 1460, 1309, 1463]

// Module 1459 (callBind)
import callBindBasic from "callBindBasic" /* 1296 */;
import flag from "flag" /* 1309 */;
import _mod1460 from "module_1460" /* 1460 */;
import applyBind from "applyBind" /* 1463 */;

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
  return _mod1460(tmp, 1 + num, true);
};
