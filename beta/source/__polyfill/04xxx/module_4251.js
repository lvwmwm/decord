// Module ID: 4251
// Function ID: 4252
// Dependencies: [4062, 4252, 3882]
// Exports: default

// Module 4251
import module_4062_mod from "module_4062" /* 4062 */;
import subDays_mod from "subDays" /* 4252 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4062 = module_4062_mod;
if (!module_4062) {
  const obj = { default: module_4062 };
  let tmp3 = obj;
} else {
  tmp3 = module_4062;
}
module_4062 = tmp3;
let subDays = subDays_mod;
if (!subDays) {
  const obj2 = { default: subDays };
  let tmp5 = obj2;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4062.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;
