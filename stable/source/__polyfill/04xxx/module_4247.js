// Module ID: 4247
// Function ID: 4248
// Dependencies: [4058, 4248, 3878]
// Exports: default

// Module 4247
import module_4058_mod from "module_4058" /* 4058 */;
import subDays_mod from "subDays" /* 4248 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4058 = module_4058_mod;
if (!module_4058) {
  const obj = { default: module_4058 };
  let tmp3 = obj;
} else {
  tmp3 = module_4058;
}
module_4058 = tmp3;
let subDays = subDays_mod;
if (!subDays) {
  const obj2 = { default: subDays };
  let tmp5 = obj2;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4058.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;
