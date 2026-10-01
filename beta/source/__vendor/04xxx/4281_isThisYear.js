// Module ID: 4281
// Function ID: 4282
// Name: isThisYear
// Dependencies: [4273, 3919]
// Exports: default

// Module 4281 (isThisYear)
import isSameYear_mod from "isSameYear" /* 4273 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

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
