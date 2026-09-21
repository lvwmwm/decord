// Module ID: 4206
// Function ID: 4207
// Dependencies: [4196, 3850]
// Exports: default

// Module 4206
import module_4196_mod from "module_4196" /* 4196 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4196 = module_4196_mod;
if (!module_4196) {
  const obj = { default: module_4196 };
  let tmp3 = obj;
} else {
  tmp3 = module_4196;
}
module_4196 = tmp3;
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
  return module_4196.default(arg0, Date.now());
};
export default exports.default;
