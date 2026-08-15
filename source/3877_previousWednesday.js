// Module ID: 3877
// Function ID: 3878
// Name: previousWednesday
// Dependencies: [3473, 3870]
// Exports: default

// Module 3877 (previousWednesday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";

if (!requiredArgs) {
  let obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let c0 = tmp3;
if (!previousDay) {
  obj = { default: null };
  obj[0] = previousDay;
  let tmp5 = obj;
} else {
  tmp5 = previousDay;
}
let closure_1 = tmp5;

export default function previousWednesday(arg0) {
  tmp3.default(1, arguments);
  return tmp5.default(arg0, 3);
};
export default exports.default;
