// Module ID: 3678
// Function ID: 3679
// Name: isFirstDayOfMonth
// Dependencies: [3380, 3381]
// Exports: default

// Module 3678 (isFirstDayOfMonth)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
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

export default function isFirstDayOfMonth(arg0) {
  tmp5.default(1, arguments);
  return 1 === tmp3.default(arg0).getDate();
};
export default exports.default;
