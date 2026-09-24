// Module ID: 4306
// Function ID: 4307
// Dependencies: [4162, 3881, 3882, 3885]
// Exports: default

// Module 4306
import module_4162_mod from "module_4162" /* 4162 */;
import _typeof_mod from "module_3881" /* 3881 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;
import module_3885_mod from "module_3885" /* 3885 */;

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
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
let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj4 = { default: module_3885 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3885;
}
module_3885 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4162.default(defaultResult1, arg2) - module_3885.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
