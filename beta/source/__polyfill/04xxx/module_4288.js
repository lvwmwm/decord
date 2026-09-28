// Module ID: 4288
// Function ID: 4289
// Dependencies: [4099, 4289, 3919]
// Exports: default

// Module 4288
import module_4099_mod from "module_4099" /* 4099 */;
import subDays_mod from "subDays" /* 4289 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_4099 = module_4099_mod;
if (!module_4099) {
  const obj = { default: module_4099 };
  let tmp3 = obj;
} else {
  tmp3 = module_4099;
}
module_4099 = tmp3;
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
  return module_4099.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;
