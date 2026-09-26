// Module ID: 4317
// Function ID: 4318
// Name: subYears
// Dependencies: [3881, 4046, 3878]
// Exports: default

// Module 4317 (subYears)
import module_3881_mod from "module_3881" /* 3881 */;
import module_4046_mod from "module_4046" /* 4046 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj = { default: module_3881 };
  let tmp3 = obj;
} else {
  tmp3 = module_3881;
}
module_3881 = tmp3;
let module_4046 = module_4046_mod;
if (!module_4046) {
  const obj2 = { default: module_4046 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4046;
}
module_4046 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4046.default(arg0, -module_3881.default(arg1));
};
export default exports.default;
