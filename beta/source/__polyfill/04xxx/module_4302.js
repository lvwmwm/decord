// Module ID: 4302
// Function ID: 4303
// Dependencies: [4158, 3877, 3878, 3881]
// Exports: default

// Module 4302
import module_4158_mod from "module_4158" /* 4158 */;
import _typeof_mod from "module_3877" /* 3877 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;
import module_3881_mod from "module_3881" /* 3881 */;

let module_4158 = module_4158_mod;
if (!module_4158) {
  const obj = { default: module_4158 };
  let tmp3 = obj;
} else {
  tmp3 = module_4158;
}
module_4158 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj4 = { default: module_3881 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3881;
}
module_3881 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4158.default(defaultResult1, arg2) - module_3881.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
