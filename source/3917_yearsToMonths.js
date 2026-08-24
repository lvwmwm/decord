// Module ID: 3917
// Function ID: 3918
// Name: yearsToMonths
// Dependencies: [3476, 3654]
// Exports: default

// Module 3917 (yearsToMonths)
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

export default function yearsToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.monthsInYear);
};
export default exports.default;
