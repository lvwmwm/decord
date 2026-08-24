// Module ID: 3860
// Function ID: 3861
// Name: minutesToSeconds
// Dependencies: [3476, 3654]
// Exports: default

// Module 3860 (minutesToSeconds)
import keys from "keys" /* 3654 */;
import requiredArgs from "requiredArgs" /* 3476 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.secondsInMinute);
};
export default exports.default;
