// Module ID: 4239
// Function ID: 4240
// Dependencies: [4225, 3878]
// Exports: default

// Module 4239
import module_4225_mod from "module_4225" /* 4225 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4225 = module_4225_mod;
if (!module_4225) {
  const obj = { default: module_4225 };
  let tmp3 = obj;
} else {
  tmp3 = module_4225;
}
module_4225 = tmp3;
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
  return module_4225.default(arg0, Date.now(), arg1);
};
export default exports.default;
