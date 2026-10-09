// Module ID: 4521
// Function ID: 4522
// Name: isThisYear
// Dependencies: [4513, 4159]
// Exports: default

// Module 4521 (isThisYear)
import isSameYear_mod from "isSameYear" /* 4513 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let tmp3;
let tmp5;
let isSameYear = isSameYear_mod;
if (!isSameYear) {
  tmp3 = { default: isSameYear };
  const obj = { default: isSameYear };
} else {
  tmp3 = isSameYear;
}
isSameYear = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return isSameYear.default(arg0, Date.now());
};
