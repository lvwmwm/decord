// Module ID: 4161
// Function ID: 4162
// Dependencies: [4160, 3882]
// Exports: default

// Module 4161
import module_4160_mod from "module_4160" /* 4160 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj = { default: module_4160 };
  let tmp3 = obj;
} else {
  tmp3 = module_4160;
}
module_4160 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_4160.default(arg0) / 1000);
};
export default exports.default;
