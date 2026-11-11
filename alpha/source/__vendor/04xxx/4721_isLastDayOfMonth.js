// Module ID: 4721
// Function ID: 4722
// Name: isLastDayOfMonth
// Dependencies: [4522, 4722, 4723, 4523]
// Exports: default

// Module 4721 (isLastDayOfMonth)
import toDate_mod from "toDate" /* 4522 */;
import endOfDay_mod from "endOfDay" /* 4722 */;
import endOfMonth_mod from "endOfMonth" /* 4723 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let endOfDay = endOfDay_mod;
if (!endOfDay) {
  tmp5 = { default: endOfDay };
  const obj2 = { default: endOfDay };
} else {
  tmp5 = endOfDay;
}
endOfDay = tmp5;
let endOfMonth = endOfMonth_mod;
if (!endOfMonth) {
  tmp7 = { default: endOfMonth };
  const obj3 = { default: endOfMonth };
} else {
  tmp7 = endOfMonth;
}
endOfMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function isLastDayOfMonth(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = endOfDay.default(defaultResult1);
  const time = defaultResult2.getTime();
  const defaultResult3 = endOfMonth.default(defaultResult1);
  return time === defaultResult3.getTime();
};
