// Module ID: 4092
// Function ID: 4093
// Name: yearsToMonths
// Dependencies: [3651, 3829]
// Exports: default

// Module 4092 (yearsToMonths)
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

export default function yearsToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.monthsInYear);
};
export default exports.default;
