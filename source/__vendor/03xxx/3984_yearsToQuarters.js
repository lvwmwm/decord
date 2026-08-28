// Module ID: 3984
// Function ID: 3985
// Name: yearsToQuarters
// Dependencies: [3542, 3720]
// Exports: default

// Module 3984 (yearsToQuarters)
import keys from "keys" /* 3720 */;
import requiredArgs from "requiredArgs" /* 3542 */;

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
