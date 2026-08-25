// Module ID: 3841
// Function ID: 3842
// Name: isToday
// Dependencies: [3657, 3477]
// Exports: default

// Module 3841 (isToday)
import isSameDay from "isSameDay" /* 3657 */;
import requiredArgs from "requiredArgs" /* 3477 */;

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
