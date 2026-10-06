// Module ID: 4140
// Function ID: 4141
// Name: startOfYear
// Dependencies: [3921, 3922]
// Exports: default

// Module 4140 (startOfYear)
import toDate_mod from "toDate" /* 3921 */;
import requiredArgs_mod from "requiredArgs" /* 3922 */;

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

export default function startOfYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const date = new Date(0);
  date.setFullYear(defaultResult1.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
};
