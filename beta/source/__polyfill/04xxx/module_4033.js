// Module ID: 4033
// Function ID: 4034
// Dependencies: [3881, 4034, 4037, 3878]
// Exports: default

// Module 4033
import module_3881_mod from "module_3881" /* 3881 */;
import module_4034_mod from "module_4034" /* 4034 */;
import module_4037_mod from "module_4037" /* 4037 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj = { default: module_3881 };
  let tmp3 = obj;
} else {
  tmp3 = module_3881;
}
module_3881 = tmp3;
let module_4034 = module_4034_mod;
if (!module_4034) {
  const obj2 = { default: module_4034 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4034;
}
module_4034 = tmp5;
let module_4037 = module_4037_mod;
if (!module_4037) {
  const obj3 = { default: module_4037 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4037;
}
module_4037 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4037.default(arg0, module_4034.default(arg0) + module_3881.default(arg1));
};
export default exports.default;
