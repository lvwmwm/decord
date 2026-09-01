// Module ID: 3937
// Function ID: 3938
// Name: isToday
// Dependencies: [3753, 3573]
// Exports: default

// Module 3937 (isToday)
import isSameDay from "isSameDay" /* 3753 */;
import requiredArgs from "requiredArgs" /* 3573 */;

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
