// Module ID: 4238
// Function ID: 4239
// Dependencies: [4230, 3878]
// Exports: default

// Module 4238
import module_4230_mod from "module_4230" /* 4230 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4230 = module_4230_mod;
if (!module_4230) {
  const obj = { default: module_4230 };
  let tmp3 = obj;
} else {
  tmp3 = module_4230;
}
module_4230 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4230.default(Date.now(), arg0);
};
export default exports.default;
