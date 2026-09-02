// Module ID: 3859
// Function ID: 3860
// Name: hoursToMilliseconds
// Dependencies: [3572, 3750]
// Exports: default

// Module 3859 (hoursToMilliseconds)
import keys from "keys" /* 3750 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function hoursToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.millisecondsInHour);
};
export default exports.default;
