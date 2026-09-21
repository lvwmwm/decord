// Module ID: 4272
// Function ID: 4273
// Dependencies: [3853, 3849, 4262, 3850]
// Exports: default

// Module 4272
import module_3853_mod from "module_3853" /* 3853 */;
import _typeof_mod from "module_3849" /* 3849 */;
import module_4262_mod from "module_4262" /* 4262 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_3853 = module_3853_mod;
if (!module_3853) {
  const obj = { default: module_3853 };
  let tmp3 = obj;
} else {
  tmp3 = module_3853;
}
module_3853 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj3 = { default: module_4262 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4262;
}
module_4262 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3853.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4262.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;
