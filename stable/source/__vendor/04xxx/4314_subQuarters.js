// Module ID: 4314
// Function ID: 4315
// Name: subQuarters
// Dependencies: [3881, 4043, 3878]
// Exports: default

// Module 4314 (subQuarters)
import module_3881_mod from "module_3881" /* 3881 */;
import module_4043_mod from "module_4043" /* 4043 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj = { default: module_3881 };
  let tmp3 = obj;
} else {
  tmp3 = module_3881;
}
module_3881 = tmp3;
let module_4043 = module_4043_mod;
if (!module_4043) {
  const obj2 = { default: module_4043 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4043;
}
module_4043 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4043.default(arg0, -module_3881.default(arg1));
};
export default exports.default;
