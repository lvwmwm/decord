// Module ID: 4505
// Function ID: 4506
// Name: isSameISOWeekYear
// Dependencies: [4317, 4157]
// Exports: default

// Module 4505 (isSameISOWeekYear)
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 4317 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let tmp3;
let tmp5;
let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  tmp3 = { default: startOfISOWeekYear };
  const obj = { default: startOfISOWeekYear };
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeekYear(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const defaultResult2 = startOfISOWeekYear.default(arg1);
  const time = defaultResult1.getTime();
  return time === defaultResult2.getTime();
};
