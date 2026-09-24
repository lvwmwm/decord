// Module ID: 4317
// Function ID: 4318
// Name: subMinutes
// Dependencies: [4046, 3882, 3885]
// Exports: default

// Module 4317 (subMinutes)
import module_4046_mod from "module_4046" /* 4046 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;
import module_3885_mod from "module_3885" /* 3885 */;

let module_4046 = module_4046_mod;
if (!module_4046) {
  const obj = { default: module_4046 };
  let tmp3 = obj;
} else {
  tmp3 = module_4046;
}
module_4046 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj3 = { default: module_3885 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3885;
}
module_3885 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4046.default(arg0, -module_3885.default(arg1));
};
export default exports.default;
