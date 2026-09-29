// Module ID: 4061
// Function ID: 4062
// Name: differenceInCalendarISOWeekYears
// Dependencies: [4034, 3878]
// Exports: default

// Module 4061 (differenceInCalendarISOWeekYears)
import module_4034_mod from "module_4034" /* 4034 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4034 = module_4034_mod;
if (!module_4034) {
  const obj = { default: module_4034 };
  let tmp3 = obj;
} else {
  tmp3 = module_4034;
}
module_4034 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4034.default(arg0) - module_4034.default(arg1);
};
export default exports.default;
