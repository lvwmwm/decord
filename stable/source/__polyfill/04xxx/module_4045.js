// Module ID: 4045
// Function ID: 4046
// Dependencies: [3881, 4025, 3878]
// Exports: default

// Module 4045
import module_3881_mod from "module_3881" /* 3881 */;
import module_4025_mod from "module_4025" /* 4025 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj = { default: module_3881 };
  let tmp3 = obj;
} else {
  tmp3 = module_3881;
}
module_3881 = tmp3;
let module_4025 = module_4025_mod;
if (!module_4025) {
  const obj2 = { default: module_4025 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4025;
}
module_4025 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4025.default(arg0, 7 * module_3881.default(arg1));
};
export default exports.default;
