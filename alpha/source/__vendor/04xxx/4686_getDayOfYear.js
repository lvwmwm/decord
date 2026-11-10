// Module ID: 4686
// Function ID: 4687
// Name: getDayOfYear
// Dependencies: [4422, 4641, 4584, 4423]
// Exports: default

// Module 4686 (getDayOfYear)
import toDate_mod from "toDate" /* 4422 */;
import startOfYear_mod from "startOfYear" /* 4641 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4584 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let startOfYear = startOfYear_mod;
if (!startOfYear) {
  tmp5 = { default: startOfYear };
  const obj2 = { default: startOfYear };
} else {
  tmp5 = startOfYear;
}
startOfYear = tmp5;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  tmp7 = { default: differenceInCalendarDays };
  const obj3 = { default: differenceInCalendarDays };
} else {
  tmp7 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getDayOfYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  return differenceInCalendarDays.default(defaultResult1, startOfYear.default(defaultResult1)) + 1;
};
