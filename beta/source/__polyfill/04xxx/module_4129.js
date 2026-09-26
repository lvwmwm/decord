// Module ID: 4129
// Function ID: 4130
// Dependencies: [4125, 3878]
// Exports: default

// Module 4129
import module_4125_mod from "module_4125" /* 4125 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4125 = module_4125_mod;
if (!module_4125) {
  const obj = { default: module_4125 };
  let tmp3 = obj;
} else {
  tmp3 = module_4125;
}
module_4125 = tmp3;
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
  return module_4125.default(arg0, Date.now(), arg1);
};
export default exports.default;
