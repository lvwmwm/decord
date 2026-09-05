// Module ID: 3938
// Function ID: 3939
// Name: hoursToMilliseconds
// Dependencies: [3651, 3829]
// Exports: default

// Module 3938 (hoursToMilliseconds)
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

export default function hoursToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.millisecondsInHour);
};
export default exports.default;
