// Module ID: 3947
// Function ID: 3948
// Name: previousWednesday
// Dependencies: [3543, 3940]
// Exports: default

// Module 3947 (previousWednesday)
import requiredArgs from "requiredArgs" /* 3543 */;
import previousDay from "previousDay" /* 3940 */;

if (!requiredArgs) {
  let obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
if (!previousDay) {
  obj = { default: null };
  obj[0] = previousDay;
  let tmp5 = obj;
} else {
  tmp5 = previousDay;
}
previousDay = tmp5;

export default function previousWednesday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 3);
};
export default exports.default;
