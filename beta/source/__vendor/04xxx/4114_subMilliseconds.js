// Module ID: 4114
// Function ID: 4115
// Name: subMilliseconds
// Dependencies: [4036, 3882, 3885]
// Exports: default

// Module 4114 (subMilliseconds)
import module_4036_mod from "module_4036" /* 4036 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;
import module_3885_mod from "module_3885" /* 3885 */;

let module_4036 = module_4036_mod;
if (!module_4036) {
  const obj = { default: module_4036 };
  let tmp3 = obj;
} else {
  tmp3 = module_4036;
}
module_4036 = tmp3;
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

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4036.default(arg0, -module_3885.default(arg1));
};
export default exports.default;
