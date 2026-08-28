// Module ID: 3906
// Function ID: 3907
// Name: isToday
// Dependencies: [3722, 3542]
// Exports: default

// Module 3906 (isToday)
import isSameDay from "isSameDay" /* 3722 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!isSameDay) {
  let obj = { default: null };
  obj[0] = isSameDay;
  let tmp3 = obj;
} else {
  tmp3 = isSameDay;
}
isSameDay = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(arg0, Date.now());
};
export default exports.default;
