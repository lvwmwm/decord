// Module ID: 4157
// Function ID: 4158
// Dependencies: [4156, 3878]
// Exports: default

// Module 4157
import module_4156_mod from "module_4156" /* 4156 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4156 = module_4156_mod;
if (!module_4156) {
  const obj = { default: module_4156 };
  let tmp3 = obj;
} else {
  tmp3 = module_4156;
}
module_4156 = tmp3;
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
  return Math.floor(module_4156.default(arg0) / 1000);
};
export default exports.default;
