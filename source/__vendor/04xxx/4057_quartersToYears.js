// Module ID: 4057
// Function ID: 4058
// Name: quartersToYears
// Dependencies: [3651, 3829]
// Exports: default

// Module 4057 (quartersToYears)
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

export default function quartersToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.quartersInYear);
};
export default exports.default;
