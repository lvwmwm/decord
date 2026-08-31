// Module ID: 3901
// Function ID: 3902
// Name: isThisMonth
// Dependencies: [3893, 3543]
// Exports: default

// Module 3901 (isThisMonth)
import isSameMonth from "isSameMonth" /* 3893 */;
import requiredArgs from "requiredArgs" /* 3543 */;

if (!isSameMonth) {
  let obj = { default: null };
  obj[0] = isSameMonth;
  let tmp3 = obj;
} else {
  tmp3 = isSameMonth;
}
isSameMonth = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return isSameMonth.default(Date.now(), arg0);
};
export default exports.default;
