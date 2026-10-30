// Module ID: 4527
// Function ID: 4528
// Name: startOfUTCISOWeekYear
// Dependencies: [4528, 4526, 4290]
// Exports: default

// Module 4527 (startOfUTCISOWeekYear)
import getUTCISOWeekYear_mod from "getUTCISOWeekYear" /* 4528 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 4526 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

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
