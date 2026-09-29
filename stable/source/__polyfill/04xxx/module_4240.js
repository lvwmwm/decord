// Module ID: 4240
// Function ID: 4241
// Dependencies: [4232, 3878]
// Exports: default

// Module 4240
import module_4232_mod from "module_4232" /* 4232 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4232 = module_4232_mod;
if (!module_4232) {
  const obj = { default: module_4232 };
  let tmp3 = obj;
} else {
  tmp3 = module_4232;
}
module_4232 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4232.default(arg0, Date.now());
};
export default exports.default;
