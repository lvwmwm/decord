// Module ID: 4046
// Function ID: 4047
// Dependencies: [3881, 4026, 3878]
// Exports: default

// Module 4046
import module_3881_mod from "module_3881" /* 3881 */;
import module_4026_mod from "module_4026" /* 4026 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj = { default: module_3881 };
  let tmp3 = obj;
} else {
  tmp3 = module_3881;
}
module_3881 = tmp3;
let module_4026 = module_4026_mod;
if (!module_4026) {
  const obj2 = { default: module_4026 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4026;
}
module_4026 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4026.default(interval, 12 * module_3881.default(arg1));
};
export default exports.default;
