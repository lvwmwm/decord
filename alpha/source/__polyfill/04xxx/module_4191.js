// Module ID: 4191
// Function ID: 4192
// Dependencies: [4190, 3912]
// Exports: default

// Module 4191
import module_4190_mod from "module_4190" /* 4190 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_4190 = module_4190_mod;
if (!module_4190) {
  const obj = { default: module_4190 };
  let tmp3 = obj;
} else {
  tmp3 = module_4190;
}
module_4190 = tmp3;
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
  return Math.floor(module_4190.default(arg0) / 1000);
};
export default exports.default;
