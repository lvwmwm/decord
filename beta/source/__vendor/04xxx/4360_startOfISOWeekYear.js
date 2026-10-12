// Module ID: 4360
// Function ID: 4361
// Name: startOfISOWeekYear
// Dependencies: [4356, 4357, 4200]
// Exports: default

// Module 4360 (startOfISOWeekYear)
import getISOWeekYear_mod from "getISOWeekYear" /* 4356 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 4357 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let tmp3;
let tmp5;
let tmp7;
let getISOWeekYear = getISOWeekYear_mod;
if (!getISOWeekYear) {
  tmp3 = { default: getISOWeekYear };
  const obj = { default: getISOWeekYear };
} else {
  tmp3 = getISOWeekYear;
}
getISOWeekYear = tmp3;
let startOfISOWeek = startOfISOWeek_mod;
if (!startOfISOWeek) {
  tmp5 = { default: startOfISOWeek };
  const obj2 = { default: startOfISOWeek };
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function startOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = getISOWeekYear.default(arg0);
  const date = new Date(0);
  date.setFullYear(defaultResult1, 0, 4);
  date.setHours(0, 0, 0, 0);
  return startOfISOWeek.default(date);
};
