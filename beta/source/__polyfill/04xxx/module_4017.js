// Module ID: 4017
// Function ID: 4018
// Dependencies: [3853, 3997, 3850]
// Exports: default

// Module 4017
import module_3853_mod from "module_3853" /* 3853 */;
import module_3997_mod from "module_3997" /* 3997 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_3853 = module_3853_mod;
if (!module_3853) {
  const obj = { default: module_3853 };
  let tmp3 = obj;
} else {
  tmp3 = module_3853;
}
module_3853 = tmp3;
let module_3997 = module_3997_mod;
if (!module_3997) {
  const obj2 = { default: module_3997 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3997;
}
module_3997 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3997.default(arg0, 7 * module_3853.default(arg1));
};
export default exports.default;
