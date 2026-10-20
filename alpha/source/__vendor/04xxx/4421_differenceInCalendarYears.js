// Module ID: 4421
// Function ID: 4422
// Name: differenceInCalendarYears
// Dependencies: [4231, 4232]
// Exports: default

// Module 4421 (differenceInCalendarYears)
import toDate_mod from "toDate" /* 4231 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toDate.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  return fullYear - defaultResult2.getFullYear();
};
