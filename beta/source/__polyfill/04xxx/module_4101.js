// Module ID: 4101
// Function ID: 4102
// Dependencies: [4097, 3850]
// Exports: default

// Module 4101
import module_4097_mod from "module_4097" /* 4097 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4097 = module_4097_mod;
if (!module_4097) {
  const obj = { default: module_4097 };
  let tmp3 = obj;
} else {
  tmp3 = module_4097;
}
module_4097 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4097.default(arg0, Date.now(), arg1);
};
export default exports.default;
