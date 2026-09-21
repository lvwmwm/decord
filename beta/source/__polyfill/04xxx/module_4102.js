// Module ID: 4102
// Function ID: 4103
// Dependencies: [4100, 3850]
// Exports: default

// Module 4102
import module_4100_mod from "module_4100" /* 4100 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4100 = module_4100_mod;
if (!module_4100) {
  const obj = { default: module_4100 };
  let tmp3 = obj;
} else {
  tmp3 = module_4100;
}
module_4100 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4100.default(arg0, Date.now(), arg1);
};
export default exports.default;
