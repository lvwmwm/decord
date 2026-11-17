// Module ID: 4935
// Function ID: 4936
// Name: startOfHour
// Dependencies: [4589, 4590]
// Exports: default

// Module 4935 (startOfHour)
import toDate_mod from "toDate" /* 4589 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

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

export default function startOfHour(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  defaultResult1.setMinutes(0, 0, 0);
  return defaultResult1;
};
