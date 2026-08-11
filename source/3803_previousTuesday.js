// Module ID: 3803
// Function ID: 3804
// Name: previousTuesday
// Dependencies: [3400, 3797]
// Exports: default

// Module 3803 (previousTuesday)
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

export default function previousTuesday(arg0) {
  tmp3.default(1, arguments);
  return tmp5.default(arg0, 2);
};
export default exports.default;
