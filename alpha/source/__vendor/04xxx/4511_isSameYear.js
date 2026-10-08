// Module ID: 4511
// Function ID: 4512
// Name: isSameYear
// Dependencies: [4156, 4157]
// Exports: default

// Module 4511 (isSameYear)
import toDate_mod from "toDate" /* 4156 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

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

export default function isSameYear(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toDate.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  return fullYear === defaultResult2.getFullYear();
};
