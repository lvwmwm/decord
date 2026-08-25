// Module ID: 3863
// Function ID: 3864
// Name: monthsToYears
// Dependencies: [3477, 3655]
// Exports: default

// Module 3863 (monthsToYears)
import keys from "keys" /* 3655 */;
import requiredArgs from "requiredArgs" /* 3477 */;

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function monthsToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.monthsInYear);
};
export default exports.default;
