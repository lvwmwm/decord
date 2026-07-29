// Module ID: 3449
// Function ID: 3450
// Name: isSameDay
// Dependencies: [3432, 3269]
// Exports: default

// Module 3449 (isSameDay)
import startOfDay from "startOfDay";
import requiredArgs from "requiredArgs";

if (!startOfDay) {
  let obj = { default: null };
  obj[0] = startOfDay;
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;

export default function isSameDay(arg0, arg1) {
  tmp5.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const time = defaultResult1.getTime();
  return time === tmp3.default(arg1).getTime();
};
export default exports.default;
