// Module ID: 4243
// Function ID: 4244
// Dependencies: [4025, 4058, 3878]
// Exports: default

// Module 4243
import module_4025_mod from "module_4025" /* 4025 */;
import module_4058_mod from "module_4058" /* 4058 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4025 = module_4025_mod;
if (!module_4025) {
  const obj = { default: module_4025 };
  let tmp3 = obj;
} else {
  tmp3 = module_4025;
}
module_4025 = tmp3;
let module_4058 = module_4058_mod;
if (!module_4058) {
  const obj2 = { default: module_4058 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4058;
}
module_4058 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4058.default(arg0, module_4025.default(Date.now(), 1));
};
export default exports.default;
