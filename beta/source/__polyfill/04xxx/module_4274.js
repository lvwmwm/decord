// Module ID: 4274
// Function ID: 4275
// Dependencies: [4130, 3849, 3850, 3853]
// Exports: default

// Module 4274
import module_4130_mod from "module_4130" /* 4130 */;
import _typeof_mod from "module_3849" /* 3849 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;
import module_3853_mod from "module_3853" /* 3853 */;

let module_4130 = module_4130_mod;
if (!module_4130) {
  const obj = { default: module_4130 };
  let tmp3 = obj;
} else {
  tmp3 = module_4130;
}
module_4130 = tmp3;
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
let module_3853 = module_3853_mod;
if (!module_3853) {
  const obj4 = { default: module_3853 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3853;
}
module_3853 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4130.default(defaultResult1, arg2) - module_3853.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
