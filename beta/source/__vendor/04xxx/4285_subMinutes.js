// Module ID: 4285
// Function ID: 4286
// Name: subMinutes
// Dependencies: [4014, 3850, 3853]
// Exports: default

// Module 4285 (subMinutes)
import module_4014_mod from "module_4014" /* 4014 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;
import module_3853_mod from "module_3853" /* 3853 */;

let module_4014 = module_4014_mod;
if (!module_4014) {
  const obj = { default: module_4014 };
  let tmp3 = obj;
} else {
  tmp3 = module_4014;
}
module_4014 = tmp3;
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

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4014.default(arg0, -module_3853.default(arg1));
};
export default exports.default;
