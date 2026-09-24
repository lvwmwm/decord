// Module ID: 4246
// Function ID: 4247
// Dependencies: [4062, 3882]
// Exports: default

// Module 4246
import module_4062_mod from "module_4062" /* 4062 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4062 = module_4062_mod;
if (!module_4062) {
  const obj = { default: module_4062 };
  let tmp3 = obj;
} else {
  tmp3 = module_4062;
}
module_4062 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4062.default(arg0, Date.now());
};
export default exports.default;
