// Module ID: 4240
// Function ID: 4241
// Dependencies: [4232, 3882]
// Exports: default

// Module 4240
import module_4232_mod from "module_4232" /* 4232 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

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

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4232.default(Date.now(), arg0);
};
export default exports.default;
