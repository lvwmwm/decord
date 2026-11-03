// Module ID: 4638
// Function ID: 4639
// Name: eachWeekendOfYear
// Dependencies: [4635, 4639, 4640, 4422]
// Exports: default

// Module 4638 (eachWeekendOfYear)
import eachWeekendOfInterval_mod from "eachWeekendOfInterval" /* 4635 */;
import endOfYear_mod from "endOfYear" /* 4639 */;
import startOfYear_mod from "startOfYear" /* 4640 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let eachWeekendOfInterval = eachWeekendOfInterval_mod;
if (!eachWeekendOfInterval) {
  let obj = { default: eachWeekendOfInterval };
  tmp3 = obj;
} else {
  tmp3 = eachWeekendOfInterval;
}
eachWeekendOfInterval = tmp3;
let endOfYear = endOfYear_mod;
if (!endOfYear) {
  tmp5 = { default: endOfYear };
  const obj2 = { default: endOfYear };
} else {
  tmp5 = endOfYear;
}
endOfYear = tmp5;
let startOfYear = startOfYear_mod;
if (!startOfYear) {
  tmp7 = { default: startOfYear };
  const obj3 = { default: startOfYear };
} else {
  tmp7 = startOfYear;
}
startOfYear = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekendOfYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfYear.default(arg0);
  const obj = { start: defaultResult1, end: endOfYear.default(arg0) };
  return eachWeekendOfInterval.default(obj);
};
