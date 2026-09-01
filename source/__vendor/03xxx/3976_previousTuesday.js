// Module ID: 3976
// Function ID: 3977
// Name: previousTuesday
// Dependencies: [3573, 3970]
// Exports: default

// Module 3976 (previousTuesday)
import requiredArgs from "requiredArgs" /* 3573 */;
import previousDay from "previousDay" /* 3970 */;

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

export default function previousTuesday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 2);
};
export default exports.default;
