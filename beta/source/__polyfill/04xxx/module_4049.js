// Module ID: 4049
// Function ID: 4050
// Dependencies: [3885, 4029, 3882]
// Exports: default

// Module 4049
import module_3885_mod from "module_3885" /* 3885 */;
import module_4029_mod from "module_4029" /* 4029 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj = { default: module_3885 };
  let tmp3 = obj;
} else {
  tmp3 = module_3885;
}
module_3885 = tmp3;
let module_4029 = module_4029_mod;
if (!module_4029) {
  const obj2 = { default: module_4029 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4029;
}
module_4029 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4029.default(arg0, 7 * module_3885.default(arg1));
};
export default exports.default;
