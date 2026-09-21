// Module ID: 4220
// Function ID: 4221
// Name: subDays
// Dependencies: [3997, 3850, 3853]
// Exports: default

// Module 4220 (subDays)
import module_3997_mod from "module_3997" /* 3997 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;
import module_3853_mod from "module_3853" /* 3853 */;

let module_3997 = module_3997_mod;
if (!module_3997) {
  const obj = { default: module_3997 };
  let tmp3 = obj;
} else {
  tmp3 = module_3997;
}
module_3997 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3853 = module_3853_mod;
if (!module_3853) {
  const obj3 = { default: module_3853 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3853;
}
module_3853 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3997.default(arg0, -module_3853.default(arg1));
};
export default exports.default;
