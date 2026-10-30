// Module ID: 4562
// Function ID: 4563
// Name: getISOWeeksInYear
// Dependencies: [4450, 4457, 4290]
// Exports: default

// Module 4562 (getISOWeeksInYear)
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 4450 */;
import addWeeks_mod from "addWeeks" /* 4457 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let tmp3;
let tmp5;
let tmp7;
let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  tmp3 = { default: startOfISOWeekYear };
  const obj = { default: startOfISOWeekYear };
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let addWeeks = addWeeks_mod;
if (!addWeeks) {
  tmp5 = { default: addWeeks };
  const obj2 = { default: addWeeks };
} else {
  tmp5 = addWeeks;
}
addWeeks = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function getISOWeeksInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const defaultResult2 = startOfISOWeekYear.default(addWeeks.default(defaultResult1, 60));
  const valueOfResult = defaultResult2.valueOf();
  return Math.round((valueOfResult - defaultResult1.valueOf()) / c3);
};
