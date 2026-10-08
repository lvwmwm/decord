// Module ID: 4584
// Function ID: 4585
// Name: startOfDecade
// Dependencies: [4156, 4157]
// Exports: default

// Module 4584 (startOfDecade)
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

export default function startOfDecade(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  defaultResult1.setFullYear(10 * Math.floor(defaultResult1.getFullYear() / 10), 0, 1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
