// Module ID: 4774
// Function ID: 4775
// Name: isSameQuarter
// Dependencies: [4634, 4423]
// Exports: default

// Module 4774 (isSameQuarter)
import startOfQuarter_mod from "startOfQuarter" /* 4634 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let tmp3;
let tmp5;
let startOfQuarter = startOfQuarter_mod;
if (!startOfQuarter) {
  tmp3 = { default: startOfQuarter };
  const obj = { default: startOfQuarter };
} else {
  tmp3 = startOfQuarter;
}
startOfQuarter = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfQuarter.default(arg0);
  const defaultResult2 = startOfQuarter.default(arg1);
  const time = defaultResult1.getTime();
  return time === defaultResult2.getTime();
};
