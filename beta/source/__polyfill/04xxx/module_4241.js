// Module ID: 4241
// Function ID: 4242
// Dependencies: [4233, 3882]
// Exports: default

// Module 4241
import module_4233_mod from "module_4233" /* 4233 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4233 = module_4233_mod;
if (!module_4233) {
  const obj = { default: module_4233 };
  let tmp3 = obj;
} else {
  tmp3 = module_4233;
}
module_4233 = tmp3;
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
  return module_4233.default(Date.now(), arg0);
};
export default exports.default;
