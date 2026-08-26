// Module ID: 3934
// Function ID: 3935
// Name: nextTuesday
// Dependencies: [3928, 3541]
// Exports: default

// Module 3934 (nextTuesday)
import nextDay from "nextDay" /* 3928 */;
import requiredArgs from "requiredArgs" /* 3541 */;

if (!nextDay) {
  let obj = { default: null };
  obj[0] = nextDay;
  let tmp3 = obj;
} else {
  tmp3 = nextDay;
}
nextDay = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function nextTuesday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 2);
};
export default exports.default;
