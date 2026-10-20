// Module ID: 4592
// Function ID: 4593
// Name: isThisSecond
// Dependencies: [4584, 4232]
// Exports: default

// Module 4592 (isThisSecond)
import isSameSecond_mod from "isSameSecond" /* 4584 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let tmp3;
let tmp5;
let isSameSecond = isSameSecond_mod;
if (!isSameSecond) {
  tmp3 = { default: isSameSecond };
  const obj = { default: isSameSecond };
} else {
  tmp3 = isSameSecond;
}
isSameSecond = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return isSameSecond.default(Date.now(), arg0);
};
