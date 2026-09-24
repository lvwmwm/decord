// Module ID: 4247
// Function ID: 4248
// Dependencies: [4029, 4062, 3882]
// Exports: default

// Module 4247
import module_4029_mod from "module_4029" /* 4029 */;
import module_4062_mod from "module_4062" /* 4062 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4029 = module_4029_mod;
if (!module_4029) {
  const obj = { default: module_4029 };
  let tmp3 = obj;
} else {
  tmp3 = module_4029;
}
module_4029 = tmp3;
let module_4062 = module_4062_mod;
if (!module_4062) {
  const obj2 = { default: module_4062 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4062;
}
module_4062 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4062.default(arg0, module_4029.default(Date.now(), 1));
};
export default exports.default;
