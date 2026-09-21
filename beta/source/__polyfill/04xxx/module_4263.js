// Module ID: 4263
// Function ID: 4264
// Dependencies: [3853, 3849, 3850]
// Exports: default

// Module 4263
import module_3853_mod from "module_3853" /* 3853 */;
import _typeof_mod from "module_3849" /* 3849 */;
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setDate(module_3853, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3853);
  defaultResult1.setDate(module_3853.default(arg1));
  return defaultResult1;
};
export default exports.default;
