// Module ID: 4093
// Function ID: 4094
// Name: yearsToQuarters
// Dependencies: [3651, 3829]
// Exports: default

// Module 4093 (yearsToQuarters)
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

export default function yearsToQuarters(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.quartersInYear);
};
export default exports.default;
