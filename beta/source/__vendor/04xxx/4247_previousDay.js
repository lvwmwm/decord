// Module ID: 4247
// Function ID: 4248
// Name: previousDay
// Dependencies: [3850, 4112, 4220]
// Exports: default

// Module 4247 (previousDay)
import requiredArgs_mod from "requiredArgs" /* 3850 */;
import module_4112_mod from "module_4112" /* 4112 */;
import subDays_mod from "subDays" /* 4220 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_4112 = module_4112_mod;
if (!module_4112) {
  const obj2 = { default: module_4112 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4112;
}
module_4112 = tmp5;
let subDays = subDays_mod;
if (!subDays) {
  const obj3 = { default: subDays };
  let tmp7 = obj3;
} else {
  tmp7 = subDays;
}
subDays = tmp7;

export default function previousDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = module_4112.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;
