// Module ID: 3889
// Function ID: 3890
// Name: isSameISOWeek
// Dependencies: [3890, 3543]
// Exports: default

// Module 3889 (isSameISOWeek)
import isSameWeek from "isSameWeek" /* 3890 */;
import requiredArgs from "requiredArgs" /* 3543 */;

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
