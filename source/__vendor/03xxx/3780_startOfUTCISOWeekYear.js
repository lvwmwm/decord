// Module ID: 3780
// Function ID: 3781
// Name: startOfUTCISOWeekYear
// Dependencies: [3781, 3779, 3543]
// Exports: default

// Module 3780 (startOfUTCISOWeekYear)
import getUTCISOWeekYear from "getUTCISOWeekYear" /* 3781 */;
import startOfUTCISOWeek from "startOfUTCISOWeek" /* 3779 */;
import requiredArgs from "requiredArgs" /* 3543 */;

if (!getUTCISOWeekYear) {
  let obj = { default: null };
  obj[0] = getUTCISOWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = getUTCISOWeekYear;
}
getUTCISOWeekYear = tmp3;
if (!startOfUTCISOWeek) {
  obj = { default: null };
  obj[0] = startOfUTCISOWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function startOfUTCISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setUTCFullYear(getUTCISOWeekYear.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;
