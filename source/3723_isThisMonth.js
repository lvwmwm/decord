// Module ID: 3723
// Function ID: 3724
// Name: isThisMonth
// Dependencies: [3715, 3365]
// Exports: default

// Module 3723 (isThisMonth)
import isSameMonth from "isSameMonth";
import requiredArgs from "requiredArgs";

if (!isSameMonth) {
  let obj = { default: null };
  obj[0] = isSameMonth;
  let tmp3 = obj;
} else {
  tmp3 = isSameMonth;
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

export default function isThisMonth(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(Date.now(), arg0);
};
export default exports.default;
