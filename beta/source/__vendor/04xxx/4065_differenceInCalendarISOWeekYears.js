// Module ID: 4065
// Function ID: 4066
// Name: differenceInCalendarISOWeekYears
// Dependencies: [4038, 3882]
// Exports: default

// Module 4065 (differenceInCalendarISOWeekYears)
import module_4038_mod from "module_4038" /* 4038 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4038 = module_4038_mod;
if (!module_4038) {
  const obj = { default: module_4038 };
  let tmp3 = obj;
} else {
  tmp3 = module_4038;
}
module_4038 = tmp3;
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
  return module_4038.default(arg0) - module_4038.default(arg1);
};
export default exports.default;
