// Module ID: 4016
// Function ID: 4017
// Dependencies: [3853, 4004, 3850]
// Exports: default

// Module 4016
import module_3853_mod from "module_3853" /* 3853 */;
import module_4004_mod from "module_4004" /* 4004 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_3853 = module_3853_mod;
if (!module_3853) {
  const obj = { default: module_3853 };
  let tmp3 = obj;
} else {
  tmp3 = module_3853;
}
module_3853 = tmp3;
let module_4004 = module_4004_mod;
if (!module_4004) {
  const obj2 = { default: module_4004 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4004;
}
module_4004 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4004.default(interval, 1000 * module_3853.default(arg1));
};
export default exports.default;
