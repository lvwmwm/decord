// Module ID: 4056
// Function ID: 4057
// Name: quartersToMonths
// Dependencies: [3651, 3829]
// Exports: default

// Module 4056 (quartersToMonths)
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

export default function quartersToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.monthsInQuarter);
};
export default exports.default;
