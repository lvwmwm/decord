// Module ID: 4130
// Function ID: 4131
// Dependencies: [4128, 3878]
// Exports: default

// Module 4130
import module_4128_mod from "module_4128" /* 4128 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4128 = module_4128_mod;
if (!module_4128) {
  const obj = { default: module_4128 };
  let tmp3 = obj;
} else {
  tmp3 = module_4128;
}
module_4128 = tmp3;
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
  return module_4128.default(arg0, Date.now(), arg1);
};
export default exports.default;
