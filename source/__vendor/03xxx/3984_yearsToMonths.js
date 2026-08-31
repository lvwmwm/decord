// Module ID: 3984
// Function ID: 3985
// Name: yearsToMonths
// Dependencies: [3543, 3721]
// Exports: default

// Module 3984 (yearsToMonths)
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

export default function yearsToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.monthsInYear);
};
export default exports.default;
