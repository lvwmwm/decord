// Module ID: 4648
// Function ID: 4649
// Name: endOfSecond
// Dependencies: [4420, 4421]
// Exports: default

// Module 4648 (endOfSecond)
import toDate_mod from "toDate" /* 4420 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

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

export default function endOfSecond(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  defaultResult1.setMilliseconds(999);
  return defaultResult1;
};
