// Module ID: 4487
// Function ID: 4488
// Name: lastDayOfMonth
// Dependencies: [4201, 4202]
// Exports: default

// Module 4487 (lastDayOfMonth)
import toDate_mod from "toDate" /* 4201 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

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

export default function lastDayOfMonth(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const month = defaultResult1.getMonth();
  defaultResult1.setFullYear(defaultResult1.getFullYear(), month + 1, 0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
