// Module ID: 4169
// Function ID: 4170
// Dependencies: [3853, 3849, 4085, 3850]
// Exports: default

// Module 4169
import module_3853_mod from "module_3853" /* 3853 */;
import _typeof_mod from "module_3849" /* 3849 */;
import module_4085_mod from "module_4085" /* 4085 */;
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
let module_4085 = module_4085_mod;
if (!module_4085) {
  const obj3 = { default: module_4085 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4085;
}
module_4085 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4085.default(defaultResult1) - module_3853.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
