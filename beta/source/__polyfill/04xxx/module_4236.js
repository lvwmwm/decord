// Module ID: 4236
// Function ID: 4237
// Dependencies: [4228, 3878]
// Exports: default

// Module 4236
import module_4228_mod from "module_4228" /* 4228 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4228 = module_4228_mod;
if (!module_4228) {
  const obj = { default: module_4228 };
  let tmp3 = obj;
} else {
  tmp3 = module_4228;
}
module_4228 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4228.default(Date.now(), arg0);
};
export default exports.default;
