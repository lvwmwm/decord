// Module ID: 4290
// Function ID: 4291
// Dependencies: [3881, 3877, 4142, 3878]
// Exports: default

// Module 4290
import module_3881_mod from "module_3881" /* 3881 */;
import _typeof_mod from "module_3877" /* 3877 */;
import module_4142_mod from "module_4142" /* 4142 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj = { default: module_3881 };
  let tmp3 = obj;
} else {
  tmp3 = module_3881;
}
module_3881 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4142 = module_4142_mod;
if (!module_4142) {
  const obj3 = { default: module_4142 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4142;
}
module_4142 = tmp7;
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
  const defaultResult2 = module_3881.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_4142.default(date1)));
  return defaultResult1;
};
export default exports.default;
