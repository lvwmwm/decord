// Module ID: 4064
// Function ID: 4065
// Name: differenceInCalendarQuarters
// Dependencies: [4065, 3877, 3878]
// Exports: default

// Module 4064 (differenceInCalendarQuarters)
import module_4065_mod from "module_4065" /* 4065 */;
import _typeof_mod from "module_3877" /* 3877 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4065 = module_4065_mod;
if (!module_4065) {
  const obj = { default: module_4065 };
  let tmp3 = obj;
} else {
  tmp3 = module_4065;
}
module_4065 = tmp3;
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

export default function differenceInCalendarQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  return 4 * diff + (module_4065.default(defaultResult1) - module_4065.default(defaultResult2));
};
export default exports.default;
