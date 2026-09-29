// Module ID: 4031
// Function ID: 4032
// Dependencies: [3881, 4032, 3878]
// Exports: default

// Module 4031
import module_3881_mod from "module_3881" /* 3881 */;
import module_4032_mod from "module_4032" /* 4032 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj = { default: module_3881 };
  let tmp3 = obj;
} else {
  tmp3 = module_3881;
}
module_3881 = tmp3;
let module_4032 = module_4032_mod;
if (!module_4032) {
  const obj2 = { default: module_4032 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4032;
}
module_4032 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4032.default(interval, module_3881.default(arg1) * c3);
};
export default exports.default;
