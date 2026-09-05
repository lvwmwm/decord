// Module ID: 4036
// Function ID: 4037
// Name: monthsToQuarters
// Dependencies: [3651, 3829]
// Exports: default

// Module 4036 (monthsToQuarters)
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

export default function monthsToQuarters(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.monthsInQuarter);
};
export default exports.default;
