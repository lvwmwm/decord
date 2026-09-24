// Module ID: 4294
// Function ID: 4295
// Dependencies: [3885, 3881, 4146, 3882]
// Exports: default

// Module 4294
import module_3885_mod from "module_3885" /* 3885 */;
import _typeof_mod from "module_3881" /* 3881 */;
import module_4146_mod from "module_4146" /* 4146 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj = { default: module_3885 };
  let tmp3 = obj;
} else {
  tmp3 = module_3885;
}
module_3885 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4146 = module_4146_mod;
if (!module_4146) {
  const obj3 = { default: module_4146 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4146;
}
module_4146 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setMonth(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = module_3885.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_4146.default(date1)));
  return defaultResult1;
};
export default exports.default;
