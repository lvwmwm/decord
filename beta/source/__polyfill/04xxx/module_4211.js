// Module ID: 4211
// Function ID: 4212
// Dependencies: [4197, 3850]
// Exports: default

// Module 4211
import module_4197_mod from "module_4197" /* 4197 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4197 = module_4197_mod;
if (!module_4197) {
  const obj = { default: module_4197 };
  let tmp3 = obj;
} else {
  tmp3 = module_4197;
}
module_4197 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4197.default(arg0, Date.now(), arg1);
};
export default exports.default;
