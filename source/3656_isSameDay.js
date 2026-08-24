// Module ID: 3656
// Function ID: 3657
// Name: isSameDay
// Dependencies: [3639, 3476]
// Exports: default

// Module 3656 (isSameDay)
import startOfDay from "startOfDay" /* 3639 */;
import requiredArgs from "requiredArgs" /* 3476 */;

if (!startOfDay) {
  let obj = { default: null };
  obj[0] = startOfDay;
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfDay.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfDay.default(arg1).getTime();
};
export default exports.default;
