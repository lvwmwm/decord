// Module ID: 4219
// Function ID: 4220
// Dependencies: [4030, 4220, 3850]
// Exports: default

// Module 4219
import module_4030_mod from "module_4030" /* 4030 */;
import subDays_mod from "subDays" /* 4220 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4030 = module_4030_mod;
if (!module_4030) {
  const obj = { default: module_4030 };
  let tmp3 = obj;
} else {
  tmp3 = module_4030;
}
module_4030 = tmp3;
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
  return module_4030.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;
