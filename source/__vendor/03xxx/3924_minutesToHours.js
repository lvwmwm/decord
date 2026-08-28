// Module ID: 3924
// Function ID: 3925
// Name: minutesToHours
// Dependencies: [3542, 3720]
// Exports: default

// Module 3924 (minutesToHours)
import keys from "keys" /* 3720 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.minutesInHour);
};
export default exports.default;
