// Module ID: 3823
// Function ID: 3824
// Name: isSameWeek
// Dependencies: [3634, 3476]
// Exports: default

// Module 3823 (isSameWeek)
import startOfWeek from "startOfWeek" /* 3634 */;
import requiredArgs from "requiredArgs" /* 3476 */;

if (!startOfWeek) {
  let obj = { default: null };
  obj[0] = startOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfWeek.default(arg0, arg2);
  const time = defaultResult1.getTime();
  return time === startOfWeek.default(arg1, arg2).getTime();
};
export default exports.default;
