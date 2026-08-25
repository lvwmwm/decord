// Module ID: 3660
// Function ID: 3661
// Name: differenceInCalendarISOWeekYears
// Dependencies: [3633, 3477]
// Exports: default

// Module 3660 (differenceInCalendarISOWeekYears)
import getISOWeekYear from "getISOWeekYear" /* 3633 */;
import requiredArgs from "requiredArgs" /* 3477 */;

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
