// Module ID: 3875
// Function ID: 3876
// Name: previousFriday
// Dependencies: [3477, 3874]
// Exports: default

// Module 3875 (previousFriday)
import requiredArgs from "requiredArgs" /* 3477 */;
import previousDay from "previousDay" /* 3874 */;

if (!requiredArgs) {
  let obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
if (!previousDay) {
  obj = { default: null };
  obj[0] = previousDay;
  let tmp5 = obj;
} else {
  tmp5 = previousDay;
}
previousDay = tmp5;

export default function previousFriday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 5);
};
export default exports.default;
