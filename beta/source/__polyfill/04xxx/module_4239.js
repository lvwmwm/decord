// Module ID: 4239
// Function ID: 4240
// Dependencies: [4231, 3882]
// Exports: default

// Module 4239
import module_4231_mod from "module_4231" /* 4231 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4231 = module_4231_mod;
if (!module_4231) {
  const obj = { default: module_4231 };
  let tmp3 = obj;
} else {
  tmp3 = module_4231;
}
module_4231 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4231.default(Date.now(), arg0);
};
export default exports.default;
