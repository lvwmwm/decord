// Module ID: 4235
// Function ID: 4236
// Dependencies: [4227, 3878]
// Exports: default

// Module 4235
import module_4227_mod from "module_4227" /* 4227 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4227 = module_4227_mod;
if (!module_4227) {
  const obj = { default: module_4227 };
  let tmp3 = obj;
} else {
  tmp3 = module_4227;
}
module_4227 = tmp3;
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
  return module_4227.default(Date.now(), arg0);
};
export default exports.default;
