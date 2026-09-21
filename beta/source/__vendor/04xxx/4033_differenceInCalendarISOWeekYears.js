// Module ID: 4033
// Function ID: 4034
// Name: differenceInCalendarISOWeekYears
// Dependencies: [4006, 3850]
// Exports: default

// Module 4033 (differenceInCalendarISOWeekYears)
import module_4006_mod from "module_4006" /* 4006 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4006 = module_4006_mod;
if (!module_4006) {
  const obj = { default: module_4006 };
  let tmp3 = obj;
} else {
  tmp3 = module_4006;
}
module_4006 = tmp3;
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
  return module_4006.default(arg0) - module_4006.default(arg1);
};
export default exports.default;
