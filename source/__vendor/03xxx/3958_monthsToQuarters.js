// Module ID: 3958
// Function ID: 3959
// Name: monthsToQuarters
// Dependencies: [3573, 3751]
// Exports: default

// Module 3958 (monthsToQuarters)
import keys from "keys" /* 3751 */;
import requiredArgs from "requiredArgs" /* 3573 */;

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
