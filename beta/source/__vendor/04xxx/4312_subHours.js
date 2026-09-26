// Module ID: 4312
// Function ID: 4313
// Name: subHours
// Dependencies: [4031, 3878, 3881]
// Exports: default

// Module 4312 (subHours)
import module_4031_mod from "module_4031" /* 4031 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;
import module_3881_mod from "module_3881" /* 3881 */;

let module_4031 = module_4031_mod;
if (!module_4031) {
  const obj = { default: module_4031 };
  let tmp3 = obj;
} else {
  tmp3 = module_4031;
}
module_4031 = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4031.default(arg0, -module_3881.default(arg1));
};
export default exports.default;
