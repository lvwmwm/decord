// Module ID: 3934
// Function ID: 3935
// Name: isThisWeek
// Dependencies: [3920, 3573]
// Exports: default

// Module 3934 (isThisWeek)
import isSameWeek from "isSameWeek" /* 3920 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!isSameWeek) {
  let obj = { default: null };
  obj[0] = isSameWeek;
  let tmp3 = obj;
} else {
  tmp3 = isSameWeek;
}
isSameWeek = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return isSameWeek.default(arg0, Date.now(), arg1);
};
export default exports.default;
