// Module ID: 4205
// Function ID: 4206
// Dependencies: [3877, 3878, 3881]
// Exports: default

// Module 4205
import _typeof_mod from "module_3877" /* 3877 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;
import module_3881_mod from "module_3881" /* 3881 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj3 = { default: module_3881 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3881;
}
module_3881 = tmp7;

export default function setUTCISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = module_3881.default(arg1);
  let diff = defaultResult1;
  if (defaultResult1 % 7 === 0) {
    diff = defaultResult1 - 7;
  }
  const defaultResult2 = _typeof.default(arg0);
  let num = 0;
  const uTCDay = defaultResult2.getUTCDay();
  if ((diff % 7 + 7) % 7 < 1) {
    num = 7;
  }
  const diff1 = num + diff - uTCDay;
  defaultResult2.setUTCDate(defaultResult2.getUTCDate() + diff1);
  return defaultResult2;
};
export default exports.default;
