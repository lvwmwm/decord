// Module ID: 4705
// Function ID: 4706
// Name: getWeeksInMonth
// Dependencies: [4609, 4706, 4636, 4421]
// Exports: default

// Module 4705 (getWeeksInMonth)
import differenceInCalendarWeeks_mod from "differenceInCalendarWeeks" /* 4609 */;
import lastDayOfMonth_mod from "lastDayOfMonth" /* 4706 */;
import startOfMonth_mod from "startOfMonth" /* 4636 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let differenceInCalendarWeeks = differenceInCalendarWeeks_mod;
if (!differenceInCalendarWeeks) {
  tmp3 = { default: differenceInCalendarWeeks };
  const obj = { default: differenceInCalendarWeeks };
} else {
  tmp3 = differenceInCalendarWeeks;
}
differenceInCalendarWeeks = tmp3;
let lastDayOfMonth = lastDayOfMonth_mod;
if (!lastDayOfMonth) {
  tmp5 = { default: lastDayOfMonth };
  const obj2 = { default: lastDayOfMonth };
} else {
  tmp5 = lastDayOfMonth;
}
lastDayOfMonth = tmp5;
let startOfMonth = startOfMonth_mod;
if (!startOfMonth) {
  tmp7 = { default: startOfMonth };
  const obj3 = { default: startOfMonth };
} else {
  tmp7 = startOfMonth;
}
startOfMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getWeeksInMonth(arg0, arg1) {
  requiredArgs.default(1, arguments);
  const _default = differenceInCalendarWeeks.default;
  const defaultResult1 = lastDayOfMonth.default(arg0);
  return _default(defaultResult1, startOfMonth.default(arg0), arg1) + 1;
};
