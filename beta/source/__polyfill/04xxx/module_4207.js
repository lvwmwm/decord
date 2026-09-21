// Module ID: 4207
// Function ID: 4208
// Dependencies: [4199, 3850]
// Exports: default

// Module 4207
import module_4199_mod from "module_4199" /* 4199 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4199 = module_4199_mod;
if (!module_4199) {
  const obj = { default: module_4199 };
  let tmp3 = obj;
} else {
  tmp3 = module_4199;
}
module_4199 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4199.default(Date.now(), arg0);
};
export default exports.default;
