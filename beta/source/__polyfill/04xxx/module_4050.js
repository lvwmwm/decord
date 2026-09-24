// Module ID: 4050
// Function ID: 4051
// Dependencies: [3885, 4030, 3882]
// Exports: default

// Module 4050
import module_3885_mod from "module_3885" /* 3885 */;
import module_4030_mod from "module_4030" /* 4030 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj = { default: module_3885 };
  let tmp3 = obj;
} else {
  tmp3 = module_3885;
}
module_3885 = tmp3;
let module_4030 = module_4030_mod;
if (!module_4030) {
  const obj2 = { default: module_4030 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4030;
}
module_4030 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4030.default(interval, 12 * module_3885.default(arg1));
};
export default exports.default;
