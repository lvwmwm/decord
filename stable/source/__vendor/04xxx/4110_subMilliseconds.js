// Module ID: 4110
// Function ID: 4111
// Name: subMilliseconds
// Dependencies: [4032, 3878, 3881]
// Exports: default

// Module 4110 (subMilliseconds)
import module_4032_mod from "module_4032" /* 4032 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;
import module_3881_mod from "module_3881" /* 3881 */;

let module_4032 = module_4032_mod;
if (!module_4032) {
  const obj = { default: module_4032 };
  let tmp3 = obj;
} else {
  tmp3 = module_4032;
}
module_4032 = tmp3;
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

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4032.default(arg0, -module_3881.default(arg1));
};
export default exports.default;
