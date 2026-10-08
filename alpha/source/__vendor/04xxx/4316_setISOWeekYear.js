// Module ID: 4316
// Function ID: 4317
// Name: setISOWeekYear
// Dependencies: [4160, 4156, 4317, 4318, 4157]
// Exports: default

// Module 4316 (setISOWeekYear)
import toInteger_mod from "toInteger" /* 4160 */;
import toDate_mod from "toDate" /* 4156 */;
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 4317 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4318 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let tmp11;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp3 = { default: toInteger };
  const obj = { default: toInteger };
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  tmp7 = { default: startOfISOWeekYear };
  const obj3 = { default: startOfISOWeekYear };
} else {
  tmp7 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp7;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  tmp9 = { default: differenceInCalendarDays };
  const obj4 = { default: differenceInCalendarDays };
} else {
  tmp9 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp11 = { default: requiredArgs };
  const obj5 = { default: requiredArgs };
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISOWeekYear(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  const defaultResult3 = differenceInCalendarDays.default(defaultResult1, startOfISOWeekYear.default(defaultResult1));
  const date = new Date(0);
  date.setFullYear(defaultResult2, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult4 = startOfISOWeekYear.default(date);
  defaultResult4.setDate(defaultResult4.getDate() + defaultResult3);
  return defaultResult4;
};
