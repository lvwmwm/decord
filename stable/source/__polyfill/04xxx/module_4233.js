// Module ID: 4233
// Function ID: 4234
// Dependencies: [4222, 3878]
// Exports: default

// Module 4233
import module_4222_mod from "module_4222" /* 4222 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4222 = module_4222_mod;
if (!module_4222) {
  const obj = { default: module_4222 };
  let tmp3 = obj;
} else {
  tmp3 = module_4222;
}
module_4222 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4222.default(Date.now(), arg0);
};
export default exports.default;
