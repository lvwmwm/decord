// Module ID: 3834
// Function ID: 3835
// Name: isThisWeek
// Dependencies: [3820, 3473]
// Exports: default

// Module 3834 (isThisWeek)
import isSameWeek from "isSameWeek";
import requiredArgs from "requiredArgs";

if (!isSameWeek) {
  let obj = { default: null };
  obj[0] = isSameWeek;
  let tmp3 = obj;
} else {
  tmp3 = isSameWeek;
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

export default function isThisWeek(arg0, arg1) {
  tmp5.default(1, arguments);
  return tmp3.default(arg0, Date.now(), arg1);
};
export default exports.default;
