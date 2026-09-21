// Module ID: 4214
// Function ID: 4215
// Dependencies: [4030, 3850]
// Exports: default

// Module 4214
import module_4030_mod from "module_4030" /* 4030 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4030 = module_4030_mod;
if (!module_4030) {
  const obj = { default: module_4030 };
  let tmp3 = obj;
} else {
  tmp3 = module_4030;
}
module_4030 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4030.default(arg0, Date.now());
};
export default exports.default;
