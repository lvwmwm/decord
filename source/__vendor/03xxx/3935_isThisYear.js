// Module ID: 3935
// Function ID: 3936
// Name: isThisYear
// Dependencies: [3927, 3573]
// Exports: default

// Module 3935 (isThisYear)
import isSameYear from "isSameYear" /* 3927 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!isSameYear) {
  let obj = { default: null };
  obj[0] = isSameYear;
  let tmp3 = obj;
} else {
  tmp3 = isSameYear;
}
isSameYear = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return isSameYear.default(arg0, Date.now());
};
export default exports.default;
