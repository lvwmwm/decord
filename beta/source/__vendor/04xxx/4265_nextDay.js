// Module ID: 4265
// Function ID: 4266
// Name: nextDay
// Dependencies: [4025, 4140, 3878]
// Exports: default

// Module 4265 (nextDay)
import module_4025_mod from "module_4025" /* 4025 */;
import module_4140_mod from "module_4140" /* 4140 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4025 = module_4025_mod;
if (!module_4025) {
  const obj = { default: module_4025 };
  let tmp3 = obj;
} else {
  tmp3 = module_4025;
}
module_4025 = tmp3;
let module_4140 = module_4140_mod;
if (!module_4140) {
  const obj2 = { default: module_4140 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4140;
}
module_4140 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_4140.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4025.default(arg0, sum);
};
export default exports.default;
