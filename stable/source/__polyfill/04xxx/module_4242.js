// Module ID: 4242
// Function ID: 4243
// Dependencies: [4058, 3878]
// Exports: default

// Module 4242
import module_4058_mod from "module_4058" /* 4058 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4058 = module_4058_mod;
if (!module_4058) {
  const obj = { default: module_4058 };
  let tmp3 = obj;
} else {
  tmp3 = module_4058;
}
module_4058 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4058.default(arg0, Date.now());
};
export default exports.default;
