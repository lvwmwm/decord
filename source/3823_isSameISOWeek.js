// Module ID: 3823
// Function ID: 3824
// Name: isSameISOWeek
// Dependencies: [3824, 3477]
// Exports: default

// Module 3823 (isSameISOWeek)
import isSameWeek from "isSameWeek" /* 3824 */;
import requiredArgs from "requiredArgs" /* 3477 */;

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

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return isSameWeek.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;
