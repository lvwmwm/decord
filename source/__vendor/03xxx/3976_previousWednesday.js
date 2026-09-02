// Module ID: 3976
// Function ID: 3977
// Name: previousWednesday
// Dependencies: [3572, 3969]
// Exports: default

// Module 3976 (previousWednesday)
import requiredArgs from "requiredArgs" /* 3572 */;
import previousDay from "previousDay" /* 3969 */;

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
