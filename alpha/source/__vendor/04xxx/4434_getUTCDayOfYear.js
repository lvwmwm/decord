// Module ID: 4434
// Function ID: 4435
// Name: getUTCDayOfYear
// Dependencies: [4199, 4200]
// Exports: default

// Module 4434 (getUTCDayOfYear)
import toDate_mod from "toDate" /* 4199 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

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
let c2 = 86400000;

export default function getUTCDayOfYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const time = defaultResult1.getTime();
  defaultResult1.setUTCMonth(0, 1);
  defaultResult1.setUTCHours(0, 0, 0, 0);
  return Math.floor((time - defaultResult1.getTime()) / c2) + 1;
};
