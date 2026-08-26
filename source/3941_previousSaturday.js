// Module ID: 3941
// Function ID: 3942
// Name: previousSaturday
// Dependencies: [3541, 3938]
// Exports: default

// Module 3941 (previousSaturday)
import requiredArgs from "requiredArgs" /* 3541 */;
import previousDay from "previousDay" /* 3938 */;

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

export default function previousSaturday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 6);
};
export default exports.default;
