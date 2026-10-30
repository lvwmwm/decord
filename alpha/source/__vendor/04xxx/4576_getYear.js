// Module ID: 4576
// Function ID: 4577
// Name: getYear
// Dependencies: [4289, 4290]
// Exports: default

// Module 4576 (getYear)
import toDate_mod from "toDate" /* 4289 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

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

export default function getYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  return defaultResult1.getFullYear();
};
