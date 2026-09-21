// Module ID: 4205
// Function ID: 4206
// Dependencies: [4197, 3846]
// Exports: default

// Module 4205
import module_4197_mod from "module_4197" /* 4197 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

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

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4197.default(Date.now(), arg0);
};
export default exports.default;
