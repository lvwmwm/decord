// Module ID: 3926
// Function ID: 3927
// Name: minutesToMilliseconds
// Dependencies: [3543, 3721]
// Exports: default

// Module 3926 (minutesToMilliseconds)
import keys from "keys" /* 3721 */;
import requiredArgs from "requiredArgs" /* 3543 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.millisecondsInMinute);
};
export default exports.default;
