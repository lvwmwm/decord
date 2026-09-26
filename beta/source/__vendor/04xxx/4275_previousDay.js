// Module ID: 4275
// Function ID: 4276
// Name: previousDay
// Dependencies: [3878, 4140, 4248]
// Exports: default

// Module 4275 (previousDay)
import requiredArgs_mod from "requiredArgs" /* 3878 */;
import module_4140_mod from "module_4140" /* 4140 */;
import subDays_mod from "subDays" /* 4248 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_4140 = module_4140_mod;
if (!module_4140) {
  const obj2 = { default: module_4140 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4140;
}
module_4140 = tmp5;
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
  const diff = module_4140.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;
