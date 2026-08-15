// Module ID: 3757
// Function ID: 3758
// Name: getWeeksInMonth
// Dependencies: [3661, 3758, 3688, 3473]
// Exports: default

// Module 3757 (getWeeksInMonth)
import differenceInCalendarWeeks from "differenceInCalendarWeeks";
import lastDayOfMonth from "lastDayOfMonth";
import startOfMonth from "startOfMonth";
import requiredArgs from "requiredArgs";

if (!differenceInCalendarWeeks) {
  let obj = { default: null };
  obj[0] = differenceInCalendarWeeks;
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarWeeks;
}
let c0 = tmp3;
if (!lastDayOfMonth) {
  obj = { default: null };
  obj[0] = lastDayOfMonth;
  let tmp5 = obj;
} else {
  tmp5 = lastDayOfMonth;
}
let closure_1 = tmp5;
if (!startOfMonth) {
  obj = { default: null };
  obj[0] = startOfMonth;
  let tmp7 = obj;
} else {
  tmp7 = startOfMonth;
}
let obj1 = tmp7;
if (!requiredArgs) {
  obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
let c3 = tmp9;

export default function getWeeksInMonth(arg0, arg1) {
  tmp9.default(1, arguments);
  return tmp3.default(tmp5.default(arg0), tmp7.default(arg0), arg1) + 1;
};
export default exports.default;
