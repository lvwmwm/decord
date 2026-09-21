// Module ID: 4237
// Function ID: 4238
// Name: nextDay
// Dependencies: [3997, 4112, 3850]
// Exports: default

// Module 4237 (nextDay)
import module_3997_mod from "module_3997" /* 3997 */;
import module_4112_mod from "module_4112" /* 4112 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_3997 = module_3997_mod;
if (!module_3997) {
  const obj = { default: module_3997 };
  let tmp3 = obj;
} else {
  tmp3 = module_3997;
}
module_3997 = tmp3;
let module_4112 = module_4112_mod;
if (!module_4112) {
  const obj2 = { default: module_4112 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4112;
}
module_4112 = tmp5;
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
  const diff = arg1 - module_4112.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3997.default(arg0, sum);
};
export default exports.default;
