// Module ID: 4649
// Function ID: 4650
// Name: isThisQuarter
// Dependencies: [4641, 4290]
// Exports: default

// Module 4649 (isThisQuarter)
import isSameQuarter_mod from "isSameQuarter" /* 4641 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let tmp3;
let tmp5;
let isSameQuarter = isSameQuarter_mod;
if (!isSameQuarter) {
  tmp3 = { default: isSameQuarter };
  const obj = { default: isSameQuarter };
} else {
  tmp3 = isSameQuarter;
}
isSameQuarter = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return isSameQuarter.default(Date.now(), arg0);
};
