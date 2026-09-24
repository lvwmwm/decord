// Module ID: 4316
// Function ID: 4317
// Name: subHours
// Dependencies: [4035, 3882, 3885]
// Exports: default

// Module 4316 (subHours)
import module_4035_mod from "module_4035" /* 4035 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;
import module_3885_mod from "module_3885" /* 3885 */;

let module_4035 = module_4035_mod;
if (!module_4035) {
  const obj = { default: module_4035 };
  let tmp3 = obj;
} else {
  tmp3 = module_4035;
}
module_4035 = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4035.default(arg0, -module_3885.default(arg1));
};
export default exports.default;
