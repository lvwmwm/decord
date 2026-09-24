// Module ID: 4134
// Function ID: 4135
// Dependencies: [4132, 3882]
// Exports: default

// Module 4134
import module_4132_mod from "module_4132" /* 4132 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4132 = module_4132_mod;
if (!module_4132) {
  const obj = { default: module_4132 };
  let tmp3 = obj;
} else {
  tmp3 = module_4132;
}
module_4132 = tmp3;
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
  return module_4132.default(arg0, Date.now(), arg1);
};
export default exports.default;
