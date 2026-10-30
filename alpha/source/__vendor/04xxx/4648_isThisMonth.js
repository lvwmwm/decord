// Module ID: 4648
// Function ID: 4649
// Name: isThisMonth
// Dependencies: [4640, 4290]
// Exports: default

// Module 4648 (isThisMonth)
import isSameMonth_mod from "isSameMonth" /* 4640 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let tmp3;
let tmp5;
let isSameMonth = isSameMonth_mod;
if (!isSameMonth) {
  tmp3 = { default: isSameMonth };
  const obj = { default: isSameMonth };
} else {
  tmp3 = isSameMonth;
}
isSameMonth = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return isSameMonth.default(Date.now(), arg0);
};
