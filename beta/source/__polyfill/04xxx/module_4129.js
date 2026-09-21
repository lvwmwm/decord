// Module ID: 4129
// Function ID: 4130
// Dependencies: [4128, 3850]
// Exports: default

// Module 4129
import module_4128_mod from "module_4128" /* 4128 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

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

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_4128.default(arg0) / 1000);
};
export default exports.default;
