// Module ID: 4795
// Function ID: 4796
// Name: lastDayOfDecade
// Dependencies: [4423, 4424]
// Exports: default

// Module 4795 (lastDayOfDecade)
import toDate_mod from "toDate" /* 4423 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

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

export default function lastDayOfDecade(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  defaultResult1.setFullYear(9 + 10 * Math.floor(defaultResult1.getFullYear() / 10) + 1, 0, 0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
