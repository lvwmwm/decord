// Module ID: 4059
// Function ID: 4060
// Name: secondsToHours
// Dependencies: [3651, 3829]
// Exports: default

// Module 4059 (secondsToHours)
import keys from "keys" /* 3829 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.secondsInHour);
};
export default exports.default;
