// Module ID: 4469
// Function ID: 4470
// Name: eachWeekendOfMonth
// Dependencies: [4468, 4470, 4455, 4255]
// Exports: default

// Module 4469 (eachWeekendOfMonth)
import eachWeekendOfInterval_mod from "eachWeekendOfInterval" /* 4468 */;
import startOfMonth_mod from "startOfMonth" /* 4470 */;
import endOfMonth_mod from "endOfMonth" /* 4455 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

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
let startOfMonth = startOfMonth_mod;
if (!startOfMonth) {
  tmp5 = { default: startOfMonth };
  const obj2 = { default: startOfMonth };
} else {
  tmp5 = startOfMonth;
}
startOfMonth = tmp5;
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

export default function eachWeekendOfMonth(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfMonth.default(arg0);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError = new RangeError("The passed date is invalid");
    throw rangeError;
  } else {
    const obj = { start: defaultResult1, end: endOfMonth.default(arg0) };
    return eachWeekendOfInterval.default(obj);
  }
};
