// Module ID: 3921
// Function ID: 3922
// Name: millisecondsToHours
// Dependencies: [3542, 3720]
// Exports: default

// Module 3921 (millisecondsToHours)
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

export default function millisecondsToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.millisecondsInHour);
};
export default exports.default;
