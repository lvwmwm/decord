// Module ID: 4417
// Function ID: 4418
// Name: startOfMonth
// Dependencies: [4201, 4202]
// Exports: default

// Module 4417 (startOfMonth)
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

export default function startOfMonth(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  defaultResult1.setDate(1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
