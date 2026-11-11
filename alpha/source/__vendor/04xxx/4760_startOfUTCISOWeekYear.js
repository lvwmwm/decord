// Module ID: 4760
// Function ID: 4761
// Name: startOfUTCISOWeekYear
// Dependencies: [4761, 4759, 4523]
// Exports: default

// Module 4760 (startOfUTCISOWeekYear)
import getUTCISOWeekYear_mod from "getUTCISOWeekYear" /* 4761 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 4759 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let tmp3;
let tmp5;
let tmp7;
let getUTCISOWeekYear = getUTCISOWeekYear_mod;
if (!getUTCISOWeekYear) {
  tmp3 = { default: getUTCISOWeekYear };
  const obj = { default: getUTCISOWeekYear };
} else {
  tmp3 = getUTCISOWeekYear;
}
getUTCISOWeekYear = tmp3;
let startOfUTCISOWeek = startOfUTCISOWeek_mod;
if (!startOfUTCISOWeek) {
  tmp5 = { default: startOfUTCISOWeek };
  const obj2 = { default: startOfUTCISOWeek };
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function startOfUTCISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = getUTCISOWeekYear.default(arg0);
  const date = new Date(0);
  date.setUTCFullYear(defaultResult1, 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
