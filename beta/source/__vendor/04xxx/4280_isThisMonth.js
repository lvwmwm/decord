// Module ID: 4280
// Function ID: 4281
// Name: isThisMonth
// Dependencies: [4272, 3922]
// Exports: default

// Module 4280 (isThisMonth)
import isSameMonth_mod from "isSameMonth" /* 4272 */;
import requiredArgs_mod from "requiredArgs" /* 3922 */;

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
