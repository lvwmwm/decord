// Module ID: 4242
// Function ID: 4243
// Dependencies: [4234, 3882]
// Exports: default

// Module 4242
import module_4234_mod from "module_4234" /* 4234 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4234 = module_4234_mod;
if (!module_4234) {
  const obj = { default: module_4234 };
  let tmp3 = obj;
} else {
  tmp3 = module_4234;
}
module_4234 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4234.default(Date.now(), arg0);
};
export default exports.default;
