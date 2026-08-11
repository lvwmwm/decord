// Module ID: 3801
// Function ID: 3802
// Name: previousSunday
// Dependencies: [3400, 3797]
// Exports: default

// Module 3801 (previousSunday)
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

export default function previousSunday(arg0) {
  tmp3.default(1, arguments);
  return tmp5.default(arg0, 0);
};
export default exports.default;
