// Module ID: 4268
// Function ID: 4269
// Dependencies: [3853, 3849, 3997, 4120, 3850]
// Exports: default

// Module 4268
import module_3853_mod from "module_3853" /* 3853 */;
import _typeof_mod from "module_3849" /* 3849 */;
import module_3997_mod from "module_3997" /* 3997 */;
import module_4120_mod from "module_4120" /* 4120 */;
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
let module_3997 = module_3997_mod;
if (!module_3997) {
  const obj3 = { default: module_3997 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3997;
}
module_3997 = tmp7;
let module_4120 = module_4120_mod;
if (!module_4120) {
  const obj4 = { default: module_4120 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4120;
}
module_4120 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_3997.default(defaultResult1, module_3853.default(arg1) - module_4120.default(defaultResult1));
};
export default exports.default;
