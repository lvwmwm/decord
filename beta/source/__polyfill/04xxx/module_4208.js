// Module ID: 4208
// Function ID: 4209
// Dependencies: [4200, 3850]
// Exports: default

// Module 4208
import module_4200_mod from "module_4200" /* 4200 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4200 = module_4200_mod;
if (!module_4200) {
  const obj = { default: module_4200 };
  let tmp3 = obj;
} else {
  tmp3 = module_4200;
}
module_4200 = tmp3;
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
  return module_4200.default(Date.now(), arg0);
};
export default exports.default;
