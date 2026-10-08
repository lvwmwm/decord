// Module ID: 4427
// Function ID: 4428
// Name: getISODay
// Dependencies: [4156, 4157]
// Exports: default

// Module 4427 (getISODay)
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

export default function getISODay(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  let num = defaultResult1.getDay();
  if (0 === num) {
    num = 7;
  }
  return num;
};
