// Module ID: 4238
// Function ID: 4239
// Dependencies: [4228, 3882]
// Exports: default

// Module 4238
import module_4228_mod from "module_4228" /* 4228 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4228 = module_4228_mod;
if (!module_4228) {
  const obj = { default: module_4228 };
  let tmp3 = obj;
} else {
  tmp3 = module_4228;
}
module_4228 = tmp3;
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
  return module_4228.default(arg0, Date.now());
};
export default exports.default;
