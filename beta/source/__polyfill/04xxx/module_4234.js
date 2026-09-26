// Module ID: 4234
// Function ID: 4235
// Dependencies: [4224, 3878]
// Exports: default

// Module 4234
import module_4224_mod from "module_4224" /* 4224 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4224 = module_4224_mod;
if (!module_4224) {
  const obj = { default: module_4224 };
  let tmp3 = obj;
} else {
  tmp3 = module_4224;
}
module_4224 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4224.default(arg0, Date.now());
};
export default exports.default;
