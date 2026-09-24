// Module ID: 4243
// Function ID: 4244
// Dependencies: [4229, 3882]
// Exports: default

// Module 4243
import module_4229_mod from "module_4229" /* 4229 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4229 = module_4229_mod;
if (!module_4229) {
  const obj = { default: module_4229 };
  let tmp3 = obj;
} else {
  tmp3 = module_4229;
}
module_4229 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4229.default(arg0, Date.now(), arg1);
};
export default exports.default;
