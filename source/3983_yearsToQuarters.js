// Module ID: 3983
// Function ID: 3984
// Name: yearsToQuarters
// Dependencies: [3541, 3719]
// Exports: default

// Module 3983 (yearsToQuarters)
import keys from "keys" /* 3719 */;
import requiredArgs from "requiredArgs" /* 3541 */;

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
