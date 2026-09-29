// Module ID: 4311
// Function ID: 4312
// Name: subBusinessDays
// Dependencies: [4027, 3878, 3881]
// Exports: default

// Module 4311 (subBusinessDays)
import module_4027_mod from "module_4027" /* 4027 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;
import module_3881_mod from "module_3881" /* 3881 */;

let module_4027 = module_4027_mod;
if (!module_4027) {
  const obj = { default: module_4027 };
  let tmp3 = obj;
} else {
  tmp3 = module_4027;
}
module_4027 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj3 = { default: module_3881 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3881;
}
module_3881 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4027.default(arg0, -module_3881.default(arg1));
};
export default exports.default;
