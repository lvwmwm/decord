// Module ID: 3726
// Function ID: 3727
// Name: differenceInCalendarISOWeekYears
// Dependencies: [3699, 3543]
// Exports: default

// Module 3726 (differenceInCalendarISOWeekYears)
import getISOWeekYear from "getISOWeekYear" /* 3699 */;
import requiredArgs from "requiredArgs" /* 3543 */;

if (!getISOWeekYear) {
  let obj = { default: null };
  obj[0] = getISOWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = getISOWeekYear;
}
getISOWeekYear = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return getISOWeekYear.default(arg0) - getISOWeekYear.default(arg1);
};
export default exports.default;
