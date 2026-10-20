// Module ID: 4583
// Function ID: 4584
// Name: isSameQuarter
// Dependencies: [4443, 4232]
// Exports: default

// Module 4583 (isSameQuarter)
import startOfQuarter_mod from "startOfQuarter" /* 4443 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

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
