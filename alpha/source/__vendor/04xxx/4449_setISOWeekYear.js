// Module ID: 4449
// Function ID: 4450
// Name: setISOWeekYear
// Dependencies: [4293, 4289, 4450, 4451, 4290]
// Exports: default

// Module 4449 (setISOWeekYear)
import toInteger_mod from "toInteger" /* 4293 */;
import toDate_mod from "toDate" /* 4289 */;
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 4450 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4451 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

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
