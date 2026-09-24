// Module ID: 4269
// Function ID: 4270
// Name: nextDay
// Dependencies: [4029, 4144, 3882]
// Exports: default

// Module 4269 (nextDay)
import module_4029_mod from "module_4029" /* 4029 */;
import module_4144_mod from "module_4144" /* 4144 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4029 = module_4029_mod;
if (!module_4029) {
  const obj = { default: module_4029 };
  let tmp3 = obj;
} else {
  tmp3 = module_4029;
}
module_4029 = tmp3;
let module_4144 = module_4144_mod;
if (!module_4144) {
  const obj2 = { default: module_4144 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4144;
}
module_4144 = tmp5;
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
  const diff = arg1 - module_4144.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4029.default(arg0, sum);
};
export default exports.default;
