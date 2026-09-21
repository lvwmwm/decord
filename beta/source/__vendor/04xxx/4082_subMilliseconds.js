// Module ID: 4082
// Function ID: 4083
// Name: subMilliseconds
// Dependencies: [4004, 3850, 3853]
// Exports: default

// Module 4082 (subMilliseconds)
import module_4004_mod from "module_4004" /* 4004 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;
import module_3853_mod from "module_3853" /* 3853 */;

let module_4004 = module_4004_mod;
if (!module_4004) {
  const obj = { default: module_4004 };
  let tmp3 = obj;
} else {
  tmp3 = module_4004;
}
module_4004 = tmp3;
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

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4004.default(arg0, -module_3853.default(arg1));
};
export default exports.default;
