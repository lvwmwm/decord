// Module ID: 4201
// Function ID: 4202
// Dependencies: [4199, 3949]
// Exports: default

// Module 4201
import module_4199_mod from "module_4199" /* 4199 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

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

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4199.default(arg0, Date.now(), arg1);
};
export default exports.default;
