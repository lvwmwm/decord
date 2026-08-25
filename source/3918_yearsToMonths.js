// Module ID: 3918
// Function ID: 3919
// Name: yearsToMonths
// Dependencies: [3477, 3655]
// Exports: default

// Module 3918 (yearsToMonths)
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

export default function yearsToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.monthsInYear);
};
export default exports.default;
