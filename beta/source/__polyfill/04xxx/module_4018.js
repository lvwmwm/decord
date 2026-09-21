// Module ID: 4018
// Function ID: 4019
// Dependencies: [3853, 3998, 3850]
// Exports: default

// Module 4018
import module_3853_mod from "module_3853" /* 3853 */;
import module_3998_mod from "module_3998" /* 3998 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_3853 = module_3853_mod;
if (!module_3853) {
  const obj = { default: module_3853 };
  let tmp3 = obj;
} else {
  tmp3 = module_3853;
}
module_3853 = tmp3;
let module_3998 = module_3998_mod;
if (!module_3998) {
  const obj2 = { default: module_3998 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3998;
}
module_3998 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3998.default(interval, 12 * module_3853.default(arg1));
};
export default exports.default;
