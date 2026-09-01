// Module ID: 3952
// Function ID: 3953
// Name: millisecondsToHours
// Dependencies: [3573, 3751]
// Exports: default

// Module 3952 (millisecondsToHours)
import keys from "keys" /* 3751 */;
import requiredArgs from "requiredArgs" /* 3573 */;

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
