// Module ID: 4594
// Function ID: 4595
// Name: isThisYear
// Dependencies: [4586, 4232]
// Exports: default

// Module 4594 (isThisYear)
import isSameYear_mod from "isSameYear" /* 4586 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

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
